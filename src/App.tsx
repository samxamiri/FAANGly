
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './components/navbar'
import MyDeck from './pages/myDeck'
import Home from './pages/home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/myDeck" element={<MyDeck />} />
      </Routes>
    </div>
  )
}

export default App
