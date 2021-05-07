![Mou icon1](https://pic3.zhimg.com/80/v2-ee84f443fd3565fbf987974a7da5e2ee_720w.jpg)

![Mou icon2](https://user-gold-cdn.xitu.io/2020/4/7/17154a3e1a5b211a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

参考连接1：[vue响应式原理1](https://www.cnblogs.com/gerry2019/p/12168481.html)

参考连接2：[vue实例化过程2](https://zhuanlan.zhihu.com/p/61915640)

参考连接3：[vue实例化过程3](https://juejin.cn/post/6844903479044112391)

## 总结

### 数据劫持 + 发布订阅

    1、获取到合并后的data
    2、对data进行判断，判断是否有重名，是否存在特殊字符比如_或$，将data代理到vm实例上
    3、进入observe初始化中，劫持数据，将数据进行清洗，并设置Watcher，
        3.1、通过判断数据是否存在__ob__来给数据添加__ob__属性（目的是为了判断是否为响应式数据）
        3.2、判断数据是否为数组，如果是则重写数组方法将其转换为一个对象
        3。3、通过Object.keys(data).forEach方法循环调用设置响应式数据的方法并传参
    4、初始化一个dep，用于收集依赖
    5、监听子对象，不断递归调用observe直到子叶节点
    6、将数据通过Object.defineProperty方法设置set和get
        6.1、get方法通过判断当前数据是否设置了Watcher,来给dep中收集依赖
        6.2、set方法接收新的数据，并通知dep进行发布跟新
    7、dep通知内部所有watcher进行更新试图

### 模板编译

    1、获取template模板文件
    2、编译界面，并为指令和模板添加观察者
    4、通过调用render方法生成vnode
    5、通过对调用__patch__生成真实dom，并进行替换

### 精简1

    由于 Vue 执行一个组件的 render 函数是由 Watcher 去代理执行的，
    Watcher 在执行前会把 Watcher 自身先赋值给 Dep.target 这个全局变量，
    等待响应式属性去收集它这样在哪个组件执行 render 函数时访问了响应式属性，
    响应式属性就会精确的收集到当前全局存在的 Dep.target 作为自身的依赖
    在响应式属性发生更新时通知 Watcher 去重新
    调用 vm._update(vm._render()) 进行组件的视图更新

### 精简2

    首先从初始化data数据开始，使用Observer监听数据，个体每个数据属性添加Dep，并且在Data，有两个getter，setter。
    在它的getter过程添加收集依赖操作，在setter过程添加通知依赖的操作。
    在解析指令或者给vue实例设置watch选项或者调用$watch时，生成对应的watcher并收集依赖。
    Data通过Observer转换成了getter/setter的形式，来对数据追踪变化。
    修改对象的值的时候，会触发对应的setter，setter通知之前依赖收集得到的 Dep 中的每一个Watcher，告诉它们值改变了，需要重新渲染视图。

