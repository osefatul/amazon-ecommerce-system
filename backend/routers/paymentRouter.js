const { StripePayment, webhook } = require("../controllers/paymentController");
const router = require("express").Router();
const express = require('express');

router.post("/", StripePayment)
router.post('/webhook', express.raw({type: 'application/json'}), webhook);


module.exports = router;