import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import "remixicon/fonts/remixicon.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current location (route)
  const menuRef = useRef(null); // Create a ref for the dropdown menu

  // Determine if the current route is '/hireme'
  const isHireMeRoute = location.pathname === "/hireme";

  // Toggle the menu visibility when the hamburger icon is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the dropdown menu if the user clicks outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Add event listener for clicks outside of the menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed flex items-center justify-end w-full z-10 px-20 py-14">
      {/* Hire Me Button (Hidden when on /hireme route) */}
      {!isHireMeRoute && (
        <Link to="/hireme">
          <button className="bg-black border-4 shadow-lg text-[1.5vw] font-[font4] p-12 shadow-black-700 text-xl px-8 py-2 hover:bg-gray-500 rounded-full">
            Hire me
          </button>
        </Link>
      )}

      {/* Hamburger icon */}
      <i
        className="ri-menu-2-line text-4xl text-white cursor-pointer ml-1.5"
        onClick={toggleMenu}
      ></i>

      {/* Dropdown Menu (only visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div
          ref={menuRef} // Attach ref to the dropdown menu
          className="absolute top-16 right-5 bg-white border-2 rounded-lg shadow-lg w-40 z-20"
        >
          <ul className="space-y-4 p-4 text-lg">
            <li className="text-black">
              <Link to="/aboutme" onClick={closeMenu}>
                About Me
              </Link>
            </li>
            <li className="text-black">
              <Link to="https://github.com/Suvanshhh" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="text-black">
              <Link to="https://www.linkedin.com/in/suvanshhh/" onClick={closeMenu}>
                LinkedIn
              </Link>
            </li>
            <li className="text-black">
              <Link to="https://linktr.ee/suvan.shh" onClick={closeMenu}>
                LinkTree
              </Link>
            </li>
            <li className="text-black">
              <Link to="https://drive.google.com/drive/folders/1dRawxD4c7vXidAm5pxqylqcUwDKdonbS?usp=drive_link" onClick={closeMenu}>
                Resume/CV
              </Link>
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
