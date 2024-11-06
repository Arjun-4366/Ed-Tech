const admin = require("firebase-admin")
const serviceAccount = require("path/to/serviceAccountKey.json")

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    storageBucket:"gs://bright-minds-a8916.appspot.com"

   
})
const bucket = admin.storage().bucket()

module.exports = bucket