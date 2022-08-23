function ajax(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest(); //实例化，以调用方法
        xhr.open('get', url, false); //参数二： url; 参数三：是否异步
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onreadystatechange = () => { //每当 readyState 属性改变时，就会调用该函数
            if (xhr.readyState !== 4) return; //XMLHttpRequest 代理当前所处状态
            if (xhr.status === 200 || xhr.status === 304) { //请求成功
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.responseText))
            }
        }
        xhr.send(); //发送http请求
    })
}

// 20210809
function ajax(url) {
    return Promise((resolve, reject) => {
        var xhr = XMLHttpRequest()
        xhr.open('get', url, false)
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200 || xhr.status == 304) {
                resolve(xhr.responseText)
            } else {
                reject(new Error(xhr.responseTexts))
            }
        }
    })
}