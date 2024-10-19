const scrollToElement = (element) => {
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

export default scrollToElement;
