import classes from "./Description.module.scss";
import classNames from "classnames";

const Description = ({ text, outClass }) => {
	const containerClasses = classNames(classes.container, outClass);
	return (
		<div className={containerClasses}>
			<h3 className={classes.title}>Description</h3>
			<div className={classes.text}>
				<div className={classes.textTransparency}>
					{text}
				</div>
			</div>
		</div>
	);
};

export default Description;