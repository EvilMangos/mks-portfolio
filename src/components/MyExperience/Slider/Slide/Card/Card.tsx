import classes from "./Card.module.scss";
import calendar from "../../../../../assets/icons/calendar_active.png";
import classNames from "classnames";

const Card = ({ name, logo, role, startDate, finishDate, stack, isActive }) => {
	const cardClasses = classNames(classes.card, {
		[classes.activeSlide]: isActive,
	})
	return (
		<div className={cardClasses}>
			<img className={classes.image} src={logo} alt="logo" />
			<h2 className={classes.title}>{name}</h2>
			<div className={classes.role}>{role}</div>
			<div className={classes.dates}>
				<img className={classes.calendar} src={calendar} alt="calendar" />
				<div className={classes.datesLine}>
					<span className={classes.startDate}>{startDate}</span>-<span
					className={classes.finishDate}>{finishDate}</span>
				</div>
			</div>
			<div className={classes.stack}><span className={classes.stackLabel}>Stack: </span>{stack.join(", ")}.</div>
		</div>
	);
};

export default Card;