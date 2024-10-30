const express = require('express');
const { upload } = require('../lib/firebase');
const Router = express.Router();
const firebaseController = require('../controller/firebaseController')

Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

Router.post('/upload',upload.single('video'),firebaseController.uploadVideoFiles)
