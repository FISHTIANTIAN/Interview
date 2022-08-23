## 参考文章

[神三元整理的BFC](http://47.98.159.95/my_blog/blogs/css/008.html#_1-%E4%BB%80%E4%B9%88%E6%98%AFbfc)

[比较全的BFC](https://i-want-offer.github.io/FE-Essay/CSS/BFC.html)

## BFC规定了内部的Block Box如何布局。

- 定位方案：

        内部的Box会在垂直方向上一个接一个放置。
        
        Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。
        
        每个元素的margin box 的左边，与包含块border box的左边相接触。
        
        BFC的区域不会与float box重叠。
        
        BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
        
        计算BFC的高度时，浮动元素也会参与计算。

- 满足下列条件之一就可触发BFC

        根元素，即html
        
        float的值不为none（默认）
        
        overflow的值不为visible（默认）
        
        display的值为inline-block、table-cell、table-caption
        
        position的值为absolute或fixed