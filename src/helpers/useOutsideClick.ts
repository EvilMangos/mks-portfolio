import { RefObject, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
function useOutsideClick(ref: RefObject<any>, func: Function) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				func(event);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

export default useOutsideClick;
