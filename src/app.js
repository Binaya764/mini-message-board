const express = require("express");
const app = express();
const messageRouter = require("./route/messageRoute")


const PORT = 3000;

app.use("/message", messageRouter);
app.use("/message", messageRouter);
app.get("/",(req,res)=>{
    res.send("Successfully connected!");
})
app.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}`);
})