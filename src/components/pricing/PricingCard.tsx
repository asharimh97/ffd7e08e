import circles from "../../assets/circle.svg";
import gradient from "../../assets/gradient.svg";
import { Tier } from "./types";

interface PricingCardProps {
  tier: Tier;
}

function PricingCard({ tier }: PricingCardProps) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 ">
        <span className="text-primary font-semibold text-lg block mb-4">
          {tier.name}
        </span>
        <h2 className="font-bold text-dark mb-5 text-[42px]">
          ${tier.pricing}
          <span className="text-base text-body-color font-medium">/ year</span>
        </h2>
        <p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2] ">
          {tier.description}
        </p>
        <div className="mb-7">
          {tier.features.map((feature, index) => (
            <p
              key={`tier-${tier.name}-${index}`}
              className="text-base text-body-color leading-loose mb-1"
            >
              {feature}
            </p>
          ))}
        </div>
        <button className="w-full block text-indigo-600 font-semibold text-primary bg-transparent border border-[#D4DEFF] rounded-md text-center p-4 hover:text-white hover:bg-indigo-700 hover:border-primary transition">
          Choose {tier.name}
        </button>
        <div>
          <span className="absolute right-0 top-7 z-[-1]">
            <img src={gradient} alt="bg" />
          </span>
          <span className="absolute right-4 top-4 z-[-1]">
            <img src={circles} alt="bg" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
