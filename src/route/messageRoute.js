const {Router} = require("express");
const messageRouter = Router();

messageRouter.get("/",(req,res)=>{
    res.send("message default!");
});

messageRouter.get("/new",(req,res)=>{
    res.send("new message");
});
module.exports = messageRouter;