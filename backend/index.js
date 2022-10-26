require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const authRouter = require("./routers/authRouter");
const productRouter = require("./routers/productRouter");


const port = process.env.PORT || 5000;


app.use(cookieParser());

const corsOptions = {
    // origin: "https://stays-travels-system.netlify.app",
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));


app.use(morgan("combined"));
app.use(helmet());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use("/v1/auth", authRouter);
app.use("/v1/products", productRouter);



mongoose.connect(process.env.MONGO_URL).then(
    console.log("Connected to mongoDB")
).catch(err => console.log(err))


app.listen(port, ()=>{
    console.log("Backend is listening on port " + port)
} )