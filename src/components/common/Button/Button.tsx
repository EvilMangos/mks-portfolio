import classes from "./Button.module.scss";

const Button = ({ text }) => {
	return <div className={classes.container}>
		<button className={classes.button}>{text}</button>
	</div>;
};

export default Button;
