#### 暂时性死区

- 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

```javascript
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

- 上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。
  
  ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
  
  总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

- “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。

```javascript
typeof x; // ReferenceError
let x;
```

```javascript
// 不报错
var x = x;

// 报错
let x = x;
// ReferenceError: x is not defined
```

- 上面代码报错，也是因为暂时性死区。使用let声明变量时，只要变量在还没有声明完成前使用，就会报错。上面这行就属于这个情况，在变量x的声明语句还没有执行完成前，就去取x的值，导致报错”x 未定义“。

## 重点知识

> JS引擎对赋值表达式的处理过程

> 赋值运算的右结合性

[参考链接](https://segmentfault.com/a/1190000004224719)
