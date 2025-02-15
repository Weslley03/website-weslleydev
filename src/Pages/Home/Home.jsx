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
                            <p>my name is Weslley, i'm a fullstack developer and i have a few years of experience in the market. i currently work in an EdTech and as a freelancer, and this way, i developed technical and non-technical skills, such as teamwork and excellent problem solving.</p>
                            <p>i'm proficient in Node.js development, building applications with <strong style={{color: '#EED81C'}}>JavaScript</strong>, taking care of issues such as scalability, performance, code readability and proper use of tools. I really like using <strong style={{color: '#3178C5'}}>TypeScript</strong> for the backend side, i belive it brings confidence to the code and i can use all my Javascript knowledge. I prioritize testing in my Applications and i like to use libs and frameworks like <strong style={{color: '#EA2859'}}>Nest.js</strong> and <strong style={{color: '#3998B6'}}>React.js</strong> to make my live as a developer easier.</p>
                        </DivTexto>
                    </DivParteTextual>

                    <DivProjetos>
                        <DivOpcoes>
                            <h2>my projects</h2>
                            <Link to={'/wfnews'} style={{textDecoration:'none'}}>
                                <span>break news website</span>
                            </Link>
                            <Link to={'/lhotse-learning-english'} style={{textDecoration:'none'}}>
                                <span>lhotse-learning english</span>                       
                            </Link>
                            <Link to={'https://github.com/Weslley03/mini-vue-framework'} style={{textDecoration:'none'}}>
                                <span>mini-vue-framework</span>
                            </Link>
                            <Link to={'https://github.com/Weslley03/cache-decorator-with-redis'} style={{textDecoration:'none'}}>
                                <span>cache-decorator-with-redis</span>                           
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
