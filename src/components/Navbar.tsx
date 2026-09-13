import { useState } from "react";
import logo from "../assets/logo-text.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div className="container mx-auto">
        <header className="w-full bg-white">
      <nav className="relative flex h-20 items-center justify-between px-7">

        {/* Logo */}
        <a href="">
            <img src={logo} alt="Logo" />
        </a>


        {/* Desktop Menu */}
        <div className="hidden items-center gap-9 md:flex">
          <a href="#" className="font-medium text-pink-600">
            Home
          </a>

          <a href="#" className="font-medium text-slate-600 hover:text-pink-600">
            Technologies
          </a>

          <a href="#" className="font-medium text-slate-600 hover:text-pink-600">
            Projects
          </a>

          <a href="#" className="font-medium text-slate-600 hover:text-pink-600">
            About
          </a>

          <a href="#" className="font-medium text-slate-600 hover:text-pink-600">
            Contact
          </a>
        </div>


        {/* Desktop Auth */}
        <div className="hidden items-center gap-6 md:flex">
          <button className="font-medium text-slate-600 hover:text-pink-600">
            Sign In
          </button>

          <button className="rounded-full bg-pink-600 px-6 py-3 font-medium text-white hover:bg-pink-700">
            Sign Up
          </button>
        </div>


        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-slate-700 md:hidden"
        >
          ☰
        </button>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute left-0 top-20 z-50 w-full bg-white px-7 py-5 shadow-md md:hidden">

            <div className="flex flex-col gap-5">

              <a
                href="#"
                className="font-medium text-pink-600"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>

              <a
                href="#"
                className="font-medium text-slate-600"
                onClick={() => setMenuOpen(false)}
              >
                Technologies
              </a>

              <a
                href="#"
                className="font-medium text-slate-600"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>

              <a
                href="#"
                className="font-medium text-slate-600"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>

              <a
                href="#"
                className="font-medium text-slate-600"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>

              <hr />

              <button className="w-fit font-medium text-slate-600">
                Sign In
              </button>

              <button className="w-fit rounded-full bg-pink-600 px-6 py-3 font-medium text-white">
                Sign Up
              </button>

            </div>
          </div>
        )}

      </nav>
    </header>
    </div>
    
  );
};

export default Navbar;