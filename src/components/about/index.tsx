import { SectionTitle } from "../section";
import AboutItem from "./AboutItem";
import { highlights, services } from "./constants";
import HighlightCard from "./HighlightCard";

function About() {
  return (
    <section
      id="about"
      className="bg-white pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative"
    >
      <div className="container">
        <SectionTitle
          title="Our Services"
          description="We provide to you our best service for you. Adjust it to your business needs"
        />
        <div className="w-full mx-auto grid grid-cols-1 gap-10 md:w-10/12 md:grid-cols-2 mb-28 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <HighlightCard service={highlight} key={index} />
          ))}
        </div>
        <div className="w-full flex flex-col gap-10 md:w-10/12 mx-auto">
          {services.map((service, index) => (
            <AboutItem
              service={service}
              key={index}
              pushLeft={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
