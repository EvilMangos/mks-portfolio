import SkillsSections from "./SkillsSections/SkillsSections";
import classes from "./MySkills.module.scss";

const mySkills = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.title}>My Skills</h1>
			<SkillsSections outClass={classes.sections} />
		</div>
	);
};

export default mySkills;
