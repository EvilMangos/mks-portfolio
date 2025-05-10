import classes from "./Slide.module.scss";
import classNames from "classnames";

interface SlideProps {
	title: string;
	icon: string;
	selectedIcon: string;
	alt: string;
	isActive: boolean;
}

const Slide = ({ title, icon, selectedIcon, alt, isActive }: SlideProps) => {
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
