import React   from 'react';

import { useEffect,useState } from 'react';
import Navbar from './navbar/Navbar';
import Section from './section/Section';
import Section1 from './Section2/Section1';
import '../home-page/home.css'
import {Posts}from "../DummyData/Data"
import axios from "axios"


function Home() {
  const [file1,setFile]=useState(Posts)
  
  const  getProduct= async()=>{
    const data1=await axios.get("http://127.0.0.1:5000/getItem")
    const dataset=data1.data
    // console.log(dataset[0].discount)
    setFile(dataset)  
    console.log(file1)

    
  }
  useEffect(()=>
  {
      getProduct()
  },[])
  return (
    <div className='home'>
      <Navbar />
      <Section />
      <div className='c1'>
    {file1.map((item,index)=>(
    <Section1 key={index} data={item}/>

    ))}
      {/* <h1></h1> */}
      </div>
    </div>
  );
}

export default Home;
