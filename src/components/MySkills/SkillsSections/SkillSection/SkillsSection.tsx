import SkillsSubList from "./SkillsSubList/SkillsSubList";
import classes from "./SkillsSection.module.scss";
import classNames from "classnames";

const SkillsSection = ({ id, name, subList, isOpen, open, close }) => {
	const onClick = () => {
		if (isOpen) {
			close(id);
		} else {
			open(id);
		}
	};
	const containerClasses = classNames(
		classes.container,
		classes[`items_${subList.length}`],
		{
			[classes.containerOpen]: isOpen,
		}
	);
	const titleClasses = classNames(classes.title, {
		[classes.open]: isOpen,
	});
	return (
		<div className={containerClasses}>
			<div className={titleClasses} onClick={onClick}>
				{name}
			</div>
			<SkillsSubList subList={subList} />
		</div>
	);
};

export default SkillsSection;
