import React from "react";
import Greeting from "./Greeting/Greeting";
import classes from "./WhoIAm.module.scss";

const WhoIAm = () => {
	return <div className={classes.whoIAmcContainer}>
		<Greeting/>
	</div>;
};

export default React.memo(WhoIAm);
