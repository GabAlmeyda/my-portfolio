import { useEffect } from "react";
import { useLocation } from "react-router-dom"

/**
 * Scrolls the window to the top of the page if the 'state' does not contain 'scrollTo' property set.
 */
const useScrollToTop = () => {
	const location = useLocation();

	useEffect(() => {
		if (!location.state?.scrollTo) window.scrollTo(0, 0);
	}, [location]);
}

export default useScrollToTop
