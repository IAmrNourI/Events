const Card = require("../models/card");
const Details = require("../models/details");
const deleteImage = require("../utils/deleteImage");

exports.getCards = async (req, res) => {
  try {
    const { type } = req.query;
    const cards = await Card.find({ type }).select('-__v -createdAt -updatedAt');

    const baseUrl = `${req.protocol}://${req.get("host")}`;

    const cardsWithUrl = cards.map((card) => {
      const obj = card.toObject();
      obj.imageUrl = `${baseUrl}/uploads/${card.image}`;
      return obj;
    });

    res.status(200).json({
      message: "Cards fetched successfully",
      data: cardsWithUrl,
      error: false,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

exports.getHomePortfolio = async (req, res) => {
  try {
    const cards = await Card.find({ type : "portfolio" }).sort({ createdAt: 1 }).limit(6).select('-__v -createdAt -updatedAt');

    const baseUrl = `${req.protocol}://${req.get("host")}`;

    const cardsWithUrl = cards.map((card) => {
      const obj = card.toObject();
      obj.imageUrl = `${baseUrl}/uploads/${card.image}`;
      return obj;
    });

    res.status(200).json({
      message: "Cards fetched successfully",
      data: cardsWithUrl,
      error: false,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

exports.addCard = async (req, res) => {
  try {
    const { type } = req.query;
    const { title, description, image } = req.body;
    const newCard = new Card({ title, description, image, type });
    await newCard.save();
    res.status(201).json({
      message: "Card added successfully",
      data: newCard,
      error: false,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

exports.updateCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const card = await Card.findById(id);
    if (!card) {
      return res.status(404).json({ message: "Card not found", error: true });
    }
    if(card.image !== image){
      deleteImage(card.image)
    }
    card.title = title;
    card.description = description;
    card.image = image;
    await card.save();
    res.status(200).json({
      message: "Card updated successfully",
      data: card,
      error: false,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);
    if (!card) {
      return res.status(404).json({ message: "Card not found", error: true });
    }

    await Card.findByIdAndDelete(id);
    deleteImage(card.image);

    res.status(200).json({
      message: "Card deleted successfully",
      error: false,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};


exports.addCardDetails = async (req, res) => {
  try {
    const { id, title, description, image } = req.body;
    const card = await Card.findById(id);
    if (!card) {
      return res.status(404).json({ message: "Card not found", error: true });
    }
    const newDetails = new Details({ title, description, image, card: id });
    await newDetails.save();

    res.status(200).json({
      message: "Card details updated successfully",
      data: card,
      error: false,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

exports.getCardDetails = async (req, res) => {
  try {
    const { id } = req.query;
    const card = await Card.findById(id).select('-__v -createdAt -updatedAt');
    if (!card) {
      return res.status(404).json({ message: "Card not found", error: true });
    }
    const details = await Details.find({ card: id }).select('-__v -createdAt -updatedAt');

    const baseUrl = `${req.protocol}://${req.get("host")}`;

    const cardWithImageUrl = {
      ...card.toObject(),
      imageUrl: `${baseUrl}/uploads/${card.image}`,
    };

    const detailsWithImageUrl = details.map((detail) => ({
      ...detail.toObject(),
      imageUrl: `${baseUrl}/uploads/${detail.image}`,
    }));

    res.status(200).json({
      message: "Card details fetched successfully",
      data: { cardWithImageUrl, detailsWithImageUrl },
      error: false,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

exports.deleteCardDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await Details.findById(id);
    if (!details) {
      return res
        .status(404)
        .json({ message: "Details not found", error: true });
    }
    await Details.findByIdAndDelete(id);
    deleteImage(details.image);
    res.status(200).json({
      message: "Card details deleted successfully",
      error: false,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

exports.updateCardDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const details = await Details.findById(id);
    if (!details) {
      return res
       .status(404)
       .json({ message: "Details not found", error: true });
    }
    if(image !== details.image){
      deleteImage(details.image);
    }

    details.title = title;
    details.description = description;
    details.image = image;

    await details.save();

    res.status(200).json({
      message: "Card details updated successfully",
      data: details,
      error: false,
    });

  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};
exports.toggleDetails = async (req, res) => {
  try{
    const { id } = req.params;
    const card = await Card.findById(id);
    if (!card) {
      return res
       .status(404)
       .json({ message: "Card not found", error: true });
    }
    card.isDetailed =!card.isDetailed;
    await card.save();
    res.status(200).json({
      message: "Card details updated successfully",
      data: card,
      error: false,
    });

  }catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
}

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      //req.file without s if single file in routes
      return res.status(400).json({ message: "No file uploaded" });
    }
    return res
      .status(200)
      .json({
        message: "File Successfully Uploaded",
        image: req.file.filename,
      }); 
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
