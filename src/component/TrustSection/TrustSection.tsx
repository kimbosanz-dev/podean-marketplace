import tiktokCertify from "../../assets/images/tiktok_certify.png";
import youtube from "../../assets/images/youtube.png";
import twitch from "../../assets/images/twitch.png";

import tiktokSnap1 from "../../assets/images/tiktok_snap_1.png";
import tiktokSnap2 from "../../assets/images/tiktok_snap_2.png";
import tiktokSnap3 from "../../assets/images/tiktok_snap_3.png";
import tiktokSnap4 from "../../assets/images/tiktok_snap_4.png";

const TrustPlatformSection = () => {
  return (
    <section className="bg-hero-fade relative text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="relative flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
          <img
            src={tiktokSnap4}
            alt="Cozy Corners"
            className="hidden md:block absolute left-[60%] top-[5%] w-40 lg:w-56 opacity-20 z-0 pointer-events-none"
          />
          <img
            src={tiktokSnap1}
            alt="What Trend"
            className="hidden md:block absolute left-[5%] bottom-[10%] w-40 lg:w-56 opacity-20 z-0 pointer-events-none"
          />

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 relative z-10">
            <img
              src={tiktokSnap2}
              alt="Find Related Content"
              className="w-40 sm:w-48 md:w-56 lg:w-64 shadow-xl rounded-lg"
            />

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8">
              <img
                src={twitch}
                alt="Twitch Logo"
                className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36"
              />

              <img
                src={tiktokCertify}
                alt="TikTok Shop Certified Agency"
                className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40"
              />

              <img
                src={youtube}
                alt="YouTube Logo"
                className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36"
              />
            </div>

            <img
              src={tiktokSnap3}
              alt="@PatrioticKenn"
              className="w-40 sm:w-48 md:w-56 lg:w-64 shadow-xl rounded-lg mt-4 sm:mt-6"
            />
          </div>
        </div>

        <div className="relative z-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 sm:mb-12">
            Trusted Platform Partners
          </h2>
        </div>

        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed relative z-20">
          We were one of the first TikTok Shop Partners in the US in 2023, and
          now help brands scale efforts across multiple social platforms like
          YouTube, Twitch, and Meta across all regions.
        </p>
      </div>
    </section>
  );
};

export default TrustPlatformSection;
