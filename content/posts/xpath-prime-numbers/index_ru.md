---

title: Простые числа и XPath

categories: ru issues
old: true
date: 2009-06-21

layout: post

---

Иногда мы на работе решаем интересные задачки. Вот, например, одна (почти первая) в постановке
<a href="http://alpha-san.ya.ru/"><span style="color: #000000;"><strong><span style="color: #ff0000;">n</span>op`а</strong></span></a>:
<excerpt/>

## Частный случай

Дан такой xml:

```xml
<items>
  <item>1</item>
  <item>2</item>
  ...
  <item>N-1</item>
  <item>N</item>
</items>
```

т.е. выписаны все натуральные числа от 1 до N включительно. Про N ничего заранее не известно --
большое, маленькое, еще какое-то &mdash; мы не знаем.

Нужно. Написать **xpath**, выбирающий все item'ы с простыми числами.
Подчеркиваю - **xpath**.
Т.е. внутри тега xsl:stylesheet должен быть один примерно такой шаблон:

```xslt
<xsl:template match="/">
  <xsl:copy-of select="......."/>
</xsl:template>
```

и больше ничего &mdash; ни переменных, ни других шаблонов, ни функций.

На выходе будет что-то типа:

```xml
<item>2</item>
<item>3</item>
<item>5</item>
<item>7</item>
...
```

Решение следующее:

```xslt
<xsl:template match="/">
  <items>
    <xsl:copy-of
      select="items/item[
        not(preceding-sibling::item[(last() + 1) mod . = 0 and . != 1])
        and
        . != 1
      ]"/>
  </items>
</xsl:template>
```

## Общая задача

Усложненный вариант &mdash; все тоже самое, но в xml просто набор item'ов с какими-то натуральными числами
в каком-то порядке, например:

```xml
<items>
  <item>142</item>
  <item>73</item>
  <item>10000341</item>
  <item>10</item>
  ...
</items>
```

Решение:

```xslt
<xsl:template match="/">
  <items>
    <xsl:copy-of select="items/item[
      not(
        str:tokenize(str:padding(. - 1, '1'), '')[
          (last() + 1 ) mod position()= 0
          and position() != 1
        ]
      ) and . != 1
      ]"/>
  </items>
</xsl:template>
```

Чтобы понять, что тут делается, надо прочитать про функции
[padding](http://exslt.org/str/functions/padding/index.html) и
[tokenize](http://exslt.org/str/functions/tokenize/index.html) на EXSLT.org.
