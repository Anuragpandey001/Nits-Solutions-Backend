const Note = require("../models/Note");

const asyncHandler = require(
    "../middleware/asyncHandler"
);

const CustomError = require(
    "../utils/customError"
);


// GET ALL NOTES
const getNotes = asyncHandler(
    async (req, res) => {

        const search =
            req.query.search || "";

        const notes = await Note.find({
            user: req.user.id,

            title: {
                $regex: search,
                $options: "i",
            },
        }).sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            message: "Notes fetched successfully",
            count: notes.length,
            data: notes,
        });
    }
);


// ADD NOTE
const addNote = asyncHandler(
    async (req, res) => {

        const { title, note } = req.body;

        const newNote = await Note.create({
            user: req.user.id,
            title,
            note,
        });

        res.status(201).json({
            success: true,
            message: "Note added successfully",
            data: newNote,
        });
    }
);


// DELETE NOTE
const deleteNote = asyncHandler(
    async (req, res) => {

        const note = await Note.findOne({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!note) {
            throw new CustomError(
                "Note not found",
                404
            );
        }

        await note.deleteOne();

        res.status(200).json({
            success: true,
            message:
                "Note deleted successfully",
        });
    }
);

module.exports = {
    getNotes,
    addNote,
    deleteNote,
};