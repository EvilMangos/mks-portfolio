import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";

const Layout = () => {
	return (
		<div className={classes.layout}>
			<div className={classes.container}>
				<Header />
				<Outlet />
			</div>
		</div>
	);
};

export default React.memo(Layout);
