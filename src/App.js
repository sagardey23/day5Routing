// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
              {/* <Route path='' element={<Home/>} /> */}
              <Route path='/home' element={ <Home/>}/>
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<AboutUs/>} />
          </Routes>
      </Router>

      {/* <h1>Routing</h1> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
