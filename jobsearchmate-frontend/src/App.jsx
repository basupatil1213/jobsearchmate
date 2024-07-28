import './App.css'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import Analysis from './components/Analysis'
import Auth from './components/Auth'
import JobRoutes from './routes/JobRoutes'


function App() {

  return (
    <Router>
      <main>
        <JobRoutes />
      </main>
    </Router>
  )
}

export default App

{/*  */ }