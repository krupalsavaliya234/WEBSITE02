const mongoose = require("mongoose");
// const validate = require("validate");

mongoose.connect('mongodb://127.0.0.1:27017/DataBase2')
.then((db)=>{
   console.log('mongoose connect ')

})
.catch((err)=>{
   console.log(err)
})
    
var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, "Please fill a valid email address"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    password: {
        type: String,
        // required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ]
});

const userSchema1= mongoose.Schema(
    {
        username:String,
        

        Details:String,
        price:Number,
        discount:Number
    }
)
const imageSchema=mongoose.Schema(
    {
        Image:String,
        username:String,
        Details:String,
        price:Number,
        discount:Number,
    }
)
const image1=mongoose.model("images",imageSchema);
const user = mongoose.model("user", userSchema);
const Data = mongoose.model("Data", userSchema1);

module.exports={Data,user,image1}