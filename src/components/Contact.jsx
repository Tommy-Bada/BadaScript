import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h1>Wanna Reach Me?</h1>
      <div>
        <p className="mail">
          <a href="mailto:tomiwabd@gmail.com">tomiwabd@gmail.com</a>
        </p>
        <p className="phone">
          <a href="tel:09094588112">09094588112</a>
        </p>
        <div id="socials">
          <div className="social-icon">
            <a href="https://github.com/Tommy-Bada">
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                style={{ color: "#d3f500" }}
              />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://twitter.com/Badman_Bada">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2xl"
                style={{ color: "#d3f500" }}
              />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/tomiwa-bada-572018173/">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2xl"
                style={{ color: "#d3f500" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
