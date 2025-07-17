import type React from "react";
import { Database, Globe, Podcast, Film } from "lucide-react";

const Solutions: React.FC = () => {
  const iconClass =
    "w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] md:w-[80px] md:h-[80px] lg:w-[96px] lg:h-[96px] text-[#FC4A27]";
  const solutions = [
    {
      title: "Strategy",
      description:
        "We specialise in navigating the complexities of social commerce, helping major brands refine their selling strategies. From selecting the right products to optimising marketplace collaboration, leveraging social content, and navigating key sales periods, and beyond. We provide expert guidance every step of the way.",
      icon: <span className={iconClass}>♜</span>,
    },
    {
      title: "Retail Operation & Logistics",
      description:
        "We help brands succeed on social commerce platforms by managing inventory, fulfilment, storefronts, and customer service. From optimising stock levels to building and merchandising stores with SEO-driven pages, we ensure seamless operations and a great shopping experience.",
      icon: <Globe className={iconClass} />,
    },
    {
      title: "Creators & Content",
      description:
        "We connect brands with top-performing influencers, creators, and sales drivers through advanced tech platforms and strategic affiliate management. From sourcing and engaging talent to handling outreach, sampling, and performance tracking, we ensure impactful partnerships that drive results.",
      icon: <Film className={iconClass} />,
    },
    {
      title: "Livestreaming",
      description:
        "We power end-to-end livestream success for brands, handling everything from talent sourcing and scriptwriting to production and execution. Our team manages every detail, including securing the right hosts, crafting engaging content, and delivering seamless, high-quality streams that drive sales and engagement.",
      icon: <Podcast className={iconClass} />,
    },
    {
      title: "In-Dept Data Analysis",
      description:
        "We leverage data and technology to analyse what drives the best sales outcomes, benchmarking performance to optimise strategy. Our insights help brands refine content, talent selection, and merchandising to maximise impact and stay ahead in social commerce.",
      icon: <Database className={iconClass} />,
    },
  ];

  return (
    <section
      className="
        w-full
        bg-hero-fade
        px-4 sm:px-6 lg:px-8
        py-20
        text-white text-center
        mt-auto sm:mt-[200px] lg:mt-[300px] xl:mt-[335px]
        mb-auto sm:mb-[200px] lg:mb-[300px] xl:mb-[335px]
    "
    >
      <h2 className="relative inline-block text-4xl sm:text-5xl font-extrabold mb-12">
        <span className="relative z-10 px-4 py-2">Our Solutions</span>
        <span
          className="absolute inset-0 bg-[#FC4A27] rounded-2xl"
          aria-hidden="true"
        ></span>
      </h2>

      <div className="max-w-7xl mx-auto grid gap-6 justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="
                w-full
                max-w-[600px] sm:max-w-[500px] md:max-w-[450px] lg:max-w-[400px] xl:max-w-[350px]
                mx-auto
                relative
                rounded-xl
                p-6
                text-center items-center
                bg-gradient-to-b from-[#FC4A27]/80 to-black
                hover:from-[#FC4A27] hover:to-black
                transition
                duration-300
                shadow-lg
                flex flex-col
                h-full
            "
          >
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4">
              {solution.icon}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-[5.75rem]">
              {solution.title}
            </h3>
            <p className="text-base sm:text-sm leading-relaxed opacity-90">
              {solution.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
