  import React from 'react';
  import './section.css'
import axios from 'axios';
import { redirect } from 'react-router-dom';

  function  Section1(props) {
    function handleClick(event) {
      
      const id = event.currentTarget.getAttribute('data-id');
     console.log(id)
     axios.delete(`http://127.0.0.1:5000/delete/${id}`)
     .then((response) => {
      
      console.log('Deleted:', response.data);
      // redirect("/")
      window.location.reload();
    })
    .catch((error) => {
      // Handle errors here
      console.error('Error:', error);
    });

    }
    return (
      
        
        <div className='class6'>
        <div className='class7'><img className="class9"  src={`http://127.0.0.1:5000/images/${props.data.Image}`} alt='' />
        <img className='class8' data-id={props.data._id} onClick={handleClick} src='image/love.png' alt='Love' />
        </div>
        <div className='class5'>
          <h2>{props.data.Details}</h2>
          <h6>Price:{props.data.price} <span>  Off  {props.data.discount}%</span></h6>

          
        </div>    
      
        
      </div>
    );
  }

  export default Section1;