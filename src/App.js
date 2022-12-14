import {Route,Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contactus from "./Contactus";
import Footer from "./Footer";
import './App.css';

function App() {
  return ( 
    <>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route index path="/About" element={<About/>}/>
      <Route index path="/Skills" element={<Skills/>}/>
      <Route index path="/Contactus" element={<Contactus/>}/>


    </Routes>
    <Footer/>
    </>
  );
}

export default App;
