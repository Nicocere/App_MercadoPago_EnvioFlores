var express = require('express');
var router = express.Router();

const PaymentController = require("../Controllers/PaymentsController");
const PaymentService = require("../Services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());

router.get("/", function (req, res, next) {
  return res.json({
    "api-mp.vercel.app/payment": "generates a payment link",
    "api-mp.vercel.app/subscription": "generates a subscription link"
  });
});

router.post("/payment", function (req, res, next) {

  console.log("REQ", req.body)

  PaymentInstance.getPaymentLink(req.body, res);
});


module.exports = router;
