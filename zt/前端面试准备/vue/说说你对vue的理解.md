vue的理解

      首先是一个用于构建用户界面的开源渐进式框架，也是一个创建单页应用的Web应用框架。
      
      从公司角度出发，vue学习成本低，上手容易，并且可以开发大型项目，在公司成本优先的角度，无疑是喜爱的。
      
      从开发者角度出发，Vue所关注的核心是MVC模式中的视图层，通过MVVM的核心特性
      通过数据驱动视图渲染，同时采用了双向数据流。都和jq开发形成了差异化，开发速度更快
      另外，Vue还有指令系统，这个的出现对比jq更加的方便。

      Vue.js 实现了一套声明式渲染引擎，并在runtime或者预编译时将声明式的模板编译成渲染函数，
      挂载在观察者 Watcher 中，在渲染函数中（touch），
      响应式系统使用响应式数据的getter方法对观察者进行依赖收集（Collect as Dependency），
      使用响应式数据的setter方法通知（notify）所有观察者进行更新，
      此时观察者 Watcher 会触发组件的渲染函数（Trigger re-render），
      组件执行的 render 函数，生成一个新的 Virtual DOM Tree，
      此时 Vue 会对新老 Virtual DOM Tree 进行 Diff，
      查找出需要操作的真实 DOM 并对其进行更新。



Vue和React简单对比

- 相同点

      都有组件化思想
      都支持服务器端渲染
      都有Virtual DOM（虚拟dom）
      数据驱动视图
      都有支持native的方案：Vue的weex、React的React native
      都有自己的构建工具：Vue的vue-cli、React的Create React App

- 区别
        
      数据流向的不同。react从诞生开始就推崇单向数据流，而Vue是双向数据流
      数据变化的实现原理不同。react使用的是不可变数据，而Vue使用的是可变的数据
      组件化通信的不同。react中我们通过使用回调函数来进行通信的，而Vue中子组件向父组件传递消息有两种方式：事件和回调函数
      diff算法不同。react主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。Vue 使用双向指针，边对比，边更新DOM

## 文章参考

https://github.com/yacan8/blog/blob/master/posts/%E9%9D%A2%E8%AF%95%E5%AE%98%EF%BC%9A%E8%81%8A%E8%81%8A%E5%AF%B9Vue.js%E6%A1%86%E6%9E%B6%E7%9A%84%E7%90%86%E8%A7%A3.md

https://vue3js.cn/interview/vue/vue.html