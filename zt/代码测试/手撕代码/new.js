function ztNew(fn, ...arg) {
    // 创建一个空对象,并让空对象的__proto__指向构造函数的prototype成员对象
    let obj = Object.create(fn.prototype);
    // 使用apply调用构造函数，属性和方法添加到this引用的对象中
    let result = fn.apply(obj, arg);
    // 如果构造函数中没有返回其他对象，就返回this，即创建这个对象的新对象；否则，返回构造函数中的返回对象（result）
    // 如果构造函数中没有返回其他对象，就返回this，即创建这个对象的新对象（obj）
    return result instanceof Object ? result : obj;
}

// 20210806
function ztNew(fn, ...arg) {
    let obj = Object.create(fn.prototype)
    let result = fn.apply(obj, arg)
    return result instanceof Object ? result : obj
}

// 20210809
function ztNew(fn, ...args) {
    let obj = Object.create(fn.prototype)
    let result = fn.apply(obj, args)
    return result instanceof Object ? result : obj
}