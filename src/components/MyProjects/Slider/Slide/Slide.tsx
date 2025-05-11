import { FC } from "react";
import classes from "./Slide.module.scss";
import classNames from "classnames";
import seeMoreIcon from "/src/assets/icons/see_more_green.png";

interface SlideProps {
	name: string;
	description: string;
	image: string;
	link?: string;
	isActive?: boolean;
}

const Slide: FC<SlideProps> = ({
	name,
	description,
	image,
	link,
	isActive,
}) => {
	const containerClasses = classNames(classes.container, {
		[classes.active]: isActive,
	});

	const handleClick = () => {
		if (link) {
			window.open(link, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<div className={containerClasses} onClick={handleClick}>
			<div className={classes.imageContainer}>
				<img src={image} alt={name} className={classes.image} />
				<div className={classes.overlay}>
					<img
						src={seeMoreIcon}
						alt="See more"
						className={classes.seeMoreIcon}
					/>
				</div>
			</div>
			<div className={classes.content}>
				<h3 className={classes.title}>{name}</h3>
				<p className={classes.description}>{description}</p>
			</div>
		</div>
	);
};

export default Slide;
