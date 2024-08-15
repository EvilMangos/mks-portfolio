import classNames from "classnames";
import React from "react";

import classes from "./Button.module.scss";

type ButtonType = "button" | "submit" | "reset";

interface IProps {
	text: string;
	outClass: string;
	type?: ButtonType;
	disabled?: boolean;
}

const Button = ({
	text,
	outClass = "",
	type = "button",
	disabled = false,
}: IProps) => {
	const buttonClasses = classNames(outClass, classes.container);
	return (
		<div className={buttonClasses}>
			<button type={type} className={classes.button} disabled={disabled}>
				{text}
			</button>
		</div>
	);
};

export default Button;
