const {check} = require('express-validator');

exports.cardValidationRules = [
    check('title').trim().notEmpty().withMessage("Title can't be empty."),
    check('description').trim().notEmpty().isLength({min: 10}).withMessage('Description is required and must be at least 10 characters long.'),
    check('image').trim().notEmpty().withMessage('Image is required.'),
    check("type").trim().notEmpty().isIn(["product", "portfolio"]).withMessage("The type must be either 'product' or 'portfolio'."),
]


exports.updateCardValidationRule = [
    check('title').trim().notEmpty().withMessage("Title can't be empty."),
    check('description').trim().notEmpty().isLength({min: 10}).withMessage('Description is required and must be at least 10 characters long.'),
    check('image').trim().notEmpty().withMessage('Image is required.'),
]