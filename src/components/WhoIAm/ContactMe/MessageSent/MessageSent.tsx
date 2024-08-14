import classes from "./MessageSent.module.scss";
import bobble from "../../../../assets/images/form_sent_success.png";
import React from "react";

const MessageSent = () => {
	return (
		<img src={bobble} className={classes.messageSent} alt="Success message" />
	);
};

export default React.memo(MessageSent);
