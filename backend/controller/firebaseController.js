const { json } = require("express");
const storage = require("../lib/firebase");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const bucket = require("../lib/firebaseAdmin");

const uploadVideoFiles = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).send("no files uploaded");
    const storageRef = ref(
      storage,
      `videos/${Date.now()}_${file.originalName}`
    );
    await uploadBytes(storageRef, file.buffer);
    const downloadUrl = await getDownloadURL(storageRef);
    return res.status(200).json(downloadUrl);
  } catch (error) {
    console.log(error.message);
  }
};

const fetchFirebaseVideos = async(req,res)=>{
try{

  const file  = bucket.file("ReactJS.mp4")
  const [url] = await file.getSignedUrl({
    action:"read",
    expires: new Date(Date.now()+7*24*60*60*1000)
  })

console.log("generated video url",url)
res.json({Videourl:url})

}
catch(error){
  console.log(error.message)
}
}

module.exports = { uploadVideoFiles ,fetchFirebaseVideos};
