import image from "../../../../assets/images/laptop.png";
import classes from "./Image.module.scss";
import classNames from "classnames";

const Image = ({outClass = ""}) => {
	const imgClasses = classNames(outClass, classes.image);
	return <img className={imgClasses} src={image} alt={"Software Engineering"} />
}

export default Image;