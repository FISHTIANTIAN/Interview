## typeof

typeof 返回一个表示数据类型的字符串，返回结果包括：number、boolean、string、object、undefined、function等6种数据类型。

typeof 可以对JS基本数据类型做出准确的判断（除了null），而对于引用类型返回的基本上都是object, 其实返回object也没有错，因为所有对象的原型链最终都指向了Object,Object是所有对象的`祖宗`。 但当我们需要知道某个对象的具体类型时，typeof 就显得有些力不从心了。

- 只能检测出基本类型（除了null）

**注意** ：typeof  null会返回object，因为特殊值null被认为是一个空的对象引用

## instanceof

判断对象和构造函数在原型链上是否有关系，如果有关系，返回真，否则返回假

- 能检测出引用类型

- 不能检测出基本类型，且不能跨iframe

如果要检测基本类型可以使用这种方法
```javascript
var num = new Number(123);
var str = new String('abcdef');
var boolean = new Boolean(true);
```

## constructor

undefined和null是不能够判断出类型的，并且会报错。因为null和undefined是无效的对象，因此是不会有constructor存在的

使用constructor是不保险的，因为constructor属性是可以被修改的，会导致检测出的结果不正确

## Object.prototype.toString.call()

- 检测出所有的类型

- IE6下，undefined和null均为Object

## 总结

```javascript

window.onload = function(){
	
	var oF = document.createElement('iframe');
	document.body.appendChild( oF );
	
	var ifArray = window.frames[0].Array;
	
	var arr = new ifArray();
	
	//alert( arr.constructor == Array );  //false
	
	//alert( arr instanceof Array );  //false
	
	//alert( Object.prototype.toString.call(arr) == '[object Array]' );  //true
};
```

## 参考资料

[参考连接](https://juejin.cn/post/6844904053651030030#heading-11)