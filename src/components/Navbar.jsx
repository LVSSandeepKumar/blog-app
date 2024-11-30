import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/*Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="logo" h={32} w={32} />
        <span>Blog App</span>
      </Link>

      {/*Mobile Menu */}
      <div className="md:hidden">
        {/*Mobile Menu button */}
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X /> : <Menu />}
        </div>

        {/*Mobile Menu list */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-[#e6e6ff] transition-all ease-in-out gap-8 font-medium text-lg 
          ${open ? "-right-0" : "-right-[100%]"}`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login 👋
          </button>
        </div>
      </div>

      {/*Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
          Login 👋
        </button>
      </div>
    </div>
  );
};

export default Navbar;
