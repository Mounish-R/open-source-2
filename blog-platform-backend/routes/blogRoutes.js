const express = require('express');
const { createBlog, getAllBlogs } = require('../controllers/blogController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createBlog);
router.get('/all', getAllBlogs);

module.exports = router;
