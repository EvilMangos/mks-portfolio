import Image from "./Image/Image";
import Title from "./Title/Title";
import Text from "./Text/Text";
import Button from "../../common/Button/Button";
import classes from "./Greeting.module.scss";
import scrollToElement from "../../../helpers/scrollToElement";

interface GreetingProps {
	formRef: React.RefObject<HTMLElement>;
}

const Greeting = ({ formRef }: GreetingProps) => {
	const handleButtonClick = () => {
		scrollToElement(formRef?.current);
	};
	return (
		<div className={classes.container}>
			<Image outClass={classes.image} />
			<Title outClass={classes.title} />
			<Text outClass={classes.text} />
			<Button
				text="Let's talk"
				outClass={classes.button}
				onClick={handleButtonClick}
			/>
		</div>
	);
};

export default Greeting;
