#!/usr/bin/env node

// === SVG Pipeline Script with Embedded Raster Optimization ===
//
// 1. Заменяет <use xlink:href="#..."> на <image> из <defs>
// 2. Сохраняет id, transform, etc.
// 3. Оптимизирует SVG через SVGO
// 4. Находит встроенные растровые картинки (data:image/...), сжимает их через Sharp
// 5. Сохраняет результат в output/
//
// Требуется: cheerio, svgo, sharp
// Запуск: node svg-pipeline.js

import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';
import * as cheerio from 'cheerio';
import sharp from 'sharp';

// --- Конфигурация директорий ---
const inputDir = path.resolve('input');
const outputDir = path.resolve('output');
fs.mkdirSync(outputDir, { recursive: true });

// Лог-функция (чтобы видеть процесс)
function log(msg) {
  console.log(msg);
}

// --- Основная асинхронная функция ---
async function processSvgFiles() {
  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.svg'));

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const rawSvg = fs.readFileSync(inputPath, 'utf8');

    // === 1. Заменяем <use> на <image> через Cheerio ===
    let $ = cheerio.load(rawSvg, { xmlMode: true });
    const defs = $('defs');

    // (A) Сохраняем id: для каждого <g> с id, копируем id в data-preserve-id и удаляем id
    $('g').each((_, g) => {
      const $g = $(g);
      if ($g.attr('id')) {
        $g.attr('data-preserve-id', $g.attr('id'));
        $g.removeAttr('id');
      }
    });

    // (B) Заменяем <use> на <image>
    $('g').each((_, g) => {
      const $g = $(g);
      const $use = $g.find('use');
      if (!$use.length) return;

      const href = $use.attr('xlink:href') || $use.attr('href');
      if (!href || !href.startsWith('#')) return;

      const refId = href.slice(1);
      const ref = defs.find(`#${refId}`);
      if (!ref.length || ref[0].tagName !== 'image') return;

      const $image = $('<image>');
      for (const [key, val] of Object.entries(ref[0].attribs)) {
        $image.attr(key, val);
      }
      // Переносим координаты из <use>
      ['x', 'y', 'width', 'height'].forEach((attr) => {
        if ($use.attr(attr)) {
          $image.attr(attr, $use.attr(attr));
        }
      });
      $use.replaceWith($image);
    });

    let patchedSvg = $.xml();

    // === 2. Оптимизация SVG через SVGO ===
    let result;
    try {
      result = optimize(patchedSvg, {
        // Можно задать path для более корректных sourcemaps
        path: inputPath,
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
                removeUselessDefs: false,
                removeUnusedNS: false
              }
            }
          },
          'removeDimensions',
          {
            name: 'removeAttrs',
            params: {
              attrs: ['class', 'data-name']
            }
          }
        ]
      });
    } catch (err) {
      console.error(`❌ Ошибка при оптимизации ${file}:`, err);
      continue;
    }

    if (!result || !result.data) {
      console.warn(`⚠️ Не удалось оптимизировать файл ${file}`);
      continue;
    }

    // === 3. Сжимаем встроенные картинки через Sharp ===
    // Парсим результат снова
    $ = cheerio.load(result.data, { xmlMode: true });

    // Функция для обработки <image> с data URI
    // async function optimizeEmbeddedImage($img) {
    //   // href или xlink:href
    //   const hrefVal = $img.attr('href') || $img.attr('xlink:href');
    //   if (!hrefVal || !hrefVal.startsWith('data:image/')) return;

    //   // Пример: data:image/png;base64,iVBORw0KGgo...
    //   const match = hrefVal.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,(.*)$/);
    //   if (!match) return;
    //   const mime = match[1]; // e.g. image/png
    //   const base64Data = match[2]; // base64-encoded payload

    //   // Декодируем
    //   const inputBuffer = Buffer.from(base64Data, 'base64');
    //   let outputBuffer;

    //   // try {
    //   //   // Попробуем перекодировать в тот же mime, но с качеством ~80
    //   //   // или можно всегда гнать в webp
    //   //   if (mime === 'image/png') {
    //   //     outputBuffer = await sharp(inputBuffer)
    //   //       .png({ compressionLevel: 9, quality: 100 })
    //   //       .toBuffer();
    //   //   } else if (mime === 'image/jpeg') {
    //   //     outputBuffer = await sharp(inputBuffer)
    //   //       .jpeg({ quality: 60 })
    //   //       .toBuffer();
    //   //   } else if (mime === 'image/webp') {
    //   //     outputBuffer = await sharp(inputBuffer)
    //   //       .webp({ quality: 60 })
    //   //       .toBuffer();
    //   //   } else {
    //   //     // Если формат неизвестен — оставляем как есть
    //   //     outputBuffer = inputBuffer;
    //   //   }

    //   //   // Перекодировали — если стало меньше, заменим
    //   //   if (outputBuffer.length < inputBuffer.length) {
    //   //     const newBase64 = outputBuffer.toString('base64');
    //   //     // Можно оставить тот же mime или перейти на image/webp
    //   //     $img.attr('href', `data:${mime};base64,${newBase64}`);
    //   //     log(`🔧 [${file}] Compressed embedded ${mime} from ${inputBuffer.length}b to ${outputBuffer.length}b`);
    //   //   }
    //   // } catch (err) {
    //   //   console.warn(`⚠️ [${file}] Ошибка при сжатии встроенной картинки:`, err);
    //   // }






      
    //   try {
    //     // Всегда перекодируем в WebP с качеством 60
    //     outputBuffer = await sharp(inputBuffer)
    //       .webp({ quality: 60 })
    //       .toBuffer();
      
    //     // Если полученный буфер меньше исходного, заменяем data URI на новый WebP
    //     if (outputBuffer.length < inputBuffer.length) {
    //       const newBase64 = outputBuffer.toString('base64');
    //       // Указываем новый MIME-тип image/webp
    //       $img.attr('href', `data:image/webp;base64,${newBase64}`);
    //       log(`🔧 [${file}] Compressed embedded image from ${inputBuffer.length}b to ${outputBuffer.length}b and converted to webp`);
    //     }
    //   } catch (err) {
    //     console.warn(`⚠️ [${file}] Ошибка при сжатии встроенной картинки:`, err);
    //   }
    // }

    async function optimizeEmbeddedImage($img) {
      // Получаем значение из href или xlink:href
      const hrefVal = $img.attr('href') || $img.attr('xlink:href');
      if (!hrefVal || !hrefVal.startsWith('data:image/')) return;
    
      const match = hrefVal.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,(.*)$/);
      if (!match) return;
      const mime = match[1]; // например, image/png
      const base64Data = match[2];
    
      const inputBuffer = Buffer.from(base64Data, 'base64');
      let outputBuffer;
      try {
        // Всегда перекодируем в WebP с качеством 60
        outputBuffer = await sharp(inputBuffer)
          .webp({ quality: 60 })
          .toBuffer();
    
        const newBase64 = outputBuffer.toString('base64');
        // Обновляем оба атрибута: href и xlink:href
        $img.attr('href', `data:image/webp;base64,${newBase64}`);
        $img.attr('xlink:href', `data:image/webp;base64,${newBase64}`);
        log(`🔧 [${file}] Converted embedded image to webp (${outputBuffer.length}b)`);
      } catch (err) {
        console.warn(`⚠️ [${file}] Ошибка при сжатии встроенной картинки:`, err);
      }
    }
    

    // Обходим все <image> и пытаемся сжать встроенные data:image
    const $images = $('image');
    const tasks = [];
    $images.each((_, el) => {
      const $img = $(el);
      tasks.push(optimizeEmbeddedImage($img));
    });

    // Ждём все async-операции
    await Promise.all(tasks);

    // === 4. Сохраняем результат ===
    const finalSvg = $.xml();
    const outPath = path.join(outputDir, file);
    fs.writeFileSync(outPath, finalSvg, 'utf8');
    log(`✅ [${file}] Optimized, patched, and compressed embedded images.`);
  }
}

// Запускаем основную функцию
(async () => {
  await processSvgFiles();
})();