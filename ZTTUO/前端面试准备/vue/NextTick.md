### 官方定义

> 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

解读： Vue 在更新 DOM 时是异步执行的。NextTick的作用是，当数据发生变化，Vue将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新

### nextTick原理

    先去 嗅探环境
    判断Promise的then -> MutationObserver的回调函数 -> setImmediate -> setTimeout 是否存在，找到存在的就使用它，以此来确定回调函数队列是以哪个 api 来异步执行
    在 nextTick 函数接受到一个 callback 函数的时候，把当前的回调函数放入callbacks等待执行
    然后将将执行函数放到微任务或者宏任务中
    事件循环到了微任务或者宏任务，执行函数依次执行callbacks中的回调
