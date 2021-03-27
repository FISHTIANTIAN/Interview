## promise 

> promise是用来解决两个问题的：

- 回调地狱，代码难以维护， 常常第一个的函数的输出是第二个函数的输入这种现象
- promise可以支持多个并发的请求，获取并发请求中的数据
- 这个promise可以解决异步的问题，本身不能说promise是异步的

> Promise是一个构造函数，自己身上有all、reject、resolve这几个眼熟的方法，原型上有then、catch等同样很眼熟的方法

- then 链式操作的用法  

本质是状态的传递

- reject的用法

把Promise的状态置为rejected，这样我们在then中就能捕捉到，然后执行“失败”情况的回调

- catch的用法

我们知道Promise对象除了then方法，还有一个catch方法，它是做什么用的呢？其实它和then的第二个参数一样，用来指定reject的回调。

- all的用法

谁跑的慢，以谁为准执行回调。all接收一个数组参数，里面的值最终都算返回Promise对象

- race的用法

比如我们可以用race给某个异步请求设置超时时间，并且在超时后执行相应的操作

## async / await

是es7出来的一个语法糖，被称为promies的完美代替方案

浏览器适配程度高，切代码清晰