import { Router } from 'express';
var router = Router();

import PaymentController from "../Controllers/PaymentsController";
import PaymentService from "../Services/PaymentService";

const PaymentInstance = new PaymentController(new PaymentService());

router.get("/", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link"
  });
});

router.post("/payment", function (req, res, next) {

  console.log("REQ", req.body)

  PaymentInstance.getPaymentLink(req.body, res);
});

export default router;
