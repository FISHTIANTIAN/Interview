## 数据响应式

1. 首先判断数据的类型，如果是对象就走第2步，如果是数组就走第3步
2. 对象是通过 Object.defineProperty，在 getter 里收集依赖，在 setter 里触发更新
3. 数组是首先拷贝数组的原型，然后基于拷贝的原型改写(push,pop,unshift,shift,sort,reverse,splice)七个方法，然后将改写后的原型赋给数组
4. 重新对数组的原型赋值后，还要观测数组的每一项，重复第一步
5. 如果 Object.defineProperty 的 setter 里赋值，如果新赋的值是对象，也要进行观测
6. 如果对数组的操作是有数据新增(push,unshift,splice)，还需要观测数组新增的每一项，同第4步(这里Vue源码的实现是给每个响应式数据[对象和数组]新增了一个不可枚举的属性__ob__，它的作用有二，其一是用来判断数据是否已经是响应式的数据，如果是就不需再次观测，其二是属性__ob__是Observer类的一个实例，实例上有对数组每一项进行响应式处理的方法)

对象是在 Object.defineProperty 的 getter 里进行依赖的收集，在 setter 里触发更新。具体是通过观察者模式，每一个属性都有一个 Dep 类的实例，Dep.target 有值即指向 watcher 的时候，在 dep 内收集 watcher，并且在 watcher 内收集 dep，dep 和 watcher 是多对多的关系，因为一个组件会有多个属性，而 watcher 是组件级的，dep 和 watcher 也是多对多的关系，dep 可能对应多个组件，组件内部的 computed 和 watch 都是 watcher。
不管是根组件还是非根组件(函数)，它们的 data 最终的值都是对象，所以只会在 data 最外层对象的某些属性值是数组，所以在 Object.defineProperty 的 getter 里对数组进行依赖收集，我们知道依赖的收集是调用 dep 类上收集依赖的方法，Vue 的做法是在创建 Observer 类的实例的时候，定义了一个属性 dep，dep 是 Dep 内的实例。对于多维数组和数组新增的数据，Vue 的做法是，在创建 Observer 类的实例的时候，设置了一个不可枚举的属性 __ob__ ，它的值是 Observer 类的实例，所以我们在对多维数组进行依赖收集的时候，可以调用 __ob__ 的 dep 的方法，对于数组新增的数据，调用 __ob__ 上的方法对数组的每一项做数据响应式，并且调用 __ob__.dep 上的 notify 方法触发更新。

## 依赖收集

1. 对象的依赖收集是在 Object.defineProperty 的 getter 里
2. 数组的依赖收集：首先最外层的数据肯定是对象，只可能是某个属性的值是数组，又因为是递归处理的，所以我们给 Observer 类新增了一个 Dep 类的实例dep，在属性的值是数组的时候，通过调用 dep上的方法收集依赖，同时数组可能是多维数组，然后对于已响应式处理的数组上是有__ob__属性的，然后调用__ob__的dep属性上的方法对数组每一项收集依赖

## 触发更新

1. 对象是在 Object.defineProperty 的 setter 里
2. 数组是在改写的原型方法里派发更新

## 模板编译

1. 通过正则，匹配开始标签，结束标签，属性内容，文本内容，匹配到开始标签就进栈，匹配到结束标签就出栈，最终生成 AST
2. 根据 AST 生成代码字符串(`_c('div', {id:"app"}, ...)`)
3. 根据生成的代码字符串生成 render 函数()
```js
code = `_c('div',{id:"app",class:"app",style:{"color":"blue","background":"red"}},_c('ul',undefined,_c('li',undefined,_v(_s(name))),_c('li',undefined,_v(_s(age)))))`
const render = new Function(`with(this){return ${code}}`)
```

## 异步更新的原理

1. Watcher 的 update 方法里通过队列来保存所有的 watcher
2. Watcher 是有 id，如果已经在队列了就不会重复加入队列
3. 然后在 nextTick 里再去把队列里的所有 watcher 取出来批量执行

## $nextTick

1. Vue 的异步更新是使用的 nextTick，所以我们在获取更新后的 DOM 的时候，应该使用 nextTick 保证顺序
2. Vue 实现 nextTick 是采用优雅降级的：Promise -> MutationObserver -> setImmediate -> setTimeout

## watch 原理

1. watch 的使用方式，可以是对象，可以是函数，也可以是数组
2. 不论是哪种使用方式，watch 的每一个属性对应的函数都是一个 用户watcher，其实现都是调用的 `$watch(vm, handler)`
3. $watch 方法的实现都是 `new Watcher()`，只不过是 options 参数里标记了是用户自定义的 watcher(`options.user = true`)
4. watch 的属性对应的函数里有新值和旧值，我们是如何返回新值和旧值的呢？
5. new Watcher() 的时候传递的是属性的key，我们要把它转化成函数赋值给 Watcher类的 getter 属性，在 Watcher 类实例化的时候，会调用一次 get 方法，我们就可以拿到它的值(取值同时会进行依赖收集)
6. 在值更新后，会再次调用 Watcher 类的 get 方法获得新值
7. 然后判断 watcher 的类型，如果是用于 watcher ，执行 callback，把新值旧值传递给 callbak

## computed 原理

1. 每个计算属性本质上也是一个用户 watcher
2. 计算属性的 watcher 在初始化的时候会有两个属性 lazy 和 dirty
3. watcher 在初始化的时候，会默认调用一次 get 方法，但是 computed 默认是不执行的，所以用 lazy 属性来标记是 computed watcher
4. computed 是有缓存的，即依赖的值没有发生改变，多次获取，是不会多次调用 watcher 的 get 方法获取值的，所以用 dirty 属性来标记是否需要重新计算值，如果不需要计算，直接返回 watcher.value，如果需要计算，再来调用 get 方法获取新的值

## Vue.mixin

mixin 方法就是合并 options，options 的不同 key(data,components,hooks等)有不同的合并策略

## Vue.extend

extend 方法就是创建一个基于原型链继承的，继承 Vue 的子类(VueComponent)，具有 Vue 的所有功能，并且子类的 options 合并了 Vue 的 options

## options的合并策略

1. hooks 是一个函数数组，子没有直接返回父，子有父亲合并.concat子
2. components 的合并策略是，子组件的 component 是 components 的私有属性，components 的 __proto__ 有父组件的 component，所以组件的优先级是沿着原型链查找的
3. data 合并策略是，如果父子组件都有的数据，相互合并，子覆盖父，其中一个没有的就取另外一个

## hooks的原理

vm.$options 里存储了各个 hook 对应的函数数组，在不同的时期去触发 callHook 方法执行函数数组的方法

## 父子组件 hook 执行的顺序

首先在初始化 state 之前会触发 beforeCreate，在初始化 state 之后触发 created，在组件渲染之前会触发 beforeMount，在组件渲染的过程，解析到子组件，然后子组件也会走初始化 state和渲染的流程，所以父组件先触发 beforeCreate，created，beforeMount，然后子组件触发 beforeCreate，created，beforeMount，接着子组件渲染完成触发 mounted，然后在父组件渲染完成触发 mounted

## diff算法

- 首先比对是否是相同的标签，如果不是删除旧的DOM，生成新的DOM插入
- 如果是相同的标签，比对更新属性
- 判断是否是文本节点，如果是，判断文本内容是否相同，不同更新文本内容
- 比对新旧子节点，如果只有新的有子节点，新增子节点插入；如果只有旧的有子节点，将元素的 innerHTML 置为空
- 如果新旧都有子节点，比对新旧子节点(采用双指针)
- 依次是头头、尾尾、头尾、尾头比较，没有匹配到，就乱序比对
- 建立旧的节点的映射表(key->index)
- 新的起始节点是否能在旧的映射表中找到，不能找到直接在旧的前面插入，如果找到，将映射表找到的旧的节点，移动到前面，并将该位置置为null
- 因为在乱序比对中，有将旧节点置为 null 的情况，所以在进行子节点比对前，先判断该节点是否为null，为null顺移
- 比对完之后如果新的节点还有，插入新的节点(插入的位置要判断是否在哪里插入)，如果旧的节点还有，删除旧的节点(null的位置跳过)

### 04. Vue的更新粒度是组件级？

首先渲染 watcher 是组件级的。在初始化的时候，会调用 _init 方法，_init 内部会调用 $mount 方法，$mount 方法会调用 mountComponent 方法，mountComponent 方法内部定义了 updateComponent 方法，updateComponent 方法内部就是调用 _update 方法将 vnode 渲染成真实 DOM，mountComponent 方法会 new 一个渲染 watcher，并把 updateComponent 传给渲染 watcher ，所以渲染 watcher可以重新渲染DOM(试想一下，如果我们没有把更新DOM渲染的方法传递给 watcher ，更改数据后，我们需要手动去调用DOM渲染的方法；传递给 watcher 后，数据变化后，可以让 watcher 自动的去调用更新DOM渲染的方法)

在 render 函数生成 vnode 时，会判断是否是原生的HTML标签，如果不是，会创建组件的 vnode，子组件本质是 VueComponent 函数，VueComponent 内部会调用 _init 方法，所以创建子组件 vnode 的时候，也会 new 一个渲染 watcher，所以说渲染 watcher 是组件级的，也就是说 Vue 的更新粒度是组件级的