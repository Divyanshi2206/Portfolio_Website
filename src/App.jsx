import './App.scss';
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Navbar from './components/Navbar';
import Pageheader from './components/Pageheader';
import Home from './pages/home/home';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Contact from './pages/contact/contact';
import Projects from './pages/projects/projects';
import particles from './utils.js/particles';

export default function App() {
  const location =useLocation();
  const handleInit=async(main)=>{
        await loadFull(main)
  }
  const RenderParticleInHomePage=location.pathname==='/';
  return (
     
      <div className="App">
        {
          RenderParticleInHomePage && 
          <Particles id="particles" init={handleInit} options={particles} /> 
        }
       
        <Navbar />
        <div className='App__main-page-content'>
        <Routes>
        <Route index path='/' element={<Home />}  />
        <Route path='about' element={<About />} />
        <Route path='skills' element={< Skills />} />
        <Route path='projects' element={< Projects />} />
        <Route path='contact' element={< Contact />} />
      </Routes>
        </div>
          
      </div>
      
    
  );
}
