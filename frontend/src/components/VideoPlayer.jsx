import React, { useEffect, useState } from "react";
import axios from "axios";

function PlayVideo() {
  const [videoUrl, setvideoUrl] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get("http://localhost:4004/getVideo");

        console.log(response);

        setvideoUrl(response.data.videoUrl);
        console.log(response.data.videoUrl);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideo();
  }, []);
  return (
    <div className="h-[600px] w-auto bg-gray-700 flex items-center justify-center">
      {videoUrl ? (
        <video controls width="600">
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        
        <p className="">loading vide..</p>

       
      )}
    </div>
  );
}

export default PlayVideo;
