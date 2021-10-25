const mongoose = require("mongoose");

const bcrypt=require("bcrypt");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    profileImageUrl:{
        type:String,
        required:false
    },
    messages:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Message",
    }]
});
userSchema.pre("save",async function(next){
    try{
        if(!this.isModified("password")){
            return next();
        }
        let hashedPassword=await bcrypt.hash(this.password,10);
        this.password=hashedPassword;

        return next();
    }catch(err){
        next(err);
    }
});
userSchema.methods.comparePassword=async function(candidatePassword,next){
    try{
        let isMatch=await bcrypt.compare(candidatePassword,this.password);
        console.log(isMatch);
        return isMatch;
    }catch(err){
        next(err);
    }
}
const User =  mongoose.model("User",userSchema);

module.exports=User;