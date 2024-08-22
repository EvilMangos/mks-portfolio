import classNames from "classnames";
import React, { MouseEventHandler } from "react";

import classes from "./Button.module.scss";

type ButtonType = "button" | "submit" | "reset";

interface IProps {
	text: string;
	outClass: string;
	type?: ButtonType;
	disabled?: boolean;
	onClick?: MouseEventHandler;
}

const Button = ({
	text,
	outClass = "",
	type = "button",
	disabled = false,
	onClick = null,
}: IProps) => {
	const buttonClasses = classNames(outClass, classes.container);
	return (
		<div className={buttonClasses}>
			<button
				type={type}
				className={classes.button}
				disabled={disabled}
				onClick={onClick}
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
