import { Service } from "./types";

interface AboutItemProps {
  service: Service;
  pushLeft?: boolean;
}

function AboutItem({ service, pushLeft = false }: AboutItemProps) {
  return (
    <div
      className={`w-full px-4 mb-8 flex flex-col items-center gap-10 ${pushLeft ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="w-3/4 md:w-1/2">
        <img src={service.icon} alt={service.title} className="w-full" />
      </div>
      <div
        className={`w-full md:w-1/2 text-center ${pushLeft ? "md:text-right" : "md:text-left"}`}
      >
        <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
        <p className="text-sm text-body-color">{service.description}</p>
      </div>
    </div>
  );
}

export default AboutItem;
