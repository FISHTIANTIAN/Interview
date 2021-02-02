
function test(){
    //将参数转为一个数组　
    // var args = Array.prototype.slice.call( arguments );
    var args = [].slice.call( arguments );
    alert(args);
}

test(1,2,3)