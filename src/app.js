const express = require("express");
const app = express();
const messageRouter = require("./route/messageRoute")
const path = require("node:path");

const PORT = 3000;

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use(express.static('public'));

app.use("/", messageRouter);
app.use("/message", messageRouter);



app.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}`);
})