import { skillsObject } from "./skills";

const skillsSectionsObject = {
	backend: {
		id: 0,
		name: "Backend technologies",
		skills: [
			skillsObject.Node,
			skillsObject.Python,
			skillsObject.Nest,
			skillsObject.Express,
			skillsObject.FastAPI,
			skillsObject.Koa,
		],
	},
	frontend: {
		id: 1,
		name: "Frontend technologies",
		skills: [
			skillsObject.React,
			skillsObject.Redux,
			skillsObject.Next,
			skillsObject.Vite,
			skillsObject.HTMLCSS,
			skillsObject.SASS,
		],
	},
	aiEngineering: {
		id: 2,
		name: "AI Engineering",
		skills: [
			skillsObject.LangChain,
			skillsObject.LangGraph,
			skillsObject.LangSmith,
			skillsObject.Ollama,
			skillsObject.RAG,
			skillsObject.ContextEngineering,
			skillsObject.FineTuning,
		],
	},
	devops: {
		id: 3,
		name: "Cloud & Infrastructure",
		skills: [
			skillsObject.Docker,
			skillsObject.AWS,
			skillsObject.GCP,
			skillsObject.RabbitMQ,
			skillsObject.PubSub,
			skillsObject.Heroku,
			skillsObject.CICD,
		],
	},
	database: {
		id: 4,
		name: "Database",
		skills: [
			skillsObject.SQL,
			skillsObject.Postgresql,
			skillsObject.MongoDb,
			skillsObject.Redis,
			skillsObject.ElasticSearch,
			skillsObject.Sequelize,
			skillsObject.SQLAlchemy,
			skillsObject.Prisma,
			skillsObject.Mongoose,
		],
	},
	testing: {
		id: 5,
		name: "Testing",
		skills: [
			skillsObject.Jest,
			skillsObject.SuperTest,
			skillsObject.Pytest,
			skillsObject.ReactTestingLibrary,
		],
	},

	aiCodeAssistants: {
		id: 6,
		name: "AI Code Assistants",
		skills: [
			skillsObject.GoogleAntigravity,
			skillsObject.CursorIDE,
			skillsObject.ClaudeCode,
		],
	},
};

const skillsSectionsArray = Object.values(skillsSectionsObject);

export { skillsSectionsObject, skillsSectionsArray };
