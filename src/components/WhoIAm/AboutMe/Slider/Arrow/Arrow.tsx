import arrow from "../../../../../assets/icons/arrow_icon.png";
import arrow_inactive from "../../../../../assets/icons/arrow_inactive_icon.png";
import classes from "./Arrow.module.scss";
import classNames from "classnames";

const Arrow = ({isPrev = false, isActive = true, ref}) => {
	const arrowClasses = classNames(classes.arrow, {
		[classes.isPrev]: isPrev,
	})
	return (
		<img className={arrowClasses} src={isActive ? arrow : arrow_inactive} alt="arrow" ref={ref} />
	)
}

export default Arrow;