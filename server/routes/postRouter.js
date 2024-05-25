import mongoose from "mongoose";
import { Router } from "express";

import { Blog } from "../schemas/postSchema.js";

const router = Router();

// Get A post by a specific thread
router.get("/api/posts", async function (req, res) {
  try {
    const { category } = req.query;
    let allPosts;

    if (!category)
      // GET all posts
      allPosts = await Blog.find();
    // GET by a specific thread
    else allPosts = await Blog.find({ category: category });

    res.status(200).json({ posts: allPosts });
  } catch (err) {
    res.sendStatus(400);
  }
});

// Get a specific post by ID
router.get("/api/posts/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const post = await Blog.findById(id);

    res.status(200).json({ post: post });
  } catch (err) {
    res.sendStatus(400);
  }
});

// Get post by search keyword
router.get("/api/search", async function (req, res) {
  try {
    const { title } = req.query; // input query
    console.log(title)
    let allPosts;

    if (title.length < 3) {
        allPosts = [];
      } else {
        // Find posts where the title includes the search keyword
        allPosts = await Blog.find({ title: { $regex: title, $options: "i" } });
      }

    res.status(200).json({ posts: allPosts });
  } catch (err) {
    res.sendStatus(500);
  }
});

// NEW Post
router.post("/api/posts", async function (req, res) {
  try {
    const { name, category, title, content, imageLink, imageCaption } = req.body;

    const newPost = new Blog({
      name: name,
      category: category,
      title: title,
      content: content,
      imageLink: imageLink,
      imageCaption: imageCaption,
      comments: []
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/api/posts", async function (req, res) {
  try {
    const { id, name, comment } = req.body;

    if (!id || !name || !comment) {
      return res.status(400).json({ message: "ID, name, and comment are required" });
    }

    // Find the blog post by ID
    const blogToUpdate = await Blog.findById(id);

    if (!blogToUpdate) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Use the spread operator to add the new comment to the comments array
    blogToUpdate.comments = [...blogToUpdate.comments, { name, comment }];

    // Save the updated blog post
    const updatedBlog = await blogToUpdate.save();

    res.status(200).json(updatedBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An error occurred while updating the blog post" });
  }
});

export default router;
