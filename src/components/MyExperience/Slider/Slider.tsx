import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { experienceArray } from "../../../datasets/experience";
import Slide from "./Slide/Slide";
import "./Slider.scss";
import classes from "./Slider.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import Description from "./Description/Description";

const Slider = ({ outClass }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.activeIndex);
	};

	const renderedSlides = experienceArray.map((experience, index) => (
		<SwiperSlide key={experience.id}>
			<Slide
				name={experience.name}
				logo={experience.logo}
				role={experience.position}
				startDate={experience.startDate}
				finishDate={experience.finishDate}
				stack={experience.stack}
				isActive={index === activeIndex}
			/>
		</SwiperSlide>
	));

	const sliderClasses = classNames(classes.slider, outClass);
	return (
		<div>
			<Swiper
				spaceBetween={10}
				slidesPerView={1}
				className={sliderClasses}
				onSlideChange={handleSlideChange}
				centeredSlides={true}
				modules={[Pagination, Navigation]}
				pagination={{ clickable: true }}
			>
				<div className={classes.sliderContent}>
					{renderedSlides}
				</div>
			</Swiper>
			<Description text={experienceArray.find((experience, index) => index === activeIndex).description}
									 outClass={classes.description} />
		</div>
	);
};

export default Slider;