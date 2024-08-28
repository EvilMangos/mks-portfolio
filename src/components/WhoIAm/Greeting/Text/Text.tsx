import classes from "./Text.module.scss";
import classNames from "classnames";

const Text = ({ outClass }) => {
	const textClasses = classNames(outClass, classes.text);
	return (
		<p className={textClasses}>
			<span className={classes.highlighted}>I am a Full Stack Developer</span>{" "}
			skilled in front-end and back-end development. Proficient in JavaScript,
			TypeScript, React, Node.js as well as in many other technologies. I excel
			in managing SQL and NoSQL databases and aim to leverage modern
			technologies to build efficient and innovative applications.
		</p>
	);
};

export default Text;
