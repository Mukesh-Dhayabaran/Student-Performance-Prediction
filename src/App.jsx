import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './pages/Authentication/Register'
import Login from './pages/Authentication/Login'
import './App.css'

function App() {

  return (
    
    <BrowserRouter>

        <Routes>
          <Route path="/register" element={<Register/>} />     
          <Route path="/login" element={<Login/>} />      
        </Routes>

    </BrowserRouter>
  )
}

export default App
