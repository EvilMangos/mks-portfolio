import image from "../../../../assets/images/laptop.png";
import classes from "./Image.module.scss";
import classNames from "classnames";

const Image = ({ outClass }) => {
	const imageClasses = classNames(outClass, classes.image);
	return <img className={imageClasses} src={image} alt="Laptop" />;
};

export default Image;
