import React from "react";

const ChooseUs: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Why <span className="italic">Choose</span> Us?
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          We blend e-commerce expertise with tailored social media strategies to
          drive growth for leading brands.
        </p>
      </div>

      <div className="flex flex-col justify-center lg:flex-row gap-8 max-w-[1500px] mx-auto">
        <div
          className={`
            relative rounded-xl p-8 text-left
            w-full lg:w-[450px] 
            h-auto lg:h-[600px]
          `}
          style={{
            background: "linear-gradient(to bottom, #1E1E1E, #FC4A27, #F8EEE8)",
          }}
        >
          {/* White Star */}
          <div className="absolute -top-6 -left-6 w-16 h-16 rotate-45 text-white opacity-90">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M50 5 L58 35 L90 35 L63 55 L72 85 L50 67 L28 85 L37 55 L10 35 L42 35 Z" />
            </svg>
          </div>

          <h2 className="text-[55px] font-bold mb-6 text-white">
            Our Services
          </h2>
          <ul className="space-y-4 text-white">
            {[
              "Marketplace mastery ranging from TikTok Shop to Amazon",
              "Retail-minded: Never worry about being out-of-stock or product positioning",
              "Comprehensive data and analytics for informed, data-driven strategies",
              "Pioneers in streaming space since 2021",
              "UGC, affiliate, and influencer content that drives sales, not just aesthetics",
              "Cutting-edge technology and advanced tools to optimise performance",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-white mr-3 mt-1">✓</span>
                <p className="text-base sm:text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Agencies */}
        <div
          className={`
            relative rounded-xl bg-[#F8EEE8] p-8 text-left
            w-full lg:w-[450px] 
            h-auto lg:h-[450px]
            mt-auto
          `}
        >
          {/* Red Star */}
          <div className="absolute -bottom-6 -right-6 w-16 h-16 -rotate-45 text-red-500 opacity-90">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M50 5 L58 35 L90 35 L63 55 L72 85 L50 67 L28 85 L37 55 L10 35 L42 35 Z" />
            </svg>
          </div>

          <h2 className="text-[56px] font-bold mb-6 text-[#999]">
            Other Agencies
          </h2>
          <ul className="space-y-4 text-[#999]">
            {[
              "Minimal e-commerce experience",
              "Siloed social strategies",
              "Singular offerings that don't move the needle",
              "Limited platform relationships",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-3 mt-1">✕</span>
                <p className="text-base sm:text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
