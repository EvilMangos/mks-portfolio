import React, { useRef } from "react";
import Greeting from "./Greeting/Greeting";
import classes from "./WhoIAm.module.scss";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";

const WhoIAm = () => {
	const formRef = useRef(null);
	return (
		<div className={classes.whoIAmcContainer}>
			<Greeting formRef={formRef} />
			<AboutMe />
			<ContactMe formRef={formRef} />
		</div>
	);
};

export default React.memo(WhoIAm);
