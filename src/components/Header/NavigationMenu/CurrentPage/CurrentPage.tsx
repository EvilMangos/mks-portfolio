import React from "react";
import classes from "./CurrentPage.module.scss";

const CurrentPage = ({ text }) => {
	return <div className={classes.currentPage}>{text}</div>;
};

export default React.memo(CurrentPage);
