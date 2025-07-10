import React from "react";
import VideoBackground from "../VideoBackground/VideoBackground";
import heroVideo from "../../assets/videos/LC new.mov";
import heroFallbackImage from "../../assets/images/fallback_image.avif";
// import podeanLogo from "../../assets/images/podean_logo.png";

const Header: React.FC = () => {
  return (
    <header className="relative w-full h-[400px] md:h-[1079px] flex justify-center items-center overflow-hidden">
      <VideoBackground
        videoSrc={heroVideo}
        fallbackImageSrc={heroFallbackImage}
        overlayColor="bg-black/50"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-dark-shade via-dark-shade/70 to-transparent z-10"></div>
      {/* <div className="relative z-10 p-4">
        <img
          src={podeanLogo}
          alt="PODEAN Marketplace Marketing"
          className="max-w-[70%] h-[auto] mx-auto"
        />
      </div> */}
    </header>
  );
};

export default Header;
