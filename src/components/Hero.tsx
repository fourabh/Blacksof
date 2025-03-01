const Hero = () => {
  return (
    <section
      role="banner"
      aria-label="Hero Section"
      className="bg-gray-600 min-h-[400px] flex items-center justify-center py-20"
    >
      <div className="container mx-auto max-w-4xl text-center px-4">
        <p className="text-white text-sm font-light mb-4 uppercase tracking-wider">
          Performance in motion
        </p>

        <h1 className="text-white text-4xl md:text-5xl font-light leading-tight">
          Soft Trims and NVH Solutions
          <br />
          <span className="text-white/80">for seamless rides</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
