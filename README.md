## 主要用与记录前端复习知识点

## github git clone 慢解决方案
git clone https://github.com.cnpmjs.org/项目地址

## github - 403问题
git config --global --unset http.proxy
git config --global --unset https.proxy

## HTML基础

[集中收集零碎知识点](./ZTTUO/前端面试准备/html/集中收集零碎知识点.md)

> 主流浏览器及其内核整理

[详情](./ZTTUO/前端面试准备/html/主流浏览器及其内核整理.md)

> div+css的布局较table布局有什么优点？

[详情](./ZTTUO/前端面试准备/html/div+css的布局较table布局有什么优点.md)

> 渐进增强和优雅降级的区别

[详情](./ZTTUO/前端面试准备/html/渐进增强和优雅降级的区别.md)

> 浏览器存储Cookie、sessionStorage、localStorage、IndexedDB

[详情](./ZTTUO/前端面试准备/html/浏览器存储.md)

> HTTP状态码

[详情](./ZTTUO/前端面试准备/html/HTTP状态码.md)

## CSS基础

[集中收集零碎知识点](./ZTTUO/前端面试准备/css/集中收集零碎知识点.md)

> 1.div居中

[详情](./ZTTUO/前端面试准备/css/div居中.md)

> 2.flex布局

[详情](./ZTTUO/前端面试准备/css/flex布局.md)

> 3.grid布局

[详情](./ZTTUO/前端面试准备/css/grid布局.md)

> 4.BFC

[详情](./ZTTUO/前端面试准备/css/BFC.md)

5.高性能的css动画

[详情](./ZTTUO/前端面试准备/css/高性能的css动画.md)

## JavaScript基础

#### 变量和类型

> 1.JavaScript规定了几种语言类型

[详情](./ZTTUO/前端面试准备/js/JavaScript规定了几种语言类型.md)

> 2.JavaScript对象的底层数据结构是什么

> 3.Symbol类型在实际开发中的应用、可手动实现一个简单的Symbol

[详情](./ZTTUO/前端面试准备/js/Symbol类型学习.md)

> 4.JavaScript中的变量在内存中的具体存储形式


> 5.基本类型对应的内置对象，以及他们之间的装箱拆箱操作


> 6.理解值类型和引用类型

[详情](./ZTTUO/前端面试准备/js/理解值类型和引用类型.md)

> 7.null和undefined的区别

[详情](./ZTTUO/前端面试准备/js/null和undefined的区别.md)

> 8.至少可以说出三种判断JavaScript数据类型的方式，以及他们的优缺点，如何准确的判断数组类型

[详情](./ZTTUO/前端面试准备/js/判断JavaScript数据类型的方式.md)

> 9.可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用

[详情](./ZTTUO/前端面试准备/js/隐式类型转换.md)

> 10.出现小数精度丢失的原因，JavaScript可以存储的最大数字、最大安全数字，JavaScript处理大数字的方法、避免精度丢失的方法

[详情](./ZTTUO/前端面试准备/js/出现小数精度丢失的原因和解决方案.md)

#### 原型和原型链

> 1.理解原型设计模式以及JavaScript中的原型规则

[详情](./ZTTUO/前端面试准备/js/理解原型设计模式以及JavaScript中的原型规则.md)

> 2.instanceof的底层实现原理，手动实现一个instanceof


> 4.实现继承的几种方式以及他们的优缺点

[详情](./ZTTUO/前端面试准备/js/实现继承的几种方式以及他们的优缺点.md)

> 5.至少说出一种开源项目(如Node)中应用原型继承的案例


> 6.可以描述new一个对象的详细过程，手动实现一个new操作符

[详情](./ZTTUO/前端面试准备/js/new操作符.md)

> 7.理解es6 class构造以及继承的底层实现原理

#### 作用域和闭包

> 1.理解词法作用域和动态作用域

[详情](./ZTTUO/前端面试准备/js/理解词法作用域和动态作用域.md)

> 2.理解JavaScript的作用域和作用域链

[详情](./ZTTUO/前端面试准备/js/理解JavaScript的作用域和作用域链.md)

> 3.理解JavaScript的执行上下文栈，可以应用堆栈信息快速定位问题

[详情](./ZTTUO/前端面试准备/js/执行上下文.md)

[附录](./ZTTUO/前端面试准备/js/执行上下文.xmind)

> 4.this的原理以及几种不同使用场景的取值

[详情](./ZTTUO/前端面试准备/js/this的原理以及几种不同使用场景的取值.md)

> 5.闭包的实现原理和作用，可以列举几个开发中闭包的实际应用

[详情](./ZTTUO/前端面试准备/js/闭包.md)

> 6.理解堆栈溢出和内存泄漏的原理，如何防止

[详情](./ZTTUO/前端面试准备/js/理解堆栈溢出和内存泄漏的原理，如何防止.md)

[详情](./ZTTUO/前端面试准备/js/堆栈队列.md)

> 7.如何处理循环的异步操作

[详情](./ZTTUO/前端面试准备/js/如何处理循环的异步操作.md)

> 8.理解模块化解决的实际问题，可列举几个模块化方案并理解其中原理

#### 执行机制

> 1.为何try里面放return，finally还会执行，理解其内部机制


> 2.JavaScript如何实现异步编程，可以详细描述EventLoop机制

[详情](./ZTTUO/前端面试准备/js/JavaScript如何实现异步编程，EventLoop机制.md)

> 3.宏任务和微任务分别有哪些

[详情](./ZTTUO/前端面试准备/js/宏任务和微任务分别有哪些.md)

> 4.可以快速分析一个复杂的异步嵌套逻辑，并掌握分析方法


> 5.使用Promise实现串行


> 6.Node与浏览器EventLoop的差异


> 7.如何在保证页面运行流畅的情况下处理海量数据

[详情](./ZTTUO/前端面试准备/js/如何在保证页面运行流畅的情况下处理海量数据.md)

## vue

> 1.集中收集零碎知识

[详情](./ZTTUO/前端面试准备/vue/集中收集零碎知识.md)

> 2.NextTick

[详情](./ZTTUO/前端面试准备/vue/NextTick.md)

> 3.vue为何采用异步渲染

[详情](./ZTTUO/前端面试准备/vue/vue为何采用异步渲染.md)

> 4.vue双向绑定的过程

[详情](./ZTTUO/前端面试准备/vue/vue双向绑定的过程.md)

> 5.vue响应式原理

[详情](./ZTTUO/前端面试准备/vue/vue响应式原理.md)

> 6.vue实例化的过程

[详情](./ZTTUO/前端面试准备/vue/vue实例化的过程.md)

> 7.vue的计算属性是怎么做到缓存的

[详情](./ZTTUO/前端面试准备/vue/vue的计算属性是怎么做到缓存的.md)

> 8.vue自定义组件

[详情](./ZTTUO/前端面试准备/vue/vue自定义组件.md)

> 9.发布订阅模式vs观察者模式

[详情](./ZTTUO/前端面试准备/vue/发布订阅模式vs观察者模式.md)

> 10.生命周期

[详情](./ZTTUO/前端面试准备/vue/生命周期.md)

> 11.生命周期V2.0版本

[详情](./ZTTUO/前端面试准备/vue/生命周期V2.0版本.md)

> 12.说说你对SPA（单页面应用的理解）

[详情](./ZTTUO/前端面试准备/vue/说说你对SPA（单页面应用的理解）.md)

> 13.说说你对vue的理解

[详情](./ZTTUO/前端面试准备/vue/说说你对vue的理解.md)
