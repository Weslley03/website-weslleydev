import { useState } from 'react'
import TerminalBlock from '../../components/TerminalBlock/TerminalBlock'
import SkillRow from '../../components/SkillRow/SkillRow'
import ProjectRow from '../../components/ProjectRow/ProjectRow'
import ContactRow from '../../components/ContactRow/ContactRow'
import projects from '../../data/projects.json'
import styles from './Home.module.scss'

const skills = [
  { key: 'languages', value: 'typescript, java' },
  { key: 'backend',   value: 'spring boot, nestjs' },
  { key: 'frontend',  value: 'reactjs, vuejs' },
  { key: 'database',  value: 'postgresql, mongodb atlas' },
]

const contactInfo = [
  { flag: '--phone',    value: '+55 44 99942-8194' },
  { flag: '--github',   value: 'github.com/weslley03' },
  { flag: '--linkedin', value: 'linkedin.com/in/weslley-felipe-69a547187/' },
  { flag: '--location', value: 'maringá, paraná' },
]

const talkOptions = [
  { id: 1, label: 'whatsapp', href: 'https://wa.me/5544999428194' },
  { id: 2, label: 'linkedin', href: 'https://www.linkedin.com/in/weslley-felipe-69a547187/' },
]

function Home() {
  const [selected, setSelected] = useState(1)

  function handleTalk(option) {
    setSelected(option.id)
    window.open(option.href, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={styles.page}>
      <div className={styles.terminal}>

        <div className={styles.windowBar}>
          <div className={styles.dots}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
          </div>
          <span className={styles.windowTitle}>weslley@portfolio ~</span>
        </div>

        <div className={styles.body}>

          <TerminalBlock command="whoami">
            <h1 className={styles.name}>weslley felipe</h1>
            <p className={styles.subtitle}>
              full-stack developer · java + typescript · maringá, pr
            </p>
            <p className={styles.bio}>
              <span className={styles.chevron}>&gt;</span>
              fullstack coder em aplicações web completas. do frontend moderno ao backend robusto, integrações com apis,
              bancos de dados e arquitetura de sistemas. atualmente disponível para projetos e consultoria.
            </p>
          </TerminalBlock>

          <TerminalBlock command="cat skills.txt">
            <div className={styles.list}>
              {skills.map(s => (
                <SkillRow key={s.key} skillKey={s.key} value={s.value} />
              ))}
            </div>
          </TerminalBlock>

          <TerminalBlock command="ls -la ~/projects">
            <div className={styles.list}>
              {projects.map(p => (
                <ProjectRow key={p.id} title={p.title} description={p.description} href={p.href} />
              ))}
            </div>
          </TerminalBlock>

          <TerminalBlock command="./contact --help">
            <div className={styles.list}>
              {contactInfo.map(c => (
                <ContactRow key={c.flag} flag={c.flag} value={c.value} />
              ))}
            </div>
          </TerminalBlock>

          <TerminalBlock command="run ./talk.sh">
            <p className={styles.talkPrompt}>
              <span className={styles.chevron}>&gt;</span>
              vamos conversar?
            </p>
            <div className={styles.talkButtons}>
              {talkOptions.map(opt => (
                <button
                  key={opt.id}
                  className={`${styles.talkBtn} ${selected === opt.id ? styles.talkBtnActive : ''}`}
                  onClick={() => handleTalk(opt)}
                >
                  [{opt.id}] {opt.label}
                </button>
              ))}
            </div>
            <p className={styles.talkHint}>selecione uma opção...</p>
          </TerminalBlock>

          <div className={styles.finalPrompt}>
            <span className={styles.promptSymbol}>~ $</span>
            <span className={styles.cursor}>_</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
