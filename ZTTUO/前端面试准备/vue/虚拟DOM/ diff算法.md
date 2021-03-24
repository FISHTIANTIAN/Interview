> ## VNode 虚拟节点

VNode 虚拟节点可以代表一个真实的 dom 节点。通过 createElement 方法能将 VNode 渲染成 dom 节点。简单地说，vnode可以理解成节点描述对象，它描述了应该怎样去创建真实的DOM节点。

> ## 虚拟DOM （ 通过渲染函数生成 ）

虚拟dom是一个js对象，用来抽象的表示dom结构

Vue.js通过编译将template 模板转换成渲染函数(render ) ，执行渲染函数就可以得到一个虚拟节点树

在对 Model 进行操作的时候，会触发对应 Dep 中的 Watcher 对象。Watcher 对象会调用对应的 update 来修改视图。这个过程主要是将新旧虚拟节点进行差异对比，然后根据对比结果进行DOM操作来更新视图。

> ## diff算法 （ 通过 patch^也叫做patching算法 生成 ）

### 步骤

1、将真实dom转化为虚拟dom

2、在旧的虚拟dom上进行数据更新，并生成新的虚拟dom

3、新旧虚拟dom比较，生成补丁对象

4、根据差异对象更新真实DOM

![img](https://user-gold-cdn.xitu.io/2018/4/17/162d2e734988eab2?imageslim)

 解释一下这张图：

    1、首先看第一个红色色块，这里说的是把真实DOM映射为虚拟DOM，其实在react中没有这个过程，我们直接写的就是虚拟DOM(JSX)，只是这个虚拟DOM代表着真实DOM。
    2、当虚拟DOM变化时，例如上图，它的第三个p和第二个p中的son2被删除了。这个时候我们会根据前后的变化计算出一个差异对象patches。
    3、这个差异对象的key值就是老的DOM节点遍历时的索引，用这个索引我们可以找到那个节点。属性值是记录的变化，这里是remove，代表删除。
    4、最后，根据patches中每一项的索引去对应的位置修改老的DOM节点。

### 实现

- patch(container,vnode) :初次渲染的时候，将VDOM渲染成真正的DOM然后插入到容器里面。

- patch(vnode,newVnode):再次渲染的时候，将新的vnode和旧的vnode相对比，然后之间差异应用到所构建的真正的DOM树上。