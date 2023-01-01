import './css/App.css';
import './css/Navbar.css';
import './css/Search.css';
import './css/Recent.css';
import './css/Video.css';
import './css/Footer.css';
import "./css/video-react.css";
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div className='app'>
      <div className='main'>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
