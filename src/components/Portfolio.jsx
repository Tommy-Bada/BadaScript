import "./Portfolio.css";
import Project from "./Project";
import geegpay from "../assets/Geegpay.png";
import countrydetailer from "../assets/countrydetailer.png";
import electpoll from "../assets/electpoll.png";
import expensetracker from "../assets/expensetracker.png";
import metamask from "../assets/metamask.png";
import plwlsn from "../assets/plwlsn.png";
import sanwo from "../assets/sanwo.png";
import uigpa from "../assets/uigpa.png";

function Portfolio() {
  const projects = [
    {
      image: plwlsn,
      title: "PL-WLSN Stores",
      description: "A Men's fashion store for exclusive wears for PLWLSN Brand",
      url: "https://plwlsn.netlify.app",
      stacks: "React + CSS + Cloudinary + Paystack",
    },
    {
      image: metamask,
      title: "Metamask",
      description:
        "A web3 real estate app that allows users to rent properties in the metaverse using etherium",
      url: "https://rentnft.netlify.app",
      stacks: "React + CSS",
    },
    {
      image: geegpay,
      title: "Geegpay",
      description:
        "Responsive landing page replication, with DOM manipulation for custom content for Nigeria and Kenya. ",
      url: "https://goldfinance.netlify.app",
      stacks: "HTML + CSS + JavaScript",
    },
    {
      image: countrydetailer,
      title: "Country API",
      description: "A counrty detailer app that fetches data froman API",
      url: "https://countrydetailer.netlify.app",
      stacks: "HTML + CSS + JavaScript",
    },
    {
      image: electpoll,
      title: "Electpoll",
      description:
        "A voting app that is used for conducting elections and polls in institutions and organizations",
      url: "https://electpoll.netlify.app",
      stacks: "HTML + CSS + JavaScript + Airtable",
    },
    {
      image: expensetracker,
      title: "Expense Tracker",
      description:
        "An expense tracker app that helps you keep track of your expenses",
      url: "https://transak.netlify.app",
      stacks: "HTML + CSS + JavaScript",
    },
    {
      image: uigpa,
      title: "CGPA Calculator",
      description:
        "A CGPA calculator that helps you calculate your CGPA with ease. Built for the academic team of the Department of Mathematics, University of Ibadan.",
      url: "https://uigpa.netlify.app",
      stacks: "HTML + CSS + JavaScript",
    },
    {
      image: sanwo,
      title: "Sanwo Landing Page",
      description:
        "A landing page for a fintech in Ibadan that helps with escrow payments",
      url: "https://sanwo-homepage.netlify.app",
      stacks: "React",
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
    <main className="portfolio-section" id="projects">
      <h1>Some of my Projects!</h1>
      <div>{projects}</div>
    </main>
  );
}

export default Portfolio;
