const express = require('express');
const router = express.Router();
const {
    createUser,
    verifyUser,
    getUserByEmail} = require("../controllers/authController")



//REGISTER A NEW USER
router.post("/", async (req, res) => {

try {
    await createUser(req, res);
} catch (err) {
    console.log(err);
    res.json({ status: "error", message: err.message });
}
});


//VERIFY JUST NOW REGISTERED USER
router.patch("/verify", async (req, res) => {
try {
    const {email} = req.body;
    await verifyUser(email, res);

}catch (error) {
    console.log(error);
        return res.json({
            status: "error",
            message: "Invalid request!",
        });
}
})


//LOGIN USER
router.post("/login", async (req, res) => {

    try {
        await getUserByEmail(req, res);
    } catch (err) {
        console.log(err);
        res.json({ status: "error", message: err.message });
    }
});



module.exports = router;
