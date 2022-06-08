---
layout: post
title: JavaScript 基础知识汇总
categories: Learn
tags: JavaScript
---

## Part Ⅰ 基础部分

### 一、初识 JavaScript

&emsp;是一种运行在客户端的脚本语言(解释型语言，但是对于解释型和编译型二者对立存在争议)

> 脚本语言：不需要编译，运行过程中由 JS 解释器逐行进行解释并运行

#### 1.1 Browser & JavaScript

&emsp;浏览器分为两部分

1. 渲染引擎：用来解析 HTML 与 CSS，俗称内核
2. JS 引擎：也称为 JS 解释器。 用来读取网页中的 JavaScript 代码，对其处理后运行

> 浏览器本身并不会执行 JS 代码，而是通过内置 JavaScript 引擎(解释器) 来执行 JS 代码 。JS 引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以 JavaScript 语言归为脚本语言，会逐行解释执行。

#### 1.2 JavaScript 的组成

![JS 的组成](images\220606_JavaScript_img/Part1/figure1-1.png)

1. ECMAScript
   - 由 ECMA 国际（ 原欧洲计算机制造商协会）进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往被称为 JavaScript 或 JScript，但实际上后两者是 ECMAScript 语言的实现和扩展。
   - ECMAScript 规定了 JS 的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套 JS 语法工业标准。
2. DOM
   - 文档对象模型（Document Object Model，简称 DOM）
   - 是 W3C 组织推荐的处理可扩展标记语言的标准编程接口。通过 DOM 提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）。
3. BOM
   - 浏览器对象模型（Browser Object Model，简称 BOM）
   - 提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过 BOM 可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。

#### 1.3 书写

1. 行内式  
   `<input type="button" value="点我试试" onclick="alert('Hello World')" />`
2. HTML 内嵌  
   `<script>alert('Hello World~!');</script>`
3. 外部 JS 文件  
   `<script src="my.js"></script>`

#### 1.4 输入输出语句

|        方法        |                      说明                      |  归属   |
| :----------------: | :--------------------------------------------: | :-----: |
|    `alert(msg)`    |                浏览器弹出警示框                | Browser |
| `console.log(msg)` |            浏览器控制台打印输出信息            | Browser |
|   `prompt(info)`   | 浏览器弹出输入框，用户可以输入，传入值为字符串 | Browser |

### 二、JavaScript 变量

1. 本质：是程序在内存中申请的一块用于存放数据的空间
2. 声明：`var i;`
3. 赋值：`i = 1;`
4. 初始化：

   ```javascript
   var myname = "name";
   var age = 18;
   ```

5. 声明变量的特殊情况

   |             情况             |                说明                |   结果    |
   | :--------------------------: | :--------------------------------: | :-------: |
   | `var age; console.log(age);` |           只声明，不赋值           | undefined |
   |     `console.log(age);`      |       不声明不赋值，直接调用       |   报错    |
   |  `age=9; console.log(age);`  | 不声明直接赋值，会变成**全局变量** |     9     |

### 三、数据类型

&emsp;JavaScript 是一种弱类型或者说动态语言，相同变量可以用作不同类型（不用提前声明变量类型，运行过程中自动确定）

#### 3.1 分类

1. 简单数据类型：Number、String、Boolean、Undefined、Null
2. 复杂数据类型：Object

#### 3.2 简单数据类型

##### 3.2.1 Number

1. 范围
   - 最大值：`Number.MAX_VALUE` -> 1.7976931348623157e+308
   - 最小值：`Number.MIN_VALUE` -> 5e-324
2. 三个特殊值
   - Infinity -> 代表无穷大，大于任何数值
   - -Infinity -> 代表无穷小，小于任何数值
   - NaN -> Not a number，代表一个非数值
3. isNaN()
   - 用来判断一个变量是否为非数字的类型，返回 true 或者 false
     ![isNaN](images\220606_JavaScript_img/Part1/figure3-1.png)

##### 3.2.2 String

1. 嵌套：可以用单引号嵌套双引号，或者用双引号嵌套单引号(外双内单，外单内双)
2. 转义符

   | 转义符 | 解释说明 |
   | :----: | :------: |
   |  `\n`  |   换行   |
   |  `\\`  |   斜杠   |
   |  `\'`  |  单引号  |
   |  `\"`  |  双引号  |
   |  `\t`  |   Tab    |
   |  `\b`  |   空格   |

3. 字符串长度：`str.length`
4. 字符串拼接

   ```javascript
   // 1.1 字符串 "相加"
   alert("hello" + " " + "world"); // hello world
   // 1.2 数值字符串 "相加"
   alert("100" + "100"); // 100100
   // 1.3 数值字符串 + 数值
   alert("11" + 12); // 1112
   console.log("age:" + 18); // 只要有字符就会相连
   var age = 18;
   console.log("age:" + age); // age:18
   console.log("小明" + age + "岁啦"); // 小明18岁啦
   ```

#### 3.3 数据类型转换

1. 转换为字符串

   |        方式        |             说明             |        eg.        |
   | :----------------: | :--------------------------: | :---------------: |
   |    `toString()`    |         转换成字符串         | `num.toString();` |
   |     `String()`     |       强制转换成字符串       |  `String(num);`   |
   | **加号拼接字符串** | 和字符串拼接的结果都是字符串 |    -,隐式转换     |

2. 转换成数字

   |         方式         |                       说明                        |
   | :------------------: | :-----------------------------------------------: |
   |  `parseInt(string)`  |  提取以数值开头的 string 中的第一个 NaN 前的 Int  |
   | `parseFloat(string)` | 提取以数值开头的 string 中的第一个 NaN 前的 Float |
   |      `Number()`      |                 强制转换成数字串                  |
   |     JS 隐式转换      |             利用算数运算进行隐式转换              |

### 四、运算符

#### 4.1 算数运算符

&emsp;加(+)、减(-)、乘(\*)、除(/)、取余(取模,%)，浮点运算同样具有精度问题 => 不能直接比较浮点数是否相等

#### 4.2 自增运算符

&emsp; ++、--

#### 4.3 关系运算符

| 运算符  |             说明             |  案例   | 结果  |
| :-----: | :--------------------------: | :-----: | :---: |
|    <    |             小于             |   1<2   | true  |
|    >    |             大于             |   1>2   | false |
|   <=    |           小于等于           |  2<=2   | true  |
|   >=    |           大于等于           |  3<=2   | false |
|   ==    |       等于(**会转型**)       | 2==’2‘  | true  |
|   !=    |       不等(**会转型**)       | 2!='2'  | false |
| === !== | 全等，要求值和数据类型都相同 | 2===’2‘ | false |

#### 4.4 逻辑运算符

&emsp;And(\&\&),Or(||),Not(!)

#### 4.5 短路运算

&emsp;逻辑中断，当有多个表达式(值)时，左边的表达式可以确定结果就不再运算右边的表达式

1. AND：表达式 1 && 表达式 2
   - 表达式 1 为 true，返回表达式 2 的值
   - 表达式 1 为 false，返回 false
2. OR：表达式 1 || 表达式 2
   - 表达式 1 为 true，返回 true
   - 表达式 1 为 false,返回表达式 2 的值

#### 4.6 赋值运算符

&emsp;=、+=、-=、\*=、/=

#### 4.7 运算符优先级

| 优先级 |   运算符   |      顺序      |
| :----: | :--------: | :------------: |
|   1    |   小括号   |       ()       |
|   2    | 一元运算符 |    ++ -- !     |
|   3    | 算数运算符 | 先\* / % 后+ - |
|   4    | 关系运算符 |   > >= < <=    |
|   5    | 相等运算符 | == != === !==  |
|   6    | 逻辑运算符 |  先&& 后 \|\|  |
|   7    | 赋值运算符 |       =        |
|   8    | 逗号运算符 |       ,        |

### 五、流程控制

> 顺序结构、分支结构、循环结构

#### 5.1 分支

1. 分支语句(if)

   ```Javascript
   if (条件表达式) {
     // 执行语句1;
   }else if{
     // 执行语句2;
   }else{
     // 执行语句3;
   }
   ```

2. 三元表达式
   `条件表达式?表达式1:表达式2`
3. 多分支语句(switch)

   ```Javascript
    switch(表达式){
        case value1:
            执行语句1;
            break;
        case value2:
            执行语句2;
            break;
        default:
            执行语句;
    }
   ```

#### 5.2 循环

1. for 循环

   ```javascript
   for (初始化变量; 条件表达式; 操作表达式) {
     // 循环体
   }
   ```

2. 打印倒三角

   ```javascript
   // 打印倒三角
   var str = "";
   for (var i = 0; i < 10; i++) {
     for (var j = 0; j < 10; j++) {
       str = str + "★";
     }
     str += "\n";
   }
   console.log(str);
   ```

3. 九九乘法表

   ```javascript
   // 九九乘法表
   // 一共有9行，但是每行的个数不一样，因此需要用到双重 for 循环
   // 外层的 for 循环控制行数 i ，循环9次 ，可以打印 9 行
   // 内层的 for 循环控制每行公式  j
   // 核心算法：每一行 公式的个数正好和行数一致， j <= i;
   // 每行打印完毕，都需要重新换一行
   var str = "";
   for (var i = 1; i <= 9; i++) {
     // 外层循环控制行数
     for (var j = 1; j <= i; j++) {
       str += j + "×" + i + "=" + i * j + "\t";
     }
     str += "\n";
   }
   console.log(str);
   ```

4. while 循环

   ```javascript
   while (条件表达式) {
     // 循环体
   }
   ```

5. do while 循环

   ```javascript
   do {
     // 循环体
   } while (条件表达式);
   ```

6. continue
   用于立即跳出本次循环，继续下一次循环
7. break
   用于立即跳出整个循环

### 六、数组

#### 6.1 数组

1. 创建数组
   - 可以存放任意类型的数据
   - `var arrayName = new Array();`
   - 利用数组字面量创建：`var arrayName=[];`
2. 索引(下标)
3. 遍历
   - 获取长度：`数组名.length`
4. 新增元素
   1. length 属性是可读写的，可以通过修改 length 的值实现扩容；新增加的默认为 undefined
   2. 新增数组元素，修改索引号 -> `array[5]='blue';`
5. 筛选数组

   ```javascript
   var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
   var newArr = [];
   // 刚开始 newArr.length 就是 0
   for (var i = 0; i < arr.length; i++) {
     if (arr[i] >= 10) {
       // 新数组索引号应该从0开始 依次递增
       newArr[newArr.length] = arr[i];
     }
   }
   console.log(newArr);
   ```

6. 反转数组

   ```javascript
   // 将数组 ['red', 'green', 'blue', 'pink', 'purple'] 的内容反过来存放
   // 1、声明一个新数组 newArr
   // 2、把旧数组索引号第4个取过来（arr.length - 1)，给新数组索引号第0个元素 (newArr.length)
   // 3、我们采取 递减的方式  i--
   var arr = ["red", "green", "blue", "pink", "purple", "hotpink"];
   var newArr = [];
   for (var i = arr.length - 1; i >= 0; i--) {
     newArr[newArr.length] = arr[i];
   }
   console.log(newArr);
   ```

#### 6.2 冒泡排序

> 冒泡排序(英文 Bubble Sort)，是一种最基础的交换排序。之所以叫做冒泡排序，因为每一个元素都可以像小气泡一样，根据自身大小一点一点向数组的一侧移动。

&emsp;每一趟只能确定将一个数归位。即第一趟只能确定将末位上的数归位，第二趟只能将倒数第 2 位上的数归位，依次类推下去。如果有 n 个数进行排序，只需将 n-1 个数归位，也就是要进行 n-1 趟操作。而 “每一趟 ” 都需要从第一位开始进行相邻的两个数的比较，将较大的数放后面，比较完毕之后向后挪一位继续比较下面两个相邻的两个数大小关系，重复此步骤，直到最后一个还没归位的数。

```javascript
// 冒泡排序
// var arr = [5, 4, 3, 2, 1];
var arr = [4, 1, 2, 3, 5];
// 外层循环管趟数
for (var i = 0; i < arr.length - 1; i++) {
  // 里面的循环管 每一趟的交换次数
  for (var j = 0; j < arr.length - i - 1; j++) {
    // 内部交换2个变量的值 前一个和后面一个数组元素相比较
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
```

![冒泡排序](images\220606_JavaScript_img/Part1/figure6-1.png)
![冒泡排序](images\220606_JavaScript_img/Part1/figure6-2.gif)

### 七、函数

#### 7.1 声明与调用

1. 声明函数

   - 命名函数

   ```javascript
       function funcName(形参...){
           // 函数体
       }
   ```

   - 函数表达式(匿名函数):`var 变量名 = function(){};`

2. 调用函数：
   - `函数名(实参)`

#### 7.2 参数

1. 实参与形参

   | 参数 |                              说明                              |
   | :--: | :------------------------------------------------------------: |
   | 形参 |  **形式**上的参数，函数**定义时**传递的参数，当前不知道是什么  |
   | 实参 | **实际**上的参数，函数**调用时**传递的参数，实参时传递给形参的 |

2. 形参与实参个数不匹配

   |      参数个数      |                 说明                 |
   | :----------------: | :----------------------------------: |
   | 实参个数==形参个数 |             输出正确结果             |
   |       实>形        |           只取到形参的个数           |
   |       实<形        | 多的形参定义为 undefined，结果为 NaN |

3. 返回值
   - 终止函数
   - 只返回一个值，如果有多个值，以最后一个为准
   - 没有 return 则返回 undefined
4. arguments
   - 是当前函数的一个内置对象。存储了传递的所有实参
   - arguments 展示形式是一个伪数组
     - 具有 length 属性
     - 按索引方式储存数据
     - 不具有数组的 push , pop 等方法

### 八、作用域

> => 提高程序可靠性&减少命名冲突，JS 在 ES6 的时候新增了块级作用域

1. 全局作用域
   - 全局变量
   - 在函数内部，没有直接声明直接赋值的变量也属于全局变量
   - 全局变量只有当 Browser 关闭时才会销毁，比较占用内存资源
2. 局部作用域
   - 局部变量
   - 函数的形参也可以看作局部变量
   - 局部变量当程序执行完就会销毁
3. 作用域链
   - 内部函数访问外部函数的变量，采取链式查找的方法决定取哪个值
   - 就近原则

### 九、预解析

&emsp;JS 引擎运行 JS 时分为两步：

1. 预解析(JS 引擎会将 JS 里边所有的 Var 和 Function 提升到当前作用域的最前边)
   - 变量预解析(变量提升)：把所有的变量声明提升到当前作用域的最前面，不提升赋值操作
   - 函数预解析(函数提升)：把所有的函数声明提升到当前作用域的最前面，不调用函数
2. 代码执行(按照代码书写顺序从上往下执行)

### 十、对象

&emsp;对象是一组无序的相关属性(事物的特征)和方法(事物的行为)的集合

#### 10.1 创建对象

1. 利用字面量创建对象

   - 属性或方法使用键值对
   - 用逗号分隔
   - 方法后跟匿名函数

   ```javascript
   var obj = {
     uname: "小明",
     age: 18,
     sex: "男",
     sayHi: function () {
       console.log("Hi!");
     },
   };
   ```

2. 使用 new Object 创建对象

   ```javascript
    // 创建了一个空的对象
    var obj = new Object();
    // 利用等号赋值的方式添加对象属性和方法
    obj.uname: '小明';
    obj.age: 18;
    obj.sex: '男';
    obj.sayHi: function () {
        console.log('Hi!');
    }
   ```

3. 利用构造函数创建对象

   - 构造函数：一种特殊的函数，主要用来初始化对象
     - 泛指某一大类，_类似于 Java 中的类_
     - 构造函数名字首字母要大写
     - 不需要 return
     - 调用必须使用 new
   - 利用构造函数创建对象的**过程**也称为**对象的实例化**

   ```javascript
   function 构造函数名() {
     this.属性 = 值;
     this.方法 = function () {};
   }
   new 构造函数名();
   ```

4. new 在执行时会做的四件事
   - . 在内存中创建一个新的空对象。
   - 让 this 指向这个新的对象。
   - 执行构造函数里面的代码，给这个新对象添加属性和方法。
   - 返回这个新对象（所以构造函数里面不需要 return）。

#### 10.2 使用对象

1. 调用对象的属性：`对象名.属性名`
2. 调用对象的属性：`对象名['属性名']`
3. 调用对象的方法：`对象名.方法名()`

#### 10.3 遍历对象

&emsp;for...in 语句用于对数组或者对象的属性进行循环操作

```javascript
for (var k in obj) {
  console.log(k); // 这里的 k 是属性名
  console.log(obj[k]); // 这里的 obj[k] 是属性值
}
```

### 十一、内置对象

&emsp;JS 中的对象：

1. ECMAScript
   - 自定义对象
   - 内置对象
2. JS API
   - 浏览器对象

#### 11.1 Math

&emsp;Math 对象不是构造函数，它具有数学常数和函数的属性和方法。

```javascript
Math.PI; // 圆周率
Math.floor(); // 向下取整
Math.ceil(); // 向上取整
Math.round(); // 四舍五入版 就近取整 注意 -3.5 结果是 -3
Math.abs(); // 绝对值
Math.max() / Math.min(); // 求最大和最小值
```

1. 随机数 random()

   - 可以随机返回一个小数，其取值范围是 [0，1)，左闭右开 0 <= x < 1
   - 得到一个两数之间的随机整数，包括两个数在内

   ```javascript
   // 返回位于两数中间的随机数
   function getRandom(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   ```

#### 11.2 Date

&emsp;必须要通过构造函数实例化日期对象

1. 获取当前时间必须实例化
   - `var now = new Date();`
2. 参数行的写法
   - 不写参数，就返回当前时间
   - 数字型 -- 2022,03,14
   - 字符串型 -- ‘2022-03-14 8:8:8’
3. 日期格式化

   |     方法名      |             说明              |
   | :-------------: | :---------------------------: |
   | `getFullYear()` |          获取当前年           |
   |  `getMonth()`   |     获取当前月(**0-11**)      |
   |   `getDate()`   |         获取当天日期          |
   |   `getDay()`    | 获取星期几(**星期 0-星期 6**) |
   |  `getHours()`   |         获取当前小时          |
   | `getMinutes()`  |         获取当前分钟          |
   | `getSeconds()`  |         获取当前秒钟          |

4. 时间戳

   - 1970.1.1 => 世界标准时间

   ```javascript
   // 实例化Date对象
   var now = new Date();
   // 1. 用于获取对象的原始值
   console.log(date.valueOf());
   console.log(date.getTime());
   // 2. 简单写可以这么做，返回为总的量
   var now = +new Date();
   // 3. HTML5中提供的方法，有兼容性问题
   var now = Date.now();
   ```

5. 倒计时

   - 将来的时间戳-现在的时间戳

   ```javascript
   d = parseInt(总秒数 / 60 / 60 / 24); // 计算天数
   h = parseInt((总秒数 / 60 / 60) % 24); // 计算小时
   m = parseInt((总秒数 / 60) % 60); // 计算分数
   s = parseInt(总秒数 % 60); // 计算当前秒数
   ```

#### 11.3 Array

1. 检测是否为数组
   - `变量 instanceof Array`运算符，可以判断一个对象是否属于某种类型
   - `Array.isArray()`用于判断一个对象是否为数组，HTML5 中提供的方法
2. 添加&删除数组元素

   |       方法名        |                             说明                             |       返回值       |
   | :-----------------: | :----------------------------------------------------------: | :----------------: |
   |  `push(参数1...)`   |            末尾添加一个或多个元素，**修改原数组**            |    返回新的长度    |
   |       `pop()`       | 删除数组最后一个元素，把数组长度减 1；无参数，**修改原数组** |   返回它删除的值   |
   | `unshift(参数1...)` |        向数组的开头添加一个或多个元素，**修改原数组**        |    返回新的长度    |
   |      `shift()`      |      删除数组的第一个长度，数组长度减 1，**修改原数组**      | 返回第一个元素的值 |

3. 筛选数组

   ```javascript
   var arr = [1500, 1200, 2000, 2100, 1800];
   var newArr = [];
   for (var i = 0; i < arr.length; i++) {
     if (arr[i] < 2000) {
       newArr.push(arr[i]);
     }
   }
   console.log(newArr);
   ```

4. 数组排序

   |   方法名    |                     说明                     |   返回值   |
   | :---------: | :------------------------------------------: | :--------: |
   | `reverse()` | 颠倒数组中的元素顺序，无参数，**改变原数组** | 返回新数组 |
   |  `sort()`   |     对数组的元素进行排序，**改变原数组**     | 返回新数组 |

   ```javascript
   var arr = [1, 64, 9, 6];
   arr.sort(function (a, b) {
     return b - a; // 降序
     // return a - b; // 升序
   });
   console.log(arr);
   ```

5. 数组索引 => 数组去重

   |     方法名      |              说明              |              返回值              |
   | :-------------: | :----------------------------: | :------------------------------: |
   |   `indexOf()`   | 数组中查找给定元素的第一个索引 | 存在则返回索引号，不存在则返回-1 |
   | `lastIndexOf()` | 在数组中给定元素的最后一个索引 | 存在则返回索引号，不存在则返回-1 |

   ```javascript
   // 有一个数组[‘c’, ‘a’, ‘z’, ‘a’, ‘x’, ‘a’, ‘x’, ‘c’, ‘b’]，要求去除数组中重复的元素
   // 目标：把旧数组里面不重复的元素选取出来放到新数组中，重复的元素只保留一个，放到新数组中去重。
   // 核心算法：我们遍历旧数组，然后拿着旧数组元素去查询新数组，如果该元素在新数组里面没有出现过，我们就添加，否则不添加。
   //我们怎么知道该元素没有存在？ 利用 新数组.indexOf(数组元素) 如果返回时 -1 就说明 新数组里面没有改元素
   function unique(arr) {
     var newArr = [];
     for (var i = 0; i < arr.length; i++) {
       if (newArr.indexOf(arr[i]) === -1) {
         newArr.push(arr[i]);
       }
     }
     return newArr;
   }
   var demo = unique(["c", "a", "z", "a", "x", "a", "x", "c", "b"]);
   console.log(demo);
   ```

6. 数组转化为字符串

   |      方法名      |                    说明                    |     返回值     |
   | :--------------: | :----------------------------------------: | :------------: |
   |   `toString()`   |     把数组转换成字符串，逗号分隔每一项     | 返回一个字符串 |
   | `join('分隔符')` | 方法用于把数组中的所有元素转换为一个字符串 | 返回一个字符串 |

#### 11.4 字符串

&emsp;_字符串的所有方法，都**不会修改**字符串本身，操作完成后会返回一个新的字符串_

1. 基本包装类型：将简单数据类型包装成为了复杂数据类型

   ```javascript
   // 1. 生成临时变量，把简单类型包装为复杂数据类型
   var temp = new String("andy");
   // 2. 赋值给我们声明的字符变量
   str = temp;
   // 3. 销毁临时变量
   temp = null;
   ```

2. 字符串不可变
   - 虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。
   - 原来的内容仍然在内存中
   - 由于字符串的不可变，在大量拼接字符串的时候会有效率问题
3. 根据字符返回位置

   |                方法名                |                       说明                       |
   | :----------------------------------: | :----------------------------------------------: |
   | `indexOf('要查找的字符',开始的位置)` | 返回指定内容在字符串中的位置，如果找不到就返回-1 |
   |           `lastIndexOf()`            |           从后往前找，只找第一个匹配的           |

4. 根据位置返回字符

   |       方法名        |             说明              |
   | :-----------------: | :---------------------------: |
   |   `charAt(index)`   |      返回指定位置的字符       |
   | `charCodeAt(index)` | 获取指定位置处字符的 ASCII 码 |
   |    `str[index]`     |      获取指定位置的字符       |

5. 拼接和截取字符串

   |         方法名          |                    说明                    |
   | :---------------------: | :----------------------------------------: |
   | `concat(str1,str2...)`  |    用于连接两个或多个字符串，等效于 + +    |
   | ▲`substr(start,length)` |      从 start 位置开始，取 length 个       |
   |   `slice(start,end)`    | 从 start 开始，截取到 end 位置(不包括 end) |
   | `substring(start,end)`  |       基本与 slice 相同，不接受负值        |

6. 替换、分割
   - 替换：`replace('被替换的','要替换的');`
   - 分割：`split('分隔符');`可以将字符串切分为数组。在切分完毕之后，返回的是一个新数组。

### 十二、简单&复杂数据类型

&emsp;简单类型又叫做基本数据类型或者值类型，复杂类型又叫做引用类型。

1. 值类型：简单数据类型/基本数据类型
   - 在存储时变量中存储的是值本身，因此叫做值类型.
   - **值类型变量的数据直接存放在变量（栈空间）中**
   - 例如：string ，number，boolean，undefined，null
2. 引用类型：复杂数据类型
   - 在存储时变量中存储的仅仅是地址（引用），因此叫做引用数据类型。
   - **引用类型变量（栈空间）里存放的是地址，真正的对象实例存放在堆空间中**
   - 例如：通过 new 关键字创建的对象（系统对象、自定义对象），如 Object、Array、Date 等
3. 堆栈空间分配区别：

   - 栈（操作系统）
     - 由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈；
     - **简单数据类型存放到栈里面**
   - 堆（操作系统）：
     - 存储复杂类型(对象)，一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。
     - **复杂数据类型存放到堆里面**

   ![figure12-1](images\220606_JavaScript_img/Part1/figure12-1.png)

   ![figure12-2](images\220606_JavaScript_img/Part1/figure12-2.jpg)

---

## Part Ⅱ Web API

### 一、Web API & DOM 介绍

&emsp;API(Application Programming Interface,应用程序编程接口)  
&emsp;Web API：浏览器提供的一套浏览器功能和页面元素的 API(DOM/BOM)

&emsp;DOM(Document Object Model, 文档对象模型)

![DOM树](images\220606_JavaScript_img/Part2/figure1-1.png)

- 文档：一个页面就是一个文档，DOM 中使用 document 表示
- 元素：页面中的所有标签都是元素，DOM 中使用 element 表示
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM 中使用 node 表示

&emsp;DOM 把以上内容都看做是**对象**

#### 1.1 获取页面元素

1. 根据 ID 获取
   - `document.getElementByID('id');`
   - 传入值`id`为大小写敏感的**字符串**
   - 返回一个匹配特定 ID 的 DOM Element 对象，没有则返回 null
2. 根据标签名获取
   - `document.getElementsByTagName('标签名');`
   - 返回带有指定标签名的对象的集合，以伪数组的形式进行存储
   - 可以采取遍历的方法截取内部的元素对象
3. HTML5 新增的方法
   - `document.getElementsByClassName(‘类名’)；// 根据类名返回元素对象集合`
   - `document.querySelector('选择器'); // 根据指定选择器返回第一个元素对象`
   - `document.querySelectorAll('选择器'); // 根据指定选择器返回`
   - 其中，选择器的方式需要在传入选择器的时候需要加符号(eg. '#id' '.class')
4. 获取 body&HTML 元素
   - `var bodyEle = document.body;`
   - `var htmlEle = document.documentElement;`

### 二、事件基础

&emsp;事件：可以被 JavaScript 侦测到的行为(触发-响应机制)

1. 事件的组成(事件三要素)
   - 事件源：事件被触发的对象
   - 事件类型：如何触发，什么事件
   - 事件处理程序：通过一个函数赋值的方式完成
2. 执行事件的步骤
   - 获取事件源
   - 注册事件(绑定事件)
   - 添加事件处理程序(采取函数赋值的方式)

### 三、元素&节点操作

#### 3.1 操作元素

&emsp;JS 的 DOM 操作可以改变网页内容、结构和样式

1. 改变元素内容
   - `element.innerText;`从起始位置到终止位置的内容, 但它去除 html 标签， 同时空格和换行也会去掉
   - `element.innerHTML;`起始位置到终止位置的全部内容，包括 html 标签，同时保留空格和换行(PS:对 HTML 标签内的内容直接进行编辑)
   - 这两个属性都可以读写，可以获取元素里边的内容
2. 常用元素属性
   - innerText、innerHTML(改变元素内容)
   - src、href
   - id、alt、title
3. 修改表单属性
   - type、value、checked、selected、disabled
   - `element.innerHTML;` => 普通盒子
   - 表单里边的值、文字内容通过 Value 来修改
4. 样式属性操作
   - `element.style;`行内样式操作
   - `element.className;`类名样式操作
   - JS 里面的样式采取驼峰命名法 比如`fontSize`、`backgroundColor`
   - JS 修改 style 样式操作，产生的是行内样式，CSS 权重比较高
   - 如果样式修改较多，可以采取操作类名方式更改元素样式。
   - class 因为是个保留字，因此使用 className 来操作元素类名属性
   - className 会直接更改元素的类名，会覆盖原先的类名。

![操作元素](images\220606_JavaScript_img/Part2/figure3-1.png)

#### 3.2 节点操作

&emsp;网页中的所有内容都是节点（标签、属性、文本、注释等），在 DOM 中，节点使用 node 来表示。一般地，节点至少拥有 nodeType（节点类型）、nodeName（节点名称）和 nodeValue（节点值）这三个基本属性：

- 元素节点 nodeType 为 1
- 属性节点 nodeType 为 2
- 文本节点 nodeType 为 3 （文本节点包含文字、空格、换行等）

##### 3.2.1 节点层级

1. 父级节点
   - `node.parentNode`
   - 返回**最近的一个父节点**
   - 没有指定的父节点则返回 null
2. 子节点
   - `parentNode.childNodes（标准）`
     - 返回包含指定节点的**所有子节点**的集合，该集合为即时更新的集合
     - 返回值里面包含元素节点，文本节点等。如果只想要获得元素节点，则需要专门处理
   - ▲ `parentNode.children（非标准）`
     - 只读属性，返回**所有的子元素节点**。它只返回子元素节点，其余节点不返回
   - `parentNode.firstChild`
     - 返回第一个子节点，找不到则返回 null。包含所有的节点
   - `parentNode.lastChild`
     - 返回最后一个子节点，找不到则返回 null。包含所有的节点
   - `parentNode.firstElementChild`
     - 返回第一个子元素节点，找不到则返回 null(>=IE9)
   - `parentNode.lastElementChild`
     - 返回最后一个子元素节点，找不到则返回 null(>=IE9)
   - 如果想要第一个子元素节点，可以使用 `parentNode.chilren[0]`
   - 如果想要最后一个子元素节点，可以使用 `parentNode.chilren[parentNode.chilren.length - 1]`
3. 兄弟节点
   - `node.nextSibling`
     - 返回当前元素的下一个兄弟节点，找不到则返回 null。包含所有的节点
   - `node.previousSibling`
     - 返回当前元素上一个兄弟节点，找不到则返回 null。包含所有的节点
   - `node.nextElementSibling`
     - 返回当前元素下一个兄弟元素节点，找不到则返回 null(>=IE9)
   - `node.previousElementSibling`
     - 返回当前元素上一个兄弟元素节点，找不到则返回 null(>=IE9)

##### 3.2.2 节点操作

1. 创建节点(动态创建元素节点)
   - `document.createElement('tagName')`
   - 这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为动态创建元素节点
2. 添加节点
   - node.appendChild(child)
     - 将一个节点添加到指定父节点的子节点列表末尾。类似于 CSS 里面的 after 伪元素
   - node.insertBefore(child, 指定元素)
     - 将一个节点添加到父节点的指定子节点前面。类似于 CSS 里面的 before 伪元素
3. 删除节点
   - node.removeChild(child)
   - 从 DOM 中删除一个子节点，返回删除的节点
4. 复制节点
   - node.cloneNode()
   - 返回调用该方法的节点的一个副本。也称为克隆节点/拷贝节点
   - 如果括号参数为空或者为 false ，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点
   - 如果括号参数为 true ，则是深度拷贝，会复制节点本身以及里面所有的子节点。
5. 三种动态创建元素的区别
   - `document.write` 是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘，**不推荐使用**
   - `innerHTML` 是将内容写入某个 DOM 节点，不会导致页面全部重绘
   - `innerHTML` 创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂
   - `createElement()` 创建多个元素效率稍低一点点，但是结构更清晰
   - 总结：不同浏览器下，innerHTML 效率要比 creatElement 高；**大段文字插入的时候考虑**`innerHTML`

#### 3.3 DOM 重点操作

> 创建、增、删、改、查、属性操作、事件操作

1. 创建
   - `document.write`
   - `innerHTML`
   - `createElement`
2. 增
   - `appendChild`
   - `insertBefore`
3. 删
   - `removeChild`
4. 改
   - 修改元素属性： src、href、title 等
   - 修改普通元素内容： innerHTML 、innerText
   - 修改表单元素： value、type、disabled 等
   - 修改元素样式： style、className
5. 查
   - DOM 提供的 API 方法：`getElementById`、`getElementsByTagName`古老用法 不太推荐
   - H5 提供的新方法：`querySelector`、`querySelectorAll` 提倡
   - 利用节点操作获取元素： 父(parentNode)、子(children)、兄(previousElementSibling、nextElementSibling) 提倡
6. 属性操作
   - `setAttribute`：设置 dom 的属性值
   - `getAttribute`：得到 dom 的属性值
   - `removeAttribute` 移除属性
7. 事件操作

### 四、事件详解

#### 4.1 注册事件

&emsp;给元素添加事件，称为注册事件/绑定事件

1. 传统注册方式
   - 利用 on 开头的事件(eg. `onclick`)
   - `<button onclick=“alert('hi~')”></button>` 或 `btn.onclick = function() {}`
   - 特点：注册事件的**唯一性** => 同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会**覆盖**前面注册的处理函数
2. 方法监听方式
   - W3C 标准 推荐方式
   - `addEventListener()` 是一个方法
   - IE9 之前的 IE 不支持此方法，可使用 `attachEvent()` 代替
   - 特点：同一个元素同一个事件可以注册**多个**监听器 => 按注册顺序依次执行

&emsp;以上为两类绑定的方式，在实际中经常使用以下具体方法

- `addEventListener` 事件监听方式
  - `eventTarget.addEventListener(type,listener[ ,useCapture])`
  - 将指定的监听器注册到 eventTarget（目标对象）上，当该对象触发指定的事件时，就会执行事件处理函数
  - type：事件类型**字符串**，比如 click 、mouseover ，注意这里**不带 on**
  - listener：事件处理函数，事件发生时，会调用该监听函数
  - useCapture：可选参数，是一个布尔值，默认是 false
- `attachEvent` 事件监听方式
  - `eventTarget.attachEvent(eventNameWithOn, callback)`
  - 将指定的监听器注册到 eventTarget（目标对象） 上，当该对象触发指定的事件时，指定的回调函数就会被执行
  - eventNameWithOn：事件类型**字符串**，比如 onclick 、onmouseover ，这里**要带 on**
  - callback： 事件处理函数，当目标触发事件时回调函数被调用

#### 4.2 删除事件(解绑)

1. 传统注册方式
   - `eventTarget.onclick = null;`
2. 方法监听注册方式
   - `eventTarget.removeEventListener(type, listener[, useCapture]);`
   - `eventTarget.detachEvent(eventNameWithOn, callback);`

#### 4.3 DOM 事件流

&emsp;DOM 事件流描述的是从页面中接收事件的**顺序**。事件发生时会在元素节点之间**按照特定的顺序传播**，这个传播过程即 DOM 事件流  
&emsp;DOM 事件流分为 3 个阶段：捕获阶段 -> 当前目标阶段 -> 冒泡阶段

![DOM事件流](images\220606_JavaScript_img/Part2/figure4-1.png)
![DOM事件流](images\220606_JavaScript_img/Part2/figure4-2.png)

- 事件捕获(body -> div)：网景最早提出，由 DOM 最顶层节点开始，然后逐级向下传播到到最具体的元素接收的过程。
- 事件冒泡(div -> body)：IE 最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点的过程。

1. **JS 代码中只能执行捕获或者冒泡其中的一个阶段**。
2. `onclick` 和 `attachEvent` 只能得到冒泡阶段。
3. `addEventListener(type, listener[, useCapture])`第三个参数如果是 true，表示在事件捕获阶段调用事件处理程序；如果是 false（不写默认就是 false），表示在事件冒泡阶段调用事件处理程序。
4. 实际开发中我们很少使用事件捕获，我们更关注事件冒泡。
5. 有些事件是没有冒泡的，比如 `onblur、onfocus、onmouseenter、onmouseleave`

#### 4.4 事件对象

```javascript
eventTarget.onclick = function (event) {};
eventTarget.addEventListener("click", function (event) {});
// 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt
```

&emsp;event 对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态。简单理解就是事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面，这个对象就是事件对象 event，它有很多属性和方法。  
&emsp;事件对象可以当作形参来看，系统帮我们设定为事件对象，不需要传递实参过去。只有有了事件才会存在

|   事件对象属性方法    |                     说明                     |
| :-------------------: | :------------------------------------------: |
|      `e.target`       |           返回触发事件的对象(标准)           |
|    `e.srcElement`     |          返回触发事件的对象(非标准)          |
|       `e.type`        |     返回事件的类型，比如 click(不带 on)      |
|   `e.cancelBubble`    |             阻止事件冒泡(非标准)             |
| `e.stopPropagation()` |              阻止事件冒泡(标准)              |
|    `e.returnValue`    | 阻止事件的默认行为(非标准，比如不让链接转跳) |
| `e.preventDefault()`  |           阻止事件的默认行为(标准)           |

**e.target 和 this 的区别：**  
 this 是事件绑定的元素，这个函数的调用者（绑定这个事件的元素）  
 e.target 是事件触发的元素

#### 4.5 阻止冒泡

1. 标准写法：利用事件对象里面的 stopPropagation()方法

   ```javascript
   e.stopPropagation();
   ```

2. 非标准写法：IE 6-8 利用事件对象 cancelBubble 属性

   ```javascript
   e.cancelBubble = true;
   ```

3. 阻止事件冒泡的兼容性解决方案

   ```javascript
   if (e && e.stopPropagation) {
     e.stopPropagation();
   } else {
     window.event.cancelBubble = true;
   }
   ```

#### 4.6 事件委托(代理、委派)

&emsp;事件委托也称为事件代理， 在 jQuery 里面称为事件委派。  
&emsp;事件委托的原理：**不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。**  
&emsp;事件委托的作用：只操作了一次 DOM，**提高了程序的性能**

#### 4.7 鼠标、键盘事件

1. 常见的鼠标事件

   |   鼠标事件    |     触发条件     |
   | :-----------: | :--------------: |
   |   `onclick`   | 鼠标左键点击触发 |
   | `onmouseover` |   鼠标经过触发   |
   | `onmouseout`  |   鼠标离开触发   |
   |   `onfocus`   | 获得鼠标焦点触发 |
   |   `onblur`    |   失去焦点触发   |
   | `onmousemove` |   鼠标移动触发   |
   |  `onmouseup`  |   鼠标弹起触发   |
   | `onmousedown` |   鼠标按下触发   |

2. 禁止鼠标右键菜单

   - contextmenu 主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单

   ```javascript
   document.addEventListener("contextmenu", function (e) {
     e.preventDefault();
   });
   ```

3. 禁止鼠标选中（selectstart 开始选中）

   ```javascript
   document.addEventListener("selectstart", function (e) {
     e.preventDefault();
   });
   ```

4. 鼠标事件对象

   | 鼠标事件对象 |                      说明                      |
   | :----------: | :--------------------------------------------: |
   | `e.clientX`  | 返回鼠标相对于 Browser 窗口**可视区**的 X 坐标 |
   | `e.clientY`  | 返回鼠标相对于 Browser 窗口**可视区**的 Y 坐标 |
   |  `e.pageX`   |   返回鼠标相对于**文档页面**的 X 坐标(IE9+)    |
   |  `e.pageY`   |   返回鼠标相对于**文档页面**的 Y 坐标(IE9+)    |
   | `e.screenX`  |      返回鼠标相对于**电脑屏幕**的 X 坐标       |
   | `e.screenY`  |      返回鼠标相对于**电脑屏幕**的 Y 坐标       |

5. 键盘事件

   |   键盘事件   |                触发条件                |
   | :----------: | :------------------------------------: |
   |  `onkeyup`   |        某个键盘按键被松开时触发        |
   | `onkeydown`  |        某个键盘按键被按下时触发        |
   | `onkeypress` | 某个键盘按键被按下时触发(不识别功能键) |

   - 如果使用`addEventListener`不需要加 `on`
   - `onkeypress` 和前面 2 个的区别是，它不识别功能键，比如左右箭头，shift 等，且它会区分字母大小写
   - 三个事件的执行顺序是： keydown --> keypress ---> keyup
   - `keydown` 和 `keypress` 在文本框里面的特点： 他们两个事件触发的时候，文字还没有落入文本框中。`keyup`事件触发的时候， 文字已经落入文本框里面了

6. 键盘事件对象

   | 键盘事件对象 |        说明         |
   | :----------: | :-----------------: |
   |  `keyCode`   | 返回该键的 ASCII 值 |

### 五、BOM & 定时器

#### 5.1 BOM

&emsp;BOM(Browser Object Model，浏览器对象模型)  
&emsp;提供了独立于内容而与浏览器窗口进行交互的对象，核心对象是 Window；它比 DOM 更大，包含了 DOM

![BOM结构](images\220606_JavaScript_img/Part2/figure5-1.png)

| DOM                                      | BOM                                              |
| :--------------------------------------- | :----------------------------------------------- |
| 文档对象模型                             | 浏览器对象模型                                   |
| 把「**文档**」当做一个「**对象**」来看待 | 把「**浏览器**」当做一个「**对象**」来看待       |
| DOM 的顶级对象是 document                | BOM 的顶级对象是 window                          |
| DOM 主要学习的是操作页面元素             | BOM 学习的是浏览器窗口交互的一些对象             |
| DOM 是 W3C 标准规范                      | BOM 是浏览器厂商在各自浏览器上定义的，兼容性较差 |

&emsp;window 对象是浏览器的顶级对象，它具有双重角色。  
&emsp;1.它是 JS 访问浏览器窗口的一个接口。  
&emsp;2.它是一个全局对象。定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法。  
&emsp;在调用的时候可以省略 window，对话框都属于 window 对象方法，如 alert()、prompt() 等。

#### 5.2 Window 对象常见事件

1. 窗口加载事件

   - `window.onload` 是一个事件，在文档加载完成后能立即触发，并且能够为该事件注册事件处理函数。将要对对象或者模块进行操作的代码存放在处理函数中。即：window.onload =function (){这里写操作的代码};

   ```javascript
   window.onload = function () {};
   // 或者
   window.addEventListener("load", function () {});
   ```

   - 有了 `window.onload` 就可以把 JS 代码写到页面元素的上方，因为 onload 是等页面内容全部加载完毕，再去执行处理函数。
   - `window.onload` 传统注册事件方式 只能写一次，如果有多个，会以最后一个 `window.onload` 为准。
   - `document.addEventListener('DOMContentLoaded',function(){})` 当纯 HTML 被完全加载以及解析时，DOMContentLoaded 事件会被触发，而不必等待样式表，图片或者子框架完成加载。

2. 调整窗口大小事件

   - `window.onresize` 是调整窗口大小加载事件, 当触发时就调用的处理函数。

   ```javascript
   window.onresize = function () {};
   // 或者
   window.addEventListener("resize", function () {});
   ```

#### 5.3 定时器

1. setTimeout() 定时器
   - `window.setTimeout(调用函数, [延迟的毫秒数]);`
   - 用于设置一个定时器，该定时器在**定时器到期后执行调用函数**。
   - 这个调用函数可以直接写函数，或者写函数名或者采取字符串‘函数名()'三种形式。第三种不推荐
   - 延迟的毫秒数省略默认是 0，如果写，**必须是毫秒**
2. 停止 setTimeout() 定时器
   - `window.clearTimeout(timeoutID)`
   - **参数为定时器的标识符**
3. setInterval() 定时器
   - `window.setInterval(回调函数, [间隔的毫秒数]);`
   - **重复调用**一个函数，每隔这个时间，就去调用一次回调函数。
   - 这个调用函数可以直接写函数，或者写函数名或者采取字符串 '函数名()' 三种形式。
   - 间隔的毫秒数省略默认是 0，如果写，**必须是毫秒**，表示每隔多少毫秒就自动调用这个函数。
   - **第一次执行也是间隔毫秒数之后执行，之后每隔毫秒数就执行一次。**
4. 停止 setInterval() 定时器
   - `window.clearInterval(intervalID);`
   - **参数为定时器的标识符**
5. 定时器的 name 设置为全局变量并初始化为 Null => 便于其他函数访问

### 六、JS 执行机制

> JavaScript -> 单线程

#### 6.1 同步&异步

> 同步和异步关注的是消息通信机制 (synchronous communication/ asynchronous communication)。同步，就是调用某个东西时，调用方得等待这个调用返回结果才能继续往后执行。异步，和同步相反，调用方不会等待得到结果，而是在调用发出后调用者可以继续执行后续操作，被调用者通过状体来通知调用者，或者通过回调函数来处理这个调用

![同步](images\220606_JavaScript_img/Part2/figure6-1.png)
![异步](images\220606_JavaScript_img/Part2/figure6-2.png)

1. 同步任务
   - 同步任务都在主线程上执行，形成一个**执行栈**。
2. 异步任务
   - JS 的异步是通过回调函数实现的。
   - 一般而言，异步任务有以下三种类型:
     - 普通事件，如 click、resize 等
     - 资源加载，如 load、error 等
     - 定时器，包括 setInterval、setTimeout 等
   - 异步任务把相关回调函数添加到任务队列中（任务队列也称为消息队列）。

#### 6.2 执行机制

1. 先执行执行栈中的同步任务。
2. 异步任务（回调函数）放入任务队列中。
3. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。

![执行机制](images\220606_JavaScript_img/Part2/figure6-3.png)
![事件循环](images\220606_JavaScript_img/Part2/figure6-4.png)

&emsp;由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环（ event loop）。

### 七、location/navigator/history 对象

1. location 对象

   - window 对象给我们提供了一个 location **属性**用于获取或设置窗体的 URL，并且可以用于解析 URL。因为这个属性**返回的是一个对象**，所以我们将这个属性也称为 location 对象。

   |  location 对象属性  |           返回值            |
   | :-----------------: | :-------------------------: |
   |   `location.href`   |    获取或者设置整个 URL     |
   |   `location.host`   |       返回主机(域名)        |
   |   `location.port`   | 返回端口号 未写返回空字符串 |
   | `location.pathname` |          返回路径           |
   |  `location.search`  |          返回参数           |
   |   `location.hash`   |  返回片段 常见于链接 锚点   |

   |    location 对象方法    |                      返回值                       |
   | :---------------------: | :-----------------------------------------------: |
   | `location.assign(url)`  |   跟 href 一样，可以转跳页面(重定向)，可以后退    |
   | `location.replace(url)` |    替换当前页面，因为不记录历史，所以不能后退     |
   |   `location.reload()`   | 重新加载页面，相当于 f5，参数为 true 则为 ctrl+f5 |

2. navigator 对象
3. history 对象
   - 与浏览器历史记录进行交互

| history 对象方法 |                  作用                  |
| :--------------: | :------------------------------------: |
|     `back()`     |              可以后退功能              |
|   `forward()`    |                前进功能                |
|    `go(参数)`    | 参数:1 前进 1 个页面；-1 后退 1 个页面 |

### 八、网页特效 三大系列

#### 8.1 元素偏移量 offset 系列

> offset 翻译过来就是偏移量， 我们使用 offset 系列相关属性可以动态的得到该元素的位置（偏移）、大小等。

- 获得元素距离带有定位父元素的位置
- 获得元素自身的大小（宽度高度）
- 返回的数值都不带单位

![offset](images\220606_JavaScript_img/Part2/figure8-1.png)

|    offset 系列属性     |                      作用                       |
| :--------------------: | :---------------------------------------------: |
| `element.offsetParent` | 返回该元素的带有定位的父级元素，没有则返回 body |
|  `element.offsetTop`   |   返回元素相对带有定位的父元素的上方的偏移量    |
|  `element.offsetLeft`  |   返回元素相对带有定位的父元素的左方的偏移量    |
| `element.offsetWidth`  |  返回自身包括 padding、**边框**、内容区的宽度   |
| `element.offsetHeight` |  返回自身包括 padding、**边框**、内容区的高度   |

| offset                                         | style                                         |
| :--------------------------------------------- | :-------------------------------------------- |
| offset 可以得到任意样式表中的样式值            | style 只能得到行内样式表中的样式值            |
| offset 系列获得的数值是没有单位的              | style.width 获得的是带有单位的字符串          |
| offsetWidth 包含 padding+border+width          | style.width 获得不包含 padding 和 border 的值 |
| offsetWidth 等属性是只读属性，只能获取不能赋值 | style.width 是可读写属性，可以获取也可以赋值  |
| 获取元素大小位置，用 offset 更合适             | 给元素更改值，则需要用 style 改变             |

#### 8.2 元素可视区 client 系列

> client 翻译过来就是客户端，我们使用 client 系列的相关属性来获取元素可视区的相关信息。通过 client 系列的相关属性可以动态的得到该元素的边框大小、元素大小等。

![client](images\220606_JavaScript_img/Part2/figure8-2.png)

|    client 系列属性     |                               作用                               |
| :--------------------: | :--------------------------------------------------------------: |
|  `element.clientTop`   |                       返回元素上边框的大小                       |
|  `element.clientLeft`  |                       返回元素左边框的大小                       |
| `element.clientWidth`  | 返回自身包括 padding、内容区的宽度，**不含边框**，返回值不带单位 |
| `element.clientHeight` | 返回自身包括 padding、内容区的高度，**不含边框**，返回值不带单位 |

#### 8.3 元素滚动 scroll 系列

> scroll 翻译过来就是滚动的，我们使用 scroll 系列的相关属性可以动态的得到该元素的大小、滚动距离等。返回数值不带单位

![scroll](images\220606_JavaScript_img/Part2/figure8-3.png)

|    scroll 系列属性     |             作用             |
| :--------------------: | :--------------------------: |
|  `element.scrollTop`   |     返回被卷去的上侧距离     |
|  `element.scrollLeft`  |     返回被卷去的左侧距离     |
| `element.scrollWidth`  | 返回自身实际的宽度，不含边框 |
| `element.scrollHeight` | 返回自身实际的高度，不含边框 |

- 页面被卷去的头部：如果浏览器的高（或宽）度不足以显示整个页面时，会自动出现滚动条。当滚动条向下滚动时，**页面上面被隐藏掉的高度，我们就称为页面被卷去的头部**。
- **页面被卷去的头部**可以通过 window.pageYOffset 获得；如果是被卷去的左侧 window.pageXOffset。
- **元素被卷去的头部**是 element.scrollTop

#### 8.4 总结

1. `offset` 系列 经常用于获得元素位置 offsetLeft offsetTop
2. `client` 经常用于获取元素大小 clientWidth clientHeight
3. `scroll` 经常用于获取滚动距离 scrollTop scrollLeft
4. 注意页面滚动的距离通过 window.pageXOffset 获得

### 九、缓动动画

1. **动画实现核心原理**：通过定时器 setInterval() 不断移动盒子位置。
2. 缓动动画就是让元素运动速度有所变化，最常见的是让速度慢慢停下来。**思路**：
   - 让盒子每次移动的距离慢慢变小，速度就会慢慢落下来。
   - 核心算法：(目标值 - 现在的位置 )/10 作为每次移动的距离 步长
   - 停止的条件是： 让当前盒子位置等于目标位置就停止定时器
   - 注意步长值需要取整
     - 如果是正值，则步长 往大了取整
     - 如果是负值，则步长 往小了取整
3. 动画函数添加回调函数
   - 回调函数原理：函数可以作为一个参数。将这个函数作为参数传到另一个函数里面，当那个函数执行完之后，再执行传进去的这个函数，这个过程就叫做回调。
   - 回调函数写的位置：定时器结束的位置
4. **节流阀**
   - 节流阀目的：当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发。
   - 核心实现思路：利用回调函数，添加一个变量来控制，锁住函数和解锁函数。

### 十、本地存储

#### 10.1 本地存储特性

1. 数据存储在用户浏览器中
2. 设置、读取方便、甚至页面刷新不丢失数据
3. 容量较大，sessionStorage 约 5M、localStorage 约 20M
4. 只能存储字符串，可以将对象 JSON.stringify() 编码后存储

#### 10.2 window.sessionStorage

1. 生命周期为关闭浏览器窗口
2. 在同一个窗口(页面)下数据可以共享
3. 以键值对的形式存储使用

- 存储数据：`sessionStorage.setItem(key, value)`
- 获取数据：`sessionStorage.getItem(key)`
- 删除数据：`sessionStorage.removeItem(key)`
- 删除所有数据：`sessionStorage.clear()`

#### 10.3 window.localStorage

1. 声明周期永久生效，除非手动删除 否则关闭页面也会存在
2. 可以多窗口（页面）共享（同一浏览器可以共享）
3. 以键值对的形式存储使用
4. 只能存储字符串

- 存储数据：`localStorage.setItem(key, value)`
- 获取数据：`localStorage.getItem(key)`
- 删除数据：`localStorage.removeItem(key)`
- 删除所有数据：`localStorage.clear()`

### 十一、移动端网页特效

> 移动端浏览器兼容性较好，不需要考虑以前 JS 的兼容性问题

| 触屏 touch 事件 |              说明               |
| :-------------: | :-----------------------------: |
|  `touchstart`   |  手指触摸到一个 DOM 元素时触发  |
|   `touchmove`   | 手指在一个 DOM 元素上滑动时触发 |
|   `touchend`    | 手指从一个 DOM 元素上移开时触发 |

| 触屏事件对象(TouchEvent) |                 说明                  |
| :----------------------: | :-----------------------------------: |
|        `touches`         |   正在触摸屏幕的所有手指的一个列表    |
|     `targetTouches`      | 正在触摸当前 DOM 元素的手指的一个列表 |
|     `changedTouches`     |       手指状态发生了改变的列表        |

&emsp;移动端拖动元素

1. `touchstart、touchmove、touchend` 可以实现拖动元素
2. 但是拖动元素需要当前手指的坐标值 我们可以使用 `targetTouches[0]` 里面的 `pageX` 和 `pageY`
3. 移动端拖动的原理： 手指移动中，计算出手指移动的距离。然后用盒子原来的位置 + 手指移动的距离
4. 手指移动的距离： 手指滑动中的位置 减去 手指刚开始触摸的位置
5. 拖动元素三步曲：
   - 触摸元素 `touchstart`： 获取手指初始坐标，同时获得盒子原来的位置
   - 移动手指 `touchmove`： 计算手指的滑动距离，并且移动盒子
   - 离开手指 `touchend`:
   - 注意：手指移动也会触发滚动屏幕所以这里要阻止默认的屏幕滚动 `e.preventDefault();`

&emsp;移动端 click 事件会有 300ms 的延时，原因是移动端屏幕双击会缩放(double tap to zoom) 页面。

---

## Part Ⅲ jQuery

### 一、jQuery

&emsp;JavaScript 库：即 library，是一个封装好的特定的集合（方法和函数）。比如 jQuery，就是为了快速方便的操作 DOM，里面基本都是函数（方法）。

1. jQuery 入口函数

   ```javascript
   $(function () {
       ...  // 此处是页面 DOM 加载完成的入口
   }) ;

   $(document).ready(function(){
   ...  //  此处是页面DOM加载完成的入口
   });
   ```

   - 等着 DOM 结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery 帮我们完成了封装。
   - 相当于原生 js 中的 DOMContentLoaded。
   - 不同于原生 js 中的 load 事件是等页面文档、外部的 js 文件、css 文件、图片加载完毕才执行内部代码。

2. 顶级对象 $
   - \$ 是 jQuery 的别称，在代码中可以使用 jQuery 代替 \$，但一般为了方便，通常都直接使用 \$ 。
   - \$ 是 jQuery 的顶级对象，相当于原生 JavaScript 中的 window。把元素利用\$包装成 jQuery 对象，就可以调用 jQuery 的方法。
3. jQuery 对象和 DOM 对象
   - 用原生 JS 获取来的对象就是 DOM 对象
   - jQuery 方法获取的元素就是 jQuery 对象。
   - jQuery 对象本质是：利用\$对 DOM 对象包装后产生的对象（伪数组形式存储）。
4. 相互转换
   - DOM 对象转换为 jQuery 对象：`$('div')`
   - jQuery 对象转换为 DOM 对象：`$('div')[index]`、`$('div').get(index)`

### 二、jQuery 选择器

1. jQuery 基础&层级选择器

   ```javascript
    $(“选择器”)   //  里面选择器直接写 CSS 选择器即可，但是要加引号
   ```

   |    名称    |       用法        |                 描述                 |
   | :--------: | :---------------: | :----------------------------------: |
   | ID 选择器  |    `$("#id")`     |          获取指定 ID 的元素          |
   | 全选选择器 |     `$("*")`      |             匹配所有元素             |
   |  类选择器  |   `$(".class")`   |        获取同一类 class 元素         |
   | 标签选择器 |    `$("div")`     |        获取同一标签的所有元素        |
   | 并集选择器 |  `$("div,p,li")`  |             选取多个元素             |
   | 交集选择器 | `$("li.current")` |               交集元素               |
   | 子代选择器 |   `$("ul>li")`    | 获取直接子元素(亲儿子，不会获取孙子) |
   | 后代选择器 |   `$("ul li")`    |     获取所有相应标签的后代子元素     |

2. **隐式迭代**：遍历内部 DOM 元素（伪数组形式存储）的过程就叫做隐式迭代。
3. 筛选选择器

   |     语句     |      用法       |                            描述                            |
   | :----------: | :-------------: | :--------------------------------------------------------: |
   |   `:first`   | `$('li:first')` |                     获取第一个 li 元素                     |
   |   `:last`    | `$('li:last')`  |                    获取最后一个 li 元素                    |
   | `:eq(index)` | `$('li:eq(2)')` | 获取到的 li 元素中，选择索引号为 2 的元素，索引号从 0 开始 |
   |    `:odd`    |  `$('li:odd')`  |         获取到的 li 元素中，选择索引号为奇数的元素         |
   |   `:even`    | `$('li:even')`  |         获取到的 li 元素中，选择索引号为偶数的元素         |

4. 筛选方法

   |         语法         |               用法                |                   说明                    |
   | :------------------: | :-------------------------------: | :---------------------------------------: |
   |      `parent()`      |        `$('li').parent();`        |            查找父级(最近一级)             |
   | `children(selector)` |     `$('ul').children('li');`     |            相当于`$("ul>li")`             |
   |   `find(selector)`   |       `$('ul').find('li');`       |            相当于`$("ul li")`             |
   | `siblings(selector)` |   `$('.first').siblings('li');`   |       查找兄弟节点，不包括自己本身        |
   |  `nextAll([expr])`   |     `$('.first').nextAll();`      |      查找当前元素之后所有的同辈元素       |
   |  `prevAll([expr])`   |      `$('.last').prevAll();`      |      查找当前元素之前所有的同辈元素       |
   |  `hasClass(class)`   | `$('div').hasClass('protected');` | 检查是否存在某个特定的类，存在则返回 true |
   |     `eq(index)`      |         `$('li').eq(2);`          |           相当于`$('li:eq(2)')`           |

   - 排他思想

     ```javascript
     $(this).css(“color”,”red”);
     $(this).siblings(). css(“color”,””);
     ```

   - 得到当前元素索引号：`$(this).index()`

5. 链式编程：`$(this).css('color','red').sibling().css('color','');`

### 三、样式操作

1. 操作 CSS 方法

   ```javascript
   // 参数只写**属性名**，则是返回属性值：
   $(this).css("color");
   // 参数是 属性名，属性值，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号：
   $(this).css("color", "red");
   // 参数可以是对象形式设置多组样式。属性名和属性值用冒号隔开，属性可以不用加引号：
   $(this).css({ color: "white", "font-size": "20px" });
   ```

2. 设置类样式方法

   ```javascript
   // 添加类：
   $("div").addClass("current");
   // 移除类：
   $(“div”).removeClass("current");
   // 切换类：
   $(“div”).toggleClass("current");
   ```

3. 类操作与 className 的区别
   - 原生 JS 中 className 会覆盖元素原先里面的类名。
   - jQuery 里面类操作只是对指定类进行操作，不影响原先的类名。

### 四、效果

1. 封装动画效果

   ![封装动画](images\220606_JavaScript_img/Part3/figure4-1.png)

2. 显示隐藏

   ```javascript
   show([speed, [easing], [fn]]);
   hide([speed, [easing], [fn]]);
   toggle([speed, [easing], [fn]]);
   // 参数都可以省略，无动画直接显示
   // speed：三种预定速度之一的字符串(“slow”,“normal”,or “fast”)或表示动画时长的毫秒数值(如：1000)
   // easing：(Optional) 用来指定切换效果，默认是“swing”
   // fn：回调函数，在动画完成时执行的函数，每个元素执行一次。
   ```

3. 滑动效果

   ```javascript
   // 参数同显示隐藏
   slideDown([speed, [easing], [fn]]);
   slideUp([speed, [easing], [fn]]);
   slideToggle([speed, [easing], [fn]]);
   ```

4. 事件切换

   ```javascript
   hover([over,]out);
   // over：鼠标移到元素上要触发的函数（相当于 mouseenter）
   // out：鼠标移出元素要触发的函数（相当于 mouseleave）
   // 如果只写一个函数，则鼠标经过和离开都会触发它
   ```

5. 动画队列及其停止排队方法

   - **动画或效果队列**：动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行
   - 停止排队：`stop();`，写到动画或者效果的**前面**，**相当于停止结束上一次的动画**

6. 淡入淡出效果

   ```javascript
   // 参数同显示隐藏
   fadeIn([speed, [easing], [fn]]);
   fadeOut([speed, [easing], [fn]]);
   fadeToggle([speed, [easing], [fn]]);
   // 渐进方式调整到指定的不透明度
   fadeTo([[speed], opacity, [easing], [fn]]);
   // 其中，opacity 必须写，取值0~1；speed 必须写
   ```

7. 自定义动画
   - `animate(params,[speed],[easing],[fn]);`
   - params: 想要更改的样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果是复合属性则需要采取驼峰命名法 borderLeft。其余参数都可以省略，如不省略则同显示隐藏

### 五、属性、文本操作

1. 设置或获取元素固有属性值 prop()
   - 获取属性语法：`prop("属性")`
   - 设置属性语法：`prop("属性","属性值")`
2. 设置或获取元素自定义属性值 attr()
   - 获取属性语法：`attr("属性")`
   - 设置属性语法：`attr("属性","属性值")`
   - 类似原生 getAttribute()/setAttribute()
3. 数据缓存 data()
   - data() 方法可以在指定的元素上存取数据，并不会修改 DOM 元素结构。一旦页面刷新，之前存放的数据都将被移除
   - 附加数据语法：`data("name","value")`
   - 获取数据语法：`data("name")` (可以通过 index 读取 HTML5 自定义属性 data-index ，得到的是数字型)
4. 普通元素内容 html() (相当于原生 innerHTML)
   - 获取元素的内容：`html()`
   - 设置元素的内容：`html("内容")`
5. 普通元素文本内容 text() (相当与原生 innerText)
   - 获取元素的文本内容：`text()`
   - 设置元素的文本内容：`text("文本内容")`
6. 表单的值 val() (相当于原生 value)
   - 获取表单的值：`val()`
   - 设置表单的值：`val("内容")`

### 六、元素、尺寸、位置操作

1. 遍历元素

   - jQuery 隐式迭代是对同一类元素做了同样的操作。 如果想要给同一类元素做不同操作，就需要用到遍历

   ```javascript
   $("div").each(function (index, domEle) {});
   // each() 方法遍历匹配的每一个元素。主要用 DOM 处理。
   // 回调函数的参数：index 是每个元素的索引号；demEle 是每个 DOM 元素对象，不是 jQuery 对象
   // 所以要想使用 jQuery 方法，需要给这个 dom 元素转换为 jQuery 对象 `$(domEle)`
   $.each(object, function (index, element) {});
   // $.each()方法可用于遍历任何对象。主要用于数据处理，比如数组，对象
   // 回调函数的参数：index 是每个元素的索引号；element 遍历内容
   ```

2. 创建元素
   - `$("标签")`
3. 添加元素

   ```javascript
   // 内部添加(父子关系)
   // 把内容放在匹配元素内部最后面,类似于原生 appendChild：
   element.append("内容");
   // 把内容放在匹配元素内部最前面：
   element.prepend("内容");
   // 外部添加(兄弟关系)
   // 把内容放在目标元素后面：
   element.after("内容");
   // 把内容放在目标元素前面：
   element.before("内容");
   ```

4. 删除元素

   ```javascript
   // 删除匹配的元素(**本身**)：
   element.remove();
   // 删除匹配的元素集合中所有的子节点：
   element.empty();
   // 清空匹配的元素内容：
   element.html(“ ”);
   // remove() 删除元素本身，empt() 和 html(“”) 作用等价，都可以删除元素里面的内容，只不过 html 还可以设置内容
   ```

5. 尺寸方法

   | 语法                                 | 用法                                                   |
   | :----------------------------------- | :----------------------------------------------------- |
   | `width()/height()`                   | 取得匹配元素宽度和高度值，只算 width/height            |
   | `innerEidth()/innerHeight()`         | 取得匹配元素宽度和高度值，包含 padding                 |
   | `outerWidth()/outerHeight()`         | 取得匹配元素宽度和高度值，包含 padding、border         |
   | `outerWidth(true)/outerHeight(true)` | 取得匹配元素宽度和高度值，包含 padding、border、margin |

6. 位置方法
   - `offset()`
     - 用于设置或返回被选元素相对于**文档**的偏移坐标，跟父级没有关系
     - 属性：`offset().top`用于获取距离文档顶部的距离；`offset().left`用于获取距离文档左侧的距离
     - 可以设置元素的偏移：`offset({top:10,left:30});`
   - `position()`
     - 用于返回被选元素相对于**带有定位的父级**偏移坐标，如果父级都没有定位，则以文档为准
     - 属性：`position().top`用于获取距离定位父级顶部的距离;`position().left` 用于获取距离定位父级左侧的距离
   - `scrollTop()/scrollLeft()`
     - 设置或返回被选元素被卷去的头部
     - 不跟参数是获取，参数为不带单位的数字则是设置被卷去的头部

### 七、jQuery 事件

1. 单个事件注册

   ```javascript
   // element.事件(function(){}); 其他事件和原生基本一致 eg.
   $(“div”).click(function(){事件处理程序});
   ```

2. 事件处理 on() 绑定事件

   ```javascript
   element.on(events, [selector], fn);
   // events:一个或多个用空格分隔的事件类型，如"click"或"keydown"
   // selector:元素的子元素选择器
   // fn:回调函数,即绑定在元素身上的侦听函数
   ```

   - 可以在匹配元素上绑定一个或多个事件
   - 可以实现事件委派(事件委派：把原来加给 selector 身上的事件绑定在 element 身上，即把事件委派给 element，通过 selector 的状态进行触发)
   - 可以给动态生成的元素绑定事件

3. 事件处理 off() 解绑事件

   ```javascript
   // 解绑p元素所有事件处理程序
   $("p").off();
   // 解绑p元素上面的点击事件 后面的 foo 是侦听函数名
   $("p").off("click");
   // 解绑事件委托
   $("ul").off("click", "li");
   ```

4. 自动触发事件 trigger()

   ```javascript
   element.click();
   // 此时自动触发事件，不需要鼠标点击
   element.trigger("type");
   // triggerHandler模式不会触发元素的默认行为，这是和前面两种的区别
   element.triggerHandler("type");
   ```

5. 事件对象

   ```javascript
   element.on(events, [selector], function (event) {});
   // 事件被触发，就会有事件对象的产生
   // 阻止默认行为(两种方式)：
   event.preventDefault();
   return false;
   // 阻止冒泡：
   event.stopPropagation();
   ```

### 八、其他方法

1. 对象拷贝

   ```javascript
   $.extend([deep], target, object1, [objectN]);
   // deep: 如果设为true为深拷贝，默认为false浅拷贝
   // target: 要拷贝的目标对象,原来的数据会被覆盖
   // object1~N:待拷贝的对象
   ```

2. 多库共存
3. 图片懒加载
   - 当页面滑动到可视区域，再显示图片
   - EasyLazyLoad.js
4. 全屏滚动
   - fullpage.js

---

## Part Ⅳ JS 高级

### 一、面向对象

1. 面向过程编程(POP,Process-oriented programming)：分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用就可以了
2. 面向对象编程(OOP,Object Oriented Programming)：把事务分解成为一个个对象，然后由对象之间分工与合作，**面向对象是以对象功能来划分问题，而不是过程**

### 二、类和对象

> 面向对象的思维特点
>
> > 抽取（抽象）对象共用的属性和行为组织(封装)成一个类(模板)  
> > 对类进行实例化, 获取类的对象

1. 对象：一组无序的相关属性和方法的集合
   - 属性：事物的特征，在对象中用属性来表示（常用名词）
   - 方法：事物的行为，在对象中用方法来表示（常用动词）
2. 类：**抽象了对象的公共部分**，它泛指某一大类（class）；对象特指某一个，通过类实例化一个具体的对象
3. 创建类

   ```javascript
   class name {
     // class body
   }
   // 类必须使用 new 实例化对象
   var obj = new name();
   ```

4. 类 constructor 构造函数

   - constructor() 方法是类的构造函数(默认方法)，用于**传递参数**,**返回实例对象**，通过 new 命令生成对象实例时，**自动调用**该方法。
   - 如果没有显示定义, 类内部会自动给我们创建一个 constructor()

   ```javascript
   class Person {
     constructor(name, age) {
       // constructor 构造方法或者构造函数
       this.name = name;
       this.age = age;
     }
   }
   // 创建实例
   var ldh = new Person("刘德华", 18);
   console.log(ldh.name);
   ```

5. 类添加方法

   ```javascript
   // 方法之间不能加逗号分隔，同时方法不需要添加 function 关键字
   class Person {
     constructor(name, age) {
       // constructor 构造器或者构造函数
       this.name = name;
       this.age = age;
     }
     say() {
       console.log(this.name + "你好");
     }
   }
   // 创建实例
   var ldh = new Person("刘德华", 18);
   ldh.say();
   ```

6. 继承

   ```javascript
   class Father {
     // 父类
   }
   class Son extends Father {
     // 子类继承父类
   }
   ```

7. `super` 关键字

   - 用于**访问和调用对象父类上的函数**。可以调用父类的构造函数，也可以调用父类的普通函数
   - 子类在构造函数中使用 super, 必须放到 this 前面 (必须**先调用父类的构造方法**,在使用子类构造方法)

   ```javascript
   class Person {
     // 父类
     constructor(surname) {
       this.surname = surname;
     }
   }
   class Student extends Person {
     // 子类继承父类
     constructor(surname, firstname) {
       super(surname); // 调用父类的constructor  (surname)
       this.firstname = firstname; // 定义子类独有的属性
     }
   }
   ```

8. PS
   - 在 ES6 中类没有变量提升，所以必须先定义类，才能通过类实例化对象
   - 类里面的共有属性和方法一定要加 this 使用
   - 类里面的 this 指向问题
   - constructor 里面的 this 指向实例对象, 方法里面的 this 指向这个方法的调用者

### 三、构造函数和原型

#### 3.1 构造函数

> 在典型的 OOP 的语言中（如 Java），都存在类的概念，类就是对象的模板，对象就是类的实例，但在 ES6 之前， JS 中并没用引入类的概念。在 ES6 之前 ，对象不是基于类创建的，而是用一种称为构建函数的特殊函数来定义对象和它们的特征

&emsp;构造函数是一种特殊的函数，主要用于创建某一类对象(初始化对象，即为对象成员变量赋初始值)，其首字母要大写。它总与 new 一起使用。可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

&emsp;new 在执行时会做四件事情：

1. 在内存中创建一个新的空对象
2. 让 this 指向这个新的对象
3. 执行构造函数里面的代码，给这个新对象添加属性和方法
4. 返回这个新对象(所以构造函数里面不需要 return)

&emsp;JavaScript 的构造函数中可以添加一些成员，可以在构造函数本身上添加，也可以在构造函数内部的 this 上添加。通过这两种方式添加的成员，就分别称为静态成员和实例成员。

- 静态成员：在构造函数本身上添加的成员称为静态成员，只能由构造函数本身来访问
- 实例成员：在构造函数内部创建的对象成员称为实例成员，只能由实例化的对象来访问

> 如果每个实例化的函数存放地址不同的话，就会造成内存泄漏问题

#### 3.2 原型

##### 3.2.1 原型对象 prototype

&emsp;JavaScript 规定，**每个函数**都有一个 `prototype` 属性，**指向一个对象**，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。对于构造函数来说，生成实例的时候，该属性会自动成为实例对象的原型。

##### 3.2.2 对象原型(原型指针) \_\_proto\_\_

&emsp;对象都会有一个属性 `__proto__` 指向**构造函数**的 `prototype` 原型对象，通过它对象可以使用(继承)构造函数 `prototype` 原型对象的属性和方法

&emsp;`__proto__`对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条路线(原型链)，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象 `prototype`

![__proto__](images\220606_JavaScript_img/Part4/figure3-1.png)  
&emsp;实例的`__proto__`等价于该实例的构造函数的`prototype`

##### 3.2.3 constructor 构造函数

&emsp;对象原型（ `__proto__`）和构造函数原型对象（`prototype`）里面都有一个 `constructor`属性，它指回构造函数本身。`constructor` 主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数。

![constructor](images\220606_JavaScript_img/Part4/figure3-2.png)

##### 3.2.4 原型链

![原型链](images\220606_JavaScript_img/Part4/figure3-3.png)

**概念**：  
&emsp;原型链作为实现继承的主要方法，其基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。  
&emsp;每个构造函数都有一个原型对象(`prototype`)，原型对象都包含一个指向构造函数的指针(`constructor`)，而实例都包含一个指向原型对象的内部指针(`__proto__`)。  
&emsp;那么，假如我们让原型对象等于另一个类型的实例，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构造了实例与原型的链条，这就是原型链的基本概念。

**意义**：  
&emsp;“原型链”的作用在于，当读取对象的某个属性时，JavaScript 引擎先寻找对象本身的属性，如果找不到，就到它的原型去找，如果还是找不到，就到原型的原型去找。以此类推，如果直到最顶层的 `Object.prototype` 还是找不到，则返回 `undefine`

**终点**：  
&emsp;由于 `Object` 是构造函数，原型链终点是`Object.prototype.__proto__`，而 `Object.prototype.__proto__=== null // true`，所以，原型链的终点是 `null`。原型链上的所有原型都是对象，所有的对象最终都是由 `Object` 构造的，而 `Object.prototype` 的下一级是 `Object.prototype.__proto__`。

##### 3.2.5 Analyse

&emsp;首先是一张历史悠久且经典的图  
![源远流长](images\220606_JavaScript_img/Part4/figure3-4.jpg)

&emsp;1+1=2 的部分结束，那么：

1. 原型指针

   ```javascript
   var a = new Array();
   a.__proto__ === Array.prototype; // true
   // 上面代码创建了一个Array的实例a，该实例的原型指向了Array.prototype。
   // Array.prototype本身也是一个对象，也有继承的原型:

   a.__proto__.__proto__ === Object.prototype; // true
   // 等同于 Array.prototype.__proto__ === Object.prototype
   // 这就说明了，Array本身也是继承自Object的，那么Object的原型指向

   a.__proto__.__proto__.__proto__ === null; // true
   // 等同于 Object.prototype.__proto__ === null
   ```

   ![analyse](images\220606_JavaScript_img/Part4/figure3-5.png)

2. 原型对象

   ```javascript
   var Foo = function () {};
   Foo.__proto__ === Function.prototype; // true
   // 函数作为JavaScript中的一等公民，它既是函数又是对象，函数的原型指向的是Function.prototype

   var a = new Foo();
   a.__proto__ === Foo.prototype; // true
   // 函数实例除了拥有__proto__属性之外，还拥有prototype属性。
   // 通过该函数构造的新的实例对象，其原型指针__proto__会指向该函数的prototype属性。

   Foo.prototype.__proto__ === Object.prototype; // true
   // 而函数的prototype属性，本身是一个由Object构造的实例对象。

   Foo.prototype.constructor === Foo; // true
   a.constructor === Foo; // true
   a.constructor === Foo.prototype.constructor; // true
   // prototype属性很特殊，它还有一个隐式的constructor，指向了构造函数本身。
   ```

   ![analyse](images\220606_JavaScript_img/Part4/figure3-6.png)

3. 更直观的图

   ![analyse](images\220606_JavaScript_img/Part4/figure3-7.png)

##### 3.2.7 补充

1. 函数?对象
   - **只有函数有`prototype`,对象是没有的**。
   - 但是函数也是有`__proto__`的，因为函数也是对象。函数的`__proto__`指向的是`Function.prototype`。
   - 也就是说普通函数是`Function`这个构造函数的一个实例。
2. instanceof

   - 运算符返回一个布尔值，表示一个对象是否由某个构造函数创建
   - 原理：判断实例对象的`__proto__`和生成该实例的构造函数的`prototype`是不是引用的同一个地址

   ![instanceof](images\220606_JavaScript_img/Part4/figure3-8.png)

#### 3.3 JavaScript 的成员查找机制(规则)

1. 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性
2. 如果没有就查找它的原型（也就是 `__proto__` 指向的 `prototype` 原型对象）
3. 如果还没有就查找原型对象的原型（`Object`的原型对象）
4. 依此类推一直找到 `Object` 为止（`null`）
5. `__proto__`对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线

#### 3.4 原型对象 this 指向

&emsp;原型对象里面放的是方法，这个方法里面的 this 指向的是这个方法的调用者，也就是这个实例对象

#### 3.5 继承

1. call()

   ```javascript
   // 调用这个函数, 并且修改函数运行时的 this 指向
   fun.call(thisArg, arg1, arg2, ...);
   // thisArg ：当前调用函数 this 的指向对象
   // arg1，arg2：传递的其他参数
   ```

2. 借用构造函数继承父类型属性

   ```javascript
   // 核心原理：通过 call() 把父类型的 this 指向子类型的 this ，这样就可以实现子类型继承父类型的属性
   // 父类
   function Person(name, age, sex) {
     this.name = name;
     this.age = age;
     this.sex = sex;
   }
   // 子类
   function Student(name, age, sex, score) {
     Person.call(this, name, age, sex); // 此时父类的 this 指向子类的 this，同时调用这个函数
     this.score = score;
   }
   var s1 = new Student("zs", 18, "男", 100);
   console.dir(s1);
   ```

3. 借用原型对象继承父类型方法

   - 一般情况下，对象的方法都在构造函数的原型对象中设置，通过构造函数无法继承父类方法
   - 核心原理：
     - 将子类所共享的方法提取出来，让`子类的 prototype 原型对象 = new 父类()`
     - 本质：子类原型对象等于是实例化父类，因为父类实例化之后另外开辟空间，就不会影响原来父类原型对象
     - 将子类的 `constructor` 从新指向子类的构造函数

4. 类的本质：叫做`class`的构造函数

#### 3.6 ES5 新增方法

1. 数组方法

   ```javascript
   array.forEach(function(currentValue, index, arr))
   // currentValue：数组当前项的值
   // index：数组当前项的索引
   // arr：数组对象本身

    array.filter(function(currentValue, index, arr))
   // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素,主要用于筛选数组
   // 注意它直接返回一个新数组

    array.some(function(currentValue, index, arr))
    // some() 方法用于检测数组中的元素是否满足指定条件。通俗点：查找数组中是否有满足条件的元素
    // 注意它返回值是布尔值, 如果查找到这个元素, 就返回true , 如果查找不到就返回false
    // 如果找到第一个满足条件的元素,则终止循环。不在继续查找

   ```

2. 字符串方法

   ```javascript
   str.trim();
   // trim()  方法会从一个字符串的两端删除空白字符
   // 并不影响原字符串本身，它返回的是一个新的字符串
   ```

3. 对象方法

   ```javascript
   Object.keys(obj);
   // Object.keys() 用于获取对象自身所有的属性
   // 效果类似 for…in
   // 返回一个由属性名组成的数组

   Object.defineProperty(obj, prop, descriptor);
   // Object.defineProperty() 定义对象中新属性或修改原有的属性
   // obj：必需。目标对象
   // prop：必需。需定义或修改的属性的名字
   // descriptor：必需。目标属性所拥有的特性

   Object.defineProperty(obj, prop, descriptor);
   // Object.defineProperty() 定义新属性或修改原有的属性。
   // 第三个参数 descriptor 说明： 以对象形式 { } 书写
   // value: 设置属性的值  默认为undefined
   // writable: 值是否可以重写。true | false  默认为false
   // enumerable: 目标属性是否可以被枚举。true | false 默认为 false
   // configurable: 目标属性是否可以被删除或是否可以再次修改特性 true|false  默认为false
   ```

### 四、函数进阶

#### 4.1 函数

&emsp;**函数的定义方式**：

1. 函数声明方式 function 关键字 (命名函数)
2. 函数表达式 (匿名函数)
3. new Function()

   ```javascript
   var fn = new Function('参数1','参数2'..., '函数体')
   // Function 里面参数都必须是字符串格式
   // 第三种方式执行效率低，也不方便书写，因此较少使用
   // 所有函数都是 Function 的实例(对象)
   // 函数也属于对象
   ```

   ![函数定义](images\220606_JavaScript_img/Part4/figure4-1.png)

&emsp;**函数的调用方式**：  
&emsp;普通函数、对象的方法、构造函数、绑定事件函数、定时器函数、立即执行函数

#### 4.2 this

##### 4.2.1 函数内 this 的指向

| 调用方式     | this 指向                                  |
| :----------- | :----------------------------------------- |
| 普通函数调用 | window                                     |
| 构造函数调用 | 实例对象(原型对象里边的方法也指向实例对象) |
| 对象方法调用 | 该方法所属对象                             |
| 事件绑定方法 | 绑定事件对象(调用者)                       |
| 定时器函数   | window                                     |
| 立即执行函数 | window                                     |

##### 4.2.2 改变函数内部 this 指向

1. call 方法

   ```javascript
    fun.call(thisArg, arg1, arg2, ...)
    // thisArg：在 fun 函数运行时指定的 this 值
    // arg1，arg2：传递的其他参数
    // 返回值就是函数的返回值，因为它就是调用函数
    // 会调用函数
   ```

2. apply 方法

   ```javascript
   fun.apply(thisArg, [argsArray]);
   // thisArg：在fun函数运行时指定的 this 值
   // argsArray：传递的值，必须包含在数组里面
   // 返回值就是函数的返回值，因为它就是调用函数
   // apply()会调用函数,主要跟数组有关系，比如使用 Math.max() 求数组的最大值
   ```

3. bind 方法

   ```javascript
    fun.bind(thisArg, arg1, arg2, ...)
    // thisArg：在 fun 函数运行时指定的 this 值
    // arg1，arg2：传递的其他参数
    // 返回由指定的 this 值和初始化参数改造的原函数拷贝
    // bind() 方法不会调用函数
   ```

4. 总结
   - 相同点:
     - 都可以改变函数内部的 this 指向
   - 区别点:
     - `call()` 和 `apply()` 会调用函数，并且改变函数内部 this 指向
     - `call()` 和 `apply()` 传递的参数不一样，`call()` 传递参数 `aru1, aru2..`形式, `apply()` 必须数组形式`[arg]`
     - `bind()` 不会调用函数，可以改变函数内部 this 指向.
   - 主要应用场景:
     - `call()` 经常做继承
     - `apply()` 经常跟数组有关系。比如借助于数学对象实现数组最大值最小值
     - `bind()` 不调用函数,但是还想改变 this 指向. 比如改变定时器内部的 this 指向.

#### 4.3 严格模式

&emsp;JavaScript 除了提供正常模式外，还提供了严格模式（strict mode）。ES5 的严格模式是采用具有限制性 JavaScript 变体的一种方式，即在严格的条件下运行 JS 代码。严格模式在 IE10 以上版本的浏览器中才会被支持，旧版本浏览器中会被忽略。  
&emsp;严格模式对正常的 JavaScript 语义做了一些更改：

1. 消除了 Javascript 语法的一些不合理、不严谨之处，减少了一些怪异行为。
2. 消除代码运行的一些不安全之处，保证代码运行的安全。
3. 提高编译器效率，增加运行速度。
4. 禁用了在 ECMAScript 的未来版本中可能会定义的一些语法，为未来新版本的 Javascript 做好铺垫。比如一些保留字如：class, enum, export, extends, import, super 不能做变量名

##### 4.3.1 开启严格模式

1. 为脚本开启严格模式

   ```html
   <!-- 为整个脚本文件开启严格模式，需要在所有语句之前放一个特定语句“use strict”;（或‘use strict’;）。 -->
   <script>
     "use strict";
     console.log("这是严格模式。");
   </script>

   <!-- 有的 script 基本是严格模式，有的 script 脚本是正常模式，这样不利于文件合并，所以可以将整个脚本文件放在一个立即执行的匿名函数之中。这样独立创建一个作用域而不影响其他 script 脚本文件。 -->
   <script>
     (function () {
       "use strict";
       var num = 10;
       function fn() {}
     })();
   </script>
   ```

2. 为函数开启严格模式

   ```javascript
   // 要给某个函数开启严格模式，需要把“use strict”;  (或 'use strict'; ) 声明放在函数体所有语句之前
   function fn() {
     "use strict";
     return "这是严格模式。";
   }
   // 将 "use strict" 放在函数体的第一行，则整个函数以 "严格模式" 运行。
   ```

##### 4.3.2 严格模式中的变化

1. 变量规定
   - 在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，变量都必须先用 var 命令声明，然后再使用
   - 严禁删除已经声明变量。例如，delete x; 语法是错误的。
2. 严格模式下 this 指向问题
   - 以前在全局作用域函数中的 this 指向 window 对象。
   - 严格模式下全局作用域中函数中的 this 是 undefined。
   - 以前构造函数时不加 new 也可以调用,当普通函数，this 指向全局对象
   - 严格模式下,如果构造函数不加 new 调用, this 指向的是 undefined 如果给他赋值则会报错
   - new 实例化的构造函数指向创建的对象实例。
   - 定时器 this 还是指向 window 。
   - 事件、对象还是指向调用者。
3. 函数变化
   - 函数不能有重名的参数。
   - 函数必须声明在顶层.新版本的 JavaScript 会引入“块级作用域”（ ES6 中已引入）。为了与新版本接轨，不允许在非函数的代码块内声明函数。

#### 4.4 高阶函数

#### 4.5 闭包

##### 4.5.1 变量作用域

&emsp;变量根据作用域的不同分为两种：全局变量和局部变量。

1. 函数内部可以使用全局变量。
2. 函数外部不可以使用局部变量。
3. 当函数执行完毕，本作用域内的局部变量会销毁。

##### 4.5.2 闭包

&emsp;**闭包（closure）指有权访问另一个函数作用域中变量的函数。** ----- JavaScript 高级程序设计

&emsp;闭包作用：延伸变量的作用范围

#### 4.6 递归

&emsp;如果一个函数在内部可以调用其本身，那么这个函数就是递归函数。  
&emsp;简单理解:函数内部自己调用自己, 这个函数就是递归函数  
&emsp;由于递归很容易发生“栈溢出”错误（stack overflow），所以**必须要加退出条件 return**。

### 五、正则表达式

> 正则表达式(Regular Expression)是用于匹配字符串中字符组合的模式。在 JavaScript 中，正则表达式也是对象。  
> 正则表通常被用来检索、替换那些符合某个模式（规则）的文本，例如验证表单：用户名表单只能输入英文字母、数字或者下划线，昵称输入框中可以输入中文(匹配)。此外，正则表达式还常用于过滤掉页面内容中的一些敏感词(替换)，或从字符串中获取我们想要的特定部分(提取)等

#### 5.1 JS 中使用正则表达式

1. 创建正则表达式

   ```javascript
   // 1. 通过调用 RegExp 对象的构造函数创建
   var 变量名 = new RegExp(/表达式/);
   // 2. 通过字面量创建
   var 变量名 = /表达式/;
   ```

2. 测试正则表达式

   ```javascript
   // test()用于检测字符串是否符合该规则，该对象会返回 true 或 false，其参数是测试字符串。
   regexObj.test(str);
   // regexObj 是写的正则表达式
   // str 我们要测试的文本
   ```

#### 5.2 正则表达式的组成

&emsp;一个正则表达式可以由简单的字符构成，比如`/abc/`，也可以是简单和特殊字符的组合，比如`/ab*c/`。其中特殊字符也被称为**元字符**，在正则表达式中是具有特殊意义的专用符号，如 ^ 、$ 、+ 等。

1. 边界符(位置符，提示字符所处的位置)

   | 符号 | 说明                         | eg.                                   |
   | :--- | :--------------------------- | :------------------------------------ |
   |      |                              | `/abc/` 只要包含 abc 这个字符串均满足 |
   | `^`  | 表示匹配行首的文本(以谁开始) | `/^abc/` 以 abc 开头的                |
   | `$`  | 表示匹配行尾的文本(以谁结束) | `/^abc$/` 必须是 abc                  |

2. 字符类

   ```javascript
   // 1.[]方括号，后面的字符串只要包含 abc 中任意一个字符，都返回 true
   /[abc]/.test("andy"); // true
   // 三选一，只有a b c中的一个才返回true
   /^[abc]$/;

   // 2.[-]方括号内部范围符-,表示范围内的
   /^[a-z]$/.test("c"); // true,任意一个字母才返回true

   // 3.[^]方括号内部取反符^,表示取反，只要包含方括号内的字符，都返回 false,即不包含
   // 注意和边界符 ^ 区别，边界符写到方括号外面
   /[^abc]/.test("andy"); // false

   // 4.字符组合,这里表示包含a到z的26个英文字母和1到9的数字都可以
   /[a-z1-9]/.test("andy"); // true
   ```

3. 量词符(设定某个模式出现的次数)

   | 量词    | 说明                   |
   | :------ | :--------------------- |
   | `*`     | 重复零次或更多次(≥0)   |
   | `+`     | 重复一次或更多次(≥1)   |
   | `?`     | 重复零次或一次(0\|\|1) |
   | `{n}`   | 重复 n 次              |
   | `{n,}`  | 重复 n 次或更多次(≥n)  |
   | `{n,m}` | 重复 n 到 m 次(≥n,≤m)  |

4. 括号总结

   - 大括号 量词符。里面表示重复次数
   - 中括号 字符集合。匹配方括号中的任意字符
   - 小括号 表示优先级

5. 预定义类(某些常见模式的简写方式)

   | 预定类 | 说明                                                       |
   | :----- | :--------------------------------------------------------- |
   | `\d`   | 匹配 0-9 之间的任一字符，相当于[0-9]                       |
   | `\D`   | 所有 0-9 以外的字符，相当于[^0-9]                          |
   | `\w`   | 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9]            |
   | `\W`   | 除所有字母、数字和下划线，相当于[^a-za-z0-9]               |
   | `\s`   | 匹配空格(包括换行符、制表符、空格符等)，相当于[\t\r\n\v\f] |
   | `\S`   | 匹配非空格的字符，相当于[^\t\r\n\v\f]                      |

#### 5.3 正则表达式中的替换

1. replace 替换

   ```javascript
   // replace() 方法可以实现替换字符串操作，用来替换的参数可以是一个字符串或是一个正则表达式。
   stringObject.replace(regexp / substr, replacement);
   // 第一个参数: 被替换的字符串 或者  正则表达式
   // 第二个参数: 替换为的字符串
   // 返回值是一个替换完毕的新字符串
   ```

2. 正则表达式参数

   ```javascript
   /表达式/[switch];
   // g：全局匹配
   // i：忽略大小写
   // gi：全局匹配 + 忽略大小写
   ```

### 六、ES6

#### 6.1 let、const、var 的区别

1. **块级作用域**： 块作用域由 { }包括，let 和 const 具有块级作用域，var 不存在块级作用域。块级作用域解决了 ES5 中的两个问题：
   - 内层变量可能覆盖外层变量
   - 用来计数的循环变量泄露为全局变量
2. **变量提升**： var 存在变量提升，let 和 const 不存在变量提升，即在变量只能在声明之后使用，否在会报错。
3. **给全局添加属性**： 浏览器的全局对象是 window，Node 的全局对象是 global。var 声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是 let 和 const 不会。
4. **重复声明**： var 声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。const 和 let 不允许重复声明变量。
5. **暂时性死区**： 在使用 let、const 命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区。使用 var 声明的变量不存在暂时性死区。
6. **初始值设置**： 在变量声明时，var 和 let 可以不用设置初始值。而 const 声明变量必须设置初始值。
7. **指针指向**： let 和 const 都是 ES6 新增的用于创建变量的语法。 let 创建的变量是可以更改指针指向（可以重新赋值）。但 const 声明的变量是不允许改变指针的指向。

| 区别               | var&emsp; | let&emsp; | const&emsp; |
| :----------------- | :-------- | :-------- | :---------- |
| 是否有块级作用域   | ❌        | ✔️        | ✔️          |
| 是否存在变量提升   | ✔️        | ❌        | ❌          |
| 是否添加全局属性   | ✔️        | ❌        | ❌          |
| 能否重复声明变量   | ✔️        | ❌        | ❌          |
| 是否存在暂时性死区 | ❌        | ✔️        | ✔️          |
| 是否必须设置初始值 | ❌        | ❌        | ✔️          |
| 能否改变指针指向   | ✔️        | ✔️        | ❌          |

#### 6.2 解构赋值

> 解构赋值语法是一种 Javascript 表达式。通过解构赋值，可以将属性/值从对象/数组中取出，赋值给其他变量。 ——MDN

1. 数组结构

   ```javascript
   let a, b, rest;
   [, , a, , b, ...rest] = [10, 20, 30, 40, 50, 60, 70];
   console.log(a); // output: 30
   console.log(b); // output: 50
   console.log(rest); // output: Array [60,70]
   ```

2. 对象解构

   ```javascript
   var robotA = { name: "Bender" };
   var robotB = { name: "Flexo" };
   var { name: nameA } = robotA;
   var { name: nameB } = robotB;
   console.log(nameA); // "Bender"
   console.log(nameB); // "Flexo"

   var { foo, bar } = { foo: "lorem", bar: "ipsum" };
   console.log(foo); // "lorem"
   console.log(bar); // "ipsum"
   ```

#### 6.3 箭头函数

> 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的 this，arguments，super 或 new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。 ——MDN

```javascript
() => {};
const fn = () => {};

// 函数体中只有一句代码，且代码的执行结果就是返回值，可以省略大括号
function sum(num1, num2) {
  return num1 + num2;
}
const sum = (num1, num2) => num1 + num2;

// 如果形参只有一个，可以省略小括号
function fn(v) {
  return v;
}
const fn = (v) => v;
```

1. 箭头函数比普通函数更加简洁
   - 如果没有参数，就直接写一个空括号即可
   - 如果只有一个参数，可以省去参数的括号
   - 如果有多个参数，用逗号分割
   - 如果函数体的返回值只有一句，可以省略大括号
   - 如果函数体不需要返回值，且只有一句话，可以给这个语句前面加一个 void 关键字。最常见的就是调用一个函数。
2. 箭头函数没有自己的 this
   - 它所谓的 this 是捕获**其所在上下⽂的 this 值**，作为⾃⼰的 this 值，并且由于没有属于⾃⼰的 this，所以是不会被 new 调⽤的，这个所谓的 this 也不会被改变。
3. 箭头函数继承来的 this 指向永远不会改变
4. call()、apply()、bind()等方法不能改变箭头函数中 this 的指向
5. 箭头函数不能作为构造函数使用
6. 箭头函数没有自己的 arguments
7. 箭头函数没有 prototype
8. 箭头函数不能用作 Generator 函数，不能使用 yeild 关键字

#### 6.4 内置对象扩展

1. 扩展运算符

   ```javascript
   // 扩展运算符可以将数组或者对象转为用逗号分隔的参数序列。
   let ary = [1, 2, 3];
   // ...ary => 1, 2, 3
   console.log(...ary); // 1 2 3
   console.log(1, 2, 3);

   // 用于合并数组
   // 方法一
   let ary1 = [1, 2, 3];
   let ary2 = [3, 4, 5];
   let ary3 = [...ary1, ...ary2];
   // 方法二
   ary1.push(...ary2);
   ```

2. Array 的扩展方法

   - 构造函数方法：Array.from()

     ```javascript
     // 将类数组或可遍历对象转换为真正的数组;
     let arrayLike = {
       0: "a",
       1: "b",
       2: "c",
       length: 3,
     };
     let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

     // 方法还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
     let newAry = Array.from(aryLike, (item) => item * 2);
     ```

   - 实例方法：find()

     ```javascript
     // 用于找出第一个符合条件的数组成员，如果没有找到返回undefined
     let ary = [{
         id:1,
         name: '张三‘
     },{
         id:2,
         name: '李四‘
     }];
     let target = ary.find((item,index) => item.id == 2);
     ```

   - 实例方法：findIndex()

     ```javascript
     // 用于找出第一个符合条件的数组成员的位置，如果没有找到返回-1
     let ary = [1, 5, 10, 15];
     let index = ary.findIndex((value, index) => value > 9);
     console.log(index); // 2
     ```

   - 实例方法：includes()

     ```javascript
     // 表示某个数组是否包含给定的值，返回布尔值。
     [1, 2, 3].includes(2); // true
     [1, 2, 3].includes(4); // false
     ```

3. String 的扩展方法

   - 模板字符串
   - 实例方法：startsWith() 和 endsWith()

     ```javascript
     // startsWith()：表示参数字符串是否在原字符串的头部，返回布尔值
     // endsWith()：表示参数字符串是否在原字符串的尾部，返回布尔值
     let str = "Hello world!";
     str.startsWith("Hello"); // true
     str.endsWith("!"); // true
     ```

   - 实例方法：repeat()

     ```javascript
     // repeat方法表示将原字符串重复n次，返回一个新字符串。
     "x".repeat(3); // "xxx"
     "hello".repeat(2); // "hellohello"
     ```

4. Set 数据结构

   - 类似于数组，但是成员的值都是唯一的，没有重复的值

   ```javascript
   // Set本身是一个构造函数，用来生成  Set  数据结构。
   const s = new Set();

   // Set函数可以接受一个数组作为参数，用来初始化。
   const set = new Set([1, 2, 3, 4, 4]);

   // add(value)：添加某个值，返回 Set 结构本身
   // delete(value)：删除某个值，返回一个布尔值，表示删除是否成功
   // has(value)：返回一个布尔值，表示该值是否为 Set 的成员
   // clear()：清除所有成员，没有返回值
   const s = new Set();
   s.add(1).add(2).add(3); // 向 set 结构中添加值
   s.delete(2); // 删除 set 结构中的2值
   s.has(1); // 表示 set 结构中是否有1这个值 返回布尔值
   s.clear(); // 清除 set 结构中的所有值

   // 遍历,forEach方法，用于对每个成员执行某种操作，没有返回值。
   s.forEach((value) => console.log(value));
   ```

---

## Part Ⅴ 附录
