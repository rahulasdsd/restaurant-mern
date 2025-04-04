// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

import Contact from './Pages/Contact';
import NavBar from './components/NavBar';
import HotelMenu from './Pages/HotelMenu';
import Footer from './components/Footer';

function App() {
  return (
    
    <Router>
      <div>
        <NavBar/>
        
        
        <Routes>
         
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/HotelMenu" element={<HotelMenu />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}




export default App;
