import classes from "./Description.module.scss";
import classNames from "classnames";
import { useEffect, useRef } from "react";

const Description = ({ text, outClass }) => {
	const textRef = useRef(null);
	const containerClasses = classNames(classes.container, outClass);

	useEffect(() => {
		if (textRef && textRef.current) {
			textRef.current.innerHTML = text;
		}
	}, [text]);

	return (
		<div className={containerClasses}>
			<div key={text} className={classes.text} ref={textRef}>
				{text}
			</div>
		</div>
	);
};

export default Description;
