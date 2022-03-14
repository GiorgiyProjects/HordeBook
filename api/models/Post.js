const mongoose = require("mongoose")
const { stringify } = require("nodemon/lib/utils")

const PostSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            max: 50,
        },
        img: {
            type: String,
        },
        likes: {
            type: Array,
            default: [],
        },
        createdAt : { 
            type : Date, 
            default: Date.now 
        }
    }
);

module.exports = mongoose.model("Post", PostSchema);


