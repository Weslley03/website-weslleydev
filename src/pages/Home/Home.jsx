import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'
import linkedinlogo from '../../assets/linkedin.png'
import githublogo from '../../assets/github.png'
import styles from './Home.module.scss';

function Home(){
    return(
        <div className={styles.containerHome}> 
            <div className={styles.top}>
                <div className={styles.logo}></div>
                <div className={styles.links}> 
                    <a href='https://www.linkedin.com/in/weslley-felipe-69a547187/' target="_blank" rel="noopener noreferrer"> 
                        <img className={styles.logoImg} src={linkedinlogo}/>
                    </a>
                    <a href='https://github.com/weslley03' target="_blank" rel="noopener noreferrer"> 
                        <img className={styles.logoImg} src={githublogo}/>
                    </a>
                </div>
            </div>

            <div className={styles.welcomeSection}>
                <div className={styles.separacaoWelcome}>
                    <div className={styles.parteTextual}>
                        <div className={styles.texto}>
                            <h1> Welcome Outsider</h1>
                            <p>my name is Weslley, i`m a fullstack developer and i have a few years of experience in the market. i currently work in an EdTech and as a freelancer, and this way, i developed technical and non-technical skills, such as teamwork and excellent problem solving.</p>
                            <p>i`m proficient in <strong style={{ color: '#79B45F' }}> Node.js </strong> development, building applications with <strong style={{ color: '#EED81C' }}>JavaScript</strong>,
                                taking care of issues such as scalability, performance, code readability and proper use of tools. I really like using <strong style={{ color: '#3178C5' }}>TypeScript</strong>
                                for the backend side, i belive it brings confidence to the code and i can use all my Javascript knowledge. I prioritize testing in my Applications and i like to use libs and frameworks
                                like <strong style={{ color: '#EA2859' }}>Nest.js</strong>, <strong style={{ color: '#3998B6' }}>React.js</strong> and <strong style={{ color: '#67B983' }}> Vue.js </strong>
                                to make my live as a developer easier.</p>
                            <Link to={'/weslley-projects'} style={{textDecoration:'none'}}>
                                <label className={styles.label}> my projects... </label>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <Link to={'/contato'} style={{ textDecoration: 'none', color: 'inherit'}}>
                    <span className={styles.label}>contact forms</span>
                </Link>
            </div>

        </div>
    )
}

export default Home
