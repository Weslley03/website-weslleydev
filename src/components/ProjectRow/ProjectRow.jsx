import PropTypes from 'prop-types'
import styles from './ProjectRow.module.scss'

function ProjectRow({ title, description, href }) {
  return (
    <div
      className={styles.row}
      onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
    >
      <span className={styles.arrow}>→</span>
      <span className={styles.name}>{title.toLowerCase()}</span>
      <span className={styles.description}>
        {description.toLowerCase().slice(0, 52).trimEnd()}...
      </span>
      <span className={styles.link}>↗</span>
    </div>
  )
}

ProjectRow.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string,
}

ProjectRow.defaultProps = {
  href: '#',
}

export default ProjectRow
