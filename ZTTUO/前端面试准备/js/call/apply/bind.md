## call

> Function.call(obj,[param1[,param2[,…[,paramN]]]])

- 调用 call 的对象，必须是个函数 Function。
- call 的第一个参数，是一个对象。 Function 的调用者，将会指向这个对象。如果不传，则默认为全局对象 window。
- 第二个参数开始，可以接收任意个参数。每个参数会映射到相应位置的 Function 的参数上。但是如果将所有的参数作为数组传入，它们会作为一个整体映射到 Function 对应的第一个参数上，之后参数都为空。
  - 解释：
  
    function func (a,b,c) {}

    func.call(obj, 1,2,3)
    // func 接收到的参数实际上是 1,2,3

    func.call(obj, [1,2,3])
    // func 接收到的参数实际上是 [1,2,3],undefined,undefined

## apply

> Function.apply(obj[...Array])

- 它的调用者必须是函数 Function，并且只接收两个参数，第一个参数的规则与 call 一致。
- 第二个参数，必须是数组或者类数组，它们会被转换成类数组，传入 Function 中，并且会被映射到 Function 对应的参数上。

## bind

> Function.bind(thisArg, [arg1[, arg2[, ...]]])

- bind 方法的返回值是函数，并且需要稍后调用，才会执行
- 第一个参数是bind的对象
- 第二个参数及以后的参数作为原函数（thisArg）的参数来调用原函数。

### apply & call & bind

- 两者都是立即执行的
- apply和call都是为了改变某个函数运行时的上下文而存在的
- 如果你要传递的参数不多，则可以使用fn.call(thisObj, arg1, arg2 ...)
- 如果你要传递的参数很多，则可以用数组将参数整理好调用fn.apply(thisObj, [arg1, arg2 ...])
- 如果你想生成一个新的函数长期绑定某个函数给某个对象使用，则可以使用bind