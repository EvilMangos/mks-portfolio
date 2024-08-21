import Slider from "./Slider/Slider";
import classes from "./MyExperience.module.scss";
import ExperienceList from "./ExperienceList/ExperienceList";

const MyExperience = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.title}>My Experience</h1>
			<Slider outClass={classes.slider} />
			<ExperienceList />
		</div>
	);
};

export default MyExperience;
