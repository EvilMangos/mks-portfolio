import { skillsObject } from "./skills";

const skillsSectionsObject = {
	backend: {
		id: 0,
		name: "Backend",
		skills: [
			skillsObject.JavaScript,
			skillsObject.TypeScript,
			skillsObject.Python,
			skillsObject.Node,
			skillsObject.Nest,
			skillsObject.Express,
			skillsObject.Koa,
			skillsObject.PubSub,
			skillsObject.RabbitMQ,
			skillsObject.Sequelize,
			skillsObject.Prisma,
			skillsObject.Mongoose,
			skillsObject.Jest,
		],
	},
	frontend: {
		id: 1,
		name: "Frontend",
		skills: [
			skillsObject.JavaScript,
			skillsObject.TypeScript,
			skillsObject.HTML,
			skillsObject.CSS,
			skillsObject.SASS,
			skillsObject.React,
			skillsObject.Redux,
			skillsObject.ReduxToolkit,
			skillsObject.Next,
		],
	},
	devops: {
		id: 2,
		name: "DevOps",
		skills: [
			skillsObject.AWS,
			skillsObject.GCP,
			skillsObject.Heroku,
			skillsObject.CICD,
		],
	},
	databases: {
		id: 3,
		name: "Databases",
		skills: [skillsObject.Postgresql, skillsObject.MongoDb, skillsObject.Redis],
	},
	websitePlatforms: {
		id: 4,
		name: "Website Platforms",
		skills: [skillsObject.Wix],
	},
};

const skillsSectionsArray = Object.values(skillsSectionsObject);

export { skillsSectionsObject, skillsSectionsArray };
