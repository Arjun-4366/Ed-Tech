const express = require('express');
const Router = express.Router();
const paymentController = require('../controller/paymentController');
const firebaseController = require('../controller/firebaseController')

Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

Router.get('/paypal-payment', paymentController.paypalPayment);
Router.get('/success', paymentController.successPaypal);
Router.get('/failed', paymentController.failurePaypal);
Router.get('/getVideo',firebaseController.fetchFirebaseVideos)

module.exports = Router;