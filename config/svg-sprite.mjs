import { mkdir, readFile, writeFile } from "node:fs/promises";
import { relative, resolve, sep } from "node:path";
import { globSync } from "glob";
import { optimize } from "svgo";

const iconSourceDir = resolve("./public/sprite");
const iconSpritePath = resolve("./public/sprite.svg");

function extractSvgViewBox(svgAttributes) {
  const viewBoxMatch = svgAttributes.match(/\bviewBox=(['"])(.*?)\1/i);
  if (viewBoxMatch) {
    return viewBoxMatch[2];
  }

  const widthMatch = svgAttributes.match(/\bwidth=(['"]?)([\d.]+)(?:px)?\1/i);
  const heightMatch = svgAttributes.match(/\bheight=(['"]?)([\d.]+)(?:px)?\1/i);
  if (widthMatch && heightMatch) {
    return `0 0 ${widthMatch[2]} ${heightMatch[2]}`;
  }

  return "0 0 24 24";
}

async function generateSvgSprite() {
  await mkdir(iconSourceDir, { recursive: true });

  const files = globSync("**/*.svg", {
    cwd: iconSourceDir,
    absolute: true,
    nodir: true,
  }).sort();

  /** @type {string[]} */
  const symbols = [];
  const seenIds = new Set();

  for (const filePath of files) {
    const relativePath = relative(iconSourceDir, filePath).split(sep).join("/");
    const iconId = relativePath.replace(/\.svg$/i, "").replace(/\//g, "-");

    if (seenIds.has(iconId)) {
      throw new Error(`Duplicate SVG icon id "${iconId}" from "${relativePath}"`);
    }
    seenIds.add(iconId);

    const source = await readFile(filePath, "utf8");
    const optimized = optimize(source, {
      path: filePath,
      multipass: true,
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              cleanupIds: false,
              removeViewBox: false,
            },
          },
        },
        {
          name: "prefixIds",
          params: {
            prefix: `${iconId}-`,
          },
        },
        "removeXMLNS",
        "removeDimensions",
      ],
    });

    const data = "data" in optimized ? optimized.data : source;
    const svgMatch = data.match(/<svg\b([^>]*)>([\s\S]*?)<\/svg>/i);
    if (!svgMatch) {
      throw new Error(`Failed to parse SVG icon "${relativePath}"`);
    }

    const viewBox = extractSvgViewBox(svgMatch[1]);
    const body = svgMatch[2].trim();
    symbols.push(`  <symbol id="${iconId}" viewBox="${viewBox}">${body}</symbol>`);
  }

  const sprite = [
    '<svg xmlns="http://www.w3.org/2000/svg">',
    ...symbols,
    "</svg>",
    "",
  ].join("\n");

  await mkdir(resolve("./public"), { recursive: true });
  await writeFile(iconSpritePath, sprite, "utf8");
}

/** @returns {import('vite').Plugin} */
export function svgSpritePlugin() {
  const isIconPath = (filePath) =>
    filePath.endsWith(".svg") && filePath.includes(`${sep}public${sep}sprite${sep}`);

  return {
    name: "svg-sprite-generator",
    async buildStart() {
      await generateSvgSprite();
    },
    async configureServer(server) {
      await generateSvgSprite();
      server.watcher.add(iconSourceDir);

      const refreshSprite = async (filePath) => {
        if (!isIconPath(filePath)) return;
        await generateSvgSprite();
        server.ws.send({ type: "full-reload" });
      };

      server.watcher.on("add", refreshSprite);
      server.watcher.on("change", refreshSprite);
      server.watcher.on("unlink", refreshSprite);
    },
  };
}
