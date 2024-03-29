const mongoose = require('mongoose')

const mongoDb = ()=>{

    mongoose.connect(process.env.CONN_STR).then(()=>{
        console.log("db connected succesfully");
    }).catch(()=>{
        console.log("db connection failed");
    })

}
module.exports= mongoDb