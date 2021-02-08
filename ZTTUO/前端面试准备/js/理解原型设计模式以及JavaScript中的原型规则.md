## javascript的原型规则

1.所有的引用类型(对象，数组，函数)都具有对象特性，既可自由扩展属性(除了null 以外)

```javascript
var obj = {};
obj.a=100;
var arr = [];
arr.a=100;
function fn(){};
fn.a = 100;
```

2.所有的引用类型(对象，数组，函数)，都有一个 _proto_属性(隐式原型)，属性值是一个普通对象

```javascript
console.log(obj._proto_)
console.log(arr._proto_)
console.log(fn._proto_)
```

3.所有的函数，都有一个prototype属性(显式原型)，属性值是一个普通对象

```javascript
console.log(fn.prototype)
```

4.所有的引用类型(对象，数组，函数)，其隐式原型指向构造函数的显式原型( obj._proto_ === Object.prototype)

```javascript
console.log(obj._proto_ === Object.Prototype)  // true
console.log(arr._proto_ === Arrray.Prototype)  // true
console.log(fn._proto_ === Function.prtotype)  // true
```

5.当试图得到一个对象的属性时，如果这个对象本身没有这个属性，那么会去它的 proto (既构造函数的prototype)中去寻找

```javascript
// 构造函数
function Fn(name){
this.name = name;
}

// 显示原型
Fn.prototype.alertName = function(){
console.log(this.name)
}

// 创建实例
var f = new Fn('张三');
f.printNmae = function(){
console.log(this.name);
}

f.printName(); // 张三
f.alertName(); // 张三
```