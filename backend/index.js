require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const port = process.env.PORT || 5000;


app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:3000/",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(helmet());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL).then(
    console.log("Connected to mongoDB")
).catch(err => console.log(err))


app.listen(port, ()=>{
    console.log("Backend is listening on port " + port)
} )