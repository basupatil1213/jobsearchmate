import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
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