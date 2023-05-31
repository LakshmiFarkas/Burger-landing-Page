import React, { useRef, useState } from "react";
import "./intro.css";
import { burgerVideo } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();
  const handleVideo = () => {
    setPlayVideo((previousPlayVideo) => !previousPlayVideo);
    if (playVideo) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="app-video">
      <video
        src={burgerVideo}
        ref={videoRef}
        muted
        type="video/mp4"
        loop
        controls={false}
        autoPlay
      ></video>
      <div className="app-video-overlay flex_center">
        <div
          className="app-video-overlay-circle flex_center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsFillPlayFill fontSize={30} />
          ) : (
            <BsPauseFill fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
