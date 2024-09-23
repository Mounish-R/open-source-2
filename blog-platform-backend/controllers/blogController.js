const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newBlog = new Blog({ title, content, author: req.user.id });
    const blog = await newBlog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username');
    res.json(blogs);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
