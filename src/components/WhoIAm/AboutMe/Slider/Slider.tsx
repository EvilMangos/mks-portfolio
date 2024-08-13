import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import SlideLine from "./SlideLine/SlideLine";
import classes from "./Slider.module.scss";
import "./Slider.scss";
import classNames from "classnames";
import Arrow from "./Arrow/Arrow";
import { useRef, useState } from "react";

const Slider = ({ outClass }) => {
	const [isNextActive, setIsNextActive] = useState(true);
	const [isPrevActive, setIsPrevActive] = useState(false);

	const handleSlideChange = (swiper) => {
		if (swiper.isEnd) {
			setIsNextActive(false);
		} else {
			setIsNextActive(true);
		}

		if (swiper.isBeginning) {
			setIsPrevActive(false);
		} else {
			setIsPrevActive(true);
		}
	};

	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const conatinerClasses = classNames(outClass, classes.container);
	return (
		<div className={conatinerClasses}>
			<Arrow isActive={isPrevActive} isPrev={true} ref={prevRef} />
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				modules={[Pagination, Navigation]}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
					enabled: true,
				}}
				onInit={(swiper) => {
					setTimeout(() => {
						if (swiper.params) {
							swiper.params.navigation.prevEl = prevRef.current;
							swiper.params.navigation.nextEl = nextRef.current;
							swiper.navigation.init();
							swiper.navigation.update();
						}
					});
				}}
				onSlideChange={handleSlideChange}
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
			<Arrow isActive={isNextActive} isPrev={false} ref={nextRef} />
		</div>
	);
};

export default Slider;
