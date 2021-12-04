import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Home from './views/Home'


const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Router>
    )
}


export default App
