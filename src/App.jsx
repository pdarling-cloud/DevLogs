import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Business from './pages/Business'
import Leadership from './pages/Leadership'
import Technology from './pages/Technology'
import CareerPlanning from './pages/CareerPlanning'
import Wellness from './pages/Wellness'
import DevLogs from './pages/DevLogs'
import './App.css'

function App() {
  return (
    <>
      <div className="hero" style={{ backgroundColor: '#5c0006' }}>
        Penelope Darling | Business Analyst
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/penelope-darling" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <Link to="/leadership">Leadership</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
          <li>
            <Link to="/career-planning">Career Planning</Link>
          </li>
          <li>
            <Link to="/wellness">Wellness</Link>
          </li>
          <li>
            <Link to="/devlogs">DevLogs</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/career-planning" element={<CareerPlanning />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/devlogs" element={<DevLogs />} />
      </Routes>
    </>
  )
}

export default App
