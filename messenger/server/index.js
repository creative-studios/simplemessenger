require("dotenv").config();
const express = require("express");
const server = express();
const PORT=8081||process.env.PORT;
const bodyParser=require("body-parser");
const cors = require("cors");
const errorHandler = require("./handlers/error")
const authRoutes = require("./routes/auth");
const messagesRoutes = require("./routes/messages");
const { logninRequired,ensureCorrectUser } = require("./middleware/auth");
const messagelist =require("./models/message");
server.use(cors());
server.use(bodyParser.urlencoded({extended:true}));
server.use("/api/auth",authRoutes);
server.use("/api/users/:id/messages",logninRequired,ensureCorrectUser,messagesRoutes);
server.get("/api/messages",logninRequired,async function(req,res,next){
    try{
        let messages =await messagelist.find().sort({createAt:"desc"}).populate("user",{
            username:true,
            profileImageUrl:true
        });
        return res.status(200).json(messages);
    }catch(err){
        return next(err);
    }
});
server.use(function(req,res,next){
    let err=new Error("Page Not Found!");
    err.status=404;
    next(err);
});


server.use(errorHandler);
server.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});

