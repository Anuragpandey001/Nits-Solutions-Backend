# Secure Notes App Backend

A secure and scalable Notes Management REST API built using Node.js, Express.js, and MongoDB.

---

# Features

## Authentication
- User Registration
- User Login
- JWT Access Token
- JWT Refresh Token
- Protected Routes

---

## Notes Management
- Add Notes
- Get User Notes
- Delete Notes
- Search Notes

---

## Security
- Password Hashing using bcrypt
- Input Validation
- JWT Authentication
- XSS Protection
- Ownership-Based Authorization

---

## Developer Features
- Swagger API Documentation
- Centralized Error Handling
- Async Error Handling
- Professional Folder Structure

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- express-validator
- dotenv
- Swagger

---

# Folder Structure

```txt
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── noteController.js
│
├── docs/
│   ├── auth.swagger.js
│   └── note.swagger.js
│
├── middleware/
│   ├── validators/
│   │   ├── authValidator.js
│   │   └── notesValidator.js
│   │
│   ├── asyncHandler.js
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── validationMiddleware.js
│
├── models/
│   ├── User.js
│   └── Note.js
│
├── routes/
│   ├── authRoutes.js
│   └── notesRoutes.js
│
├── swagger/
│   └── swagger.js
│
├── utils/
│   ├── customError.js
│   └── generateToken.js
│
├── .env
├── nits.js
├── package.json
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

## 2. Navigate To Project Folder

```bash
cd backend
```

---

## 3. Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=mongodb+srv://anuragpandey96674_db_user:j8n1C57Avj1MTtXm@nits-solutions-assignme.cf1uetx.mongodb.net/?appName=nits-solutions-assignment

JWT_SECRET=nits-solutions-assignment-secret-key

JWT_REFRESH_SECRET=refresh_secret_key

# These credentials are exposed only for assignment evaluation purposes.

```

---

# Run The Server

## Development Mode

```bash
node nits.js
```

---



# API Base URLs

## Local Development
http://localhost:5000/api

## Production (Live Backend)
https://nits-solutions-backend.onrender.com/api

---

# Swagger Documentation

```txt
http://localhost:5000/api-docs


https://nits-solutions-backend.onrender.com/api-docs

```

---

# Authentication APIs

## Register User

### Endpoint

```txt
POST /api/auth/register
```

### Request Body

```json
{
  "name": "Anurag",
  "email": "anurag@gmail.com",
  "password": "123456"
}
```

---

## Login User

### Endpoint

```txt
POST /api/auth/login
```

### Request Body

```json
{
  "email": "anurag@gmail.com",
  "password": "123456"
}
```

---

## Refresh Access Token

### Endpoint

```txt
POST /api/auth/refresh-token
```

### Request Body

```json
{
  "refreshToken": "your_refresh_token"
}
```

---

# Notes APIs

## Get Notes

### Endpoint

```txt
GET /api/notes
```

### Headers

```txt
Authorization: Bearer ACCESS_TOKEN
```

---

## Search Notes

### Endpoint

```txt
GET /api/notes?search=react
```

---

## Add Note

### Endpoint

```txt
POST /api/notes
```

### Headers

```txt
Authorization: Bearer ACCESS_TOKEN
```

### Request Body

```json
{
  "title": "React Notes",
  "note": "Encrypted_Note_Content"
}
```

---

## Delete Note

### Endpoint

```txt
DELETE /api/notes/:id
```

### Headers

```txt
Authorization: Bearer ACCESS_TOKEN
```

---

# Validation

The application uses `express-validator` for request validation.

Validated Fields:
- Name
- Email
- Password
- Title
- Note Content

---

# Error Handling

Centralized error handling is implemented using:
- Custom Error Class
- Global Error Middleware
- Async Handler Middleware

Example Error Response:

```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

# Security Features

- Password Hashing using bcrypt
- JWT Authentication
- Protected APIs
- Input Validation
- XSS Protection
- User Ownership Validation

---

# Future Improvements

- Update Notes API
- Pagination
- Rate Limiting
- HTTP Only Cookies
- Logout API
- Docker Support
- Redis Session Management
- Forgot Password via Email Verification
- Send OTP to User Email
- Verify OTP Before Password Reset
```

---

# Scripts



## Start Development Server

```bash
node nits.js
```

---

# Author

## Anurag Pandey

