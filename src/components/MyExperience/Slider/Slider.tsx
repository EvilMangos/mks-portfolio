import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
	experienceArray,
	experienceObject,
} from "../../../datasets/experience";
import Slide from "./Slide/Slide";
import "./Slider.scss";
import classes from "./Slider.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import Description from "./Description/Description";

interface SliderProps {
	outClass: string;
}

const Slider = ({ outClass }: SliderProps) => {
	const [activeIndex, setActiveIndex] = useState(
		experienceObject.dataannotation.id
	);

	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.activeIndex);
	};

	const renderedSlides = experienceArray.map((experience) => (
		<SwiperSlide key={experience.id}>
			<Slide
				name={experience.name}
				logo={experience.logo}
				role={experience.position}
				startDate={experience.startDate}
				finishDate={experience.finishDate}
				stack={experience.stack}
				isActive={experience.id === activeIndex}
			/>
		</SwiperSlide>
	));

	const containerClasses = classNames(classes.container, outClass);
	return (
		<div className={containerClasses}>
			<div className={classes.sliderContainer}>
				<Swiper
					slidesPerView={1}
					className={classes.slider}
					onSlideChange={handleSlideChange}
					centeredSlides={true}
					modules={[Pagination, Navigation]}
					pagination={{ clickable: true }}
				>
					<div className={classes.sliderContent}>{renderedSlides}</div>
				</Swiper>
			</div>
			<Description
				text={
					experienceArray.find((experience) => experience.id === activeIndex)
						.description
				}
				outClass={classes.description}
			/>
		</div>
	);
};

export default Slider;
