import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

function Usertable(props)
{
    const [editid,seteditid]=useState('');
    const[newUserData,setuserdata]=useState({name:"",email:"",mobno:"",id:""})
    const userdata=props.User;
    console.log(userdata);

    const delete_user=async (id)=>{

        console.log(id);
        await axios.post(`http://localhost:5000/api/v1/delete`,{id})
        .then((res)=>{
            console.log(res);
            if(res.data.success)
            {
                toast.success("User removed successfully.");
                setTimeout(() => {
                    window.location.reload();
                },3000);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const editRow=(id)=>{
        console.log(id);
        seteditid(id._id);
        setuserdata({name:id.name,email:id.email,mobno:id.mobno,id:id._id});
    }

    const updateData= async()=>{
        
        console.log(newUserData);
        await axios.post("http://localhost:5000/api/v1/updatedata",newUserData)
        .then((res)=>{
            console.log(res);
           if(res.data.success)
           {
             toast.success("Data updated successfully");
             setTimeout(() => {
                window.location.reload();
            },3000);
           }
        })
        seteditid('');
    }
   return(
    <>
    {
        userdata && 
        <div className="relative w-3/4 shadow-md sm:rounded-lg mt-20 m-auto ">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-cyan-950 text-white">
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Mob no
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {   userdata.map((item)=>(
               
                item._id!==editid ?
                <tr key={item._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
                </th>
                <td className="px-6 py-4">
                {item.email}
                </td>
                <td className="px-6 py-4">
                {item.mobno}
                </td>
                <td className="px-6 py-4">
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>editRow(item)}>Edit</button>
                    <span className="text-xl"> / </span>
                    <button className="font-medium text-red-500 dark:text-blue-500 hover:underline" onClick={()=>delete_user(item._id)}>Delete</button>

                </td>
              
            </tr>
            :
            <tr key={item._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <input type="text" defaultValue={item.name} onChange={(e)=>{newUserData.name=e.target.value;setuserdata({...newUserData})}}/>
                </th>
                <td className="px-6 py-4">
                <input type="text" defaultValue={item.email} onChange={(e)=>{newUserData.email=e.target.value;setuserdata({...newUserData})}}/>
                
                </td>
                <td className="px-6 py-4">
                <input maxLength="10" type="text" defaultValue={item.mobno} onChange={(e)=>{newUserData.mobno=e.target.value;setuserdata({...newUserData})}}/>
               
                </td>
                <td className="px-6 py-4">
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>{updateData()}} >Update</button>

                </td>
              
            </tr>
                
                ))
           
            }
              
        </tbody>
    </table>
</div>
    }

    


    </>
   ) 
}

export default Usertable;