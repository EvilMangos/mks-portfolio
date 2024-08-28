const pagesObject = {
	whoIAm: {
		id: 0,
		path: "/",
		name: "Who I Am",
		isVisible: true,
	},
	myServices: {
		id: 1,
		path: "/services",
		name: "My Services",
		isVisible: true,
	},
	mySkills: {
		id: 2,
		path: "/skills",
		name: "My Skills",
		isVisible: true,
	},
	myExperience: {
		id: 3,
		path: "/experience",
		name: "My Experience",
		isVisible: true,
	},
	myProjects: {
		id: 4,
		path: "/projects",
		name: "My Projects",
		isVisible: false,
	},
	contacts: {
		id: 5,
		path: "/contacts",
		name: "Contacts",
		isVisible: true,
	},
};

const pagesArray = Object.values(pagesObject);

export { pagesObject, pagesArray };
