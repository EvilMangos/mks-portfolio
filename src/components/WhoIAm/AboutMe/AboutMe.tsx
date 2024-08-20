import classes from "./AboutMe.module.scss";
import Image from "./Image/Image";
import Title from "./Title/Title";
import Slider from "./Slider/Slider";
import { useState } from "react";
import { sliderWhoIAmObject } from "../../../datasets/sliderWhoIAm";

const AboutMe = () => {
	const [lastElementHovered, setLastElementHovered] = useState(sliderWhoIAmObject.name.id);
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
