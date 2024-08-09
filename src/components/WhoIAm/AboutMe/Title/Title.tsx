import classes from "./Title.module.scss";
import classNames from "classnames";

const Title = ({ outCLass }) => {
	const titleClasses = classNames(outCLass, classes.title)
	return (
		<h3 className={titleClasses}>About Me</h3>
	);
};

export default Title;