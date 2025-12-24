import classes from "./Description.module.scss";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

enum TestPositionViewsEnum {
	start,
	middle,
	end,
}

interface DescriptionProps {
	text: string;
	outClass?: string;
}

const Description = ({ text, outClass }: DescriptionProps) => {
	const [currentTextPositionView, setCurrentTextPositionView] = useState(
		TestPositionViewsEnum.start
	);
	const [isScrollable, setIsScrollable] = useState(false);
	const textRef = useRef(null);
	const containerClasses = classNames(classes.container, outClass);

	const handleScroll = (event) => {
		const element = event.target;
		if (element.scrollTop === 0) {
			setCurrentTextPositionView(TestPositionViewsEnum.start);
		} else if (
			element.scrollTop + element.clientHeight >=
			element.scrollHeight
		) {
			setCurrentTextPositionView(TestPositionViewsEnum.end);
		} else if (currentTextPositionView !== TestPositionViewsEnum.middle) {
			setCurrentTextPositionView(TestPositionViewsEnum.middle);
		}
	};

	useEffect(() => {
		if (textRef && textRef.current) {
			textRef.current.innerHTML = text;
			setCurrentTextPositionView(TestPositionViewsEnum.start);

			// Check if content is scrollable
			const element = textRef.current;
			setIsScrollable(element.scrollHeight > element.clientHeight);
		}
	}, [text]);

	const textClasses = classNames(classes.text, {
		[classes.transparencyStart]:
			isScrollable && currentTextPositionView === TestPositionViewsEnum.start,
		[classes.transparencyMiddle]:
			isScrollable && currentTextPositionView === TestPositionViewsEnum.middle,
		[classes.transparencyEnd]:
			isScrollable && currentTextPositionView === TestPositionViewsEnum.end,
	});

	return (
		<div className={containerClasses}>
			<h3 className={classes.title}>Description</h3>
			<div
				key={text}
				className={textClasses}
				ref={textRef}
				onScroll={handleScroll}
			>
				{text}
			</div>
		</div>
	);
};

export default Description;
