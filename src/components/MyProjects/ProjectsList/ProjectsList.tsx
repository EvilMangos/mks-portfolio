import { useState } from "react";
import classes from "./ProjectsList.module.scss";
import classNames from "classnames";
import ProjectItem from "./ProjectItem/ProjectItem";
import { projectsArray } from "../../../datasets/projects";

interface ProjectsListProps {
	outClass: string;
}

const placeholderProject = {
	name: "Coming Soon...",
	description:
		"This project is currently under development. Stay tuned for updates!",
	image: "/images/coming-soon.jpg",
	link: undefined,
};

const ProjectsList = ({ outClass }: ProjectsListProps) => {
	const containerClasses = classNames(classes.container, outClass);

	// Create an array of 4 items, using placeholder for any missing projects
	const displayProjects = Array(4)
		.fill(null)
		.map((_, index) => projectsArray[index] || placeholderProject);

	return (
		<div className={containerClasses}>
			<div className={classes.content}>
				{displayProjects.map((project, index) => (
					<ProjectItem key={index} {...project} />
				))}
			</div>
		</div>
	);
};

export default ProjectsList;
