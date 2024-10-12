import classes from "./NotFound.module.scss";

const NotFound = () => {
	return (
		<div className={classes.container}>
			<strong className={classes.errorCode}>404</strong>
			<strong className={classes.errorMessage}>Page Not Found</strong>
		</div>
	);
};

export default NotFound;
