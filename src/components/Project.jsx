import "./Project.css";

function Project(props) {
  return (
    <a href={props.url}>
      <div className="project-section">
        <div>
          <img src={props.image} />
        </div>
        <h2>{props.title}</h2>
        <h3>{props.stacks}</h3>
        <p>{props.description}</p>
      </div>
    </a>
  );
}
export default Project;
