import classes from "./Slide.module.scss";
import classNames from "classnames";
import calendar from "../../../../assets/icons/active/calendar_active.png";

interface SlideProps {
	name: string;
	logo: string;
	role: string;
	startDate: string;
	finishDate: string;
	stack: string[];
	isActive: boolean;
}

const Slide = ({
	name,
	logo,
	role,
	startDate,
	finishDate,
	stack,
	isActive,
}: SlideProps) => {
	const cardClasses = classNames(classes.card, {
		[classes.activeSlide]: isActive,
	});
	return (
		<div className={cardClasses}>
			<img className={classes.image} src={logo} alt="logo" />
			<h2 className={classes.title}>{name}</h2>
			<div className={classes.role}>{role}</div>
			<div className={classes.dates}>
				<img className={classes.calendar} src={calendar} alt="calendar" />
				<div className={classes.datesLine}>
					<span className={classes.startDate}>{startDate}</span>
					&nbsp;-&nbsp;
					<span className={classes.finishDate}>{finishDate || "Present"}</span>
				</div>
			</div>
			<div className={classes.stack}>
				<span className={classes.stackLabel}>Stack: </span>
				{stack.join(", ")}.
			</div>
		</div>
	);
};

export default Slide;
