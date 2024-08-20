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
import { sliderWhoIAmArray } from "../../../../datasets/slider";

const Slider = ({ setLastElementHovered, outClass }) => {
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

	const containerClasses = classNames(outClass, classes.container);
	return (
		<div className={containerClasses}>
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
					{sliderWhoIAmArray
						.filter((element) => element.slide === 1)
						.map((element) => (
							<SlideLine
								key={element.id}
								id={element.id}
								label={element.text}
								value={element.value}
								image={element.image}
								link={element.link}
								setLastElementHovered={setLastElementHovered}
							/>
						))}
				</SwiperSlide>
				<SwiperSlide>
					{sliderWhoIAmArray
						.filter((element) => element.slide === 2)
						.map((element) => (
							<SlideLine
								key={element.id}
								id={element.id}
								label={element.text}
								value={element.value}
								image={element.image}
								link={element.link}
								setLastElementHovered={setLastElementHovered}
							/>
						))}
				</SwiperSlide>
			</Swiper>
			<Arrow isActive={isNextActive} isPrev={false} ref={nextRef} />
		</div>
	);
};

export default Slider;
