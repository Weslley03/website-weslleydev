import RowOverview from '../../components/RowOverview/RowOverview';
import projects from "../../data/overview-projects.json";
import styles from './ProjectOverviewPage.module.scss';

const ProjectOverviewPage = () => {
  return (
    <div className={styles.father}>
      <span className={styles.title}> project overview </span>
      <div className={styles.content}>
        {projects && projects.map((project, index) => (
          <RowOverview side={index % 2 === 0 ? 'left' : 'right' } overview={project} key={project.id}/>
        ))}
      </div>
    </div>
  );
}

export default ProjectOverviewPage;