import React, { useEffect, useRef } from "react";
import Greeting from "./Greeting/Greeting";
import classes from "./WhoIAm.module.scss";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import scrollToElement from "../../helpers/scrollToElement";

const WhoIAm = () => {
	const formRef = useRef(null);

	useEffect(() => {
		if (window.history.state.usr?.scrollToForm) {
			scrollToElement(formRef?.current);
		}
	}, [window.history.state.usr?.scrollToForm]);
	return (
		<div className={classes.whoIAmcContainer}>
			<Greeting formRef={formRef} />
			<AboutMe />
			<ContactMe formRef={formRef} />
		</div>
	);
};

export default React.memo(WhoIAm);
