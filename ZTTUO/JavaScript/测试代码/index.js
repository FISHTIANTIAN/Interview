var Book = {}
var name = ''
Object.defineProperty(Book, 'name', {
    set: function (value) {
        name = value
        console.log('你取了一个书名叫做' + value);
    },
    get: function () {
        console.log('《' + name + '》')
    }
})

Book.name = 'vue权威指南';  // 你取了一个书名叫做vue权威指南
console.log(Book.name);  // 《vue权威指南》