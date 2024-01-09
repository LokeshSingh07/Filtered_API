const mongoose = require("mongoose");


const DBConnect = async()=>{
    try{
        mongoose.connect(process.env.DATABASE_URL , {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        console.log("Database connected successfully");
    }
    catch(err){
        console.log(err);
        console.log("Database connection failed");
        process.exit(1);
    }
}

module.exports = {DBConnect};