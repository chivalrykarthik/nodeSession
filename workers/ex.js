const {
    Worker
} = require('worker_threads');


const w = new Worker(__dirname + 'sum.js', { workerData: { a: 1, b: 2 } });

w.on('message',(msg)=>{
    console.log("message:",msg)
});

w.on('error',err=>{
    console.log("err:",e.message);
})

w.on('exit',(code,signal)=>{
    console.log("code:",code)
    console.log("signal:",signal)
})