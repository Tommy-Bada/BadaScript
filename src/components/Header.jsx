import "./Header.css";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
function Header() {
  function clickAction() {
    let mobileMenu = document.querySelector("#mobile-menu");
    let hamburgerShortLine = document.querySelectorAll(".hamburger-line-2");
    if (mobileMenu.classList.contains("slidedown") == false) {
      mobileMenu.classList.add("slidedown");
      mobileMenu.style.opacity = 1;
      mobileMenu.style.transform = "translateY(0vh)";
      hamburgerShortLine[0].style.width = "5rem";
      hamburgerShortLine[1].style.width = "5rem";
    } else {
      mobileMenu.classList.remove("slidedown");
      mobileMenu.style.opacity = 0;
      mobileMenu.style.transform = "translateY(-100vh)";
      hamburgerShortLine[0].style.width = "3rem";
      hamburgerShortLine[1].style.width = "3rem";
    }
  }
  function closeMenu() {
    let mobileMenu = document.querySelector("#mobile-menu");
    let hamburgerShortLine = document.querySelectorAll(".hamburger-line-2");
    mobileMenu.classList.remove("slidedown");
    mobileMenu.style.opacity = 0;
    mobileMenu.style.transform = "translateY(-100vh)";
    hamburgerShortLine[0].style.width = "3rem";
    hamburgerShortLine[1].style.width = "3rem";
  }

  return (
    <>
      <div id="mobile-menu">
        <ul>
          <li onClick={closeMenu}>
            <ScrollIntoView selector="#bio" className="mobile-linker">
              About
            </ScrollIntoView>
          </li>
          <li onClick={closeMenu}>
            <ScrollIntoView selector="#projects" className="mobile-linker">
              Projects
            </ScrollIntoView>
          </li>
          <li onClick={closeMenu}>
            <ScrollIntoView selector="#blog" className="mobile-linker">
              Blog
            </ScrollIntoView>
          </li>
          <li onClick={closeMenu}>
            <ScrollIntoView selector="#contact" className="mobile-linker">
              Contact
            </ScrollIntoView>
          </li>
        </ul>
      </div>
      <header>
        <div id="hamburger-icon" onClick={clickAction}>
          <div className="hamburger-line-1"></div>
          <div className="hamburger-line-2"></div>
          <div className="hamburger-line-1"></div>
          <div className="hamburger-line-2"></div>
        </div>
        <div id="logo">
          <h1>BADA</h1>
        </div>
        <div id="nav-list" className="dsf-mobile">
          <ul>
            <li>
              <ScrollIntoView selector="#bio" className="linker">
                About
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector="#projects" className="linker">
                Projects
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector="#blog" className="linker">
                Blog
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector="#contact" className="linker">
                Contact
              </ScrollIntoView>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
