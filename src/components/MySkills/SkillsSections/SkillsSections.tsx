import { skillsSectionsArray } from "../../../datasets/skillsSections";
import SkillsSection from "./SkillSection/SkillsSection";
import classes from "./SkillsSections.module.scss";
import classNames from "classnames";
import { useState } from "react";

const SkillsSections = ({ outClass }) => {
	const [openSections, setOpenSections] = useState([]);

	const openSection = (section) => {
		setOpenSections([...openSections, section]);
	};

	const closeSection = (section) => {
		setOpenSections(
			openSections.filter((openSection) => section !== openSection)
		);
	};

	const containerSections = classNames(classes.container, outClass);

	const renderedSections = skillsSectionsArray.map((section) => (
		<SkillsSection
			key={section.id}
			id={section.id}
			name={section.name}
			subList={section.skills}
			isOpen={openSections.includes(section.id)}
			open={openSection}
			close={closeSection}
		/>
	));

	return <div className={containerSections}>{renderedSections}</div>;
};

export default SkillsSections;
