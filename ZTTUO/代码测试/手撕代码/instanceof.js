function ztInstanceof (left, right) {
    left = left.__proto__;
    let prototype = right.prototype;
    while(true){
        if(left == null) {
            return false
        }
        if(left == prototype) {
            return true
        }
        left = left.__proto__;
    }
}

console.log( ztInstanceof(1, Number) )

// 核心是通过判断 left的原型对象 和 right.prototype的原型对象 是否相等