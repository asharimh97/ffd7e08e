interface SectionTitleProps {
  title: string;
  description: string;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="w-full px-4">
        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
          <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 ">
            {title}
          </h2>
          <p className="text-base text-body-color">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;
