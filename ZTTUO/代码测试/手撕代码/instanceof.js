function ztInstanceof(left, right) {
    left = left.__proto__;
    let prototype = right.prototype;
    while (true) {
        if (left == null) {
            return false
        }
        if (left == prototype) {
            return true
        }
        left = left.__proto__;
    }
}

// 20210805
function ztInstanceof(left, right) {
    left = left.__proto__
    let prototype = right.prototype;
    while (true) {
        if (left === null) {
            return false
        }
        if (left == prototype) {
            return true
        }
        left = left.__proto__
    }
}
