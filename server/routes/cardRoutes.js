const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");
const { isAuth } = require("../middlewares/auth/isAuth");
const isRole = require("../middlewares/auth/isRole");
const upload = require("../middlewares/multerMiddleware");

const {
  cardValidationRules,
  updateCardValidationRule,
} = require("../middlewares/validation/cardValidation");


const {
  validationResults,
} = require("../middlewares/validation/validationResult");

router.get("/", cardController.getCards);
router.get("/home-portfolio", cardController.getHomePortfolio);


router.post(
  "/",
  isAuth,
  isRole("admin"),
  cardValidationRules,
  validationResults,
  cardController.addCard
);


router.put(
  "/:id",
  isAuth,
  isRole("admin"),
  updateCardValidationRule,
  validationResults,
  cardController.updateCard
);


router.post("/upload", upload.single("image"), cardController.uploadFile);

router.put("/togggle-details/:id", isAuth, isRole("admin"), cardController.toggleDetails);



module.exports = router;
