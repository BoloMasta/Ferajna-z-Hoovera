import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ children, onClick, className, noStyles, ...props }) => {
  return (
    <button
      className={noStyles ? className : `${styles.button} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  noStyles: PropTypes.bool,
};
