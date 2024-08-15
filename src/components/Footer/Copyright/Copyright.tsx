import classes from "./Copyright.module.scss";
import classNames from "classnames";

const Copyright = ({ outClass }) => {
	const copyrightClasses = classNames(outClass, classes.copyright);
	return (
		<div className={copyrightClasses}>
			© Maksym Khamets. All rights reserved
		</div>
	);
};

export default Copyright;
