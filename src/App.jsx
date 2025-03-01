import './App.css'

import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'

import { useEffect } from 'react'

import { animatedHeadings } from './utils/animatedHeadings'
import useScrollToTop from './utils/useScrollToTop'

import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import NotFound from './components/pages/NotFound'

/**
 * Component that changes the page background color based on the 
 * 'app.css' background classes.
 * 
 * This component uses the 'useLocation' hook to detect the current 
 * pathname and updates the &lt;body&gt; element's class accordingly.
 * 
 * @returns {null} This component does not return anything, is used 
 * only for change the background color of the page.
 */
function ChangeBgColor() {
	const location = useLocation();

	// the values of this array are the same os the CSS classes in the 'app.css'
	const BackgroundClasses = ["home_bg", "projects_bg", "contact_bg", "notFound_bg"];
	const pages = ['/', '/projects', '/contact'];

	const body = document.body;
	useEffect(() => { 
		let found = false;

		BackgroundClasses.forEach(pageClass => {
			body.classList.remove(pageClass);
		});

		pages.forEach((pathname, index) => {
			if (pathname === location.pathname || pathname + "/" === location.pathname) {
				body.classList.add(BackgroundClasses[index]);
				found = true;
			}
		});
		if (!found) body.classList.add("notFound_bg");
	}, [location.pathname]);

	return null;
}

/**
 * Renders the root component of the application. There is a need for this component to be wrapped 
 * in a 'Router' component because of the headings animation.
 * 
 * This component serves as the main wrapper for all pages and is responsible for: 
 * - Dinamically changing the background color of the page using the 'ChangeBgColor' component;
 * - Display the 'Navbar' component uniformly across all pages;
 * - Handling routing logic and dinamically change the URL route with the 'Routes' and 'Route' component;
 * - Animated the heading os the page using the 'animatedHeadings' function;
 * - Displaying the 'Footer' component uniformly across all pages;
 * 
 * @returns {JSX.Element} A JSX element that represent the root layout of the application,
 * including the navbar, content and footer, with dynamic background color changes.
 */
function Root() {
	const location = useLocation();

	useScrollToTop();

	// Animate the heading when the page loads.
	useEffect(() => {
		const observer = animatedHeadings();

		return () => { if (observer) observer.disconnect(); };
	}, [location.pathname]);

	return (<div className='app_wrapper'>
		<ChangeBgColor />

		<Navbar />

			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/projects' element={ <Projects /> } />
				<Route path='/contact' element={ <Contact /> } />
				<Route path='*' element={ <NotFound /> } />
			</Routes>

		<Footer />
	</div>)
}

/**
 * Renders the main component of the application.
 * 
 * It wrappers the 'Root' component into a 'Router' context, allowing the 'headingsAnimation' function to work.
 * 
 * @returns {JSX.Element} A JSX element represent the page.
 */
function App() {
	
	return (<Router>
		<Root />
	</Router>)
}

export default App
