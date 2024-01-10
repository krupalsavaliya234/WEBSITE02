const {user}=require('../connection/connect')
const jwt=require('jsonwebtoken')
key="123123"
// const cookieParser = require('cookie-parser')
// const user = require('../connection/connect')

module.exports.newUser=async function newUser(req,res){
  try{
   
   const data=req.body;
   const user=await user.create(data)
   // console.log(user)
   res.json(user)
  }
  catch(err){
       res.status(404).json({
           message:"error in sign up code ",
           message2:err.message
       })
  }
}
      
   exports.logout = (req, res) => {
    const token = req.cookies.token;

    if (token) {
        try {
             res.clearCookie("token")
            return res.send("User has been logged out");
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Error verifying token" });
        }
    } else {
        return res.status(401).send("Login first");
    }
};



exports.login=async(req,res)=>{
  try{
        const data=req.body
        const user1=await user.findOne({email:req.body.email})
        // res.json(user1)
       if(user1)
       {
          
          if(req.body.password==user1.password)
          {
            // res.json("password match")
            const token =jwt.sign({email:req.body.email},key)
            user1.tokens=user1.tokens.concat({token:token})
            await user1.save()
            res.cookie("token",token,{httpOnly:true})

            // const find1=await user.findOne({tokens:token})
          
            return res.send(user1)
          }
          else{
             res.status(404).json("password does't match" )
          }
       }
       else{
        return res.status(404).json("user are not avalible")
       }
  }
  catch(err){
    res.send(
      err.message
    )
  }
}


