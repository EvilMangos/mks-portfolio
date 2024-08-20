const pagesObject = {
	whoIAm: {
		id: 1,
		path: "/",
		name: "Who I Am",
		isVisible: true,
	},
	myServices: {
		id: 2,
		path: "/services",
		name: "My Services",
		isVisible: false,
	},
	mySkills: {
		id: 3,
		path: "/skills",
		name: "My Skills",
		isVisible: false,
	},
	myExperience: {
		id: 4,
		path: "/experience",
		name: "My Experience",
		isVisible: true
	},
	myProjects: {
		id: 5,
		path: "/projects",
		name: "My Projects",
		isVisible: false,
	},
	contacts: {
		id: 6,
		path: "/contacts",
		name: "Contacts",
		isVisible: true,
	},
};

const pagesArray = Object.values(pagesObject);

export { pagesObject, pagesArray };
