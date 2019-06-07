import express from 'express';

const router = express.Router();

// Web Routes
router.get('/', (req, res) => {
  res.send('Hello World');
});

// API V1 Routes
export default router;
