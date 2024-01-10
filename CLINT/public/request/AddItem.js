const { response } = require("express");
const {Data,image1} = require("../connection/connect");
module.exports.AddItem=async function AddItem(req,res){

    try{
     
     const data=req.body;
    //  const user=await Data.create(data)
     console.log(data)
      res.json(data)
      }
      
    
    catch(err){
       return   res.json({
            //  message:"error in sign up code ",
             message2:err.message
         })
    }
 }

 module.exports.getItem=async function getItem(req,res)
 {
  try{
      const data=await image1.find()

     return  res.json(data)
  }
  catch(err)
  {
   return res.json({
    message:err.message
  })
  }

 }

 module.exports.AddImage=async function AddImage(req,res)
 {
  // console.log(req.body.username)
  try{
     const res1=  image1.create({
      Image:req.file.filename,
      username:req.body.username,
      discount:req.body.discount,
      Details:req.body.Details,
      price:req.body.price
    })
      
    
     return res.json(res1)
      
  }
  catch(err)
  {
    return res.json({
      message:err.message
    })
  }
 }
 module.exports.getDelete=async function getDelete(req,res)
 {
  try{  const id=req.params.id;
    const user=await image1.findByIdAndDelete(id)
      // res.redirect('/signIn'.)
    res.json({
        message:"id can be deleted",
        // user:user
    })
}
catch(err){
    res.json({
        message:err
    })
}
 }