const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox',
  client_id: 'AR1a833qRdQl0AzgMwPy_BLjHPDWNdA1ULB01tsynfZQyVrrWQxLiBPM7IOj-qEk2r-Iioevh9EZ_sxD',
  client_secret: 'EHWiJgop722SuiOG2DJP4QdrIsv88xJk-dH_gmbblQJnXumhXfNesikCqBB7GiqWm94_Sfm-RsrprYpl'
});

const paypalPayment = async (req, res) => {
  try {
    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal"
      },
      redirect_urls: {
        return_url: "http://localhost:4004/success",
        cancel_url: "http://localhost:4004/cancel"
      },
      transactions: [{
        amount: {
          total: "1.00",
          currency: "USD"
        },
        description: "This is the payment description"
      }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        console.log(error);
        res.status(400).json(error);
      } else {
        const approvalUrl = payment.links.find(link => link.rel === 'approval_url').href;
        res.json({ approvalUrl });
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

const successPaypal = async (req, res) => {
  try {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
      payer_id: payerId,
      transactions: [{
        amount: {
          currency: "USD",
          total: "1.00"
        },
        description: 'This is the payment description'
      }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
        console.log(error);
        return res.redirect("http://localhost:4004/failed");
      } else {
        console.log(payment);
        return res.redirect("http://localhost:4004/success");
      }
    });
  } catch (error) {
    console.log('error in payment', error);
    return res.redirect("http://localhost:4004/failed");
  }
};

const failurePaypal = (req, res) => {
  res.send('Payment failed. Please try again.');
};

module.exports = {
  paypalPayment,
  successPaypal,
  failurePaypal
};