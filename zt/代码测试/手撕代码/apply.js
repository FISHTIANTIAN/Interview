const {
    connect
} = require("nodejs-websocket");

Function.prototype.ztApply = function (content, args) {
    // 用于判断第一个参数是否为空或者为null
    if (!content || content === null) {
        content = window
    }
    // 创造唯一的key值  作为我们构造的context内部方法名
    let fn = Symbol();
    // this指向调用apply的函数
    content[fn] = this;
    // 执行函数并返回结果 相当于把自身作为传入的context的方法进行调用了
    return content[fn](...args)
}

// 20210805
Function.prototype.ztApply = function (content, args) {
    if (!content || content === null) {
        content = window
    }
    let fn = Symbol()
    content[fn] = this
    return content[fn](...args)
}

// 20210806
Function.prototype.ztApply = function (content, args) {
    if (!content || content === null) {
        content = window
    }
    let fn = Symbol()
    content[fn] = this
    return content[fn](...args)
}

// 20210809
Function.prototype.ztApply = function (content, args) {
    if (!content || content === null) {
        content = window
    }
    let fn = Symbol()
    content[fn] = this
    return content[fn](...args)
}

// 20210810
Function.prototype.ztApply = function (content, args) {
    if (!content || content === null) {
        content = window
    }
    let fn = Symbol()
    content[fn] = this
    return content[fn](...args)
}

// 20210826
Function.prototype.ztApply = function (content, args) {
    if (!content || content === null) {
        content = window
    }

    let fn = Symbol()
    content[fn] = this
    return content[fn](...args)
}

// 20210830
Function.prototype.ztApply = function (content, args) {
    if (!content || content === null) {
        content = window
    }
    let fn = Symbol()
    content[fn] = this
    return connect[fn](...args)
}