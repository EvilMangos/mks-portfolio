import React, { useCallback, useRef } from "react";
import classNames from "classnames";

import classes from "./Header.module.scss";
import Logo from "./Logo/Logo";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import Hamburger from "./Hamburger/Hamburger";
import useOutsideClick from "../../helpers/useOutsideClick";
import ContactMe from "./ContactMe/ContactMe";
import useScrollDirectionChange from "../../helpers/useScrollDirectionChange";

interface HeaderProps {
	isSubMenuOpen: boolean;
	setIsSubMenuOpen: (isSubMenuOpen: boolean) => void;
}

const Header = ({ isSubMenuOpen, setIsSubMenuOpen }: HeaderProps) => {
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

	const onScrollChange = (isUp, isDown) => {
		if (isUp) {
			ref.current.classList.add(classes.contactMeBelow);
		} else if (isDown) {
			ref.current.classList.remove(classes.contactMeBelow);
		}
	};

	useOutsideClick(ref, onOutsideClick);
	useScrollDirectionChange(onScrollChange);

	const toggleSubMenu = useCallback(() => {
		setIsSubMenuOpen(!isSubMenuOpen);
	}, [isSubMenuOpen, setIsSubMenuOpen]);

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
				<ContactMe outClass={classes.contactMe} />
			</div>
		</header>
	);
};

export default React.memo(Header);
