import './App.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Container from './components/layouts/Container'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import NotFound from './components/pages/NotFound'

function App() {

  return (<Router>

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
