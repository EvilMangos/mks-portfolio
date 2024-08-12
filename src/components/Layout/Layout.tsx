import React, { useCallback, useEffect } from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";
import Footer from "../Footer/Footer";

const Layout = () => {
	const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
	const toggleSubMenu = useCallback(() => {
		setIsSubMenuOpen(!isSubMenuOpen);
	}, [isSubMenuOpen, setIsSubMenuOpen]);

	useEffect(() => {
		if (isSubMenuOpen) {
			document.body.classList.add(classes.hideOverflow);
		} else {
			document.body.classList.remove(classes.hideOverflow);
		}

		return () => {
			document.body.classList.remove(classes.hideOverflow);
		}
	}, [isSubMenuOpen])

	const layoutClasses = classNames(classes.layout, {
		[classes.blur]: isSubMenuOpen
	});

	return (
		<div className={layoutClasses}>
			<div className={classes.container}>
				<Header isSubMenuOpen={isSubMenuOpen} toggleSubMenu={toggleSubMenu}/>
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default React.memo(Layout);
