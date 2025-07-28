import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {

  return (
    
    <BrowserRouter>
      <Route path="/"/>
      <Route path="/register"/>
      <Route path="/login"/>
      <Route path="/dashboard"/>
    </BrowserRouter>
  )
}

export default App
