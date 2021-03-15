[优质文章](https://www.cnblogs.com/WindrunnerMax/p/14429426.html)

### 结论

Vue在更新DOM时是异步执行的，只要侦听到数据变化，Vue将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更，如果同一个watcher被多次触发，只会被推入到队列中一次，这种在缓冲时去除重复数据对于避免不必要的计算和DOM操作是非常重要的，然后，在下一个的事件循环tick中，Vue刷新队列并执行实际(已去重的)工作，Vue在内部对异步队列尝试使用原生的Promise.then、MutationObserver和setImmediate，如果执行环境不支持，则会采用setTimeout(fn, 0)代替。
