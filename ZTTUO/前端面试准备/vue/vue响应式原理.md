![Mou icon1](https://pic3.zhimg.com/80/v2-ee84f443fd3565fbf987974a7da5e2ee_720w.jpg)

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