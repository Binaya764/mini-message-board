const {Router} = require("express");
const messageRouter = Router();

 const messages = 
 [{
     text: "Hi there!",
     user: "Bigyan",
     added: new Date()
 },
 {
    text: "#!",
    user: "shebang",
    added: new Date()
 }
 ];

messageRouter.get("/",(req,res)=>{
  
    res.render("message",{title: "Mini Messageboard", messages: messages});
});

messageRouter.get("/new",(req,res)=>{
    //res.send("new message");
    res.render("form",{title: "Mini messageboard", messages: messages  });
});

messageRouter.post("/new",(req,res)=>{
    const authorName = req.body.messageUser;
    const authorText = req.body.messageText;

    messages.push({text: authorText, user: authorName, added: new Date()});
    
    res.redirect("/");
});
module.exports = messageRouter;