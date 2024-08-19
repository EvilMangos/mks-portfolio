import Slider from "./Slider/Slider";
import classes from "./MyServices.module.scss";

const MyServices = () => {
	return (
		<div>
			<h1 className={classes.title}>My Services</h1>
			<Slider outClass={classes.slider} />
		</div>
	);
};

export default MyServices;