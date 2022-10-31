const { getAllOrders, getOrdersForASpecificUser, newOrder } = require("../controllers/orderController");

const router = require("express").Router();



router.post("/", newOrder );
router.get("/", getAllOrders)
router.get("/:id", getOrdersForASpecificUser)



module.exports = router;