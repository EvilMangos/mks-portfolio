import classes from "./Image.module.scss";
import classNames from "classnames";
import { sliderWhoIAmArray } from "../../../../datasets/slider";
import React from "react";

const Image = ({ lastElementHovered, outClass }) => {
	const image = sliderWhoIAmArray.find(
		(element) => element.id === lastElementHovered
	).image;
	const imageClasses = classNames(outClass, classes.image);
	return <img className={imageClasses} src={image} alt="Laptop" />;
};

export default React.memo(Image);
