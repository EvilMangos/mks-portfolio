import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slide from "./Slide/Slide";
import classes from "./Slider.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import Description from "./Description/Description";
import { servicesArray } from "../../../datasets/services";

interface SliderProps {
	outClass: string;
}

const Slider = ({ outClass }: SliderProps) => {
	const [activeIndex, setActiveIndex] = useState(servicesArray[0].id);

	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.activeIndex);
	};

	const renderedSlides = servicesArray.map((service) => (
		<SwiperSlide key={service.id} className={classes.swiperSlide}>
			<Slide
				title={service.title}
				icon={service.image}
				selectedIcon={service.imageSelected}
				alt={service.alt}
				isActive={service.id === activeIndex}
			/>
		</SwiperSlide>
	));

	const containerClasses = classNames(classes.container, outClass);
	return (
		<div className={containerClasses}>
			<div className={classes.sliderContainer}>
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					className={classes.slider}
					onSlideChange={handleSlideChange}
					centeredSlides={true}
					modules={[Navigation]}
					pagination={{ clickable: true }}
				>
					<div className={classes.sliderContent}>{renderedSlides}</div>
					<span className={classes.numbers}>
						{activeIndex + 1} / {servicesArray.length}
					</span>
				</Swiper>
			</div>
			<Description
				text={servicesArray.find((service) => service.id === activeIndex).text}
				outClass={classes.description}
			/>
		</div>
	);
};

export default Slider;
