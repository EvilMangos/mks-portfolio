import arrow_next_inactive from "../../../../../assets/icons/arrow_next_inactive_icon.svg";
import arrow_back_inactive from "../../../../../assets/icons/arrow_back_inactive_icon.svg";
import arrow_next_active from "../../../../../assets/icons/active/arrow_next_active_icon.svg";
import arrow_back_active from "../../../../../assets/icons/active/arrow_back_active_icon.svg";
import classes from "./Arrow.module.scss";
import { forwardRef } from "react";
import classNames from "classnames";

const Arrow = forwardRef<
	HTMLImageElement,
	{ isPrev: boolean; isActive: boolean }
>((props, ref) => {
	const image = props.isPrev
		? props.isActive
			? arrow_back_active
			: arrow_back_inactive
		: props.isActive
			? arrow_next_active
			: arrow_next_inactive;

	const arrowClasses = classNames(classes.arrow, {
		[classes.active]: props.isActive,
	});
	return <img className={arrowClasses} src={image} alt="arrow" ref={ref} />;
});

Arrow.displayName = "Arrow";

export default Arrow;
