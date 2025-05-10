import { NavLink } from "react-router-dom";
import classes from "./NavMenuItem.module.scss";

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
	return (
		<NavLink
			className={`${outClass} ${classes.link} ${classes.prioritier}`}
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
