### 官方定义

> 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

解读： Vue 在更新 DOM 时是异步执行的。NextTick的作用是，当数据发生变化，Vue将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新

### Event Loop事件循环

我们都知道JavaScript是单线程的，它是基于Event Loop事件循环来执行的，Event Loop在执行的时候遵循一定的规则：所有同步任务都在主线程中执行，形成一个执行栈，所有异步任务，都会被暂时放入一个任务队列中，当所有同步任务执行完毕时，会读取这个任务队列让其进入执行栈，开始执行。以上介绍属于一次执行机制，主线程不断重复这个过程就形成了Event Loop事件循环。

![img](https://wangtunan.github.io/blog/assets/img/6.c4905935.png)

#### 参考文章

[Event Loop事件循环](https://zhuanlan.zhihu.com/p/33058983)

### nextTick原理

    先去 嗅探环境
    判断是否支持 Promise的then -> MutationObserver的回调函数 -> setImmediate -> setTimeout（如果不支持就异步降级，换下一个方法） ，找到支持的就使用它，以此来确定回调函数队列是以哪个 方法 来异步执行
    在 nextTick 函数接受到一个 callback 函数的时候，把当前的回调函数放入callbacks等待执行
    然后将将执行函数放到微任务或者宏任务中
    事件循环到了微任务或者宏任务，执行函数依次执行callbacks中的回调
