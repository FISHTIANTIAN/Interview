Function.prototype.ztBind = function (content, ...args) {
    // 用于判断第一个参数是否为空或者为null
    if (!content || content === null) {
        content = window
    }
    // 创造唯一的key值作为我们构造的context内部方法名
    let fn = Symbol()
    // this指向调用bind的函数
    content[fn] = this;
    let _this = this;
    const result = function (...innerArgs) {
        // 第一种情况: 若是将 bind 绑定之后的函数当作构造函数，通过 new 操作符使用，则不绑定传入的 this，而是将 this 指向实例化出来的对象
        // 此时由于new操作符作用  this指向result实例对象  而result又继承自传入的_this 根据原型链知识可得出以下结论
        // this.__proto__ === result.prototype; // this instanceof result =>true
        // this.__proto__.__proto__ === result.prototype.__proto__ === _this.prototype; // this instanceof _this =>true
        if (this instanceof _this === true) {
            // 此时this指向指向result的实例  这时候不需要改变this指向
            this[fn] = _this;
            // 这里使用es6的方法让bind支持参数合并
            this[fn](...[...args, ...innerArgs]);
            delete this[fn];
        } else {
            // 如果只是作为普通函数调用  那就很简单了 直接改变this指向为传入的context
            content[fn](...[...args, ...innerArgs]);
            delete this[fn];
        }
    }
    // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
    // 实现继承的方式: 使用Object.create
    result.prototype = Object.create(this.prototype);
    return result;
}

// 20210805
Function.prototype.ztBind = function (content, ...args) {
    if (!content || content === null) {
        content = window
    }
    let fn = Symbol()
    content[fn] = this
    let _this = this
    const result = function (...innerArgs) {
        if (this instanceof _this === true) {
            this[fn] = _this
            this[fn](...[...args, ...innerArgs])
            delete this[fn]
        } else {
            this[fn](...[...args, ...innerArgs])
            delete this[fn]
        }
    }
    result.prototype = Object.create(this.prototype)
    return result
}

// 20210806
Function.prototype.ztBind = function (content, ...args) {
    if (!content || content === null) {
        content = window
    }
    let fn = Symbol()
    content[fm] = this
    let _this = this
    const result = function (...innerArgs) {
        if (_this instanceof this === true) {
            this[fn] = _this
            this[fn](...[...args, ...innerArgs])
            delete this[fn]
        } else {
            this[fn](...[...args, ...innerArgs])
            delete this[fn]
        }
    }
    result.prototype = Object.create(this.prototype)
    return result
}

// 20210809
Function.prototype.ztBind = function (content, ...args) {
    if (!content || content === null) {
        content = window
    }
    let fn = Symbol()
    content[fn] = this
    let _this = this
    const result = function (...innerArgs) {
        if (_this instanceof this) {
            content[fn] = _this
            content[fn](...[...args, ...innerArgs])
            delete this[fn]
        } else {
            content[fn](...[...args, ...innerArgs])
            delete this[fn]
        }
    }
    result.prototype = Object.create(this.prototype)
    return result
}

// 20210810
Function.prototype.ztBind = function (content, ...args) {
    if (!content || content === null) {
        content = window
    }
    let fn = Symbol()
    content[fn] = this
    let _this = this
    const result = function (...innerArgs) {
        if (_this instanceof this) {
            content[fn] = _this
            content[fn](...[...args, ...innerArgs])
            delete this[fn]
        } else {
            content[fn](...[...args, ...innerArgs])
            delete this[fn]
        }
        result.prototype = Object.create(this.prototype)
        return result
    }
}

// 20210830
Function.prototype.ztBind = function (content, ...args) {
    if (!content || content === null) {
        content = window
    }

    let fn = Symbol()
    content[fn] = this
    let _this = this
    const result = function (...innerArgs) {
        if (_this instanceof this) {
            content[fn] = _this
            content[fn](...[...args, ...innerArgs])
            delete this[fn]
        } else {
            content[fn](...[...args, ...innerArgs])
            delete this[fn]
        }
        result.prototype = Object.create(this.prototype)
        return result
    }
}

//20210907
Function.prototype.ztBind = function (content, ...args) {
    if (!content || content === null) {
        content = window
    }

    let fn = Symbol()
    content[fn] = this
    let _this = this
    const result = function (...innerArgs) {
        if (_this instanceof this) {
            content[fn] = _this
            content[fn](...[...args, ...innerArgs])
            delete this[fn]
        } else {
            content[fn](...[...args, ...innerArgs])
            delete this[fn]
        }
    }
    result.prototype = Object.create(this.prototype)
    return result
}