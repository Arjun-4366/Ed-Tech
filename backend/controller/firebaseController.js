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

const fetchFirebaseVideos = async(res,req)=>{
try{

  const file  = bucket.file("Screen Recording 2024-08-02 171317.mp4")
  const [url] = await file.getSignedUrl({
    action:"read",
    expires:"30-01-2030"
  })

// const videoRef = ref(storage,"gs://bright-minds-a8916.appspot.com/Screen Recording 2024-08-02 171317.mp4")
// const videoDownloadUrl = await(getDownloadURL(videoRef))
res.json({Videourl:url})

}
catch(error){
  console.log(error.message)
}
}

module.exports = { uploadVideoFiles ,fetchFirebaseVideos};
