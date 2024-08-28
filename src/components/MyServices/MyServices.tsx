import Slider from "./Slider/Slider";
import classes from "./MyServices.module.scss";
import List from "./List/List";

const MyServices = () => {
	return (
		<div className={classes.container}>
			<h1>My Services</h1>
			<Slider outClass={classes.content} />
			<List outClass={classes.content} />
		</div>
	);
};

export default MyServices;
