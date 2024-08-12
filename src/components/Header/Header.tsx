import React, { useRef } from "react";
import classNames from "classnames";

import classes from "./Header.module.scss";
import Logo from "./Logo/Logo";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import Hamburger from "./Hamburger/Hamburger";
import useOustideClick from "../../helpers/useOustideClick";

const Header = ({ isSubMenuOpen, toggleSubMenu }) => {
	const ref = useRef(null);

	const containerClasses = classNames(classes.container, {
		[classes.blurBackground]: isSubMenuOpen,
	});

	const headerClasses = classNames(classes.header, {
		[classes.headerOpen]: isSubMenuOpen,
	});

	const onOutsideClick = () => {
		toggleSubMenu();
	}

	useOustideClick(ref, onOutsideClick);

	return (
		<header className={containerClasses}>
			<div className={headerClasses} ref={ref}>
				<Logo />
				<NavigationMenu
					isSubMenuOpen={isSubMenuOpen}
					outClass={classes.menu}
					toggleSubMenu={toggleSubMenu}
				/>
				<Hamburger outClass={classes.hamburger} toggleSubMenu={toggleSubMenu} />
			</div>
		</header>
	);
};

export default React.memo(Header);
