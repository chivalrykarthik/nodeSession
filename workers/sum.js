const {
    isMainThread,
    workerData,
    parentPort
} = require('worker_threads');


if (!isMainThread) {
    let {a,b} = workerData;

    parentPort.postMessage(a+b);
} else {
    console.log("Worker process. Invalid request.")
}