import { GrTechnology } from "react-icons/gr";

function Navigation() {
  return (
    <nav id="top-navigation" className="flex justify-between items-center">
      <a href="/" className="flex gap-3 items-center">
        <GrTechnology />
        <span className="hidden font-bold text-black md:block">
          Tech Solution
        </span>
      </a>

      <div className="flex gap-4 items-center md:gap-6">
        <ul className="flex gap-4 md:gap-6 text-sm">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a
          href="/"
          className="border border-indigo-600 bg-indigo-700 text-white rounded-md py-2 px-6 font-semibold text-sm"
        >
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
