import classes from "./SkillItem.module.scss";
import classNames from "classnames";

const SkillsItem = ({ name, outClass }) => {
	const containerClasses = classNames(classes.container, outClass);
	return <div className={containerClasses}>{name}</div>;
};

export default SkillsItem;
