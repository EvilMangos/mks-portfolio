import React from "react";
import classNames from "classnames";

import classes from "./Header.module.scss";
import Logo from "./Logo/Logo";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import Hamburger from "./Hamburger/Hamburger";

const Header = () => {
	const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
	const toggleSubMenu = () => {
		setIsSubMenuOpen(!isSubMenuOpen);
	}

	const headerClasses = classNames(classes.header, {
		[classes.headerOpen]: isSubMenuOpen,
	})

	return (
		<header className={headerClasses}>
			<Logo />
			<NavigationMenu isSubMenuOpen={isSubMenuOpen} outClass={classes.menu} toggleSubMenu={toggleSubMenu} />
			<Hamburger outClass={classes.hamburger} toggleSubMenu={toggleSubMenu} />
		</header>
	);
};

export default React.memo(Header);