const { body } = require(
    "express-validator"
);

const addNoteValidation = [

    // TITLE VALIDATION
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required")

        .isLength({ min: 3 })
        .withMessage(
            "Title must be at least 3 characters"
        )

        .isLength({ max: 100 })
        .withMessage(
            "Title cannot exceed 100 characters"
        )

        .escape(),


    // NOTE VALIDATION
    body("note")
        .notEmpty()
        .withMessage("Note is required")

        .isString()
        .withMessage("Note must be a string")

        .isLength({ max: 5000 })
        .withMessage(
            "Encrypted note exceeds limit"
        ),
];

module.exports = {
    addNoteValidation,
};