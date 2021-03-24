#### script 引入方式：

- html 静态 script标签 引入

- js 动态插入 script标签

- script defer 标签: 延迟加载，元素解析完成后执行

- script asyn 标签: 异步加载，但执行时会阻塞元素渲染

#### 对象的拷贝

- 浅拷贝: 以赋值的形式拷贝引用对象，仍指向同一个地址，修改时原对象也会受到影响

    - Object.assign
    
    - 展开运算符(...)

- 深拷贝: 完全拷贝一个新对象，修改时原对象不再受到任何影响

    - JSON.parse(JSON.stringify(obj)): 性能最快

    - 具有循环引用的对象时，报错

    - 当值为函数、undefined、或symbol时，无法拷贝
