import { experienceArray } from "../../../datasets/experience";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import { useState } from "react";
import classes from "./ExperienceList.module.scss";

const ExperienceList = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const renderedList = experienceArray.map((experience) => (
		<ExperienceItem
			key={experience.id}
			id={experience.id}
			name={experience.name}
			logo={experience.logo}
			role={experience.position}
			startDate={experience.startDate}
			finishDate={experience.finishDate}
			stack={experience.stack}
			isActive={experience.id === activeIndex}
			description={experience.description}
			setActiveIndex={setActiveIndex}
		/>
	));
	return (
		<div className={classes.container}>
			<div className={classes.content}>{renderedList}</div>
		</div>
	);
};

export default ExperienceList;
