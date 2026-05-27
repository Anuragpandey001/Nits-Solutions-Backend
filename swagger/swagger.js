const swaggerJsDoc = require(
    "swagger-jsdoc"
);

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "Secure Notes API",

            version: "1.0.0",

            description:
                "Secure Notes App API Documentation",
        },

        servers: [
            {
                url: "http://localhost:5000",
                description: "Local Development Server",
            },

            {
                url:
                    "https://nits-solutions-backend.onrender.com",
                description: "Production Server",
            },
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",

                    scheme: "bearer",

                    bearerFormat: "JWT",
                },
            },
        },

        security: [
            {
                bearerAuth: [],
            },
        ],
    },

    apis: [
        "./docs/*.js"
    ]
};

const swaggerSpec = swaggerJsDoc(
    swaggerOptions
);

module.exports = swaggerSpec;