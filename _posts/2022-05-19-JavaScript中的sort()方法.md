---
layout: post
title: JavaScript 中的 sort()方法
subtitle: 对sort()方法的进一步理解
categories: JavaScript
tags: [sort, JavaScript]
---

## 一、介绍

`sort([compareFunction])`方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的 **ASCII 代码单元值序列**时构建的。由于它取决于具体实现，因此 _无法保证排序的时间和空间复杂性_。  
sort()方法的返回值为**排序后的数组**。

## 二、排序方式

### 2.1 无参数

如果在调用`sort()`函数时没有传入参数，则会返回一个**按照字符排列顺序的升序**数组

```javascript
var arr = [4, 3, 6, 5, 7, 2, 1];
arr.sort(); //  [1,2,3,4,5,6,7]
[10, 20, 1, 2].sort(); // [1, 10, 2, 20]
```

在上例中，第一个数组进行后确实按照升序进行排列了，但是`[10, 20, 1, 2]`的结果却不尽人意。  
这是因为`Array`的`sort()`方法默认把所有元素先转换为 String 再排序，结果`'10'`排在了`'2'`的前面，因为字符`'1'`比字符`'2'`的 ASCII 码小。所以在这种情况下就需要传入参数操作了。

### 2.2 可选参数

`Array.sort()`方法有一个可选参数，它必须是函数。排序结果是由这个回调函数的返回值决定的。

#### 2.2.1 Array.sort(compareFunction)

`Array.sort(compareFunction)`的参数`compareFunction`接受两个值，假设为 a 和 b，那么`compareFunction(a, b)`的返回值有三种情况：

1. `compareFunction(a, b)` < 0，a 将会被排到 b 的前面。
2. `compareFunction(a, b)` = 0，二者相对位置不变(兼容问题)。
3. `compareFunction(a, b)` > 0，a 将会被排到 b 的后面。

```javascript
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b; // 降序 b - a
});
// 也可以写成：
var numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
// [1, 2, 3, 4, 5]
```

#### 2.2.2 升序？降序？

在回调函数的执行过程中，`b`始终是`a`前边的元素，当`compareFunction(a, b)` < 0 的时候二者会交换顺序，>0 时 a 会排在 b 后边(可以理解为不变)，所以我们有

1. `compareFunction(a, b)` < 0，a 将会被排到 b 的前面 => 交换顺序。
2. `compareFunction(a, b)` > 0，a 将会被排到 b 的后面 => 位置不变。

在这个前提下，我们假设

1. 当`[b,a]`,a>b 时，
   - a - b > 0 不变 ===> [b，a] （升序）
   - b - a < 0 交换 ===> [a，b] （降序）
2. 当`[b,a]`,b>a 时，
   - a - b < 0 交换 ===> [a，b] （升序）
   - b - a > 0 不变 ===> [b，a] （降序）
3. 当`[b,a]`,a=b 时，
   - a - b = b - a =0 不变 ===> 保持不变

通过上边三点不难看出，当回调函数传入为的格式为`（a,b）=> { return xxx }`时，无论 a>b 还是 b>a，

1. `return a-b;`总能得到**升序**的结果，
2. `return b-a;`总能得到**降序**的结果。

```javascript
// 字符串数组排序
const txts = [
  "ability",
  "absent",
  "April",
  "divide",
  "center",
  "context",
  "container",
];
txts.sort((a, b) => {
  return a - b;
});
// ['April', 'ability', 'absent', 'center', 'container', 'context', 'divide']
```

```javascript
// 对象数组排序(依据 age 属性)
const members = [
  { name: "Dave", age: 32 },
  { name: "Jeff", age: 58 },
  { name: "Mona", age: 15 },
  { name: "Ma", age: 45 },
  { name: "Lord", age: 79 },
];
members.sort((a, b) => {
  return a.age - b.age;
});
// [
//   { name: 'Mona', age: 15 },
//   { name: 'Dave', age: 32 },
//   { name: 'Ma', age: 45 },
//   { name: 'Jeff', age: 58 },
//   { name: 'Lord', age: 79 }
// ]
```

---

2022.05.19
