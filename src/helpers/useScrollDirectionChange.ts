import { useEffect, useState } from "react";

const useScrollDirectionChange = (onDirectionChange) => {
	const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset); // Store previous scroll position
	const [lastDirection, setLastDirection] = useState(null); // Track last detected scroll direction

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			const direction = currentScrollPos > prevScrollPos ? "down" : "up";

			if (direction !== lastDirection) {
				const isDown = direction === "down";
				const isUp = direction === "up";

				onDirectionChange(isUp, isDown);

				setLastDirection(direction);
			}

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos, lastDirection, onDirectionChange]);
};

export default useScrollDirectionChange;
