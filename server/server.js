

const express = require("express");

// const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
app.use(express.json())
const {connection} = require("./config/db");
const {modelRouter} = require("./routers/data.route");
const {tempRouter} = require("./routers/temp.route")
const bodyParser = require("body-parser");


app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors({
    origin : "*"
}))


app.use("/", (req, res)=>{
    res.send("Home Page");
})



app.use("/temp", tempRouter);
app.use("/data", modelRouter);

app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log(`mongoDB connected in ${process.env.mongoURL}` )
    }catch(err){
        console.log(err)
    }
    console.log("Connnected to MongoAtlas")
})