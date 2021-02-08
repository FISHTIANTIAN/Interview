通过以下方式可以实现异步编程

- setTimeout、setInterval
- callback事件回调、事件监听(事件发布/订阅)
- ES6 Promise和Generator
- ES7 async/await

在 JavaScript 中，任务分为宏任务(macrotask)和微任务(microtask)，这两个任务分别维护一个队列，均采用先进先出的策略进行执行。同步执行的任务都在宏任务上执行。

- 1、从宏任务的头部取出一个任务执行；
- 2、执行过程中若遇到微任务则将其添加到微任务的队列中；
- 3、宏任务执行完毕后，微任务的队列中是否存在任务，若存在，则挨个儿出去执行，直到执行完毕；
- 4、GUI 渲染；
- 5、回到步骤 1，直到宏任务执行完毕；

这就是一个EventLoop