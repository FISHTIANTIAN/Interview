function ajax(url) {
    let xhr = new XMLHttpRequest() //实例化，以调用方法
    xhr.open('get', url, false) //参数二： url; 参数三：是否异步
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = () => { //每当 readyState 属性改变时，就会调用该函数。
        if (xhr.readyState === 4) { //XMLHttpRequest 代理当前所处状态。
            if (xhr.status === 200 || xhr.status === 304) { //请求成功
                let string = request.responseText
                //JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象
                let object = JSON.parse(string)
            }
        }
    }
    request.send() //用于实际发出 HTTP 请求。不带参数为GET请求
}