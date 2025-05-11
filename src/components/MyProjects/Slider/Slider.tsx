import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "./Slider.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";

interface SliderProps {
	outClass: string;
}

const Slider = ({ outClass }: SliderProps) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.activeIndex);
	};

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
					<div className={classes.sliderContent}>
						{/* Slides will be added here */}
					</div>
				</Swiper>
			</div>
		</div>
	);
};

export default Slider;
