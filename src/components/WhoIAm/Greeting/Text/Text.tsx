import classes from "./Text.module.scss";
import classNames from "classnames";

interface TextProps {
	outClass: string;
}

const Text = ({ outClass }: TextProps) => {
	const textClasses = classNames(outClass, classes.text);
	return (
		<p className={textClasses}>
			<span className={classes.highlighted}>I am a Full Stack Developer</span>{" "}
			specializing in Node.js, React, and AWS. I can manage the full product
			lifecycle—designing scalable architectures, building features, and
			maintaining the cloud infrastructure. Also, thanks to my AI-focused
			background, I’m highly skilled in AI tools and excel at integrating
			intelligent solutions to drive innovation.”
		</p>
	);
};

export default Text;
