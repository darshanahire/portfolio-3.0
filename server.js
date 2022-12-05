const express = require("express")
const app = express();

require("dotenv").config();

const port = process.env.PORT || 5000;

const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
// const router=require('./routes/route');

require("./db/conn");

app.use(cors())
app.use(express.json());
app.use(cookieParser());
// app.use(router)

app.use(express.static("client/build"));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"))
})


app.listen(port,()=>{
    console.log(`server start at port number ${port}`);
})