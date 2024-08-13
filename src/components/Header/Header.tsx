import React, { useCallback, useRef } from "react";
import classNames from "classnames";

import classes from "./Header.module.scss";
import Logo from "./Logo/Logo";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import Hamburger from "./Hamburger/Hamburger";
import useOutsideClick from "../../helpers/useOutsideClick";

const Header = ({ isSubMenuOpen, setIsSubMenuOpen }) => {
	const ref = useRef(null);

	const containerClasses = classNames(classes.container, {
		[classes.blurBackground]: isSubMenuOpen,
	});

	const headerClasses = classNames(classes.header, {
		[classes.headerOpen]: isSubMenuOpen,
	});

	const onOutsideClick = () => {
			setIsSubMenuOpen(false);
	};

	useOutsideClick(ref, onOutsideClick);

	const toggleSubMenu = useCallback(() => {
		setIsSubMenuOpen(!isSubMenuOpen);
	},  [isSubMenuOpen, setIsSubMenuOpen]);

	return (
		<header className={containerClasses}>
			<div className={headerClasses} ref={ref}>
				<Logo />
				<NavigationMenu
					isSubMenuOpen={isSubMenuOpen}
					outClass={classes.menu}
					setIsSubMenuOpen={setIsSubMenuOpen}
				/>
				<Hamburger outClass={classes.hamburger} toggleSubMenu={toggleSubMenu} />
			</div>
		</header>
	);
};

export default React.memo(Header);
