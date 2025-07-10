const StatsSection: React.FC = () => {
  const statsData = [
    {
      number: "5000",
      title: "Pieces of content managed",
      description:
        "From ideation to posting, we manage on-channel content end-to-end.",
    },
    {
      number: "10000+",
      title: "Affiliates Engaged",
      description:
        "Our affiliate programmes and processes get your products seen by the right people at a lower cost than traditional content.",
    },
    {
      number: "$30m",
      title: "In Brand Revenue",
      description:
        "Our brands, big and small, have seen major growth with their social selling utilising our tailored strategies.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 sm:py-28 md:py-36 lg:py-48 xl:py-56">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-8xl">
        <div
          className="
            flex flex-wrap
            justify-around
            gap-y-16 md:gap-y-0
            md:gap-x-12 lg:gap-x-20 xl:gap-x-28
          "
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="
                text-center
                w-auto max-w-[405px]      /* Increased default max-width for each stat div */
                flex-shrink-0
                p-4
                break-words
              "
            >
              {/* Font sizes remain as last specified */}
              <h2 className="text-left font-black text-[#FC4A27] sm:text-[65px] md:text-[75px] lg:text-[85px] xl:text-[93px] font-extrabold mb-4 sm:mb-6">
                {stat.number}
              </h2>
              <h3 className="text-left text-[#FC4A27] sm:text-[25px] md:text-[30px] lg:text-[30px] xl:text-[45px] font-semibold mb-5 sm:mb-6">
                {stat.title}
              </h3>
              <p className="text-left text-gray-300 sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[35px] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
