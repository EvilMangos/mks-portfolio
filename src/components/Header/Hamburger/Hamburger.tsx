import hamburger from "../../../assets/icons/hamburger_menu.png";
import classes from "./Hamburger.module.scss";

const Hamburger = ({ outClass, toggleSubMenu }) => {
	return (
		<div className={`${classes.container} ${outClass}`} onClick={toggleSubMenu}>
			<img src={hamburger} alt="menu" />
		</div>
	);
};

export default Hamburger;
