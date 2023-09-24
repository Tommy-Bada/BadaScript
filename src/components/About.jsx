import "./About.css";
import headshot from "../assets/headshot.jpg";

function About() {
  return (
    <div className="about-section" id="bio">
      <div className="profile-picture">
        <img src={headshot} alt="profile picture" />
      </div>
      <h1>Hello, I am Tomiwa Bada</h1>
      <h2> &lt; BadaScript /&gt;</h2>
      <p>
        I'm a dedicated front-end developer with a relentless drive to be world
        class. I'm committed to mastering the craft and delivering extraordinary
        user experiences.
      </p>
    </div>
  );
}

export default About;
