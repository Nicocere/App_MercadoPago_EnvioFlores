const express = require('express');
const router = express.Router();

const PaymentController = require("../Controllers/PaymentsController");
const PaymentService = require("../Services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());

router.get("/", function (req, res, next) {
  return res.json(
    {
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link"
  },

 

  
  );
});

router.post("/payment", function (req, res, next) {

  console.log("REQ", req.body)
  res.redirect('https://mp-envioflores.vercel.app/payment' )
  
  
  PaymentInstance.getPaymentLink(req.body, res);
});

module.exports = router;
