import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const isHireMeRoute = location.pathname === "/hireme";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed flex items-center justify-end w-full z-10 px-4 sm:px-8 md:px-20 py-8 md:py-14">
      {!isHireMeRoute && (
        <Link to="/hireme">
          <button className="bg-black border-2 md:border-4 shadow-lg text-sm md:text-[1.5vw] font-[font4] px-4 md:px-8 py-1 md:py-2 hover:bg-gray-500 rounded-full">
            Hire me
          </button>
        </Link>
      )}

      <i
        className="ri-menu-2-line text-2xl md:text-4xl pr-6 text-white cursor-pointer ml-1.5"
        onClick={toggleMenu}
      ></i>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-12 md:top-16 right-2 md:right-5 bg-white border-2 rounded-lg shadow-lg w-[180px] md:w-[200px] z-20"
        >
          <ul className="space-y-3 md:space-y-4 p-3 md:p-4 text-base md:text-lg">
            <li className="text-black">
              <Link to="/aboutme" onClick={closeMenu}>
                About Me
              </Link>
            </li>
            <li className="text-black">
              <a href="https://github.com/Suvanshhh" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li className="text-black">
              <a href="https://www.linkedin.com/in/suvanshhh/" onClick={closeMenu}>
                LinkedIn
              </a>
            </li>
            <li className="text-black">
              <a href="https://linktr.ee/suvan.shh" onClick={closeMenu}>
                LinkTree
              </a>
            </li>
            <li className="text-black">
              <a
                href="https://drive.google.com/drive/folders/1dRawxD4c7vXidAm5pxqylqcUwDKdonbS?usp=drive_link"
                onClick={closeMenu}
              >
                Resume/CV
              </a>
            </li>
            <li className="text-black">
              <Link to="/hireme" onClick={closeMenu}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;