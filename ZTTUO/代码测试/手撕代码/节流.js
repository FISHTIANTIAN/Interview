function ztThrottle(fn, wait) {
    var timeout;
    return function () {
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                fn.apply(this, args)
            }, wait);
        }
    }
}

//2021809
function ztThrottle(fn, wait) {
    var timeout;
    return function () {
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                fn.apply(this, args)
            }, wait)
        }
    }
}

//20210810
function ztThrottle(fn, wait) {
    var timeout;
    return function () {
        var args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                fn.apply(this, args)
            }, wait)
        }
    }
}