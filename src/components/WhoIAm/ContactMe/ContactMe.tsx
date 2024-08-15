import classes from "./ContactMe.module.scss";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import Button from "../../common/Button/Button";
import classNames from "classnames";
import validate from "./validation";
import MessageSent from "./MessageSent/MessageSent";

const ContactMe = () => {
	const [isMessageSent, setIsMessageSent] = useState(false);
	const formClasses = classNames(classes.form, {
		[classes.transparent]: isMessageSent,
	});
	return (
		<div className={classes.container}>
			<h2 className={classes.title}>Want to work on a project together?</h2>
			<Formik
				initialValues={{ name: "", phone: "", email: "", comment: "" }}
				validateOnChange={false}
				validateOnBlur={false}
				validate={validate}
				onSubmit={(values) => {
					setIsMessageSent(true);
					console.log("values: ", values);
				}}
			>
				{({ errors, handleSubmit, handleChange }) => {
					const onChange = (event) => {
						errors[event.target.name] = null;
						handleChange(event);
					};

					const nameClasses = classNames(classes.field, {
						[classes.errorField]: errors.name,
					});
					const phoneClasses = classNames(classes.field, {
						[classes.errorField]: errors.phone,
					});
					const emailClasses = classNames(classes.field, {
						[classes.errorField]: errors.email,
					});
					const commentClasses = classNames(classes.field, {
						[classes.errorField]: errors.comment,
					});

					return (
						<Form className={formClasses} onSubmit={handleSubmit}>
							<Field
								className={nameClasses}
								placeholder="Prefered Name*"
								name="name"
								onChange={onChange}
								disabled={isMessageSent}
							/>
							<Field
								className={phoneClasses}
								placeholder="Phone number"
								type="phone"
								name="phone"
								disabled={isMessageSent}
							/>
							<Field
								className={emailClasses}
								placeholder="Email*"
								type="email"
								name="email"
								onChange={onChange}
								disabled={isMessageSent}
							/>
							<Field
								className={commentClasses}
								placeholder="Comment"
								name="comment"
								disabled={isMessageSent}
							/>
							<Button
								text="Send"
								outClass={classes.button}
								type="submit"
								disabled={isMessageSent}
							/>
						</Form>
					);
				}}
			</Formik>
			{isMessageSent && <MessageSent />}
		</div>
	);
};

export default ContactMe;
