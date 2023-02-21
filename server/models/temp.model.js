const mongoose = require("mongoose");

const tempData = new mongoose.Schema({
    id: Number,
    date: String,
    average_temp: String
}, {
    versionKey: false
})


const TempModel = mongoose.model("temp", tempData);
module.exports = {TempModel};