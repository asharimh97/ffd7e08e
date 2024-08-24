import { Highlight } from "./types";

interface HighlightCardProps {
  service: Highlight;
}

function HighlightCard({ service }: HighlightCardProps) {
  return (
    <div
      data-testid="highlight-card"
      className="w-full p-8 rounded-lg bg-white shadow-xl shadow-indigo-50"
    >
      <div className="flex flex-col gap-4 text-center md:text-left">
        <img
          src={service.icon}
          alt={service.title}
          className="h-[90px] w-fit mx-auto md:mx-0"
        />
        <h3 className="text-xl font-bold text-dark">{service.title}</h3>
        <p className="text-sm text-body-color">{service.description}</p>
      </div>
    </div>
  );
}

export default HighlightCard;
