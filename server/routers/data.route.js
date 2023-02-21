

const {DataModel} = require("../models/data.model");

const express = require("express")
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");



const modelRouter = express.Router();
modelRouter.use(bodyParser.json({ limit: "50mb" }));

// modelRouter.post("/create", async(req, res)=>{

//     const {end_year,title,likelihood ,intensity, sector, topic, insight, url, region, start_year, impact,added, published, country, relevance, pestle, source } = req.body
//     const Data_sets = await DataModel.create({end_year,title,likelihood ,intensity, sector, topic, insight, url, region, start_year, impact,added, published, country, relevance, pestle, source })
//     await Data_sets.save();
//     res.status(200).send({ message: "Item addeed", cart: Data_sets });
// })

modelRouter.post("/create", async(req, res) => {
    const data = req.body;
  
    const dataPromises = data.map(async item => {
      const { end_year, title, likelihood, intensity, sector, topic, insight, start_year} = item;
      const dataSet = await DataModel.create({ end_year, title, likelihood, intensity, sector, topic, insight, start_year });
      await dataSet.save();
      return dataSet;
    });
    
  
    const savedData = await Promise.all(dataPromises);
    res.status(200).send({ message: "Data added", data: savedData });
  });


modelRouter.get("/", async(req, res)=>{
    try{    
        const TotalData= await DataModel.find()
        res.send(TotalData);
    }catch(err){
        console.log(err)
        res.send({ message: err.message });
    }
})

 modelRouter.get("/:prodId", async (req, res) => {
    const id = req.params.prodId;
    try {
      const Datas = await DataModel.findById(id);
      res.send(Datas);
    } catch (error) {
      res.send({ message: error.message });
    }
  });
  
  module.exports = {modelRouter};