import SkillsItem from "./SkillsItem/SkillsItem";
import classes from "./SkillsSubList.module.scss";

const SkillsSubList = ({ subList }) => {
	const renderedSkills = subList.map((skill, index) => <SkillsItem key={index} name={skill} />);
	return (
		<div className={classes.container}>
			{renderedSkills}
		</div>
	);
};

export default SkillsSubList;