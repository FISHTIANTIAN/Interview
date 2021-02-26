![1.png](https://static.vue-js.com/cf6aa320-3ac6-11eb-85f6-6fac77c0c9b3.png)

## 什么是SPA

SPA单页面应用构成，同样的头和尾，不同的身体

![2.png](https://static.vue-js.com/df14a5a0-3ac6-11eb-85f6-6fac77c0c9b3.png)

## 什么是MPA

SPA单页面应用构成，不同的头和尾，不同的身体

![3.png](https://static.vue-js.com/eeb13aa0-3ac6-11eb-85f6-6fac77c0c9b3.png)

## 如何给一个SPA做SEO

1、SSR服务端渲染

将组件或页面通过服务器生成html，再返回给浏览器，如nuxt.js

2、静态化

目前主流的静态化主要有两种：

    （1）一种是通过程序将动态页面抓取并保存为静态页面，这样的页面的实际存在于服务器的硬盘中
    （2）另外一种是通过WEB服务器的 URL Rewrite的方式，它的原理是通过web服务器内部模块按一定规则将外部的URL请求转化为内部的文件地址，一句话来说就是把外部请求的静态地址转化为实际的动态页面地址，而静态页面实际是不存在的。
    
3、使用Phantomjs针对爬虫处理

原理是通过Nginx配置，判断访问来源是否为爬虫，如果是则搜索引擎的爬虫请求会转发到一个node server，再通过PhantomJS来解析完整的HTML，返回给爬虫。下面是大致流程图

![4.png](https://static.vue-js.com/25be6630-3ac7-11eb-ab90-d9ae814b240d.png)
