import laptop from "../assets/images/laptop.png";

const sliderWhoIAmObject = {
	name: {
		id: 0,
		text: "Name",
		value: "Maksym Khamets",
		link: null,
		image: laptop,
		slide: 1,
	},
	age: {
		id: 1,
		text: "Age",
		value: "23 y.o.",
		link: null,
		image: "",
		slide: 1,
	},
	residence: {
		id: 2,
		text: "Residence",
		value: "Brooklyn, NY, US",
		link: "/contacts",
		image: null,
		slide: 1,
	},
	education: {
		id: 3,
		text: "Education",
		value: "Computer Engineering",
		link: null,
		image: "",
		slide: 1,
	},
	phone: {
		id: 4,
		text: "Phone",
		value: "347 477 3525",
		link: "/contacts",
		image: null,
		slide: 2,
	},
	email: {
		id: 5,
		text: "Email",
		value: "jchamets@gmail.com",
		link: "/contacts",
		image: null,
		slide: 2,
	},
	experience: {
		id: 6,
		text: "Experience",
		value: "4 years",
		link: "/experience",
		image: null,
		slide: 2,
	},
};

const sliderWhoIAmArray = Object.values(sliderWhoIAmObject);

export { sliderWhoIAmObject, sliderWhoIAmArray };
