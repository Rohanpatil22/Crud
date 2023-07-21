import mongoose from "mongoose";
import User from "../models/userSchema.js";


export const CreateUser=async(req,res)=>{

    const userdata=req.body;
   //console.log(userdata);
   
    const name=userdata.name;
    const email=userdata.email;
    const mobno=userdata.mobno;

    if(!name || !email || !mobno)
    {
        throw Error("Data not updated successfully.");;
    }
    const NewUser=await User.create({
        name,
        email,
        mobno,
    });
    
   return res.status(200).json({
        success:true,
        NewUser,
    });
    
}

export const allUserData=async(req,res)=>{

    const allUser= await User.find({});

    if(!allUser)
    {
        throw Error("User data not fetched")
    }
    res.status(200).json({
        success:true,
        allUser,
    })

}