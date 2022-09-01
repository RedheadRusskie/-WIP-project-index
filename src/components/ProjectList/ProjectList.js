//styles
import "./ProjectList.css";

//hooks
import { NavLink } from "react-router-dom";
import { useState } from "react";

//components
import SearchBar from "../SearchBar/SearchBar";

//assets
import deleteIcon from '../../assets/delete.svg';

//other 
import { projectFirestore } from "../../firebase/config";

export default function ({ data }) {
  const [userInput, setUserInput] = useState("");

  const handleDelete = id => {
    projectFirestore.collection('projects').doc(id).delete();
  }

  return (
    <div className="project-container">
      <SearchBar userInput={userInput} handleEntry={setUserInput} />
      <div className="project-list">
        {data.filter((project) => project.title.toLowerCase().includes(userInput))
        .map((project) => (
          <div key={project.id} className="card">
            <img src={deleteIcon} alt="#" onClick={() => handleDelete(project.id)} />
            <h3>{project.title}</h3>
            <p
              className={
                project.completionStatus === 100 ? "complete" : "completion"
              }
            >
              {project.completionStatus}% complete
            </p>
            <p>{project.description.substring(1, 100)}..</p>
            <div className="action-btn">
              <NavLink to={`/projects/${project.id}`}>View</NavLink>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  );
}
