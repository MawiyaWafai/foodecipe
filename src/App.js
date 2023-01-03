import './css/App.css';
import './css/Navbar.css';
import './css/Search.css';
import './css/Recent.css';
import './css/Video.css';
import './css/Footer.css';
import './css/Recipe.css'
import "./css/video-react.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Recipe from './Pages/Recipe';


function App() {
  return (
    <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Recipe" element={<Recipe />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
