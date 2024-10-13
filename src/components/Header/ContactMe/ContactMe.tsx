import classNames from "classnames";
import classes from "./ContactMe.module.scss";
import { useRef } from "react";
import useScrollDirectionChange from "../../../helpers/useScrollDirectionChange";

const ContactMe = ({ outClass }) => {
	const ref = useRef(null);

	useScrollDirectionChange((isUp, isDown) => {
		if (isUp) {
			ref.current.classList.remove(classes.hide);
		} else if (isDown) {
			ref.current.classList.add(classes.hide);
		}
	});

	const contactMeClasses = classNames(classes.container, outClass);
	return (
		<div className={contactMeClasses}>
			<button ref={ref} className={classes.button}>
				Contact Me
			</button>
		</div>
	);
};

export default ContactMe;
