import image from "../../../../assets/images/laptop.jpg";
import classes from "./Image.module.scss";
import classNames from "classnames";

interface ImageProps {
	outClass?: string;
}

const Image = ({ outClass }: ImageProps) => {
	const imgClasses = classNames(outClass, classes.image);
	return (
		<img className={imgClasses} src={image} alt={"Software Engineering"} />
	);
};

export default Image;
