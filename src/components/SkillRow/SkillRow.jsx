import PropTypes from 'prop-types'
import styles from './SkillRow.module.scss'

function SkillRow({ skillKey, value }) {
  return (
    <div className={styles.row}>
      <span className={styles.key}>{skillKey}</span>
      <span className={styles.arrow}>→</span>
      <span className={styles.value}>{value}</span>
    </div>
  )
}

SkillRow.propTypes = {
  skillKey: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default SkillRow
