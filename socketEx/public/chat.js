const chatRoom = function (roomName, userN) {
    console.log(roomName)
    console.log(userN)
    const socket = io.connect();
    const frm = document.getElementById('frm');
    const txt = document.getElementById('txt')
    const content = document.getElementById('content');
    const userFrm = document.getElementById('userFrm');
    const userName = document.getElementById('userName');
    const userCreation = document.getElementById('userCreation');
    const chat = document.getElementById('chat');

    socket.on('serverMsg', (msg) => {
        let p = document.createElement('p');
        p.innerHTML = msg.userName + " : " + msg.value;
        //append to content div
        content.appendChild(p)
    });

    socket.on("userCreated", msg => {
        if (msg.userName) {
            chat.style.display = "block";
            userCreation.style.display = 'none';
        }
    })
    frm.addEventListener('submit', e => {
        e.preventDefault();
        if (txt.value) {
            socket.emit("clientMsg", { value: txt.value })
            txt.value = '';
        }
    });

   // userFrm.addEventListener("submit", (e) => {
     //   e.preventDefault();
        if (userN) {
            socket.emit("room", {room:roomName, userName: userN })
        }
    //})

}
window.onload = function () {
    const userFrm = document.getElementById('userFrm');
    const userName = document.getElementById('userName');
    const rooms = document.getElementById('rooms');
    
    userFrm.addEventListener("submit", (e) => {
        e.preventDefault();
        chatRoom(rooms.value, userName.value);
    })

};