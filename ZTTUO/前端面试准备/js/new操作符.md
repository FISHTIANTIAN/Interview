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
```

### 手写（自己写）
```javascript
function _new(func) {
    // 1、创建一个空对象
    let obj = {}
    // 2、让空对象的__proto__指向构造函数的prototype成员对象
    obj.__proto__ = func.prototype
    // 1 && 2 方案合并
    let obj = Object.create(func.prototype)
    // 3、使用apply调用构造函数，属性和方法添加到this引用的对象中
    let result = func.apply(obj)
    // 4、如果构造函数中没有返回其他对象，就返回this，即创建这个对象的新对象；否则，返回构造函数中的返回对象
    // 如果构造函数中没有返回其他对象，就返回this，即创建这个对象的新对象
    if(result && (typeof(result) == "object") || (typeof(result) == "function")) {
        returun result
    }
    // 否则，返回构造函数中的返回对象
    return obj
}

// 简易版本
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}
```

## 手动实现参考连接

https://github.com/mqyqingfeng/Blog/issues/13