import Slider from "./Slider/Slider";
import classes from "./MyProjects.module.scss";
import ProjectsList from "./ProjectsList/ProjectsList";

const MyProjects = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.title}>My Projects</h1>
			<Slider outClass={classes.slider} />
			<ProjectsList outClass={classes.projectsList} />
		</div>
	);
};

export default MyProjects;
