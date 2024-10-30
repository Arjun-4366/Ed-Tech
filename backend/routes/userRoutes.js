const express = require('express');
const Router = express.Router();
const paymentController = require('../controller/paymentController');

Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

Router.get('/paypal-payment', paymentController.paypalPayment);
Router.get('/success', paymentController.successPaypal);
Router.get('/failed', paymentController.failurePaypal);

module.exports = Router;