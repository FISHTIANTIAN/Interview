## 显示绑定

call、apply、bind 可以显示的修改函数的 this 指向

## 隐士绑定

- 全局上下文

this 指向 window,严格模式下为 undefined

- 直接调用函数

this 指向 window,严格模式下为 undefined

- 作为对象的方法调用

obj.foo()。 this 指向对象 obj

- DOM 事件的绑定

onclick和addEventerListener中 this 默认指向绑定事件的元素。

- new 构造函数绑定

构造函数中的 this 指向实例对象

- 箭头函数

箭头函数没有 this, 因此也不能绑定。

在箭头函数里的 this 会指向 外层的非箭头函数的 this。
