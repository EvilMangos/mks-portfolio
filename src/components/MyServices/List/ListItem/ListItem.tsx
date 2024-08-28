import classes from "./ListItem.module.scss";
import classNames from "classnames";

const ListItem = ({
	id,
	title,
	icon,
	selectedIcon,
	alt,
	isActive,
	setActiveElement,
}) => {
	const onHover = () => {
		setActiveElement(id);
	};

	const cardClasses = classNames(classes.card, {
		[classes.active]: isActive,
	});

	return (
		<div className={cardClasses} onMouseOver={onHover}>
			<img
				className={classes.icon}
				src={isActive ? selectedIcon : icon}
				alt={alt}
			/>
			<span className={classes.title}>{title}</span>
		</div>
	);
};

export default ListItem;
