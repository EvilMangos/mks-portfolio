import classes from "./Description.module.scss";
import classNames from "classnames";
import { useEffect, useRef } from "react";

const Description = ({ text, outClass }) => {
	const textRef = useRef(null);
	const containerClasses = classNames(classes.container, outClass);
	useEffect(() => {
		if (textRef && textRef.current) {
			const clone = textRef.current.cloneNode(true)
			clone.innerHTML = text;
			textRef.current.parentNode.replaceChild(clone, textRef.current);
			textRef.current = clone;
		}
	}, [text]);
	return (
		<div className={containerClasses}>
			<h3 className={classes.title}>Description</h3>
			<div className={classes.text} ref={textRef}>
				<div className={classes.textTransparency}>
					{text}
				</div>
			</div>
		</div>
	);
};

export default Description;