import Card from "../../components/Card";
import educationScreen from '../../assets/educationScreen.png';
import filterScreen from '../../assets/filterScreen.png';
import modalAlert from '../../assets/modalAlert.png';
import checkout from '../../assets/checkout.png';
import miniVueFramework from '../../assets/miniVueFramework.png'; 
import styles from './Projects.module.scss';

const myProjects = [
  { 
    image: educationScreen, 
    title: 'Application of studies', 
    description: 'In these projects, I developed a responsive web interface designed for managing educational question banks and creating customizable review lists. The system allows users to create, edit, duplicate, print, and delete question lists, as well as apply filters and search functionalities efficiently.' 
  },
  {
    image: filterScreen,
    title: 'Application of studies',
    description: 'this interface showcases a high-performance, state-managed educational platform that allows users to filter and explore over 15,000 questions in real time. leveraging advanced state management pinia and optimized rendering, the system enables dynamic filtering by subject, exam board, difficulty, year, and question type with minimal latency.',
  },
  { 
    image: modalAlert, 
    title: 'Application of colleges, and teachers', 
    description: 'this interface is part of a high-performance educational platform designed for schools, colleges, and teachers. the system features a dynamic validation module that identifies incompatible questions during the test creation process.' 
  },
  { 
    image: checkout, 
    title: 'Custom Checkout', 
    description: 'I developed a fully customizable checkout screen, designed to adapt to the visual identity and needs of different stores. The focus was to create a flexible, scalable and highly usable solution for different customer profiles.' 
  },
  { 
    image: miniVueFramework, 
    title: 'mini-vue-framework',
    description: 'built with modern JavaScript, it leverages Proxy for reactivity, dynamic DOM updates, and event binding. the goal is to demonstrate core concepts like state management, component-like structures, and the foundations of reactivity in JavaScript.' 
  },
];

function Projects(){
    return(
        <div className={styles.container}> 
          <h1 className={styles.title}> my projects </h1>
          <div className={styles.content}>
            { myProjects && myProjects.length > 0 &&
              myProjects.map((project) => {
                return (
                  <Card
                    key={project.title}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                  />
                )
              })
            }
          </div>
        </div>
    )
}

export default Projects;