import React from "react";
import { useState,useEffect } from "react";
import toast,{ Toaster } from "react-hot-toast";
import axios from 'axios';
import Usertable from "./table";


function App() {

  const [userData,setUserData]=useState('');

  useEffect(()=>{
    const fetchdata=async ()=>{
      await axios.get("http://localhost:5000/api/v1/getdata")
    .then((res)=>{
      console.log(res);
      setUserData(res.data);
    },[])
    .catch((err)=>{
      console.log(err);
    })
    }
    fetchdata();
  },[])

  const[info,setInfo]=useState({name:"",email:"",mobno:""});
  function handleOnchange(field,val)
  {
    if(field==='name')
    {
      info.name=val;
      setInfo({...info});
    }
    else if(field==='email')
    {
      info.email=val;
      setInfo({...info});
    }
    else if(field==='mobno')
    {
      info.mobno=val;
      setInfo({...info});
    }
 
  }

  const addData=async ()=>
  {
    if(info.name!=="" && info.email!=="" && info.mobno!=="")
    {
      console.log("request send!!!")
       await axios.post("http://localhost:5000/api/v1/create",info)
        .then((res)=>{
          console.log(res);
          if(res.data.success)
          {
            toast.success("User dada added successfully.");
            setTimeout(() => {
              window.location.reload();
            },3000);
          }
          else{
            toast.error("Something went wrong");
          }
        })
        .catch((err)=>{
          console.log(err)
        })
    }
    else{
      toast.error("Please fill data into the all fields.")
    }
  }
  return (
    <>
   
      <div style={{border:"1px solid black",width:"25%",margin:"auto",marginTop:"20px"}} className="bg-slate-300 rounded-xl border-none p-5">
          <table >
            <tbody>
              <tr >
                <td style={{padding:"7px"}}><label htmlFor="name">Name</label></td> 
                <td style={{padding:"7px"}}><input id="name" type="text" onChange={(e)=>handleOnchange('name',e.target.value)}/></td>
              </tr>
              <tr>
                <td style={{padding:"7px"}}><label htmlFor="email">Email</label></td> 
                <td style={{padding:"7px"}}><input id="email" type="text" onChange={(e)=>handleOnchange('email',e.target.value)}/></td>
              </tr>
              <tr>
                <td style={{padding:"7px"}}><label htmlFor="mobno">Mobile Number</label></td> 
                <td style={{padding:"7px"}}><input id="nmobno" maxLength="10" type="text" onChange={(e)=>handleOnchange('mobno',e.target.value)}/></td>
              </tr>
              <tr>
                <td  colSpan="2"  style={{textAlign:"center",padding:"7px"}}><button onClick={addData} style={{backgroundColor:"#327da8",color:"white",fontWeight:"bold",padding:"5px",width:"80px",marginTop:"10px",border:"none",borderRadius:"10px"}}>ADD</button></td>
              </tr>
            </tbody>
          </table>
      </div>
      <Toaster position="top-right"/>
      <Usertable User={userData.allUser}/>
    </>
  );
}

export default App;
