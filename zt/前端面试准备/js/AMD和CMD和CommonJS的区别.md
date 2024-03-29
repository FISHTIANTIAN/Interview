## 三者区别

AMD/CMD/CommonJs 是js模块化开发的规范，对应的实现是require.js/sea.js/Node.js

CommonJs 主要针对服务端，AMD/CMD/ES Module主要针对浏览器端，容易混淆的是AMD/CMD。（顺便提一下，针对服务器端和针对浏览器端有什么本质的区别呢？服务器端一般采用同步加载文件，也就是说需要某个模块，服务器端便停下来，等待它加载再执行。这里如果有其他后端语言，如java。而浏览器端要保证效率，需要采用异步加载，这就需要一个预处理，提前将所需要的模块文件并行加载好。）

AMD/CMD区别，虽然都是并行加载js文件，但还是有所区别，AMD是预加载，在并行加载js文件同时，还会解析执行该模块（因为还需要执行，所以在加载某个模块前，这个模块的依赖模块需要先加载完成）；而CMD是懒加载，虽然会一开始就并行加载js文件，但是不会执行，而是在需要的时候才执行。

AMD/CMD的优缺点.一个的优点就是另一个的缺点， 可以对照浏览。

- AMD优点：加载快速，尤其遇到多个大文件，因为并行解析，所以同一时间可以解析多个文件。
- CMD优点：因为只有在使用的时候才会解析执行js文件，因此，每个JS文件的执行顺序在代码中是有体现的，是可控的。
- CMD缺点：执行等待时间会叠加。因为每个文件执行时是同步执行（串行执行），因此时间是所有文件解析执行时间之和，尤其在文件较多较大时，这种缺点尤为明显。（PS：重新看这篇文章，发现这里写的不是很准确。确切来说，JS是单线程，所有JS文件执行时间叠加在AMD和CMD中是一样的。但是CMD是使用时执行，没法利用空闲时间，而AMD是文件加载好就执行，往往可以利用一些空闲时间。这么来看，CMD比AMD的优点还是很明显的，毕竟AMD加载好的时候也未必就是JS引擎的空闲时间！）

CommonJS 和 ES Module 区别：CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用

## 如何使用？

CommonJs 的话，因为 NodeJS 就是它的实现，所以使用 node 就行，也不用引入其他包。AMD则是通过script标签引require.js，CMD则是引入sea.js