import React from "react";
import classes from "./CurrentPage.module.scss";

interface CurrentPageProps {
	text: string;
}

const CurrentPage = ({ text }: CurrentPageProps) => {
	return <div className={classes.currentPage}>{text}</div>;
};

export default React.memo(CurrentPage);
