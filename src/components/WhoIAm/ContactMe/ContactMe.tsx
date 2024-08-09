import classes from "./ContactMe.module.scss";
import React from "react";
import { Field, Form, Formik } from "formik";
import Button from "../../common/Button/Button";
import classNames from "classnames";
import validate from "./validation";

const ContactMe = () => {
	return (
		<div className={classes.container}>
			<h2 className={classes.title}>Want to work on a project together?</h2>
			<Formik
				initialValues={{ name: "", phone: "", email: "", comment: "" }}
				validateOnChange={false}
				validateOnBlur={false}
				validate={validate}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ errors, handleSubmit, handleChange }) => {
					const onChange = (event) => {
						errors[event.target.name] = null;
						handleChange(event);
					};

					const nameClasses = classNames(classes.field, {[classes.errorField]: errors.name});
					const phoneClasses = classNames(classes.field, {[classes.errorField]: errors.phone});
					const emailClasses = classNames(classes.field, {[classes.errorField]: errors.email});
					const commentClasses = classNames(classes.field, {[classes.errorField]: errors.comment});

					return (
						<Form className={classes.form} onSubmit={handleSubmit}>
							<Field
								className={nameClasses}
								placeholder="Prefered Name*"
								name="name"
								onChange={onChange}
							/>
							<Field
								className={phoneClasses}
								placeholder="Phone number"
								type="phone"
								name="phone"
							/>
							<Field
								className={emailClasses}
								placeholder="Email*"
								type="email"
								name="email"
								onChange={onChange}
							/>
							<Field
								className={commentClasses}
								placeholder="Comment"
								name="comment"
							/>
							<Button text="Send" outClass={classes.button} type="submit" />
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default ContactMe;
