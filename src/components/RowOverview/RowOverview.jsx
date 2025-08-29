import { highlightTech } from "../../utils/highlightTech";
import styles from "./RowOverview.module.scss";
import PropTypes from "prop-types";

const RowOverview = ({
  side,
  overview,
}) => {
  return (
    <div
      className={`${styles.content} ${side === "right" ? styles.reverse : ""}`}
    >
      <div className={styles.section}>
        <div className={styles.background}>
          <span className={styles.title}>{overview.title}</span>
          <span className={styles.description}> {highlightTech(overview.description)} </span>
        </div>
      </div>  

      <div>
        <img className={styles.image} src={overview.image} alt="project-preview" />
      </div>
    </div>
  );
};
RowOverview.propTypes = {
  side: PropTypes.oneOf(["left", "right"]),
  order: PropTypes.number,
  overview: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  })
};

export default RowOverview;
