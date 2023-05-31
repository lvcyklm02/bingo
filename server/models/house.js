const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
    houseid: String,
    memberids: [String]
});

// compile model from schema
module.exports = mongoose.model("house", HouseSchema);