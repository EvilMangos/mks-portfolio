import Title from "./Title/Title";
import Info from "./Info/Info";
import Map from "./Map/Map";
import classes from "./Contacts.module.scss";

const Contacts = () => {
	return (
		<div className={classes.container}>
			<Title />
			<Info />
			<Map />
		</div>
	);
};

export default Contacts;
