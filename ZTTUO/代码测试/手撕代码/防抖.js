function ztDebounce(fn, wait) {
    var timeout;
    return function () {
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args)
        }, wait);
    }
}
