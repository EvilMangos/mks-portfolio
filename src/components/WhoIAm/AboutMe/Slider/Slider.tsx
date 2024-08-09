import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import SlideLine from "./SlideLine/SlideLine";
import classes from "./Slider.module.scss";
import "./Slider.scss";
import classNames from "classnames";

const Slider = ({ outClass }) => {
	const conatinerClasses = classNames(outClass, classes.container);
	return (
		<div className={conatinerClasses}>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				className={classes.slider}
			>
				<SwiperSlide>
					<SlideLine label="Name" value="Maksym Khamets" />
					<SlideLine label="Age" value="23 y.o." />
					<SlideLine label="Residence" value="Brooklyn, NY, US" />
					<SlideLine label="Education" value="Computer Engineering" />
				</SwiperSlide>
				<SwiperSlide>
					<SlideLine label="Phone" value="347 477 3525" />
					<SlideLine label="Email" value="jchamets@gmail.com" />
					<SlideLine label="Experience" value="4 years" />
					<SlideLine label="Education" value="Computer Engineering" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;