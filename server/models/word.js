const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema(
  {
    word:{
        type: String,
        required: [true, "Word is required"],
        unique: [true, "Word must be unique"],
    }
  },
  { timestamps: true }
);

const Word = mongoose.model("Word", wordSchema);
module.exports = Word;
