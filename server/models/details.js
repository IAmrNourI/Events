const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
    card : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
        required: [true, "Card is required"  ],
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    }
    
})

const Details = mongoose.model("Details", detailsSchema);
module.exports = Details;