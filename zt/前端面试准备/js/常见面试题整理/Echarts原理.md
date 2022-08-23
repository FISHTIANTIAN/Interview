## Echarts 实现原理

1、Echarts 是一个轻量级的图形库，纯 js 实现，MVC 封装，数据驱动

2、Svg 和 Canvas 是两个可以选择类库之一，启用 Svg 交互性更好，不过性能比较差，不适合移动端使用，在绘制上万个点的时候会发生崩溃。而 Canvas 的渲染速度和性能更好，Echarts 在 Canvas 上构建一层 MVC 层，使得它可以想 Svg 一样交互。

3、Echarts 的特点：重要性和优先级依次递减，设计效果直观、生动，能够交互，可个性化定制。

4、Echats 总体结构是基于 MVC 架构的，各部分的主要作用是：

- Storage（M）：模型层，实现图形数据的 CURD（增删改查）管理；
- Painter（V）：视图层，实现 Canvas 元素的生命周期管理，即：试图渲染、更新控制、绘制；
- Handler（C）：控制层，事件交互处理，实现完整的 Dom 事件模拟封装；

Storage 是一个类似数据的仓库，提供各种数据的读、写、改、删等操作。Painter 持有 Storage 对象，即：Painter 读取 Storage 进行绘图。Handler 持有了 Storage 对象和 Paninter 对象，控制层对模型层有 CURD 关系，即：Handler 通过访问 Storage 对象体哦那个的数据增删改查操作，实现时间交互处理所需的数据部分；控制层于视图层存在 Call 关系，即：Handler 通过访问 Painter 对象提供的视图操作，实现事件交互处理的视图部分。

[源地址](https://www.cnblogs.com/haolj/articles/11088133.html)
