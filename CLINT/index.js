const express=require('express')
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const item=require('./public/request/signIn')
const Item=require("./public/request/AddItem")
const cookieParser=require("cookie-parser")
const multer=require('multer')
// const {image1} = require("../connection/connect");

// const Item = require('./mongoose-model');
const path=require("path")

app.use(cors())

app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json())


app.post('/newUser',item.newUser)
app.get('/logout',item.logout)
app.post('/login',item.login)



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
  
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
   
    const uniqueFileName = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueFileName);   
},
});

const upload = multer({ storage: storage });

app.post('/AddFile',upload.single('file'),Item.AddImage)
app.post('/AddItem',Item.AddItem)
app.get('/getItem',Item.getItem)
app.delete('/delete/:id',Item.getDelete)

app.listen(5000,()=>{
    console.log("app listen on post")
})