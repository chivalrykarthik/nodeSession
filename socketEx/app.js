const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    //console.log(scoket.id);
    //console.log(scoket.connected)
    console.log("Socket connected:", socket.room)
    socket.on('clientMsg', msg => {
        console.log("ClientMsg:", msg)
        console.log("socket.room:",socket.id)
        io.to(socket.room).emit('serverMsg',{ ...msg, userName: socket.userName });
        //io.emit("serverMsg", { ...msg, userName: socket.userName })
    });

    /*socket.on('createUser', msg => {
        socket.userName = msg.userName;
        socket.emit("userCreated", { userName: socket.userName })
    })*/
    socket.on('disconnect', (data) => {
        console.log("Socket disconnected:")
    });

    socket.on('room', det => {
        socket.userName = det.userName;
        console.log(det)
        socket.join(det.room);
        socket.room = det.room;
        socket.emit("userCreated", { userName: socket.userName })
    });

})


/*

let js = io.of('/javascript');
js.on('connection', (socket) => {
    //console.log(scoket.id);
    //console.log(scoket.connected)
    //console.log(socket.room)
    console.log("Socket connected in js:")
    socket.on('clientMsg', msg => {
        console.log("ClientMsg:", msg)
        js.emit("serverMsg", { ...msg, userName: socket.userName })
    });

    socket.on('createUser', msg => {
        socket.userName = msg.userName;
        socket.emit("userCreated", { userName: socket.userName })
    })
    socket.on('disconnect', (data) => {
        console.log("Socket disconnected from js:")
    })
})



let nodejs = io.of('/nodejs');
nodejs.on('connection', (socket) => {
    //console.log(scoket.id);
    //console.log(scoket.connected)
    console.log("Socket connected in nodejs:")
    socket.on('clientMsg', msg => {
        console.log("ClientMsg:", msg)
        nodejs.emit("serverMsg", { ...msg, userName: socket.userName })
    });

    socket.on('createUser', msg => {
        socket.userName = msg.userName;
        socket.emit("userCreated", { userName: socket.userName })
    })
    socket.on('disconnect', (data) => {
        console.log("Socket disconnected from nodejs:")
    })
})*/
server.listen(3000, "localhost", () => console.log("App started:"))
