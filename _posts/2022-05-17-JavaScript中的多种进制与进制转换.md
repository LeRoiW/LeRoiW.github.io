---
layout: post
title: JavaScript 中的多种进制与进制转换
categories: JavaScript
tags: 进制
---

## 一、进制介绍

JavaScript 中有四种进制:

- 十进制(Decimal)：取值数字 0-9；不用前缀。
- 二进制(Binary)：取值数字 0 和 1 ；前缀 0b 或 0B。
- 十六进制(Hexadecimal)：取值数字 0-9 和 a-f ；前缀 0x 或 0X。
- 八进制(Octal)：取值数字 0-7 ；前缀 0o 或 0O (ES6 规定)。

> 需要注意的是，非严格模式下浏览器支持：如果有前缀 0 并且后面只用到 0-7 八个数字的数值时，该数值视为八进制；但如果前缀 0 后面跟随的数字中有 8 或者 9，则视为十进制。  
> 严格模式下，如果数字加前缀 0，则报错：Uncaught SyntaxError: Decimals with leading zeros are not allowed in strict mode。  
> 各进制的数值，如果取值数字超过给定的范围，则会报错：Uncaught SyntaxError: Invalid or unexpected token。

在 JavaScript 内部的默认情况下，二进制、十六进制、八进制字面量数值，都会自动转为十进制进行运算。

## 二、进制转换

### 2.1 从其他进制(字符串)转换为十进制

#### 2.1.1 parseInt(str,radix)

- 第一个参数(str)：需要解析的字符串，其他进制**不需要加前缀**。
- 第二个参数(radix)：进制基数，表示转换时**按什么进制来理解这个字符串**，默认值 10，表示转十进制。
  - 如果 radix 不是数字，则自动转换为数字，如果没有办法转换为数字则忽略。
  - radix 是数字的时候，必须是在 2-36 之间的整数，否则返回 NaN。

```javascript
parseInt("1111", 2); // 15
parseInt("1234", 8); // 668
parseInt("18af", 16); // 6319
parseInt("1111"); // 1111
```

如果不传入第二参数，则`parseInt`会默认使用十进制来解析字符串；但是，如果字符串以 0x 开头，会被认为是十六进制数。而其他进制的字符串，_0o21(OTC)_，_0b11(BIN)_ 不会以该进制基数自动转换，而是得到 0。  
=> 所以，在使用`parseInt`进行进制转换时，为了保证运行结果的**正确性**和**稳定性**，**第二个参数不能省略**。

```javascript
parseInt("0x21"); // 33
parseInt("0o21"); // 0
parseInt("0b11"); // 0
parseInt("111", "add"); // 111
parseInt("111", "787"); // NaN
```

如果需要解析的字符串中存在对于当前进制基数无效的字符，则会从最高位取有效字符进行转换，没有效字符则返回 NaN。

```javascript
parseInt("88kk", 16); // 136，=== 0x88
parseInt("kk", 16); // NaN
```

#### 2.1.2 Number()

可以把字符串转为数字，支持其他进制的字符串，默认转成十进制数字。字符串中如果存在无效的进制字符时，返回 NaN。**需要使用进制前缀**，0b，0o，0x。

```javascript
Number("0b11100"); // 28
Number("0o33"); // 27
Number("0x33"); // 51
Number("12.3"); // 12.3
Number(""); // 0
Number(null); // 0
Number("0x88kk"); // NaN
```

#### 2.1.3 +(一元运算符)

与`Number()`一样，可以把字符串转为数字，支持其他进制的字符串，默认转成十进制数字。字符串中如果存在无效的进制字符时，返回 NaN。也**需要使用进制前缀**。

```javascript
+"0b11100"; // 28
+"0o33"; // 27
+"0x33"; //51
+"0x88kk"; // NaN
```

可以看到，基本和 Number() 是一样的，都在本质上是对数字的一种转换处理。

### 2.2 从十进制转换为其他进制(字符串)

#### 2.1.4 Number.prototype.toString(radix)

它支持**传入一个进制基数**，**将数字转换成对应进制的字符串**，_支持转换小数_。未指定默认值为 10，基数参数的范围 2-36，超过范围，报错：RangeError。

```javascript
(17).toString(); // '17'
(17.2).toString(); // '17.2'
(6).toString(2); // '110'
(254).toString(16); // 'fe'
(-10).toString(2); // '-1010'
```

---

2022.05.17
