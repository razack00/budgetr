import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import About from "./pages/About"

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } exact />
        <Route path="/about" element={ <About /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    </Router>
  )
}
export default App
