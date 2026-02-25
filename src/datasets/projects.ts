import dictaryImage from "/src/assets/images/projects/dictary.png";
import jobAgentBotImge from "/src/assets/images/projects/job-agent-bot.png";

const projectsObject = {
	jobAgentBot: {
		name: "Job Search Assistant",
		link: "https://github.com/job-agent",
		image: jobAgentBotImge,
		description: "Job Search Assistant to automate job search.",
	},
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
