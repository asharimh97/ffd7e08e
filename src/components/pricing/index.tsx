import { tiers } from "./constants";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <section className="bg-white pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 ">
                Our Pricing Plan
              </h2>
              <p className="text-base text-body-color">
                Pricing built for all businesses
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {tiers.map((tier, index) => (
            <PricingCard tier={tier} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
