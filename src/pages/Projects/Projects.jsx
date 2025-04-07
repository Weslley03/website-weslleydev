import styled from "styled-components";
import Card from "../../components/Card";

import wfnews from '../../assets/wfnews.png';
import lhotse from '../../assets/lhotse.png';
import checkout from '../../assets/checkout.png';
import miniVueFramework from '../../assets/miniVueFramework.png'; 
import cacheDecoratorRedis from '../../assets/cacheDecoratorRedis.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 65%;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 0.5rem;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  background-color: #0c0c0c;

  @media (max-width: 1056px) {
    width: 90%;
    padding: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 22px;
`;

const Title = styled.h1`
  color: #c4c4c4;
  font-size: 55px;

  @media (max-width: 900px) {
    font-size: 50px;
  }
`;

const myProjects = [
  { 
    image: wfnews, 
    title: 'WFNews', 
    description: 'I developed a modern and dynamic news website, using a combination of advanced technologies to provide a fast and intuitive user experience. This project highlights my full-stack development skills, covering everything from server configuration to user interface.' 
  },
  { 
    image: miniVueFramework, 
    title: 'mini-vue-framework',
    description: 'built with modern JavaScript, it leverages Proxy for reactivity, dynamic DOM updates, and event binding. the goal is to demonstrate core concepts like state management, component-like structures, and the foundations of reactivity in JavaScript.' 
  },
  { 
    image: cacheDecoratorRedis, 
    title: 'cache-decorator-with-redis',
    description: 'Learning decorators in Typescript, I created a project that stores data, the result of cached functions using Redis or Memory. Ideal for APIs that return heavy or complex data. Project developed with Typescript, Redis and Modular Architecture.' 
  },
  { 
    image: lhotse, 
    title: 'LHOTSE Learning-English', 
    description: 'This project is a web application developed to help users improve their English listening skills.' 
  },
  { 
    image: checkout, 
    title: 'Custom Checkout', 
    description: 'I developed a fully customizable checkout screen, designed to adapt to the visual identity and needs of different stores. The focus was to create a flexible, scalable and highly usable solution for different customer profiles.' 
  },
];

function Projects(){
    return(
        <Container>
          <Title> my projects</Title>
          <Content>
            { myProjects && myProjects.length > 0 &&
              myProjects.map((project) => {
                return (
                  <Card 
                    image={project.image}
                    title={project.title}
                    description={project.description}
                  />
                )
              })
            }
          </Content>
        </Container>
    )
}

export default Projects;