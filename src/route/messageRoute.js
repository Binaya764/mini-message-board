const {Router} = require("express");
const messageRouter = Router();

 const messages = 
 [{
     text: "Hi there!",
     user: "Bigyan",
     added: new Date()
 },
 {
     text: "Hello world!",
     user: "sudha",
     added: new Date()

 }];

messageRouter.get("/",(req,res)=>{
  
    res.render("message",{title: "Mini Messageboard", messages: messages});
});

messageRouter.get("/new",(req,res)=>{
    res.send("new message");
});
module.exports = messageRouter;