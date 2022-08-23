// settimeout 模拟实现 setinterval
function mySettimeout(fn, t) {
    let timer = null;

    function interval() {
        fn();
        timer = setTimeout(interval, t);
    }
    interval();
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}

// setinterval 模拟实现 settimeout
const mySetTimeout = (fn, time) => {
    const timer = setInterval(() => {
        clearInterval(timer);
        fn();
    }, time);
};
