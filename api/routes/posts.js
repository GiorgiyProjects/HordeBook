const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

router.get("/", (req, res)=> {
    res.send("hey posts")
});

//create post
router.post("/", async(req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err) {

    }
})

//update post
router.put("/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        console.log(post.userId);
        console.log(req.body.userId);

        if (post.userId === req.body.userId) {
            await post.updateOne({$set:req.body});
            res.status(200).json(post);
        } else {
            res.status(403).json("You can only update your own post");
        }
    } catch(err) {
        res.status(500).json(err);
    }
})

// delete post
router.delete("/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        console.log(post.userId);
        console.log(req.body.userId);

        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("Deleted successfully");
        } else {
            res.status(403).json("You can only delete your own post");
        }
    } catch(err) {
        res.status(500).json(err);
    }
})


// like a post
router.put("/:id/like", async(req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        console.log(post);
        console.log(req.body.userId);

        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({$push: {likes:req.body.userId}});
            res.status(200).json("The post has been liked");
        } else {
            console.log("already has like");
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("The post has been disliked");
        }

    } catch(err) {
        res.status(500).json(err);
    }
})


//get a post
//get user
router.get("/:id", async(req, res) => {
    try {
        console.log("Try and get post by id");
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    } catch(err) {
        return res.status(500).json("Could not find");
    }
});

//get timeline posts
router.get("/timeline/all", async(req, res) => {
    let postArray = [];
    try {
        const currentUser = await User.findById(req.body.userId);
        console.log(currentUser);
        const userPosts = await Post.find({userId: currentUser._id.toString()});
        console.log(userPosts);
        const friendPosts = await Promise.all(
            currentUser.following.map(friendId => {
                console.log(friendId);
                return Post.find({userId: friendId});
            }));
        return res.status(200).json(userPosts.concat(...friendPosts));
    } catch(err) {
        return res.status(500).json(err);
    }
});
module.exports = router