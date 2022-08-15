//styles
import './ProjectList.css';

//hooks
import { NavLink } from 'react-router-dom';

export default function({ data }) {
  return (
    <div className="project-list">
      {data.map(project => (
        <div key={project.id} className="card">
          <h3>{project.title}</h3>
          <p className={project.completionStatus === 100? "complete" : "completion"}>{project.completionStatus}% complete</p>
          <p>{project.description.substring(1, 100)}..</p>
          <div className="action-btn">
            <NavLink to={`/projects/${project.id}`}>View</NavLink>
          </div>
        </div>
      ))}
    </div>
  )
}