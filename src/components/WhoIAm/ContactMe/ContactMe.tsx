import classes from "./ContactMe.module.scss";
import React from "react";
import {  Field, Form, Formik } from "formik";
import Button from "../../common/Button/Button";

const ContactMe = () => {
	return (
		<div className={classes.container}>
			<h2 className={classes.title}>Want to work on a project together?</h2>
			<Formik
				initialValues={{ name: "", phone: "", email: "", comment: "" }}
				validate={values => {
					const errors = {
						name: null,
						email: null,
					};
					if (!values.email) {
						errors.email = "Required";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "Invalid email address";
					}
					return errors;
				}}
				onSubmit={(values) => {
					console.log(values)
				}}
			>
				{() => (
					<Form className={classes.form}>
						<Field className={classes.field} placeholder="Prefered Name*" type="name" name="name" />
						<Field className={classes.field} placeholder="Phone number" type="phone" name="phone" />
						<Field className={classes.field} placeholder="Email*" type="email" name="email" />
						<Field className={classes.field} placeholder="Comment" name="comment" />
						<Button text="Send" outClass={classes.button}/>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ContactMe;