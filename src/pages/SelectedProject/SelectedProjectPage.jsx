import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import styles from './SelectedProjectPage.module.scss';


const SelectedProjectPage = () => {
  const { projectId } = useParams();

  const project = projects.find(project => project.id === projectId);

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <img className={styles.projectImage} src={project.image} />
        <span> { project.title } </span>
      </div>
    </div>
  );
}

export default SelectedProjectPage;