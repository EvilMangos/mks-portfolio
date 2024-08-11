import classes from "./SocialLink.module.scss";
import { useState } from "react";

const SocialLink = ({link, image, image_hover, alt}) => {
	const [isHovered, setHovered] = useState(false);
	const onMouseOver = () => {
		setHovered(true);
	}

	const onMouseOut = () => {
		setHovered(false);
	}

	return (
		<a className={classes.socialLink} onMouseOver={onMouseOver} onMouseOut={onMouseOut} href={link} target="_blank">
			<img className={classes.socialIcon} src={isHovered ? image_hover: image} alt={alt} />
		</a>
	)
};

export default SocialLink;