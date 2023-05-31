const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
    contentArray: [String],
    completed_mask: [Boolean],
    bingoStatus: Boolean
});

// compile model from schema
module.exports = mongoose.model("user", BoardSchema);