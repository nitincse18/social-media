import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = ({video, type}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedMetadata = () => {
      // Ensure that the video has loaded metadata before playing
      video.play();
      setIsPlaying(true);
    };

    const audioContext = new AudioContext();
     audioContext.resume();

    video.addEventListener('mousemove', handleLoadedMetadata);

    return () => {
      video.removeEventListener('mousemove', handleLoadedMetadata);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  const togglePlayPause = () => {
    const video = videoRef.current;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <video ref={videoRef} width='100%' height="300" autoplay="true"
            muted="muted" controls>
        <source
          src={video}
          type="video/mp4"
          
        />
        Your browser does not support the video tag.
      </video>

      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;
