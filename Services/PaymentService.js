const axios = require("axios");
class PaymentService {
  async createPayment(req) {

    console.log("SERVICEE", req)

    let itemsCart = req.bodyMp
    console.log(itemsCart)

    const url = "https://api.mercadopago.com/checkout/preferences";
    const body = {
      payer_email: req.mail,
      items: itemsCart,
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success"
      }
    };
    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });
    return payment.data;
  }
}



module.exports = PaymentService;