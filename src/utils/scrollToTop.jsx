import { useEffect } from "react";
import { useLocation } from "react-router-dom"

/**
 * Scrolls the window to the top of the page if the 'state' does not contain 'scrollTo' property set.
 */
const scrollToTop = () => {
	const location = useLocation();

	if (location.state?.scrollTo) return null;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
}

export default scrollToTop
