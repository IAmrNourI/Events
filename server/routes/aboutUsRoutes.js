const express = require("express");
const router = express.Router();
const aboutUsController = require("../controllers/aboutUsController");

const {
    aboutUsValidationRules,
} = require("../middlewares/validation/aboutUsValdiation");

const { validationResults } = require("../middlewares/validation/validationResult");

router.get("/", aboutUsController.getAboutUs);
router.post("/", aboutUsValidationRules, validationResults, aboutUsController.addAboutUs);

module.exports = router;
 