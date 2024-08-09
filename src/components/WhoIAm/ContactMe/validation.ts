export default (values) => {
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

	if (!values.name) {
		errors.name = "Required";
	}

	return errors;
}