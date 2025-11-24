import classes from "./ExperienceItem.module.scss";
import calendar from "../../../../assets/icons/calendar_icon.png";
import calendarActive from "../../../../assets/icons/active/calendar_active.png";
import seeMore from "../../../../assets/icons/see_more_icon.png";
import seeLess from "../../../../assets/icons/active/see_less_icon.png";
import classNames from "classnames";

interface ExperienceItemProps {
	id: number;
	name: string;
	logo: string;
	role: string;
	startDate: string;
	finishDate: string;
	stack: string[];
	isActive: boolean;
	description: string;
	setActiveIndex: (index: number | null) => void;
}

const ExperienceItem = ({
	id,
	name,
	logo,
	role,
	startDate,
	finishDate,
	stack,
	isActive,
	description,
	setActiveIndex,
}: ExperienceItemProps) => {
	const onClick = () => {
		if (!isActive) {
			setActiveIndex(id);
		} else {
			setActiveIndex(null);
		}
	};

	const containerClasses = classNames(
		classes.container,
		classes.container,
		{
			[classes.active]: isActive,
		}
	);

	return (
		<div className={containerClasses} onClick={onClick}>
			<img src={logo} alt="logo" className={classes.logo} />
			<div className={classes.mainInfo}>
				<h2 className={classes.name}>{name}</h2>
				<h3 className={classes.role}>{role}</h3>
				<div className={classes.workingPeriod}>
					<img
						src={isActive ? calendarActive : calendar}
						alt="calendar"
						className={classes.calendar}
					/>
					&nbsp;
					<span>{startDate}</span>
					&nbsp;-&nbsp;
					<span>{finishDate || "Present"}</span>
				</div>
			</div>
			<div className={classes.open}>
				<img
					src={isActive ? seeLess : seeMore}
					alt={isActive ? "see less" : "see more"}
					className={classes.openIcon}
				/>
			</div>
			<div className={classes.stack}>
				<span className={classes.stackLabel}>Stack: </span>
				{stack.join(", ")}.
			</div>
			<div
				className={classNames(classes.descriptionWrapper, {
					[classes.open]: isActive,
				})}
			>
				<div className={classes.description}>
					<h3 className={classes.descriptionTitle}>Description</h3>
					<p
						className={classes.descriptionText}
						dangerouslySetInnerHTML={{ __html: description }}
					></p>
				</div>
			</div>
		</div>
	);
};

export default ExperienceItem;
