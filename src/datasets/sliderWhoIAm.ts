import myPhoto from "../assets/images/my_photo.jpg";
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
	residence: {
		id: 1,
		text: "Residence",
		value: "Brooklyn, NY, US",
		link: "/contacts",
		image: null,
		slide: 1,
	},
	education: {
		id: 2,
		text: "Education",
		value: "Computer Engineering",
		link: null,
		image: diploma,
		slide: 1,
	},
	phone: {
		id: 3,
		text: "Phone",
		value: "347 477 3525",
		link: "/contacts",
		image: null,
		slide: 1,
	},
	email: {
		id: 4,
		text: "Email",
		value: "maksymkhamets.career@gmail.com",
		link: "/contacts",
		image: null,
		slide: 2,
	},
	experience: {
		id: 5,
		text: "Experience",
		value: "4 years",
		link: "/experience",
		image: null,
		slide: 2,
	},
};

const sliderWhoIAmArray = Object.values(sliderWhoIAmObject);

export { sliderWhoIAmObject, sliderWhoIAmArray };
