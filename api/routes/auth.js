const router = require("express").Router();
const { contentSecurityPolicy } = require("helmet");
const User = require("../models/User");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json()
const bcrypt = require("bcrypt");

router.get("/", (req, res)=> {
    res.send("hey auth")
});

//Register
router.post("/register", jsonParser, async(req, res)=> {
    res.set('Access-Control-Allow-Origin', process.env.CLIENT_HOST);
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
    console.log("Trying to login");
    try {
        console.log("Trying to login2");
        console.log("request data", req.body);
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            console.log("USer not found");
            res.status(404).json("User not found");
            return;
        }

        console.log("user", user);

        //const validPassword = await bcrypt.compare(req.body.password, user.password);
        const validPassword = await (req.body.password == user.password); // for debug only!
        if (!validPassword)  {
            res.status(400).json("Wrong password");
            return;
        }

        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router
