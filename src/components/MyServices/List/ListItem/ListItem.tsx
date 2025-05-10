import classes from "./ListItem.module.scss";
import classNames from "classnames";

interface ListItemProps {
	id: number;
	title: string;
	icon: string;
	selectedIcon: string;
	alt: string;
	isActive: boolean;
	setActiveElement: (id: number) => void;
}

const ListItem = ({
	id,
	title,
	icon,
	selectedIcon,
	alt,
	isActive,
	setActiveElement,
}: ListItemProps) => {
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
