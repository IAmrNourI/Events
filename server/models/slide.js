const mongoose = require("mongoose");

const slideSchema = new mongoose.Schema({

    title: {
        type: String,
    },
    image: {
        type: String,
    },
    details: {
        type: String,
    },
    position: {
        type: Number,
        required: true,
        unique: true
    }
    
})

const Slide = mongoose.model("Slide", slideSchema);
module.exports = Slide;