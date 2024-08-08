import { NavLink } from "react-router-dom";
import classes from "./NavMenuItem.module.scss";

const NavMenuItem = ({ text, link, onMouseEnter, onMouseLeave, outClass }) => {
	return (
		<NavLink className={`${outClass} ${classes.link} ${classes.prioritier}`} to={link} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<span>{text}</span>
		</NavLink>
	);
};

export default NavMenuItem;