import dictaryImage from "/src/assets/images/projects/dictary.png";
import claudeCodePluginsImage from "/src/assets/images/projects/claude-code-plugins.webp";
import jobAgentBotImge from "/src/assets/images/projects/job-agent-bot.png";

const projectsObject = {
	claudeCodePlugins: {
		name: "Claude Code Plugins",
		link: "https://github.com/EvilMangos/claude-code-plugins.git",
		image: claudeCodePluginsImage,
		description: "Claude Code Plugins to boost development productivity.",
	},
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
