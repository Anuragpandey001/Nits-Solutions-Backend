const bcrypt = require("bcryptjs");

const User = require("../models/User");

const asyncHandler = require(
    "../middleware/asyncHandler"
);

const CustomError = require(
    "../utils/customError"
);

const {
    generateAccessToken,
    generateRefreshToken,
} = require(
    "../utils/generateToken"
);

const jwt = require("jsonwebtoken");



// REGISTER USER
const registerUser = asyncHandler(
    async (req, res) => {

        const {
            name,
            email,
            password,
        } = req.body;

        // CHECK EXISTING USER
        const existingUser =
            await User.findOne({
                email,
            });

        if (existingUser) {
            throw new CustomError(
                "User already exists",
                400
            );
        }

        // HASH PASSWORD
        const hashedPassword =
            await bcrypt.hash(
                password,
                10
            );

        // CREATE USER
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        // SAFE USER RESPONSE
        const safeUser = {
            id: user._id,
            name: user.name,
            email: user.email,
        };

        // GENERATE TOKENS
        const accessToken =
            generateAccessToken(user._id);

        const refreshToken =
            generateRefreshToken(user._id);

        res.status(201).json({
            success: true,
            message:
                "User registered successfully",

            data: {
                user: safeUser,
                accessToken,
                refreshToken,
            },
        });
    }
);



// LOGIN USER
const loginUser = asyncHandler(
    async (req, res) => {

        const {
            email,
            password,
        } = req.body;

        // FIND USER
        const user = await User.findOne({
            email,
        });

        if (!user) {
            throw new CustomError(
                "User not found",
                401
            );
        }

        // CHECK PASSWORD
        const isPasswordMatched =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!isPasswordMatched) {
            throw new CustomError(
                "Invalid credentials",
                401
            );
        }

        // SAFE USER RESPONSE
        const safeUser = {
            id: user._id,
            name: user.name,
            email: user.email,
        };

        // GENERATE TOKENS
        const accessToken =
            generateAccessToken(user._id);

        const refreshToken =
            generateRefreshToken(user._id);

        res.status(200).json({
            success: true,
            message: "Login successful",

            data: {
                user: safeUser,
                accessToken,
                refreshToken,
            },
        });
    }
);



// REFRESH ACCESS TOKEN
const refreshAccessToken =
    asyncHandler(
        async (req, res) => {

            const { refreshToken } =
                req.body;

            if (!refreshToken) {
                throw new CustomError(
                    "Refresh token is required",
                    401
                );
            }

            // VERIFY TOKEN
            const decoded = jwt.verify(
                refreshToken,
                process.env.JWT_REFRESH_SECRET
            );

            // GENERATE NEW ACCESS TOKEN
            const newAccessToken =
                generateAccessToken(
                    decoded.id
                );

            res.status(200).json({
                success: true,
                message:
                    "Access token refreshed",

                data: {
                    accessToken:
                        newAccessToken,
                },
            });
        }
    );



module.exports = {
    registerUser,
    loginUser,
    refreshAccessToken,
};