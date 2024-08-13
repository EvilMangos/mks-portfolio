import arrow from "../../../../../assets/icons/arrow_icon.png";
import arrow_inactive from "../../../../../assets/icons/arrow_inactive_icon.png";
import classes from "./Arrow.module.scss";
import classNames from "classnames";
import { forwardRef } from "react";

const Arrow = forwardRef<HTMLImageElement, { isPrev: boolean, isActive: boolean }>((props, ref) => {
	const arrowClasses = classNames(classes.arrow, {
		[classes.isPrev]: props.isPrev,
	});
	return (
		<img
			className={arrowClasses}
			src={props.isActive ? arrow : arrow_inactive}
			alt="arrow"
			ref={ref}
		/>
	);
});

export default Arrow;
