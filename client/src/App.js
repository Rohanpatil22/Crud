import React from "react";
import { useState } from "react";
import toast,{ Toaster } from "react-hot-toast";
import axios from 'axios';

function App() {

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
        axios.get("/api/v1/create")
        .then((res)=>{
          console.log(res);
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
   
      <div style={{border:"1px solid black",width:"23%",margin:"auto",marginTop:"20px"}}>
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
                <td style={{padding:"7px"}}><input id="nmobno" type="text" onChange={(e)=>handleOnchange('mobno',e.target.value)}/></td>
              </tr>
              <tr>
                <td  colSpan="2"  style={{textAlign:"center",padding:"7px"}}><button onClick={addData} style={{backgroundColor:"#327da8",color:"white",fontWeight:"bold",padding:"5px",width:"80px",marginTop:"10px",border:"none",borderRadius:"10px"}}>ADD</button></td>
              </tr>
            </tbody>
          </table>
      </div>
      <Toaster position="top-right"/>
    </>
  );
}

export default App;
