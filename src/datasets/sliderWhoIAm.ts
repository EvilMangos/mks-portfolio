import myPhoto from "../assets/images/my_photo.jpg";
import age from "../assets/images/youth.webp";
import diploma from "../assets/images/diploma.jpg";

const sliderWhoIAmObject = {
	name: {
		id: 0,
		text: "Name",
		value: "Maksym Khamets",
		link: null,
		image: myPhoto,
		slide: 1,
	},
	age: {
		id: 1,
		text: "Age",
		value: "23 y.o.",
		link: null,
		image: age,
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
		image: diploma,
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
		value: "maksymkhamets.career",
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
