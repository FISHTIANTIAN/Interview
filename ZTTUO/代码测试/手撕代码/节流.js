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

//20210908
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