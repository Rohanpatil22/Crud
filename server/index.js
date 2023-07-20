
import mongoose from "mongoose";
import app from'./app.js'
const PORT=5000;
(async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Users',{useNewUrlParser:true, useUnifiedTopology: true});
        console.log("Database Connected Successfully.");

        app.on('Error',(error)=>{
            console.log("Error:",error);
        });

        app.listen(PORT,()=>{
               
            console.log(`App is listening to the PORT ${PORT}.`);
        })
    }
    catch(err){
        console.log("Error while connecting:",err);
    }
})();