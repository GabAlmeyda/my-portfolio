import './App.css'

import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'

import { useEffect } from 'react'

import Footer from './components/layouts/Footer'
import Container from './components/layouts/Container'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import NotFound from './components/pages/NotFound'

function ChangeBgColor() {
	const location = useLocation();
	const pagesBgColors = {
		'/my-portfolio': "home_bg",
		'/my-portfolio/projects': "projects_bg",
		'/my-portfolio/contact': "contact_bg"
	};
	const body = document.body;

	useEffect(() => { 
		let found = false;

		Object.values(pagesBgColors).forEach(pageClass => {
			body.classList.remove(pageClass);
		});

		Object.keys(pagesBgColors).forEach(pathname => {
			if (pathname === location.pathname) {
				body.classList.add(pagesBgColors[pathname]);
				found = true;
			}
		});

		if (!found) body.classList.add("not-found_bg");
	}, [location.pathname]);
}

function App() {

	return (<Router>
		<ChangeBgColor />

		<Container>
			<Routes>
				<Route path='/my-portfolio' element={ <Home /> } />
				<Route path='/my-portfolio/projects' element={ <Projects /> } />
				<Route path='/my-portfolio/contact' element={ <Contact /> } />
				<Route path='*' element={ <NotFound /> } />
			</Routes>
		</Container>

		<Footer />
	</Router>)
}

export default App
