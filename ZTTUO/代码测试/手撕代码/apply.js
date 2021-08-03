Function.prototype.ztApply = function (content, args) {
    // 用于判断第一个参数是否为空或者为null
    if (!content || content === null) {
        content = window
    }
    // 创造唯一的key值  作为我们构造的context内部方法名
    let fn = Symbol();
    // this指向调用call的函数
    content[fn] = this;
    // 执行函数并返回结果 相当于把自身作为传入的context的方法进行调用了
    return content[fn](...args)
}