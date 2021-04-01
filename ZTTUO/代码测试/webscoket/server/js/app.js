const ws = require('nodejs-websocket');
const PORT = 3000
const TYPE_ON = 0
const TYPE_OUT = 1
const TYPE_MSG = 2

// var count = 0
const server = ws.createServer(connect => {
    console.log('有用户连接上来了')
    // count++
    // connect.userName = `用户${count}`
    // broadcast({
    //     type: TYPE_ON,
    //     data: `${connect.userName}进入了聊天室`,
    //     time: new Date().toLocaleTimeString()
    // })
    connect.on("text", (data) => {
        console.log(data)
        broadcast({
            data: data
        })
    })

    connect.on("close", () => {
        console.log("连接关闭")
        // count--
        // broadcast({
        //     type: TYPE_OUT,
        //     data: `${connect.userName}离开了聊天室`,
        //     time: new Date().toLocaleTimeString()
        // })
    })

    connect.on("error", () => {
        console.log("连接异常")
    })
})

server.listen(PORT, () => {
    console.log('websocket服务启动起来了，监听的端口是', PORT)
})

function broadcast(data) {
    server.connections.forEach(function (conn) {
        conn.sendText(JSON.stringify(data))
    })
}