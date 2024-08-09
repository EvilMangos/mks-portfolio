import classNames from "classnames";
import React from "react";

import classes from "./Button.module.scss";

type ButtonType = "button" | "submit" | "reset";

interface IProps {
	text: string;
	outClass: string;
	type?: ButtonType;
}

const Button = ({ text, outClass = "", type = "button" }: IProps) => {
	const buttonClasses = classNames(outClass, classes.container);
	return (
		<div className={buttonClasses}>
			<button type={type} className={classes.button}>{text}</button>
		</div>
	);
};

export default Button;
