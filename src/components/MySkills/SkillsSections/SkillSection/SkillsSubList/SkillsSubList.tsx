import SkillsItem from "./SkillsItem/SkillsItem";
import classes from "./SkillsSubList.module.scss";

interface SkillsSubListProps {
	subList: string[];
}

const SkillsSubList = ({ subList }: SkillsSubListProps) => {
	const renderedSkills = subList.map((skill, index) => (
		<SkillsItem key={index} name={skill} outClass={classes.item} />
	));
	return <div className={classes.container}>{renderedSkills}</div>;
};

export default SkillsSubList;
