import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const scrollToTop = () => {
	const location = useLocation();

	if (location.state?.sectionId) return null;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return null;
}

export default scrollToTop