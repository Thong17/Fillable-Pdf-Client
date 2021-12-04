import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/Login'

const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/login" exact element={<Login />} />
          </Routes>
        </Router>
    )
}


export default App
