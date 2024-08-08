import NavMenuItem from "./NavMenuItem/NavMenuItem";
import classes from "./NavigationMenu.module.scss";
import { useRef } from "react";

const NavigationMenu = ({outClass}) => {
	const divRef = useRef<HTMLDivElement>(null);

	const onMouseEnter = () => {
		divRef.current?.classList.add(classes.menuLinkHover);
	};
	const onMouseLeave = () => {
		divRef.current?.classList.remove(classes.menuLinkHover);
	};
	return (
		<div className={`${outClass} ${classes.menu}`} ref={divRef}>
			<NavMenuItem link={"/"} text={"Who I Am"} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
									 outClass={classes.menuItem} />
			<NavMenuItem link={"/services"} text={"My Services"} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
									 outClass={classes.menuItem} />
			<NavMenuItem link={"/skills"} text={"My Skills"} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
									 outClass={classes.menuItem} />
			<NavMenuItem link={"/experience"} text={"My Experience"} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
									 outClass={classes.menuItem} />
			<NavMenuItem link={"/projects"} text={"My Projects"} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
									 outClass={classes.menuItem} />
			<NavMenuItem link={"/contacts"} text={"Contacts"} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
									 outClass={classes.menuItem} />
		</div>
	);
};

export default NavigationMenu;