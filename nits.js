const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const swaggerUi = require(
    "swagger-ui-express"
);

const swaggerSpec = require(
    "./swagger/swagger"
);

const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/notesRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");
const CustomError = require("./utils/customError");


dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

app.get("/", (req, res) => {
    res.send("Nits Solutions Assignment  API Running...");
});


// 404 Route Handler
app.use((req, res, next) => {
    next(
        new CustomError(
            `Route ${req.originalUrl} not found`,
            404
        )
    );
});


// Global Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});