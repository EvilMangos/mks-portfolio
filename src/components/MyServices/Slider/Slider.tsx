import { Swiper, SwiperSlide } from "swiper/react";
import { servicesArray } from "../../../datasets/services";
import Slide from "./Slide/Slide";
import "swiper/css";
import "./Slider.scss";
import classes from "./Slider.module.scss";
import { useState } from "react";
import classNames from "classnames";

const Slider = ({outClass = ""}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.activeIndex);
	};

	const slidesRendered = servicesArray.map((service, index) => (<SwiperSlide key={service.id}>
			<Slide
				title={service.title}
				image={service.image}
				imageSelected={service.imageSelected}
				text={service.text}
				isActive={index === activeIndex}
			/>
		</SwiperSlide>),
	);

	const sliderClasses = classNames(classes.swiperContainer, outClass);

	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			slidesPerGroup={1}
			centeredSlides={true}
			className={sliderClasses}
			onSlideChange={handleSlideChange}
			// onSlideChangeTransitionStart={function() {
			// 	// Ensure the active slide has full opacity
			// 	this.slides.forEach(slide => slide.style.opacity = slide.classList.contains("swiper-slide-active") ? "1" : "0.8");
			// }}
		>
			{slidesRendered}
		</Swiper>
	);
};

export default Slider;