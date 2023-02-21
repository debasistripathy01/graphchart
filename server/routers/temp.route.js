
const express = require("express")

const bodyParser = require("body-parser");


const tempRouter = express.Router();


const {TempModel} = require("../models/temp.model");

tempRouter.use(bodyParser.json({limit: "50mb"}));


tempRouter.post("/create", async(req, res)=>{
    const data = req.body;

    const dataPromises = data.map(async item => {
        const { id, date, average_temp } = item;
        const dataInfo = await TempModel.create({id, date, average_temp})
        await dataInfo.save();
        return dataInfo;
      });

      const savedData = await Promise.all(dataPromises);
    res.status(200).send({ message: "Data added", data: savedData });
});


tempRouter.get("/", async(req, res)=>{
    try{    
        const TotalData= await TempModel.find()
        res.send(TotalData);
    }catch(err){
        console.log(err)
        res.send({ message: err.message });
    }
})

module.exports={tempRouter}