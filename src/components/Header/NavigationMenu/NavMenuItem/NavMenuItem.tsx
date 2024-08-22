import { NavLink } from "react-router-dom";
import classes from "./NavMenuItem.module.scss";

const NavMenuItem = ({
	text,
	link,
	onMouseEnter,
	onMouseLeave,
	outClass,
	onClick,
}) => {
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
