import React from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImageSrc: string;
  overlayColor?: string; // Tailwind class string, e.g., "bg-black/50"
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  fallbackImageSrc,
  overlayColor,
}) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={fallbackImageSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${fallbackImageSrc})` }}
      ></div>
      {overlayColor && (
        <div
          className={`absolute inset-0 w-full h-full ${overlayColor} z-10`}
        ></div>
      )}
    </div>
  );
};

export default VideoBackground;
