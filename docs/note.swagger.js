/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: Secure Notes APIs
 */


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Get Logged In User Notes
 *     description: Fetch all notes of authenticated user using accessToken
 *     tags:
 *       - Notes
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Notes fetched successfully
 *       401:
 *         description: Unauthorized - Access token missing or invalid
 */


/**
 * @swagger
 * /api/notes:
 *   post:
 *     summary: Add Secure Note
 *     description: Create a new note for authenticated user using accessToken
 *     tags:
 *       - Notes
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - note
 *             properties:
 *               title:
 *                 type: string
 *                 example: My First Note
 *               note:
 *                 type: string
 *                 example: This is my secure note content
 *     responses:
 *       201:
 *         description: Note added successfully
 *       401:
 *         description: Unauthorized - Access token missing or invalid
 */