const {check} = require('express-validator');

exports.aboutUsValidationRules = [
    check('title').trim().notEmpty().matches(/^[a-zA-Z0-9أ-ي ]+$/).withMessage('Title is required and must contain only alphanumeric characters and spaces.'),
    check('description').trim().notEmpty().isLength({min: 10}).withMessage('Description is required and must be at least 10 characters long.'),
    check('title2').optional().trim().notEmpty().matches(/^[a-zA-Z0-9أ-ي ]+$/).withMessage('Title is required and must contain only alphanumeric characters and spaces.'),
    check('description2').optional().trim().notEmpty().isLength({min: 10}).withMessage('Description is required and must be at least 10 characters long.'),
    check('title3').optional().trim().notEmpty().matches(/^[a-zA-Z0-9أ-ي ]+$/).withMessage('Title is required and must contain only alphanumeric characters and spaces.'),
    check('description3').optional().trim().notEmpty().isLength({min: 10}).withMessage('Description is required and must be at least 10 characters long.'),
    check("language").trim().notEmpty().isIn(["ar", "en"]).withMessage("The language must be either 'ar' or 'en'."),
]