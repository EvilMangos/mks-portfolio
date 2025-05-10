import classes from "./SocialLink.module.scss";
import { useState } from "react";

interface SocialLinkProps {
	link: string;
	image: string;
	image_hover: string;
	alt: string;
}

const SocialLink = ({ link, image, image_hover, alt }: SocialLinkProps) => {
	const [isHovered, setHovered] = useState(false);
	const onMouseOver = () => {
		setTimeout(() => setHovered(true), 100);
	};

	const onMouseOut = () => {
		setTimeout(() => setHovered(false), 100);
	};

	return (
		<a
			className={classes.socialLink}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			href={link}
			target="_blank"
			rel="noreferrer"
		>
			<img
				className={classes.socialIcon}
				src={isHovered ? image_hover : image}
				alt={alt}
			/>
		</a>
	);
};

export default SocialLink;
