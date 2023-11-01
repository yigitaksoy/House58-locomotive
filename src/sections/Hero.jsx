const Hero = () => {
  return (
    <section
      id="hero"
      className="w-screen grid h-screen items-center"
      data-scroll-section
    >
      <p className="text-f-purple text-center text-house-bluelight lg:text-8xl text-3xl font-heavy">
        House 58
        <span className="text-house-white text-lg font-heavy" data-scroll>
          2.0
        </span>
      </p>
    </section>
  );
};

export default Hero;
