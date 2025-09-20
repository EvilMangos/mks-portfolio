import zazmic from "../assets/images/logos/zazmic.png";
import dictary from "../assets/images/logos/dictary.png";
import dataannotation from "../assets/images/logos/dataannotation.png";
import { skillsObject } from "./skills";

const experienceObject = {
	dataannotation: {
		id: 0,
		name: "DataAnnotation.tech",
		position: "Software Engineer",
		logo: dataannotation,
		startDate: "May 2024",
		finishDate: null,
		stack: [
			skillsObject.TypeScript,
			skillsObject.JavaScript,
			skillsObject.Node,
			skillsObject.Python,
		],
		description: `Over the past year, I've worked intensively with AI-generated code and responses through my role at DataAnnotation.tech. This experience has given me a deep, hands-on understanding of modern AI tools and how to apply them effectively in real-world development workflows.

I've developed strong prompt engineering skills and an instinct for identifying weaknesses in AI outputs, including subtle logic errors, guideline deviations, or misuse of libraries. As a result, I know how to get high-quality results from AI tools and where human oversight is critical.
<br/>
<br/>
Beyond evaluation, I've become adept at integrating AI into daily development tasks. Whether it's automating repetitive work, speeding up analysis, or improving decision-making, I know how and where to apply AI to boost productivity. I often spot integration opportunities others overlook-adding meaningful automation or insight where it actually matters.
<br/>
Working with a wide variety of unfamiliar code has also sharpened my ability to quickly understand complex logic and architectures. This allows me to navigate new codebases fast, identify issues, and make improvements with confidence.
<br/>
<br/>
My exposure to a broad range of coding scenarios and AI behaviors has equipped me with the judgment to choose the right tools and approaches for different tasks. I stay up to date with AI trends, capabilities, and limitations, and I bring that insight to every project I work on.`,
	},
	dictary: {
		id: 1,
		name: "Dictary",
		position: "Full-Stack Developer",
		logo: dictary,
		startDate: "Jun 2023",
		finishDate: null,
		stack: [
			skillsObject.TypeScript,
			skillsObject.MongoDb,
			skillsObject.CICD,
			skillsObject.AWS,
			skillsObject.Redux,
			skillsObject.React,
			skillsObject.SASS,
			skillsObject.Jest,
			skillsObject.Mongoose,
			skillsObject.Nest,
			skillsObject.Node,
		],
		description: `Dictary is a vocabulary-learning tool for foreign language learners that I built entirely from scratch. From backend and frontend to infrastructure, I designed and implemented every part of the system to create a fast, secure, and reliable product ready for production use.
		<br/>
		<br/>
		<strong>Key Technical Achievements:</strong>
		<br/>
		<br/>
<ul>
  <li><b>End-to-End Development:</b> Architected and developed the entire stack, ensuring seamless integration, performance consistency, and full ownership of the development lifecycle.</li>
  <li><b>Real-Time Optimization:</b> Refined the real-time translation pipeline across frontend and backend, resulting in instant response times while minimizing external API usage and keeping infrastructure costs under control.</li>
  <li><b>Automation and Efficiency:</b> Automated routine workflows such as CI/CD, monitoring, and user compliance tracking through serverless functions, drastically reducing the need for manual intervention.</li>
  <li><b>Security Best Practices:</b> Applied modern security standards to prevent common attack vectors, hardening the platform against penetration attempts and ensuring user data protection.</li>
  <li><b>Reliable Infrastructure:</b> Built a scalable and cost-efficient AWS-based architecture, enabling consistent performance and ease of maintenance as the platform evolved.</li>
</ul>
<br/>

Why It Matters:

Dictary reflects my ability to deliver real-world SaaS products with technical precision and long-term maintainability. I don't just write code—I build resilient, production-grade systems that perform, scale, and solve real problems efficiently.
`,
	},
	zazmic: {
		id: 2,
		name: "Zazmic Inc.",
		position: "Node.js Developer",
		logo: zazmic,
		startDate: "Jun 2021",
		finishDate: "Jun 2023",
		stack: [
			skillsObject.JavaScript,
			skillsObject.TypeScript,
			skillsObject.Redis,
			skillsObject.Postgresql,
			skillsObject.Jest,
			skillsObject.Koa,
			skillsObject.Sequelize,
			skillsObject.PubSub,
			skillsObject.Nest,
			skillsObject.Node,
			skillsObject.GCP,
		],
		description: `At Zazmic company, I was a key member of the international team developing a groundbreaking system to streamline operations between medical facilities in the US and Canada. Our prestigious clients included:
<br/>
<br/>
<ul>
<li>One of the world's largest imaging center organizations.</li>
<li>A highly respected teleradiology group.</li>
<li>A major OEM.</li>
</ul>
<br/>As a Software Developer/Engineer, I played a pivotal role in resolving critical company issues, orchestrating the seamless transfer of gigabytes of data from diverse sources to our server, and optimizing performance to achieve a perfect balance between speed and resource consumption. This experience has honed my ability to manage high-load projects and deliver scalable, efficient code.
<br/><br/>Working on a healthcare project across the US and Canada required us to adhere to the strictest security protocols and best practices. My passion for cybersecurity and penetration testing enabled me to make significant contributions to our security processes. I was actively involved in implementing robust systems to protect our servers and user data, allowing me to learn from cybersecurity veterans and enhance my expertise.
<br/><br/>The team was exceptional, filled with talented professionals and wonderful individuals. The culture of experience sharing and process discussions was deeply ingrained in our workflow, which helped me develop strong problem-assessment and debating skills.
<br/><br/>Overall, this experience taught me how to manage large-scale enterprise projects. I am committed to applying this knowledge to even the smallest projects, ensuring they grow without compromising on performance and security.`,
	},
};

const experienceArray = Object.values(experienceObject);

export { experienceObject, experienceArray };
