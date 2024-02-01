import "./MobileNav.css";

type MobileNavProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const MobileNav = ({ isOpen, toggleMenu }: MobileNavProps) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logo-white.svg" alt="" />

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
        </div>
      </div>
    </>
  );
};
