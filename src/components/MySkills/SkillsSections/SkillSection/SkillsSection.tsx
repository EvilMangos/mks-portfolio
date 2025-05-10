import SkillsSubList from "./SkillsSubList/SkillsSubList";
import classes from "./SkillsSection.module.scss";
import classNames from "classnames";

interface SkillsSectionProps {
	id: number;
	name: string;
	subList: string[];
	isOpen: boolean;
	open: (id: number) => void;
	close: (id: number) => void;
}

const SkillsSection = ({
	id,
	name,
	subList,
	isOpen,
	open,
	close,
}: SkillsSectionProps) => {
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
