### 001. HTTP 报文结构是怎样的？

TCP头和数据部分

具体而言: 起始行 + 头部 + 空行 + 实体

- 起始行

请求报文

```
GET /home HTTP/1.1

方法 + 路径 + http版本
```

相应报文

```
HTTP/1.1 200 OK

http版本 + 状态码 + 原因
```

- 头部

注意事项：

1、字段名不区分大小写

2、字段名不允许出现空格，不可以出现下划线_

3、字段名后面必须紧接着:

- 空行

很重要，用来区分开头部和实体。

问: 如果说在头部中间故意加一个空行会怎么样？

那么空行后的内容全部被视为实体。

- 实体

就是具体的数据了，也就是body部分。请求报文对应请求体, 响应报文对应响应体。

### 002. 如何理解 HTTP 的请求方法？

- HTTP的8种请求方式

![http](https://images2018.cnblogs.com/blog/1418466/201808/1418466-20180810112625596-2103906128.png)

http/1.0 GET | POST | HEAD

http/1.2 PUT | CONNECT | DELETE | OPTIONS | TRACE

GET: (通常用来获取资源) 向特定的资源发出请求。注意：GET方法不应当被用于产生“副作用”的操作中，例如在Web Application中，其中一个原因是GET可能会被网络蜘蛛等随意访问。Loadrunner中对应get请求函数：web_link和web_url

POST: (提交数据，即上传数据) 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。 Loadrunner中对应POST请求函数：web_submit_data,web_submit_form

HEAD: (获取资源的元信息) 向服务器索与GET请求相一致的响应，只不过响应体将不会被返回。这一方法可以再不必传输整个响应内容的情况下，就可以获取包含在响应小消息头中的元信息。

PUT: (修改数据) 向指定资源位置上传其最新内容

CONNECT: (建立连接隧道，用于代理服务器) HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器

DELETE: (删除资源) 请求服务器删除Request-URL所标识的资源

OPTIONS: (列出可对资源实行的请求方法，用来跨域请求) 返回服务器针对特定资源所支持的HTTP请求方法，也可以利用向web服务器发送‘*’的请求来测试服务器的功能性

TRACE: (追踪请求-响应的传输路径) 回显服务器收到的请求，主要用于测试或诊断

- GET 和 POST 有什么区别？

从**缓存**的角度: GET的请求会被浏览器主动缓存下来，POST则不会

从**编码**的角度: GET只能进行URL编码，只能接收ASCLL字符，POST没有限制

从**参数**的角度: GET请求携带数据一般放在URL中，不安全，POST放在请求体中，更适合传输敏感信息

从**幂等性**的角度: GET是幂等的，POST不是 (幂等表示执行相同的操作，结果也是相同的)

从**TCP**的角度: GET请求会把请求报文一次性发送出去，POST则会将TCP包分为两个，先发送TCP包中的head部分，如果服务器返回100，然后发送body部分 (火狐浏览器除外，它的POST请求只发送一个TCP包)

### 003: 如何理解 URI？

完整的URL结构：

![完整的URL结构](https://user-gold-cdn.xitu.io/2020/3/22/170ffd677629b70d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

scheme 表示协议名，比如http, https, file等等。后面必须和://连在一起。

user:passwd@ 表示登录主机时的用户信息，不过很不安全，不推荐使用，也不常用。

host:port 表示主机名和端口。

path 表示请求路径，标记资源所在位置。

query 表示查询参数，为key=val这种形式，多个键值对之间用&隔开。

fragment表示 URI所定位的资源内的一个锚点，浏览器可以根据这个锚点跳转到对应的位置。

```
举个例子

https://www.baidu.com/s?wd=HTTP&rsv_spt=1

这个 URI 中，https即scheme部分，www.baidu.com为host:port部分（注意，http 和 https 的默认端口分别为80、443），/s为path部分，而wd=HTTP&rsv_spt=1就是query部分
```

### 003. WebSocket 和 HTTP 有什么区别？

相同点：

a. 都是一样基于TCP的，都是可靠性传输协议。

b. 都是应用层协议。

不同点：

a. WebSocket是双向通信协议，模拟Socket协议，可以双向发送或接受信息。HTTP是单向的。

b. WebSocket是需要握手进行建立连接的(相对HTTP来说，WebSocket是一种持久化的协议。它会基于HTTP协议，来完成一部分握手，HTTP握手部分完成，协议升级为WebSocket)。

### 004.  http 和 https 的区别

a. HTTP 明文传输，数据都是未加密的，安全性较差，HTTPS（SSL+HTTP） 数据传输过程是加密的，安全性较好。

b. 使用 HTTPS 协议需要到 CA（Certificate Authority，数字证书认证机构） 申请证书，一般免费证书较少，因而需要一定费用。

c. HTTP 页面响应速度比 HTTPS 快，主要是因为 HTTP 使用 TCP 三次握手建立连接，客户端和服务器需要交换 3 个包，而 HTTPS除了 TCP 的三个包，还要加上 ssl 握手需要的 9 个包，所以一共是 12 个包。

d. http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。

e. HTTPS 其实就是建构在 SSL/TLS 之上的 HTTP 协议，所以，要比较 HTTPS 比 HTTP 要更耗费服务器资源。
