import { useRef } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

import NavMenuItem from "./NavMenuItem/NavMenuItem";
import classes from "./NavigationMenu.module.scss";
import CurrentPage from "./CurrentPage/CurrentPage";
import { pagesArray } from "../../../datasets/pages";

const NavigationMenu = ({ outClass, isSubMenuOpen, setIsSubMenuOpen }) => {
	const location = useLocation();
	const currentPageText =
		pagesArray.find((page) => page.path === location.pathname)?.name || null;
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

	const renderedNavigationMenu = pagesArray.map((page) => {
		const itemClasses = classNames(classes.menuItem, {
			[classes.selected]: page.path === location.pathname,
		});
		return (
			<NavMenuItem
				key={page.id}
				link={page.path}
				text={page.name}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				outClass={itemClasses}
			/>
		);
	});

	return (
		<div className={classes.menu} ref={divRef}>
			<div
				className={currentPageClasses}
				onClick={() => {
					setIsSubMenuOpen(true);
				}}
			>
				<CurrentPage text={currentPageText} />
			</div>
			<div className={subMenuClasses}>{renderedNavigationMenu}</div>
		</div>
	);
};

export default NavigationMenu;
