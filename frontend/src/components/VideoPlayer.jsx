import React, { useEffect, useState } from "react";
import axios from "axios";

function PlayVideo() {
  const [videoUrl, setvideoUrl] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_BACKEND_BASED_URL}/getVideo`);
        

        console.log("fetched video url",response.data.Videourl);

        setvideoUrl(response.data.Videourl);
     
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideo();
  }, []);
  return (
    <div className="h-[600px] w-auto bg-blue-200 flex items-center justify-center p-10">
      {videoUrl ? (
        <video controls width="900" className="rounded-lg">
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        
        <p className="">loading vide..</p>

       
      )}
    </div>
  );
}

export default PlayVideo;
