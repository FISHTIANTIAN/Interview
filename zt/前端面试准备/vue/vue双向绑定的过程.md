### 双向绑定的过程

![img](https://static.vue-js.com/e5369850-3ac9-11eb-85f6-6fac77c0c9b3.png)

1、new Vue()首先执行初始化，对data执行响应化处理，这个过程发生Observe中

2、同时对模板执行编译，找到其中动态绑定的数据，从data中获取并初始化视图，这个过程发生在Compile中

3、同时定义⼀个更新函数和Watcher，将来对应数据变化时Watcher会调用更新函数

4、由于data的某个key在⼀个视图中可能出现多次，所以每个key都需要⼀个管家Dep来管理多个Watcher

5、将来data中数据⼀旦发生变化，会首先找到对应的Dep，通知所有Watcher执行更新函数