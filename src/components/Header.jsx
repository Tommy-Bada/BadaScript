import "./Header.css";

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

  return (
    <>
      <div id="mobile-menu">
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
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
            <li>About</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
