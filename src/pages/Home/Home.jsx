import { useState } from 'react'
import PropTypes from 'prop-types'
import TerminalBlock from '../../components/TerminalBlock/TerminalBlock'
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

function SkillRow({ skillKey, value }) {
  return (
    <div className={styles.skillRow}>
      <span className={styles.skillKey}>{skillKey}</span>
      <span className={styles.arrow}>→</span>
      <span className={styles.skillValue}>{value}</span>
    </div>
  )
}

SkillRow.propTypes = {
  skillKey: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

function ProjectRow({ title, description, href }) {
  return (
    <div className={styles.projectRow} onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}>
      <span className={styles.projectArrow}>→</span>
      <span className={styles.projectName}>{title.toLowerCase()}</span>
      <span className={styles.projectDesc}>
        {description.toLowerCase().slice(0, 52).trimEnd()}...
      </span>
      <span className={styles.projectLink}>↗</span>
    </div>
  )
}

ProjectRow.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

function ContactRow({ flag, value }) {
  return (
    <div className={styles.contactRow}>
      <span className={styles.contactFlag}>{flag}</span>
      <span className={styles.contactValue}>{value}</span>
    </div>
  )
}

ContactRow.propTypes = {
  flag: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

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
              fullstack coder em aplicações web completas. do frontend moderno ao backend robusto, integrações com APIs,
              bancos de dados e arquitetura de sistemas. atualmente disponível para projetos e consultoria.
            </p>
          </TerminalBlock>

          <TerminalBlock command="cat skills.txt">
            <div className={styles.skillList}>
              {skills.map(s => (
                <SkillRow key={s.key} skillKey={s.key} value={s.value} />
              ))}
            </div>
          </TerminalBlock>

          <TerminalBlock command="ls -la ~/projects">
            <div className={styles.projectList}>
              {projects.map(p => (
                <ProjectRow key={p.id} title={p.title} description={p.description} href={p.href} />
              ))}
            </div>
          </TerminalBlock>

          <TerminalBlock command="./contact --help">
            <div className={styles.contactList}>
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
