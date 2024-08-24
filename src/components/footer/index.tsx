import { GrTechnology } from "react-icons/gr";

function Footer() {
  return (
    <footer className="w-full py-20 px-10 bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="flex flex-col max-w-[1280px] mx-auto gap-20 lg:flex-row">
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="flex gap-3 items-center text-white">
            <GrTechnology />
            <span className="font-bold text-xl">Tech Solution</span>
          </div>
          <p className="text-white text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <p className="text-white text-xs">
            1234 North Avenue Luke Lane, South Bend, IN 360001
          </p>
          <p className="text-white text-xs">+1 234 567 890</p>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 text-white">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div className="flex flex-col gap-3" key={idx}>
                <p className="font-bold">Company</p>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="/" className="text-white text-sm font-normal">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white text-sm font-normal">
                      Testimonies
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white text-sm font-normal">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white text-sm font-normal">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
