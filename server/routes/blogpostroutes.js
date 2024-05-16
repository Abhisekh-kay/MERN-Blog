const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogpostcontroller');

router.post('/blog-posts', blogPostController.createBlogPost);
router.get('/blog-posts', blogPostController.getBlogPosts);
router.get('/blog-posts/:id', blogPostController.getBlogPostById);
router.put('/blog-posts/:id', blogPostController.updateBlogPost);
router.delete('/blog-posts/:id', blogPostController.deleteBlogPost);

module.exports = router;
