const db = require('./db.js');

//Select

db.query("select * from profile", (err, resp) => {
    if (err) {
        console.log("Error:", err.message);
    } else {
        console.log(JSON.stringify(resp,'',5))
    }
})



//Insert
/*db.query("insert into profile (userName,age,email) values ('TestUser','22','test@gmail.com')", (err, resp) => {
    if (err) {
        console.log("Error:", err.message);
    } else {
        console.log(resp)
    }
})*/


//Update
/*
db.query("update profile set age = 23 where userId=3", (err, resp) => {
    if (err) {
        console.log("Error:", err.message);
    } else {
        console.log(resp)
    }
})*/


//Delete 
/*db.query("delete from profile where userId=3", (err, resp) => {
    if (err) {
        console.log("Error:", err.message);
    } else {
        console.log(resp)
    }
})*/
