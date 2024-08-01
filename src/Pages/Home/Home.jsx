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
  import 'bootstrap-icons/font/bootstrap-icons.css';


function Home(){
    return(
        <ContainerHome> 
            <DivTop>
                <DivLogo>                   
                     <a href='https://discord.com/channels/@me' target="_blank" rel="noopener noreferrer"> 
                       <ImgLogo src='../../../public/logo/weslley.png' alt='logoWeslley'/>
                     </a>
                </DivLogo>

                <DivLinks> 
                    <a href='https://github.com/weslley03' target="_blank" rel="noopener noreferrer"> 
                        <ImgLogo src='../../../public/logo/github.png'/>
                    </a>
                    <a href='https://www.linkedin.com/in/weslley-felipe-69a547187/' target="_blank" rel="noopener noreferrer"> 
                      <ImgLogo src='../../../public/logo/linkedin.png'/>
                    </a>
                </DivLinks>
            </DivTop>

            <DivWelcome>
                <DivSeparacaoWelcome>
                    <DivParteTextual>
                        <DivTexto>
                            <h1> Welcome </h1>
                            <p>me chamo weslley, sou estudante de programação e desenvolvedor se especializando em backend, trabalho atualmente numa empresa de sistemas educacionais e como freelancer. tenho diversos projetos interessantes para lhe apresentar!</p>
                            <p>com experiência em HTML5 e CSS para criação de interfaces responsivas e acessíveis, tenho proficiência em JAVASCRIPT e conhecimento prático com EXPRESS.JS, REACT.JS, MONGOOSE, JWT e SWAGGER, proporcionando desenvolvimento ágil e seguro, tenho também habilidade com MYSQL WORKBENCH para estruturas relacionais e MONGODB para estruturas não relacionais. </p>
                        </DivTexto>
                    </DivParteTextual>

                    <DivProjetos>
                        <DivOpcoes>
                            <h2>Projects</h2>
                            <Link to={'/wfnews'} style={{textDecoration:'none'}}>
                                <span>WFNews (SITE COMPLETO)</span>
                            </Link>
                            <Link to={'/websockets'} style={{textDecoration:'none'}}>
                                <span>WebSockets-NODEJS</span>
                            </Link>
                            <Link to={'/video-streaming'} style={{textDecoration:'none'}}>
                                <span>Video-Streaming-NODEJS</span>                           
                            </Link>
                            <Link to={'/crudfullstack'} style={{textDecoration:'none'}}>
                                <span>CRUD-FullStack-Node-React-MySQL</span>                       
                            </Link>
                        </DivOpcoes>
                    </DivProjetos>
                </DivSeparacaoWelcome>
            </DivWelcome>

            <DivFooter>
                <Link to={'/contato'} style={{textDecoration:'none'}}>
                    <span>formas de contato.</span>
                </Link>
            </DivFooter>

        </ContainerHome>
    )
}

export default Home