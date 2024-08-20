import Slider from "./Slider/Slider";
import classes from "./MyExperience.module.scss";

const MyExperience = () => {
	return (
		<div>
			<h1 className={classes.title}>My Experience</h1>
			<Slider outClass={classes.slider} />
		</div>
	)
}

export default MyExperience;