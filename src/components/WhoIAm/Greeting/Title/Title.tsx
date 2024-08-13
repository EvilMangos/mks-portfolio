import classes from "./Title.module.scss";
import classNames from "classnames";

const Title = ({ outClass }) => {
	const titleClasses = classNames(outClass, classes.container);
	return (
		<div className={titleClasses}>
			<h2 className={classes.firstLine}>👋 Hi explorers,</h2>
			<h2 className={classes.secondLine}>"It's Maksym Khamets"</h2>
		</div>
	);
};

export default Title;
