import PropTypes from "prop-types";
import styles from "./Button2.module.scss";

const Button2 = ({ children, onClick, className, ...props }) => {
  return (
    // <button className={`${styles.button} ${className}`} onClick={onClick} {...props}>
    //   {children}
    // </button>

    //     <div class="button-container-2">
    //     <span class="mas">MASK2</span>
    //   <button type="button" name="Hover">MASK2</button>
    // </div>

    <div className={styles.buttonContainer2}>
      <span className={styles.mas}>{children}</span>
      <button type="button" name="Hover" className={className} onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button2;

Button2.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
