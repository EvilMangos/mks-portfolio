import dictaryImage from "/src/assets/images/projects/dictary.png";

const projectsObject = {
	dictary: {
		name: "Dictary",
		link: "https://dictary.org",
		image: dictaryImage,
		description:
			"Personalized vocabulary trainer for foreign language learners.",
	},
};

const projectsArray = Object.values(projectsObject);

export { projectsObject, projectsArray };
