import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function SignIn() 
{
  const [data,setdata]=useState({})
  const handlechange=(e)=>{
     
    setdata({
        ...data,
        [e.target.name]:e.target.value  
            })

  }
  const handlesubmit=async(e)=>{
    e.preventDefault()
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    });
     
    const res=await response.json()
    
    if(res.email)
    {
      window.alert("your are log in")

    }
    else{
      window.alert(res)
    }

  }

  return (
    <div className='main'>
             <h1 className='head'>LOGIN </h1>
        <form onSubmit={handlesubmit} >
        
            <label className='lable' for="email">Email:</label>
            <input className='input' type='email' id='email'name='email' placeholder='Enter Rugistered Email' onChange={handlechange}></input><br/>
            <label  className="lable" for="password">password:</label>
            <input className='input' type='password' id='password' name='password' placeholder='Enter your password' onChange={handlechange}></input><br></br>

            <input className='submit' type='submit'  name='button'></input>

          </form>
        <h1 className='thapa'>  FOR NEW USER:<Link className='link' to="/signup">SIGN UP </Link></h1>
      
    </div>
  )
}

export default SignIn