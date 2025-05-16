const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    },

    type: {
        type: String,
        required: [true, "Type is required"],
        enum: ["product", "portfolio"]
    },

    isDetailed: {
        type: Boolean,
        required: true,
        default: false,
    }
})

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;