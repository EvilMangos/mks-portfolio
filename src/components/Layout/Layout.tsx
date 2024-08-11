import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";
import Footer from "../Footer/Footer";

const Layout = () => {
	return (
		<div className={classes.layout}>
			<div className={classes.container}>
				<Header />
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default React.memo(Layout);
