const router = require("express").Router();
const { contentSecurityPolicy } = require("helmet");
const User = require("../models/User");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json()
const bcrypt = require("bcrypt");

//Register
router.post("/register", jsonParser, async(req, res)=> {
    console.log("Will try to register a new user");
    try
    {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        console.log(newUser);
        const user = await newUser.save();
        res.status(200).json(newUser);
        console.log("here you go user")
    } catch(err) {
        console.log(err);
    }
});

// Login
router.post("/login", async(req, res)=>{
    try {
        console.log("Trying to login");
        console.log(req.body);
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("User not found");

        console.log(user);

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Wrong password");

        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router
