import classes from "./Title.module.scss";
import classNames from "classnames";

const Title = ({ outCLass }) => {
	const titleClasses = classNames(outCLass, classes.title);
	return <h2 className={titleClasses}>About Me</h2>;
};

export default Title;
