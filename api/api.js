var express = require('express');
var router = express.Router();

const PaymentController = require("../Controllers/PaymentsController");
const PaymentService = require("../Services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());

router.get("api-mp.vercel.app/", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link"
  });
});

router.post("/payment", function (req, res, next) {

  console.log("REQ", req.body)

  PaymentInstance.getPaymentLink(req.body, res);
});


module.exports = router;
