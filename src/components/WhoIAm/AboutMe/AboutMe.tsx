import classes from "./AboutMe.module.scss";
import Image from "./Image/Image";
import Title from "./Title/Title";
import Slider from "./Slider/Slider";
import { useState } from "react";

const AboutMe = () => {
	const [lastElementHovered, setLastElementHovered] = useState(1);
	return (
		<div className={classes.container}>
			<Image lastElementHovered={lastElementHovered} outClass={classes.image} />
			<Title outCLass={classes.title} />
			<Slider
				setLastElementHovered={setLastElementHovered}
				outClass={classes.slider}
			/>
		</div>
	);
};

export default AboutMe;
