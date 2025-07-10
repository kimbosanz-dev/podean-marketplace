const WeDoItAllSection: React.FC = () => {
  return (
    <section
      className="
        bg-hero-fade
        px-4 sm:px-6 lg:px-8
        text-white text-center
        mt-auto sm:mt-[200px] lg:mt-[300px] xl:mt-[335px]
        py-20
    "
    >
      <div className="max-w-8xl mx-auto">
        <h1
          className="
        text-4xl font-extrabold leading-tight
        sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl
      "
        >
          <div className="mb-4">Creator campaigns.</div>
          <div className="mb-4">Affiliate programme management.</div>
          <div className="mb-4">Shop optimisation.</div>
          <div className="mb-4">Livestream production.</div>
          <div className="mb-4">Paid media.</div>
          <span className="relative inline-block">
            <span className="relative z-10 p-3">We do it all.</span>
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
        </h1>
      </div>
    </section>
  );
};

export default WeDoItAllSection;
