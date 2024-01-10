import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './CSS/sign.css'
function SignUp() {
  
  const [form1, setForm] = useState({});
  const navigate=useNavigate()
  const handleChange = (e) => {
    setForm({
      ...form1,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/newUser', {
      method: 'POST',
      body: JSON.stringify(form1),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    if (data.email) {
      navigate("/signIN")
      window.alert('Registration successful please login in');
    
    } else {
      window.alert('Please check your details');
    }
  };

  return (
    <div className='main'>
    <h1 className='head'> SIGN IN  </h1>
      <form onSubmit={handleSubmit}>
        <label className='lable' htmlFor="name">UserName:</label>
        <input  className="input" type="text" id="name" name="name" onChange={handleChange} /><br />
        <label className='lable' htmlFor="email">Email:</label>
        <input className='input' type="email" id="email" name="email" onChange={handleChange} /><br />
        <label  className='lable' htmlFor="password">Password:</label>
        <input className='input' type="password" id="password" name="password" onChange={handleChange} /><br /><br />
        <input  className="submit" type="submit" value="Submit" />
      </form>
      <h1 className='thapa'>ALREGISTER RUGISTER:<Link className='link' to="/signIn">LOGIN </Link> </h1>
      
    </div>
  );
}

export default SignUp;
