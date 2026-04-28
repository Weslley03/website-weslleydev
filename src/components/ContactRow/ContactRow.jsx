import PropTypes from 'prop-types'
import styles from './ContactRow.module.scss'

function ContactRow({ flag, value }) {
  return (
    <div className={styles.row}>
      <span className={styles.flag}>{flag}</span>
      <span className={styles.value}>{value}</span>
    </div>
  )
}

ContactRow.propTypes = {
  flag: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default ContactRow
