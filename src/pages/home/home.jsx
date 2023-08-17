import React from 'react';
import './home.scss';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
const Home = () => {
  const Navigate=useNavigate();
  const handleNavigateToContactMePage=()=>{
    Navigate('/contact')
  }
       return (
        <section id='home' className='home'>
          <div className="home__text-wrapper">
            <h1>
              Hello, I'm Divyanshi
              <br></br>
              Front End Developer
            </h1>
          </div>
          <Animate
          play
          duration={1}
          delay={0.5}
          start={{
            transform:'translateY(550px)'
          }}
          end={{
            transform:'translateX(0px)'
          }}>
          <div className='home__contact-me'>
        <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          </div>
          </Animate>
          
        </section>
       )
     };
     
     export default Home;