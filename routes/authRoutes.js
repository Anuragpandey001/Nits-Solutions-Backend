const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser,
    refreshAccessToken,
} = require(
    "../controllers/authController"
);

const {
    registerValidation,
    loginValidation,
} = require(
    "../middleware/validators/authValidator"
);

const validationMiddleware = require(
    "../middleware/validationMiddleware"
);






// REGISTER
router.post(
    "/register",
    registerValidation,
    validationMiddleware,
    registerUser
);



// LOGIN
router.post(
    "/login",
    loginValidation,
    validationMiddleware,
    loginUser
);



// REFRESH TOKEN
router.post(
    "/refresh-token",
    refreshAccessToken
);


module.exports = router;