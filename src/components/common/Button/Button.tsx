import classNames from "classnames";
import { MouseEventHandler } from "react";

import classes from "./Button.module.scss";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
	text: string;
	outClass?: string;
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
}: ButtonProps) => {
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
