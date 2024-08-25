import { skillsObject } from "./skills";

const skillsSectionsObject = {
	backend: {
		languages: {
			id: 0,
			name: "Programming languages",
			skills: [skillsObject.JavaScript, skillsObject.TypeScript],
		},
		id: 1,
		name: "Backend technologies",
		skills: [
			skillsObject.Node,
			skillsObject.Nest,
			skillsObject.Express,
			skillsObject.Koa,
			skillsObject.Sequelize,
			skillsObject.Prisma,
			skillsObject.Mongoose,
		],
	},
	frontend: {
		id: 2,
		name: "Frontend technologies",
		skills: [
			skillsObject.React,
			skillsObject.Redux,
			skillsObject.Next,
			skillsObject.SASS,
			skillsObject.HTMLCSS,
		],
	},
	devops: {
		id: 3,
		name: "Clouds & Infrastructure",
		skills: [
			skillsObject.AWS,
			skillsObject.GCP,
			skillsObject.Heroku,
			skillsObject.CICD,
			skillsObject.RabbitMQ,
		],
	},
	databases: {
		id: 4,
		name: "Databases",
		skills: [skillsObject.Postgresql, skillsObject.MongoDb, skillsObject.Redis],
	},
	testing: {
		id: 5,
		name: "Testing",
		skills: [skillsObject.Jest, skillsObject.Mocha, skillsObject.SuperTest],
	},
	websitePlatforms: {
		id: 6,
		name: "Website Platforms",
		skills: [skillsObject.Wix],
	},
};

const skillsSectionsArray = Object.values(skillsSectionsObject);

export { skillsSectionsObject, skillsSectionsArray };
