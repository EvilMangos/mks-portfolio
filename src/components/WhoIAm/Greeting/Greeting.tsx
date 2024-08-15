import Image from "./Image/Image";
import Title from "./Title/Title";
import Text from "./Text/Text";
import Button from "../../common/Button/Button";
import classes from "./Greeting.module.scss";

const Greeting = () => {
	return (
		<div className={classes.container}>
			<Image outClass={classes.image} />
			<Title outClass={classes.title} />
			<Text outClass={classes.text} />
			<Button text="Let's talk" outClass={classes.button} />
		</div>
	);
};

export default Greeting;
