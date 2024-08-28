import { ImInstagram } from "react-icons/im";

const NavBar = () => {
  return (
    <nav className="w-full px-5 md:px-12 py-3 bg-stone-950 text-white flex justify-between items-center">
      <h1 className="text-lg font-medium flex justify-start items-center gap-1">
        <ImInstagram className="w-7 h-7" />
        Abstract | <span className="font-normal">Help Center</span>
      </h1>
      <button
        type="button"
        className="px-3 py-1 bg-stone-900 border border-stone-500 rounded-lg"
      >
        Submit a request
      </button>
    </nav>
  );
};

export default NavBar;
