import React from "react";

import clientLogo1 from "../../assets/images/3m.svg";
import clientLogo2 from "../../assets/images/barstool-store.svg";
import clientLogo3 from "../../assets/images/budweiser.svg";
import clientLogo4 from "../../assets/images/buzzfeed.svg";
import clientLogo5 from "../../assets/images/forbes.svg";
import clientLogo6 from "../../assets/images/macys.svg";
import clientLogo7 from "../../assets/images/menshealth.svg";

type Logo = {
  src: string;
  alt: string;
  href?: string;
};

interface LogoSliderProps {
  rotationDegree?: number;
}

const defaultLogos: Logo[] = [
  { src: clientLogo1, alt: "Client Logo 1", href: "https://www.podean.com" },
  { src: clientLogo2, alt: "Client Logo 2", href: "https://www.podean.com" },
  { src: clientLogo3, alt: "Client Logo 3", href: "https://www.podean.com" },
  { src: clientLogo4, alt: "Client Logo 4", href: "https://www.podean.com" },
  { src: clientLogo5, alt: "Client Logo 5", href: "https://www.podean.com" },
  { src: clientLogo6, alt: "Client Logo 6", href: "https://www.podean.com" },
  { src: clientLogo7, alt: "Client Logo 7", href: "https://www.podean.com" },
];

const LogoTicker: React.FC<LogoSliderProps> = ({ rotationDegree = 0 }) => {
  const rotationStyle = {
    "--rotation-degree": `${rotationDegree}deg`,
    transform: `rotate(${rotationDegree}deg)`,
  } as React.CSSProperties;

  return (
    <div
      className="
        relative overflow-hidden bg-[#FC4A27]
        py-4 sm:py-5 md:py-7 lg:py-8 xl:py-9
        mt-32
        -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 xl:-mx-12
      "
      style={rotationStyle}
    >
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 sm:w-24 md:w-40 lg:w-48 z-20 bg-gradient-to-r from-[#FC4A27] to-transparent"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 sm:w-24 md:w-40 lg:w-48 z-20 bg-gradient-to-l from-[#FC4A27] to-transparent"></div>

      <div
        className="
      flex w-max animate-slide
      hover:animation-play-state-paused
    "
        style={{ animationDuration: "35s" }}
      >
        {[...defaultLogos, ...defaultLogos].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="
          flex-shrink-0
          h-5 sm:h-6 md:h-7 lg:h-8 xl:h-10
          mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10
        "
          />
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;
