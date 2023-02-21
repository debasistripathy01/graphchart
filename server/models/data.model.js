const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    
    likelihood: String
}, {
    versionKey: false
})


const DataModel = mongoose.model("info", dataSchema);
module.exports={DataModel};



// impact: String,
//     added: String,
//     published: String,
//     country: String,
//     relevance: Number,
//     pestle: String, 
//     source: String,
//     title: String,