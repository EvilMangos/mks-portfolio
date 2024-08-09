import classes from "./Button.module.scss";
import classNames from "classnames";

const Button = ({ text, outClass = "" }) => {
	const buttonClasses = classNames(outClass, classes.container);
	return (
		<div className={buttonClasses}>
			<button className={classes.button}>{text}</button>
		</div>
	);
};

export default Button;
