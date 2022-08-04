import './App.css' ;
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import SecondPage from './components/SecondPage';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div class='model3-container'>
      <Navbar />
    <FrontPage />
    </div>
    <div className='modely-container'>
    <SecondPage  />
    </div>
    <div className='footer'>
    <Footer />
    </div>
    </>
  );
}

export default App;
