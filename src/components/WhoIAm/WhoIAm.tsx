import React from "react";
import Greeting from "./Greeting/Greeting";
import classes from "./WhoIAm.module.scss";
import AboutMe from "./AboutMe/AboutMe";

const WhoIAm = () => {
	return <div className={classes.whoIAmcContainer}>
		<Greeting />
		<AboutMe />
	</div>;
};

export default React.memo(WhoIAm);
