const jwt = require("jsonwebtoken");


// ACCESS TOKEN
const generateAccessToken = (
    userId
) => {
    return jwt.sign(
        {
            id: userId,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "15m",
        }
    );
};


// REFRESH TOKEN
const generateRefreshToken = (
    userId
) => {
    return jwt.sign(
        {
            id: userId,
        },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn: "7d",
        }
    );
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
};