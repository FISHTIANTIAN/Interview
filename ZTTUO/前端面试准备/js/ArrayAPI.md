## array.prototype 方法api整理

### .cancat 

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['c', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

合并两个数组并返回一个新的数组

### .entries

```js
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]
```

返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对

### .every()

```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

### .some()

```js
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```

测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。

> 注意：若收到一个空数组，此方法在一切情况下都会返回 true。

### .filter()

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 它返回一个数组。

### .find()

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

返回数组中满足提供的测试函数的第一个元素的 值 。否则返回 undefined。

### .findIndex()

```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

返回数组中满足提供的测试函数的第一个元素的 索引 。若没有找到对应元素则返回-1。

### .flat()

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

> Infinity，可展开任意深度的嵌套数组

> depth 可选: 指定要提取嵌套数组的结构深度，默认值为 1。

### .forEach()

```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

对数组的每个元素执行一次给定的函数。

### .from()

```js
从 String 生成数组
    Array.from('foo');
    // [ "f", "o", "o" ]
    
从 Set 生成数组
    const set = new Set(['foo', 'bar', 'baz', 'foo']);
    Array.from(set);
    // [ "foo", "bar", "baz" ]
    
从 Map 生成数组
    const map = new Map([[1, 2], [2, 4], [4, 8]]);
    Array.from(map);
    // [[1, 2], [2, 4], [4, 8]]
    
    const mapper = new Map([['1', 'a'], ['2', 'b']]);
    Array.from(mapper.values());
    // ['a', 'b'];
    
    Array.from(mapper.keys());
    // ['1', '2'];
    
从类数组对象（arguments）生成数组
    function f() {
      return Array.from(arguments);
    }
    
    f(1, 2, 3);
    
    // [ 1, 2, 3 ]
    
在 Array.from 中使用箭头函数
 
    Array.from([1, 2, 3], x => x + x);
    // [2, 4, 6]
    
    Array.from({length: 5}, (v, i) => i);
    // [0, 1, 2, 3, 4]

数组去重合并
    function combine(){
        let arr = [].concat.apply([], arguments);  //没有去重复的新数组
        return Array.from(new Set(arr));
    }
    
    var m = [1, 2, 2], n = [2,3,3];
    console.log(combine(m,n));                     // [1, 2, 3]
```

从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

### .includes()

```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```

用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

### .indexOf()

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
```

返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

### .lastIndexOf()

```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
```

返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。

### .isArray()

```js
Array.isArray([1, 2, 3]);
// true
Array.isArray({foo: 123});
// false
Array.isArray("foobar");
// false
Array.isArray(undefined);
// false
```

确定传递的值是否是一个 Array。

### .join()

```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

### .keys()

```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2
```

返回一个包含数组中每个索引键的Array Iterator对象。

### .map()

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。

### .of()

```js
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```

创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

### .pop()

```js
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

### .push()

```js
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

### .reverse()

```js
const array1 = ['one', 'two', 'xxx', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
```

将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。

### .shift()

```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```

从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

### .slice()

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'xxx'];

console.log(animals.slice(2)); 返回索引值为2 和2以后的全部数组
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); 返回索引值为2 到 4-1=3 的全部数组
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。

### .splice()

```js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

.splice(1, 0, 'xxx', 'sss'); 删除从第一个数开始的0位数， 然后添加xxx,sss

### .sort()

```js
升序
var numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);
// [1, 2, 3, 4, 5]

降序
var numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => b - a);
console.log(numbers);
// [5, 4, 3, 2, 1]
```

### .unshift()

```js
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```

将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
