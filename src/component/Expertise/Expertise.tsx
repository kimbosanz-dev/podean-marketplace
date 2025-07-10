const ExpertiseSection: React.FC = () => {
  return (
    <section
      className="
        bg-black px-4 sm:px-6 lg:px-8 text-white text-center         
        mt-auto sm:mt-[200px] lg:mt-[300px] xl:mt-[335px]
        mb-auto sm:mb-[200px] lg:mb-[300px] xl:mb-[335px]"
    >
      <div className="max-w-8xl mx-auto">
        <h1
          className="
          text-4xl       /* Default for mobile (e.g., up to sm breakpoint) */
          font-extrabold
          leading-tight  /* Default line-height for mobile */
          sm:text-5xl    /* Font size for small screens (sm breakpoint and up) */
          md:text-6xl    /* Font size for medium screens (md breakpoint and up) */
          lg:text-6xl    /* Font size for large screens (lg breakpoint and up) */
          xl:text-6xl    /* Font size for extra-large screens (xl breakpoint and up) - this is your 96px */"
        >
          Our team is the{" "}
          <span className="relative inline-block">
            <span className="relative z-10 p-3 font-">creative secret</span>
            <span
              className="absolute inset-0 bg-[#FC4A27] px-2 py-1 transform origin-bottom-left"
              style={{
                left: "-0.25rem",
                right: "-0.25rem",
                top: "-0.25rem",
                bottom: "-0.25rem",
                borderRadius: "1.5rem",
              }}
            ></span>
          </span>
          <br />
          behind top brands’ high-performing
          <br />
          social commerce strategies.
        </h1>
      </div>
    </section>
  );
};

export default ExpertiseSection;
