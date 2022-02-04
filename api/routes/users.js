const bcrypt = require("bcrypt");
const router = require("express").Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const User = require("../models/User");

router.get("/", (req, res)=> {
    res.send("hey users")
});

//update user
router.put("/:id", async(req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch(err) {
                return res.status(500).json("You can update only your account!");
            }
        }
        try {
            console.log("updating info");
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated!");
        } catch(err) {
            return res.status(500).json("Could not update your account");
        }
    } else {
        return res.status(403).json("You cannot update someone else's account");
    }
});

//delete user
router.delete("/:id", async(req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            console.log("updating info");
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted!");
        } catch(err) {
            return res.status(500).json("Could not delete account");
        }
    } else {
        return res.status(403).json("You cannot delete someone else's account");
    }
});


//get user
router.get("/:id", async(req, res) => {
    try {
        console.log("Try and get user");
        const user = await User.findById(req.body.userId);
        return res.status(200).json(user);
    } catch(err) {
        return res.status(500).json("Could not find account");
    }
});

// follow user
router.put("/:id/follow", async(req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {following: req.body.userId}});
                return res.status(200).json("User has been followed");
            } else {
                return res.status(403).json("You already follow that user");
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        res.status(403).json("You dont just follow yourself");
    }
})

//unfollow user

module.exports = router
