import classes from "./Slide.module.scss";
import classNames from "classnames";

const Slide = ({ title, image, imageSelected, text, isActive }) => {
	const slideClasses = classNames(classes.container, {
		[classes.selectedSlide]: isActive,
	});
	return (<div className={slideClasses}>
		<img className={classes.image} src={isActive ? imageSelected : image} alt="service image" />
		<div className={classes.title}>{title}</div>
		<p className={classes.text}>{text}</p>
	</div>);
};

export default Slide;