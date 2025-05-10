import { skillsObject } from "./skills";

const skillsSectionsObject = {
	backend: {
		id: 0,
		name: "Backend technologies",
		skills: [
			skillsObject.Node,
			skillsObject.Nest,
			skillsObject.Express,
			skillsObject.Koa,
		],
	},
	frontend: {
		id: 1,
		name: "Frontend technologies",
		skills: [
			skillsObject.React,
			skillsObject.Redux,
			skillsObject.HTMLCSS,
			skillsObject.SASS,
		],
	},
	devops: {
		id: 2,
		name: "Cloud & Infrastructure",
		skills: [skillsObject.AWS, skillsObject.Heroku, skillsObject.CICD],
	},
	database: {
		id: 3,
		name: "Database",
		skills: [
			skillsObject.SQL,
			skillsObject.Postgresql,
			skillsObject.MongoDb,
			skillsObject.Redis,
			skillsObject.Sequelize,
			skillsObject.Prisma,
			skillsObject.Mongoose,
		],
	},
	testing: {
		id: 4,
		name: "Testing",
		skills: [skillsObject.Jest, skillsObject.Mocha, skillsObject.SuperTest],
	},
};

const skillsSectionsArray = Object.values(skillsSectionsObject);

export { skillsSectionsObject, skillsSectionsArray };
