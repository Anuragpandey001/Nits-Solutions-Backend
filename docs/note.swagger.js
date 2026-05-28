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



/**
 * @swagger
 * /api/notes/{id}:
 *   delete:
 *     summary: Delete Secure Note
 *     description: Delete a note by ID for authenticated user using accessToken
 *     tags:
 *       - Notes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Note ID
 *         schema:
 *           type: string
 *           example: 6891c7d1b2c34f8a91ab1234
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *       401:
 *         description: Unauthorized - Access token missing or invalid
 *       404:
 *         description: Note not found
 */