import classes from "./Text.module.scss";

const Text = ({ text }) => {
	return (
		<div key={text} className={classes.container}>
			{text}
		</div>
	);
};

export default Text;
