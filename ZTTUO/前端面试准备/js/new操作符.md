## new实现过程

- 创建一个空的简单JavaScript对象（即{}）；
- 链接该对象（即设置该对象的构造函数）到另一个对象 ；
- 将步骤1新创建的对象作为this的上下文 ；
- 如果该函数没有返回对象，则返回this。

## 手动实现

```javascript
function objectFactory() {

    var obj = new Object(),//从Object.prototype上克隆一个对象

    Constructor = [].shift.call(arguments);//取得外部传入的构造器

    var F=function(){};
    F.prototype= Constructor.prototype;
    obj=new F();//指向正确的原型

    var ret = Constructor.apply(obj, arguments);//借用外部传入的构造器给obj设置属性

    return typeof ret === 'object' ? ret : obj;//确保构造器总是返回一个对象

};

// 精简版 优选！
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const res = fn.apply(fn, arg);
    return ret instanceof Object ? ret : obj
}
```

## 手动实现参考连接

https://github.com/mqyqingfeng/Blog/issues/13

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/12