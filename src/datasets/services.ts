import consultancy from "../assets/icons/services/chat_icon.png";
import consultancy_selected from "../assets/icons/services/hover/chat_hover_icon.png";
import web from "../assets/icons/services/web_icon.png";
import web_selected from "../assets/icons/services/hover/web_hover_icon.png";
import mobile from "../assets/icons/services/mobile_icon.png";
import mobile_selected from "../assets/icons/services/hover/mobile_hover_icon.png";
import bot from "../assets/icons/services/bot_icon.png";
import bot_selected from "../assets/icons/services/hover/bot_hover_icon.png";
import ai from "../assets/icons/services/ai_icon.png";
import ai_selected from "../assets/icons/services/hover/ai_hover_icon.png";
import deploy from "../assets/icons/services/deploy_icon.png";
import deploy_selected from "../assets/icons/services/hover/deploy_hover_icon.png";
import pc from "../assets/icons/services/pc_icon.png";
import pc_selected from "../assets/icons/services/hover/pc_hover_icon.png";
import legal from "../assets/icons/services/legal_icon.png";
import legal_selected from "../assets/icons/services/hover/legal_hover_icon.png";

const servicesArray = [
	{
		id: 0,
		title: "Consultancy",
		image: consultancy,
		imageSelected: consultancy_selected,
		alt: "consultancy",
		text: "I offer free consultancy to assist with your tech projects. Whether you need guidance on technology choices, optimizing your digital presence, or improving your development skills, I'm here to help.",
	},
	{
		id: 1,
		title: "Website Development",
		image: web,
		imageSelected: web_selected,
		alt: "web",
		text: "I provide comprehensive website development services to create responsive, user-friendly, and visually appealing websites tailored to your business needs.",
	},
	{
		id: 2,
		title: "Mobile App Development",
		image: mobile,
		imageSelected: mobile_selected,
		alt: "mobile",
		text: "I specialize in mobile app development, crafting intuitive and high-performing apps for both iOS and Android platforms to enhance your mobile presence.",
	},
	{
		id: 3,
		title: "Bot Development",
		image: bot,
		imageSelected: bot_selected,
		alt: "chat bot",
		text: "I develop custom bots to automate processes, improve customer interaction, and enhance your business efficiency through intelligent automation.",
	},
	{
		id: 4,
		title: "AI integration",
		image: ai,
		imageSelected: ai_selected,
		alt: "ai",
		text: "I integrate cutting-edge AI solutions into your projects, empowering your applications with advanced machine learning and data-driven decision-making capabilities.",
	},
	{
		id: 5,
		title: "Deployment",
		image: deploy,
		imageSelected: deploy_selected,
		alt: "deploy",
		text: "I offer deployment services to ensure your project is seamlessly launched and runs smoothly in production environments, with ongoing support and monitoring.",
	},
	{
		id: 6,
		title: "PC App Development",
		image: pc,
		imageSelected: pc_selected,
		alt: "pc",
		text: "I develop robust and efficient PC applications tailored to meet your specific needs, focusing on performance, usability, and cross-platform compatibility.",
	},
	{
		id: 7,
		title: "Legal Aspect",
		image: legal,
		imageSelected: legal_selected,
		alt: "legal",
		text: "I assist with the legal aspects of your tech projects, providing guidance on compliance, intellectual property, and contract management to protect your business.",
	},
];

export { servicesArray };
