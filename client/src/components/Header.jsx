import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [active, setActive] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const [theme, setTheme] = useState("light-theme");
  let category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
  ];
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  function toggleTheme() {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }
  return (
    <header className="">
      <nav class="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
        <h3 class="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">
          Shreyas Blog
        </h3>

        <ul
          className={
            active
              ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active"
              : " nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"
          }
        >
          <li>
            <Link
              className="no-underline font-semibold"
              to="/"
              onClick={() => {
                setActive(!active);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="no-underline font-semibold"
              to="/all-news"
              onClick={() => {
                setActive(!active);
              }}
            >
              All blogs
            </Link>
          </li>
        </ul>
        <div
          className={
            active
              ? "ham-burger z-index-100 ham-open"
              : "ham-burger z-index-100"
          }
          onClick={() => {
            setActive(!active);
          }}
        >
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
