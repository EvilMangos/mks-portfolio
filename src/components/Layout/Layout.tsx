import React, { useEffect } from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import classes from "./Layout.module.scss";
import Footer from "../Footer/Footer";

const Layout = () => {
	const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

	const location = useLocation();

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
		[classes.blur]: isSubMenuOpen,
		[classes.whoIAmBG]: location.pathname === "/"
	});

	return (
		<div className={layoutClasses}>
			<div className={classes.container}>
				<Header isSubMenuOpen={isSubMenuOpen} setIsSubMenuOpen={setIsSubMenuOpen}/>
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default React.memo(Layout);
