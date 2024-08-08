import React from "react";

import classes from "./Header.module.scss";
import Logo from "./Logo/Logo";
import NavigationMenu from "./NavigationMenu/NavigationMenu";

const Header = () => {
    return (
        <header className={classes.header}>
            <Logo/>
            <NavigationMenu outClass={classes.menu}/>
        </header>
    )
}

export default React.memo(Header);