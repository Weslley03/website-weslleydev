import PropTypes from 'prop-types'
import styles from './TerminalBlock.module.scss'

function TerminalBlock({ command, children, text }) {
  return (
    <div className={styles.block}>
      <div className={styles.prompt}>
        <span className={styles.promptSymbol}>~ $</span>
        <span className={styles.command}>{command}</span>
      </div>
      <div className={styles.content}>
        {text && <p className={styles.text}>{text}</p>}
        {children}
      </div>
      <div className={styles.separator} aria-hidden="true">
        {'·'.repeat(60)}
      </div>
    </div>
  )
}

TerminalBlock.propTypes = {
  command: PropTypes.string.isRequired,
  children: PropTypes.node,
  text: PropTypes.string,
}

export default TerminalBlock
