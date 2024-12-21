import { Link } from 'react-router-dom';
import { 
    ContainerHome,
    DivLogo,
    ImgLogo,
    DivLinks,
    DivTop,
    DivWelcome,
    DivSeparacaoWelcome, 
    DivParteTextual,
    DivTexto,
    DivProjetos,
    DivOpcoes,
    DivFooter
  } from './HomeStyled'
  import 'bootstrap-icons/font/bootstrap-icons.css'
  import weslleylogo from '../../assets/weslley.png'
  import linkedinlogo from '../../assets/linkedin.png'
  import githublogo from '../../assets/github.png'


function Home(){
    return(
        <ContainerHome> 
            <DivTop>
                <DivLogo>                   
                     <a href='https://discord.com/channels/@me' target="_blank" rel="noopener noreferrer"> 
                       <ImgLogo src={weslleylogo} alt='logoWeslley'/>
                     </a>
                </DivLogo>

                <DivLinks> 
                    <a href='https://www.linkedin.com/in/weslley-felipe-69a547187/' target="_blank" rel="noopener noreferrer"> 
                        <ImgLogo src={linkedinlogo}/>
                    </a>
                    <a href='https://github.com/weslley03' target="_blank" rel="noopener noreferrer"> 
                    <ImgLogo src={githublogo}/>
                    </a>
                </DivLinks>
            </DivTop>

            <DivWelcome>
                <DivSeparacaoWelcome>
                    <DivParteTextual>
                        <DivTexto>
                            <h1> Welcome Outsider</h1>
                            <p>My name is Weslley, Im a FullStack web developer, I currently work in an educational systems company and as a freelancer. I have several interesting projects to present to you!</p>
                            <p>I am proficient in development with <strong style={{color: '#417E38'}}>Node.js</strong>, languages such as <strong style={{color: '#EED81C'}}>
                                JavaScript</strong> and <strong style={{color: '#3178C5'}}>TypeScript</strong>, practical knowledge with <strong style={{color: '#EA2859'}}>Nest.js</strong>, <strong style={{color: '#3998B6'}}>React.js</strong>, I have also used 
                            ORMs such as <strong style={{color: '#4C51BF'}}>Prisma</strong> and <strong style={{color: '#A03333'}}>Mongoose</strong>, <strong style={{color: '#FF45CE'}}>JWT</strong> for authentication and SWAGGER for documentation, experience that provides agile and secure development, I also have skills with <strong>MySQL Workbench</strong> for relational structures and <strong>MongoDB</strong> for non-relational structures.</p>
                        </DivTexto>
                    </DivParteTextual>

                    <DivProjetos>
                        <DivOpcoes>
                            <h2>my projects</h2>
                            <Link to={'/wfnews'} style={{textDecoration:'none'}}>
                                <span>WFNews (FULL SITE)</span>
                            </Link>
                            <Link to={'/websockets'} style={{textDecoration:'none'}}>
                                <span>ONLINE CHAT with WebSockets</span>
                            </Link>
                            <Link to={'/video-streaming'} style={{textDecoration:'none'}}>
                                <span>Video-Streaming-NODEJS</span>                           
                            </Link>
                            <Link to={'/crudfullstack'} style={{textDecoration:'none'}}>
                                <span>CRUD-FullStack-Node-React-MySQL</span>                       
                            </Link>
                            <Link to={'/lhotse-learning-english'} style={{textDecoration:'none'}}>
                                <span>LHOTSE-Learning-English</span>                       
                            </Link>
                        </DivOpcoes>
                    </DivProjetos>
                </DivSeparacaoWelcome>
            </DivWelcome>

            <DivFooter>
                <Link to={'/contato'} style={{textDecoration:'none'}}>
                    <span>contact forms</span>
                </Link>
            </DivFooter>

        </ContainerHome>
    )
}

export default Home
