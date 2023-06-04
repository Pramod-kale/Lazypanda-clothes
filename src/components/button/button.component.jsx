import "./button.styles.scss";
import Spinner from './../spinner/Spinner';

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button disabled={isLoading} style={{ paddingTop: `${isLoading ? '8px' : '0px'}` }}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {isLoading ? <Spinner width='30px' height='30px' /> : children}
    </button>
  );
};

export default Button;
