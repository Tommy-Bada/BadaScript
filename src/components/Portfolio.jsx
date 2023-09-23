import "./Portfolio.css";
import Project from "./Project";
import geegpay from "../assets/Geegpay.png";

function Portfolio() {
  const projects = [
    {
      image: geegpay,
      title: "Geegpay",
      description:
        "Responsive landing page replication, with DOM manipulation for custom content for Nigeria and Kenya. ",
      url: "https://goldfinance.netlify.app",
      stacks: "HTML + CSS + JavaScript",
    },
  ].map((project) => (
    <Project
      key={project.title}
      url={project.url}
      title={project.title}
      stacks={project.stacks}
      image={project.image}
      description={project.description}
    />
  ));

  return (
    <main className="portfolio-section">
      <h1>Some of my Projects!</h1>
      <div>{projects}</div>
    </main>
  );
}

export default Portfolio;
