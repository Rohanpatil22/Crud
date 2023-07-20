import express, { urlencoded } from "express";
import cors from 'cors';
import router from "./routes/index.js";
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
const PORT=5000;

app.get("/",(req,res)=>{

    res.send("Hello from backend!!!!");
});
app.use("/api/v1",router);
// app.listen(PORT,()=>{
//     console.log(`App is running on the port ${PORT}.`)
// });

export default app;