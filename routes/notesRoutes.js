const express = require("express");

const router = express.Router();

const authMiddleware = require(
    "../middleware/authMiddleware"
);

const validationMiddleware = require(
    "../middleware/validationMiddleware"
);

const {
    addNoteValidation,
} = require("../middleware/validators/notesValidator");

const {
    getNotes,
    addNote,
    deleteNote,
} = require("../controllers/noteController");


router.get(
    "/",
    authMiddleware,
    getNotes
);

router.post(
    "/",
    authMiddleware,
    addNoteValidation,
    validationMiddleware,
    addNote
);

router.delete(
    "/:id",
    authMiddleware,
    deleteNote
);

module.exports = router;