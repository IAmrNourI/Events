const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");
const { isAuth } = require("../middlewares/auth/isAuth");
const upload = require("../middlewares/multerMiddleware");


router.get("/", cardController.getCards);
router.get("/home-portfolio", cardController.getHomePortfolio);

router.post("/", isAuth, cardController.addCard);

router.put("/:id", isAuth, cardController.updateCard);

router.post("/upload", upload.single("image"), cardController.uploadFile);


module.exports = router;
