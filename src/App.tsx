import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/"  Component={Home} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
