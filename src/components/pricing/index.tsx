import { SectionTitle } from "../section";
import { tiers } from "./constants";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden"
    >
      <div className="container">
        <SectionTitle
          title="Our Pricing Plan"
          description="Pricing built for all businesses"
        />
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
