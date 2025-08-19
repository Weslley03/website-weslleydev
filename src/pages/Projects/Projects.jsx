import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import projects from "../../data/projects.json";
import styles from './Projects.module.scss';

function Projects() {
  const navigate = useNavigate();

  const selectProject = (projectId) => {
    navigate(`/project-selected/${projectId}`);
  };

    return(
        <div className={styles.container}> 
        <h1 className={styles.title}> my projects </h1>
        
          <div className={styles.content}>
            { projects.length > 0 &&
              projects.map((project) => {
                return (
                  <Card
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    onClick={() => selectProject(project.id)}
                  />
                )
              })
            }
          </div>
        
      </div>
    )
}

export default Projects;