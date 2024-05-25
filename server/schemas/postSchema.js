import mongoose from "mongoose";

const { Schema } = mongoose

const blogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageLink: String,
    imageCaption: String,
    comments: [{
        name: String,
        comment: String
    }]
})

export const Blog = mongoose.model('Blog', blogSchema, 'posts');
