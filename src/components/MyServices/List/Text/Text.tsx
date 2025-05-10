import classes from "./Text.module.scss";

interface TextProps {
	text: string;
}

const Text = ({ text }: TextProps) => {
	return (
		<div key={text} className={classes.container}>
			{text}
		</div>
	);
};

export default Text;
