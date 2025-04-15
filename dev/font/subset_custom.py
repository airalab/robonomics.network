# Optimize variable font
# run within folder with the font
# python subset_custom.py

from fontTools import subset
from fontTools.ttLib import TTFont

# Входной и выходной файл
input_font = "RobotoFlex-VariableFont.woff2"
output_font = "RobotoFlex-CustomSubset.woff2"

# Загружаем шрифт
font = TTFont(input_font)

# Конфигурация сабсета
options = subset.Options()

# Удалим лишние таблицы
options.drop_tables = ["DSIG"]

# Поддержка вариативности: включаем только нужные оси и значения
options.axis_limits = {
    "wght": (500, 900),
    "wdth": (100, 110),
    "slnt": (-10, 0),
    "opsz": (26, 26),
    "XTRA": (468, 468),
    "XOPQ": (96, 96),
    "YOPQ": (79, 79),
    "YTAS": (750, 750),
    "YTDE": (-203, -203),
    "YTFI": (738, 738),
    "YTLC": (514, 514),
    "YTUC": (712, 712)
}

# Создаём объект сабсеттера
subsetter = subset.Subsetter(options=options)

# Вот как правильно передавать unicodes
subsetter.populate(unicodes=range(0x0000, 0x0600))

# Применяем сабсет
subsetter.subset(font)

# Сохраняем результат
font.flavor = "woff2"
font.save(output_font)

print(f"✅ Subset saved: {output_font}")
