import express from 'express';
import hello from './api/v1/controllers/hello';

const router = express.Router();

// Web Routes
router.get('/', hello);

// API V1 Routes
export default router;
