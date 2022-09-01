//styles
import './Project.css';

//hooks
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

//other 
import { projectFirestore } from '../../firebase/config';

//images
import imgAlt from '../../assets/cross-icon.png';

export default function Project() {
  const { id } = useParams();

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('projects').doc(id).get().then(doc => {
      if (doc.exists) {
        setIsPending(false);
        setProject(doc.data());
      } else {
        setIsPending(false);
        setError(`Oops! Couldn't find that project..`);
      }
    });

  }, [id])

  return (
    <div className="project-panel">
      {isPending && <div className="loading">Loading..</div>}
      {error && <div className="error">{error}</div>}

      {project && (
        <div className="project">
          <h3 className="project-title">{project.title}</h3>
          <p className={project.completionStatus === 100? "complete" : "completion"}>{project.completionStatus}% complete</p>
          <div className="project-container">
            <img src={project.img === "" ? imgAlt : project.img } alt="Error with image.." />
            <p>{project.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}