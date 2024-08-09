import classes from "./AboutMe.module.scss";
import Image from "./Image/Image";
import Title from "./Title/Title";
import Slider from "./Slider/Slider";

const AboutMe = () => {
	return (
		<div className={classes.container}>
			<Image />
			<Title outCLass={classes.title} />
			<Slider outClass={classes.slider} />
		</div>
	);
};

export default AboutMe;