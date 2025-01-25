/**
 * Configures an observer for animate headings when they appear in the viewport.
 * 
 * @returns {IntersectionObserver} observer - The 'IntersectionObserver' instance used to observe and animate headings.
 */
export const animatedHeadings = () => {
	const headings = document.querySelectorAll(".section > h2");

	const handleIntersection = (entries, observer) => entries.forEach(
		entrie => {
			if (entrie.isIntersecting) {
				entrie.target.classList.add('headingAnimation');

				observer.unobserve(entrie.target);
			}
		}
	);
	const options = {
		threshold: 1
	}

	const observer = new IntersectionObserver(handleIntersection, options);
	headings.forEach(heading => observer.observe(heading));

	return observer
};