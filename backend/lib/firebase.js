const {initializeApp} = require('firebase/app')
const {getFileStore} = require('firebase/firestore')
const dotenv = require('dotenv')
dotenv.config()


const firebase = require('firebase/app')
const {getStorage,ref,uploadBytes,getDownloadURL} = require('firebase/storage')

const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID


} = process.env


const firebaseConfig = {
    apiKey:API_KEY,
    authDomain:AUTH_DOMAIN,
    projectId:PROJECT_ID,
    storageBucket:STORAGE_BUCKET,
    messagingSenderId:MESSAGING_SENDER_ID,
    appId:APP_ID,
    measurementId:MEASUREMENT_ID

}
const firebaseApp  = firebase.initializeApp(firebaseConfig)
const storage = getStorage(firebaseApp)




module.exports = {
    
    storage,

}