import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import classes from "./Layout.module.scss";
import Footer from "../Footer/Footer";
import { pagesObject } from "../../datasets/pages";

const Layout = () => {
	const contentRef = useRef(null);
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
		};
	}, [isSubMenuOpen]);

	useEffect(() => {
		setIsSubMenuOpen(false);
		if (contentRef && contentRef.current) {
			contentRef.current.classList.remove(classes.visible);
			void contentRef.current.offsetWidth;
			setTimeout(() => {
				if (contentRef.current) {
					contentRef.current.classList.add(classes.visible);
				}
			}, 50);
		}
		return () => {
			if (contentRef && contentRef.current) {
				contentRef.current.classList.remove(classes.visible);
			}
		}
	}, [location.pathname]);

	const layoutClasses = classNames(classes.layout, {
		[classes.blur]: isSubMenuOpen,
		[classes.whoIAmBG]: location.pathname === pagesObject.whoIAm.path,
		[classes.contacts]: location.pathname === pagesObject.contacts.path,
		[classes.myExperience]: location.pathname === pagesObject.myExperience.path,
		[classes.mySkills]: location.pathname === pagesObject.mySkills.path,
	});

	return (
		<div className={layoutClasses}>
			<div className={classes.container}>
				<Header
					isSubMenuOpen={isSubMenuOpen}
					setIsSubMenuOpen={setIsSubMenuOpen}
				/>
				<main className={classes.content} ref={contentRef}>
					<Outlet />
				</main>

				<Footer />
			</div>
		</div>
	);
};

export default React.memo(Layout);
