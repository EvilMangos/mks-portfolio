import { FC } from "react";
import classes from "./ProjectItem.module.scss";
import classNames from "classnames";
import seeMoreIcon from "/src/assets/icons/see_more_green.png";

interface ProjectItemProps {
	name: string;
	description: string;
	image: string;
	link?: string;
}

const ProjectItem: FC<ProjectItemProps> = ({
	name,
	description,
	image,
	link,
}) => {
	const containerClasses = classNames(classes.container);

	const isPlaceholder = name === "Coming Soon...";

	const handleClick = () => {
		if (!isPlaceholder && link) {
			window.open(link, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<div className={containerClasses} onClick={handleClick}>
			<div className={classes.imageContainer}>
				{isPlaceholder ? (
					<div className={classes.placeholder}>Coming Soon...</div>
				) : (
					<>
						<img src={image} alt={name} className={classes.image} />
						<div className={classes.overlay}>
							<img
								src={seeMoreIcon}
								alt="See more"
								className={classes.seeMoreIcon}
							/>
						</div>
					</>
				)}
			</div>
			<div className={classes.content}>
				<h3 className={classes.title}>{name}</h3>
				<p className={classes.description}>{description}</p>
			</div>
		</div>
	);
};

export default ProjectItem;
