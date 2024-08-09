import classes from "./Title.module.scss";
import classNames from "classnames";

const Title = ({outClass}) => {
	const titleClasses = classNames(outClass, classes.container)
	return (
		<div className={titleClasses}>
			<h3 className={classes.firstLine}>👋 Hi explorers,</h3>
			<h3 className={classes.secondLine}>"It's Maksym Khamets"</h3>
		</div>
	)
}

export default Title;