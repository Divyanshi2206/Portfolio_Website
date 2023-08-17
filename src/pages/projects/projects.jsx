import React from 'react';
import './projects.scss';
import PageHeaderContent from '../../components/Pageheader';
import Project_1 from '../../assets/Project-1.png';
import Project_2 from '../../assets/Project-2.png';
import Project_3 from '../../assets/Project-3.png';
import {Animate} from 'react-simple-animate'
import { FaProjectDiagram } from 'react-icons/fa';
const Projects = () => {
  const handleImageClick1 = () => {
    window.open('https://divyanshi2206.github.io/Simon-Game/', '_blank'); 
};

const handleImageClick2 = () => {
  window.open('https://portfolio-website-reactjs-gold.vercel.app/', '_blank'); 
};

const handleImageClick3 = () => {
  window.open(' https://divyanshi2206.github.io/Password_generator/', '_blank'); 
};

  return (
      <section id='projects' className='projects'>
        <PageHeaderContent HeaderText='My Projects' icon={<FaProjectDiagram size={40} />} />
        <div className="projects__content-wrapper">

        <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform:'translateX(-200px)'
        }}
        end={{
          transform:'translateX(0px)'
        }}
        >
        <h1>Projects</h1>
        </Animate>

          <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform:'translateY(200px)'
          }}
          end={{
            transform:'translateX(0px)'
          }}>

            <div className='projects__content-wrapper__project'>
           <div className="project1">
           <img src={Project_1} onClick={handleImageClick1} style={{ cursor: 'pointer' }} height='80%' width='100%'/>
            <h3 >The Simon Game</h3>
           </div>
            
            <div className="project2">
            <img src={Project_2} onClick={handleImageClick2} style={{ cursor: 'pointer' }} height='80%' width='100%'/>
            <h3>PortFolio Website</h3>
            </div>
            
            <div className="project3">
            <img src={Project_3} onClick={handleImageClick3} style={{ cursor: 'pointer' }} height='80%' width='100%'/>
            <h3> Password generator</h3>
            </div>
            

            </div>
          </Animate>
          

        </div>
      </section>
    )
  };
  
  export default Projects;