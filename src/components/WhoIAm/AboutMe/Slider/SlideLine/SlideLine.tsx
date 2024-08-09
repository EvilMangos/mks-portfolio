import classes from "./SlideLine.module.scss";

const SlideLine = ({ label, value }) => {
	return (
		<div className={classes.slideLine}>
			<span className={classes.label}>{label}: </span>
			<span className={classes.value}>{value}</span>
		</div>
	);
};

export default SlideLine;