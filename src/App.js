import './App.css' ;
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import SecondPage from './components/SecondPage';
import Footer from './components/Footer';
import {Router,Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home' ;
import About from '../src/pages/About' ;

function App() {
  return (
    <>
    <div class='planck1-container'>
      <Navbar />
    <FrontPage />
    </div>
    <div className='planck2-container'>
    <SecondPage  />
    </div>
    <div className='footer'>
    <Footer />
    </div>
    </>
  );
}

export default App;
