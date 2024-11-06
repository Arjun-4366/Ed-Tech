const express = require('express');

const Router = express.Router();
const firebaseController = require('../controller/firebaseController');
const { upload } = require('../lib/firebase');

Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

Router.post('/upload',upload.single("video"),firebaseController.uploadVideoFiles)


module.exports = Router