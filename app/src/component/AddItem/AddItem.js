import React, { useState } from 'react';
import axios from 'axios';
import '../AddItem/additem.css'
import { Link } from 'react-router-dom'

import { AiOutlineArrowLeft } from "react-icons/ai";
function AddItem() {
 

  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  
  const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.alert("Data Added SucessFully")
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('username',data.username)
    formData.append('Details',data.Details)
    formData.append('price',data.price)
    formData.append('discount',data.discount)
    
    window.location.href = '/'   
    try {
      axios.post('http://127.0.0.1:5000/AddFile',formData)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
    //  res.sendFile("Home.js")
     
    } catch (err) {
      console.error(err);
      alert('File upload failed.');
    }
  }


  return (
    <div className='main2'>
  <Link to='/'><AiOutlineArrowLeft id='log'/></Link> 
      <div className='a1'>
        <h1>ADD NEW ITEM</h1>
        <div className='form-container'>
          <form className='a2' onSubmit={handleSubmit} encType="multipart/form-data">
            <div className='a3' id='o2'>
              <label htmlFor="Image" id='o1'>
                Click To Add Your New Image
              </label>
              <input name='Image' id='Image' accept='image/*' type='file' onChange={handleFile}></input><br />
            </div><br />
            {/* </div> */}
            <div className='a3'>
              <label htmlFor="username" className='o3'>
                Enter UserName
              </label>
              <input name='username' id='username' type='text' className='i1' onChange={handleChange}></input><br />
            </div>
            <div className='a3'>
              <label htmlFor="Details" className='o3'>
                Enter Laptop Details:
              </label>
              <input name='Details' id='Details' type='text' className='i1' onChange={handleChange}></input><br />
            </div>
            <div className='a3'>
              <label htmlFor="price" className='o3'>
                Enter Laptop Price:
              </label>
              <input name='price' id='price' type='number' className='i1' onChange={handleChange}></input><br />
            </div>
            <div className='a3'>
              <label htmlFor="discount" className='o3'>
                Enter Laptop Discount Percentage:
              </label>
              <input name='discount' id='discount' type='number' className='i1' onChange={handleChange}></input><br />
            </div>
            {/* <div className='a3'> */}
            <div className='a3'>
              <input className="o4" type="submit"   value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddItem;