import React, { useState } from 'react'

function App() {
  const [data,setData]=useState({
    name:"",email:"",password:""
  })
  const handleSubmit=()=>{
    if(!name || !email || !password){
      alert("enter valid input")
    }else{
      
      console.log(data);
    }
    
  }
  return (
    <div className='d-flex justify-content-center align-items-center ' style={{height:"100vh"}}>
      <div className='w-50 d-flex flex-column gap-3'>
        <input type="text  "className='form-control p-2 rounded' onChange={(e)=>setData({...data,name:e.target.value})} placeholder='name' required />
        <input type="text  "className='form-control p-2 rounded' onChange={(e)=>setData({...data,email:e.target.value})} placeholder='email' required />
        <input type="text" className='form-control p-2 rounded' onChange={(e)=>setData({...data,password:e.target.value})} placeholder='password' required />
        <button className='btn btn-success' onClick={handleSubmit}>submit</button>
      </div>
      
    </div>
  )
}

export default App
