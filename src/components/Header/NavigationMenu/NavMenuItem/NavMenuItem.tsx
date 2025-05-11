import { NavLink } from "react-router-dom";
import classes from "./NavMenuItem.module.scss";
import classNames from "classnames";

interface NavMenuItemProps {
	text: string;
	link: string;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
	outClass: string;
	onClick: () => void;
}

const NavMenuItem = ({
	text,
	link,
	onMouseEnter,
	onMouseLeave,
	outClass,
	onClick,
}: NavMenuItemProps) => {
	const linkClasses = classNames(classes.link, classes.prioritier, outClass);
	return (
		<NavLink
			className={linkClasses}
			to={link}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={onClick}
		>
			{text}
		</NavLink>
	);
};

export default NavMenuItem;
