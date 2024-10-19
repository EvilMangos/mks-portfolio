import classes from "./ContactMeMobile.module.scss";
import envelope from "../../assets/icons/envelope.png";
import classNames from "classnames";
import useScrollDirectionChange from "../../helpers/useScrollDirectionChange";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pagesObject } from "../../datasets/pages";
import scrollToElement from "../../helpers/scrollToElement";

const ContactMeMobile = ({ outClass }) => {
	const ref = useRef(null);
	const navigate = useNavigate();
	const location = useLocation();

	const containerClasses = classNames(classes.container, outClass);

	const onDirectionChange = (isUp, isDown) => {
		if (isUp) {
			ref.current.classList.remove(classes.hide);
		} else if (isDown) {
			ref.current.classList.add(classes.hide);
		}
	};

	const onClick = () => {
		if (location.pathname !== pagesObject.whoIAm.path) {
			navigate("/", { state: { scrollToForm: true } });
		} else {
			const form = document.getElementById("contactMeForm");
			scrollToElement(form);
		}
	};

	useScrollDirectionChange(onDirectionChange);

	return (
		<div ref={ref} className={containerClasses} onClick={onClick}>
			<img className={classes.image} src={envelope} alt="ContactMe" />
		</div>
	);
};

export default ContactMeMobile;
