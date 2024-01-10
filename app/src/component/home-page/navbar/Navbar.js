import React from 'react'
import '../navbar/navbar.css'
import { Link } from 'react-router-dom'
// import Home from '../Home'
// import AddItem from '../../AddItem/AddItem'
function Navbar() {
  return (
    <div className='main1'>
       <div className='logo'>
           <span>B</span>UGS
       </div>
       <div className='details'>
        <li>
            <ul><Link className='p1' to="/">Home</Link></ul>
            <ul><Link className='p1' to="/additem">AddItem</Link></ul>
            <ul>My Cart</ul>
            <ul><Link className='p1' to='/logout'>LogOut</Link> </ul>
            
        </li>
       </div>

    </div>
  )
}

export default Navbar
