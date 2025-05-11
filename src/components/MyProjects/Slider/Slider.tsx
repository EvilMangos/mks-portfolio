import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classes from "./Slider.module.scss";
import Slide from "./Slide/Slide";
import { projectsArray } from "../../../datasets/projects";
import classNames from "classnames";
interface SliderProps {
	outClass?: string;
}

const Slider: FC<SliderProps> = ({ outClass }: SliderProps) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const containerClasses = classNames(classes.container, outClass);

	return (
		<div className={containerClasses}>
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
			>
				{projectsArray.map((project, index) => (
					<SwiperSlide key={project.name}>
						<Slide
							name={project.name}
							description={project.description}
							image={project.image}
							link={project.link}
							isActive={index === activeIndex}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={classes.counter}>
				{activeIndex + 1} / {projectsArray.length}
			</div>
		</div>
	);
};

export default Slider;
