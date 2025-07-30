const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication and session management
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user (placeholder)
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered (placeholder)
 */
router.post('/register', authController.register.bind(authController));

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login an existing user (placeholder)
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in (placeholder)
 */
router.post('/login', authController.login.bind(authController));

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout current user (placeholder)
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: User logged out (placeholder)
 */
router.post('/logout', authController.logout.bind(authController));

/**
 * @swagger
 * /auth/session:
 *   get:
 *     summary: Get session status (placeholder)
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Session status (placeholder)
 */
router.get('/session', authController.sessionStatus.bind(authController));

module.exports = router;
