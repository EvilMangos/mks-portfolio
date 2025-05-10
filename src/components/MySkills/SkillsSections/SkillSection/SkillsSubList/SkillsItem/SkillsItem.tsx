import classes from "./SkillItem.module.scss";
import classNames from "classnames";

interface SkillsItemProps {
	name: string;
	outClass?: string;
}

const SkillsItem = ({ name, outClass }: SkillsItemProps) => {
	const containerClasses = classNames(classes.container, outClass);
	return <div className={containerClasses}>{name}</div>;
};

export default SkillsItem;
