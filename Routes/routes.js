const express = require('express');
const router = express.Router();

const PaymentController = require("../Controllers/PaymentsController");
const PaymentService = require("../Services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());

router.get("/", function (req, res, next) {

  console.log(" esto es RES", res)
  console.log("este es el REQ", req)
  console.log("ahora pasaa el NEXT", next)

  return res.json(
    {
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link"
  },

  res.redirect('https://mp-envioflores.vercel.app/payment')
  );
});

router.post("/payment", function (req, res, next) {

  console.log("REQ", req.body)

  PaymentInstance.getPaymentLink(req.body, res);
});

module.exports = router;
