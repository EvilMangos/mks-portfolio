const pagesObject = {
	whoIAm: {
		id: 1,
		path: "/",
		name: "Who I Am",
	},
	myServices: {
		id: 2,
		path: "/services",
		name: "My Services",
	},
	mySkills: {
		id: 3,
		path: "/skills",
		name: "My Skills",
	},
	myExperience: {
		id: 4,
		path: "/experience",
		name: "My Experience",
	},
	myProjects: {
		id: 5,
		path: "/projects",
		name: "My Projects",
	},
	contacts: {
		id: 6,
		path: "/contacts",
		name: "Contacts",
	},
};

const pagesArray = Object.values(pagesObject);

export {
	pagesObject,
	pagesArray,
};