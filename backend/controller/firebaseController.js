const storage = require("../lib/firebase");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");

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

module.exports = { uploadVideoFiles };
