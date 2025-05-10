import hamburger from "../../../assets/icons/hamburger_menu.png";
import classes from "./Hamburger.module.scss";

interface HamburgerProps {
	outClass: string;
	toggleSubMenu: () => void;
}

const Hamburger = ({ outClass, toggleSubMenu }: HamburgerProps) => {
	return (
		<div className={`${classes.container} ${outClass}`} onClick={toggleSubMenu}>
			<img src={hamburger} alt="menu" />
		</div>
	);
};

export default Hamburger;
