import classes from "./SlideLine.module.scss";
import { NavLink } from "react-router-dom";
import { useCallback } from "react";
import classNames from "classnames";

const SlideLine = ({
	id,
	label,
	value,
	image,
	link,
	setLastElementHovered,
}) => {
	const onMouseOver = useCallback(() => {
		if (image) {
			setLastElementHovered(id);
		}
	}, [image]);
	const valueClasses = classNames(classes.value, {
		[classes.link]: link,
	});
	return (
		<div className={classes.slideLine}>
			<span className={classes.label}>{label}: </span>
			{link ? (
				<NavLink to={link} className={valueClasses}>
					{value}
				</NavLink>
			) : (
				<span className={valueClasses} onMouseOver={onMouseOver}>
					{value}
				</span>
			)}
		</div>
	);
};

export default SlideLine;
