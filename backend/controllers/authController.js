const bcrypt = require("bcrypt");
const generateAuthToken = require("../helpers/generateAuthToken");
const {UserSchema} = require("../models/UserModel")


const createUser = async (req, res) => {
    const { name, email, password, confirmPassword, phone } = req.body;

    //Fill up all details in the inputs
    if (!name || !email || !password || !confirmPassword) {
        return res
        .status(422)
        .json({ error: "Please fill up the details" });
    }

    // Check Password length
    if (password.length < 8) {
        return res.status(422).json({
        error: "Password should be or more than 8 characters" 
        });
    }

    if(password !== confirmPassword) {
        return res.status(422).json({
        error: "Passwords do not match" 
        });
    }

    //Encrypt the password
    //Number indicates more time to take to generated random string
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //Check if email or phone already exists
    const userExist = await UserSchema.findOne({
        $or: [{ email: email }, { name: name }],
    });

    if (userExist) {
        return res
        .status(422)
        .json({  error: "User Already Exists"  });
    }

    try {
        const newUser = await new UserSchema({
        name,
        email,
        phone,
        password: hashPassword,
        });

        const result = await newUser.save();

        // //Sending email to verify user.
        // await emailProcessor({
        //         email,
        //         type: "new-user-confirmation-required",
        //         verificationLink: verificationURL + result._id + "/" + email,
        //     });
        

        console.log(result);
        res.status(200).json({ message: "New user created", result });
    } catch (error) {
        console.log(error);
    }
};


//Verify User
const verifyUser = async ( email, res) => {
    try {

        //first find User
        const finUser =  await UserSchema.findOne({
            $and: [{email:email}, {isVerified: false}],
    });

    const result =  await finUser.update(
    {
        $set: { isVerified: true },
    },
    { new: true }
    )

    console.log(finUser)
    
    if(finUser && finUser._id){
    return res.json({
        status : "success",
        message: "Your account has been verified, you may sign in now"
    })
    }

    return res.json ({
    status: "error",
    message: "Invalid request"
    })

} catch (error) {
    console.log(error);
    return res.json({
    status: "error",
    message: "Invalid request!",
    });
}
};


// Get user data from database using its email - PURPOSE: LOGIN
const getUserByEmail = async (req, res) => {

    // const { email, password } = req.body;

    try {
    //Check if email exists
    const user = await UserSchema.findOne({ email:req.body.email });
    !user && res.status(404).json({ message: "User not found" });


    // if(!user.isVerified){
    //     res.status(404).json({ message: "Please check your email for verification code..." });
    // }

    //Check if passwords match
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(404).json({ message: "Wrong Password" });

    
    const token = generateAuthToken(user)
    
    const { password, ...otherDetails } = user._doc;

    return res.status(200)
    .json({ user: { ...otherDetails },  accessJwtToken: token} );
    } catch (error) {
        console.log(error);
        res.json({ status: "error", message: error.message });
    }
    };


module.exports = {
    createUser,
    verifyUser,
    getUserByEmail
}