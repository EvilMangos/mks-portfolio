import classes from "./SkillItem.module.scss";

const SkillsItem = ({name}) => {
	return (
		<div className={classes.container}>
			{name}
		</div>
	);
};

export default SkillsItem;