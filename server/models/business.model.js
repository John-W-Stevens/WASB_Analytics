const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
    nameOfFirm: String,
    tradeName: String,
    category: String,
    owner: String,
    address: String,
    city: String,
    state: String,
    zipCode: String,
    description: String,
}, {timestamps: true});
module.exports.Business = mongoose.model("Business", BusinessSchema)
