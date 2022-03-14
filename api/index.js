const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require('body-parser');

dotenv.config();
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

const app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.body);
    next();
  });

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},()=> {
    console.log("Connected to MongoDB")
});

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

app.listen(3030, () => {
    console.log("Backend server is ready")
})


// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan())

app.get("/", (req, res) => {
    res.send("welcome to homepage")
})
