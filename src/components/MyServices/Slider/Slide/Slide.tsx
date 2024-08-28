import classes from "./Slide.module.scss";
import classNames from "classnames";

const Slide = ({ title, icon, selectedIcon, alt, isActive }) => {
	const cardClasses = classNames(classes.card, {
		[classes.activeSlide]: isActive,
	});
	return (
		<div className={cardClasses}>
			<img
				className={classes.image}
				src={isActive ? selectedIcon : icon}
				alt={alt}
			/>
			<span className={classes.title}>{title}</span>
		</div>
	);
};

export default Slide;
