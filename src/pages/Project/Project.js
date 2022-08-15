//styles
import './Project.css';

//hooks
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function Project() {
  const { id } = useParams();
  const src = 'http://localhost:3000/projects/' + id;
  const { data: project, isPending, error } = useFetch(src);

  return (
    <div className="project-panel">
      {isPending && <div className="loading">Loading..</div>}
      {error && <div className="error">{error}</div>}

      {project && (
        <div className="project">
          <h3 className="project-title">{project.title}</h3>
          <p className={project.completionStatus === 100? "complete" : "completion"}>{project.completionStatus}% complete</p>
          <div className="project-container">
            <img src={project.img}></img>
            <p>{project.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}