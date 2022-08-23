### 自定义组件生命周期

bind 只调用一次，指令第一次绑定到元素时候调用，用这个钩子可以定义一个绑定时执行一次的初始化动作。
 
inserted:被绑定的元素插入父节点的时候调用(父节点存在即可调用，不必存在document中)
 
update: 被绑定于元素所在模板更新时调用，而且无论绑定值是否有变化，通过比较更新前后的绑定值，忽略不必要的模板更新
 
componentUpdate :被绑定的元素所在模板完成一次更新更新周期的时候调用
 
unbind: 只调用一次，指令与元素解绑的时候调用

### 自定义组件参数 (即 el、binding、vnode 和 oldVnode)

- el：指令所绑定的元素，可以用来直接操作 DOM。

- binding：一个对象，包含以下 property：

        name：指令名，不包括 v- 前缀。
        
        value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
        
        oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
        
        expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
        
        arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
        
        modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。

- vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。

- oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
