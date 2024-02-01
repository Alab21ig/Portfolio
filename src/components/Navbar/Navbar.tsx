import { useState, useEffect } from "react";
import "./Navbar.css";
import { MobileNav } from "./MobileNav/MobileNav";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleSmoothScroll: EventListener = (e) => {
      e.preventDefault();

      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute(
        "href"
      );

      if (targetId) {
        const targetElement = document.getElementById(targetId.substring(1));

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }

      setOpenMenu(false);
    };

    const links = document.querySelectorAll(".nav-wrapper a");
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="assets/images/logo-white.svg" alt="" />
          <ul>
            <li className="menu-item">
              <a href="#home-section">Home</a>
            </li>
            <li className="menu-item">
              <a href="#skills-section">Skills</a>
            </li>
            <li className="menu-item">
              <a href="#projects-section">Projects</a>
            </li>
            <li className="menu-item">
              <a href="#contacts-section">Contacts</a>
            </li>
            <a href="#contacts-section">
              <button className="contact-btn" onClick={() => {}}>
                Hire Me
              </button>
            </a>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <div className="burger-menu-wrapper">
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};
