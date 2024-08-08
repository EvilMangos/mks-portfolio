import { useRef } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

import NavMenuItem from "./NavMenuItem/NavMenuItem";
import classes from "./NavigationMenu.module.scss";
import CurrentPage from "./CurrentPage/CurrentPage";
import pathToText from "../../../helpers/pathToText";

const NavigationMenu = ({ outClass, isSubMenuOpen, toggleSubMenu }) => {
	const location = useLocation();
	const currentPageText = pathToText(location.pathname);
	const divRef = useRef<HTMLDivElement>(null);

	const onMouseEnter = () => {
		divRef.current?.classList.add(classes.menuLinkHover);
	};
	const onMouseLeave = () => {
		divRef.current?.classList.remove(classes.menuLinkHover);
	};

	const currentPageClasses = classNames(outClass, classes.currentPage, {
		[classes.hide]: isSubMenuOpen,
	});
	const subMenuClasses = classNames(classes.subMenu, {
		[classes.hide]: !isSubMenuOpen,
	});

	return (
		<div className={classes.menu} ref={divRef}>
			<div className={currentPageClasses} onClick={toggleSubMenu}>
				<CurrentPage text={currentPageText} />
			</div>
			<div className={subMenuClasses}>
				<NavMenuItem
					link={"/"}
					text={"Who I Am"}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
					outClass={classes.menuItem}
				/>
				<NavMenuItem
					link={"/services"}
					text={"My Services"}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
					outClass={classes.menuItem}
				/>
				<NavMenuItem
					link={"/skills"}
					text={"My Skills"}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
					outClass={classes.menuItem}
				/>
				<NavMenuItem
					link={"/experience"}
					text={"My Experience"}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
					outClass={classes.menuItem}
				/>
				<NavMenuItem
					link={"/projects"}
					text={"My Projects"}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
					outClass={classes.menuItem}
				/>
				<NavMenuItem
					link={"/contacts"}
					text={"Contacts"}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
					outClass={classes.menuItem}
				/>
			</div>
		</div>
	);
};

export default NavigationMenu;
