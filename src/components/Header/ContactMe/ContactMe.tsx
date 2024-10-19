import classNames from "classnames";
import classes from "./ContactMe.module.scss";
import { useRef } from "react";
import useScrollDirectionChange from "../../../helpers/useScrollDirectionChange";
import { useNavigate } from "react-router-dom";
import { pagesObject } from "../../../datasets/pages";
import scrollToElement from "../../../helpers/scrollToElement";

const ContactMe = ({ outClass }) => {
	const ref = useRef(null);
	const navigate = useNavigate();

	useScrollDirectionChange((isUp, isDown) => {
		if (isUp) {
			ref.current.classList.remove(classes.hide);
		} else if (isDown) {
			ref.current.classList.add(classes.hide);
		}
	});

	const onContactMeClick = () => {
		if (location.pathname !== pagesObject.whoIAm.path) {
			navigate("/", { state: { scrollToForm: true } });
		} else {
			const form = document.getElementById("contactMeForm");
			scrollToElement(form);
		}
	};

	const contactMeClasses = classNames(classes.container, outClass);
	return (
		<div className={contactMeClasses}>
			<button ref={ref} className={classes.button} onClick={onContactMeClick}>
				Contact Me
			</button>
		</div>
	);
};

export default ContactMe;
