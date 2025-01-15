import './App.css'

import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'

import { useEffect } from 'react'

import Footer from './components/layouts/Footer'
import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import NotFound from './components/pages/NotFound'

function ChangeBgColor() {
	const location = useLocation();

	const BackgroundClasses = ["home_bg", "projects_bg", "contact_bg", "notFound_bg"];
	const pages = ['/my-portfolio', '/my-portfolio/projects', '/my-portfolio/contact'];

	const body = document.body;
	useEffect(() => { 
		let found = false;

		BackgroundClasses.forEach(pageClass => {
			body.classList.remove(pageClass);
		});

		pages.forEach((pathname, index) => {
			if (pathname === location.pathname) {
				body.classList.add(BackgroundClasses[index]);
				found = true;
			}
		});
		if (!found) body.classList.add("notFound_bg");
	}, [location.pathname]);
}

function App() {

	return (<Router>
		<ChangeBgColor />

        <Navbar />

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
