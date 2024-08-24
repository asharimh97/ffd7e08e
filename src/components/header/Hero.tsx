function Hero() {
  return (
    <div id="hero" className="flex flex-col pt-10 md:flex-row md:items-center">
      <div className="w-full md:w-1/2 flex flex-col text-center md:text-left gap-6 lg:gap-8 xl:gap-10">
        <h2 className="font-bold text-3xl md:text-3xl md:leading-snug lg:text-4xl lg:leading-snug">
          Streamline Your Business, Elevate Your Efficiency: The All-in-One ERP
          Solution.
        </h2>
        <p className="text-sm leading-relaxed md:text-sm md:leading-relaxed lg:text-base lg:leading-relaxed">
          Unlock the full potential of your business with our seamless ERP
          solution. From inventory to finance, manage every aspect of your
          operations in one powerful platform designed to boost productivity and
          drive growth.
        </p>
        <button className="bg-indigo-600 w-60 mx-auto text-white font-semibold py-2 px-6 rounded-full md:mx-0">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img src="/hero-img.png" alt="hero" className="w-full" />
      </div>
    </div>
  );
}

export default Hero;
