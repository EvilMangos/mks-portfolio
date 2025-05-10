import classes from "./Image.module.scss";
import classNames from "classnames";
import { sliderWhoIAmArray } from "../../../../datasets/sliderWhoIAm";
import React from "react";

interface ImageProps {
	lastElementHovered: number;
	outClass: string;
}

const Image = ({ lastElementHovered, outClass }: ImageProps) => {
	const image = sliderWhoIAmArray.find(
		(element) => element.id === lastElementHovered
	).image;
	const imageClasses = classNames(outClass, classes.image);
	return <img className={imageClasses} src={image} alt="slide image" />;
};

export default React.memo(Image);
