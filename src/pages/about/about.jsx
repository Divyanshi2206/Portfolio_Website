import React from 'react';
import {BsInfoCircleFill} from 'react-icons/bs'
import './about.scss';
import PageHeaderContent from '../../components/Pageheader';
import { Animate } from 'react-simple-animate';
import resume from '../../assets/Divyanshi_s_Resume.pdf'
import {FaJsSquare, FaHtml5, FaReact, FaCss3 } from 'react-icons/fa';

const JobSummary='Hello there! I\'m Divyanshi Agarwal, a passionate and creative Full Stack Developer. With a keen eye for design and a knack for turning ideas into beautiful, interactive web experiences, I specialize in crafting user-friendly and visually appealing websites.With a passion for both code and design, I bring a unique blend of creativity and technical expertise to every project. I thrive in collaborative environments and am dedicated to delivering solutions that exceed expectations. I\'m not just a developer; I\'m a problem solver and a creative thinker who\'s always eager to take on new challenges.'

const About = () => {
    return (
      <section id='about' className='about'>
        <PageHeaderContent HeaderText='About Me' icon={<BsInfoCircleFill size={40} />} />
        <div className="about__content">

        <div className="about__content__personalWrapper">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform:'translateX(-990px)'
          }}
          end={{
            transform:'translateX(0px)'
          }} >
        <h3>Full Stack Developer</h3>
        <p>{JobSummary}</p>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform:'translateY(550px)'
          }}
          end={{
            transform:'translateX(0px)'
          }}>
           <a href={resume} download="Divyanshi_Resume">
            <button className='about__content__button'>Download CV</button>
            </a>
        </Animate>
        </div>
       
       <div className="about__content__servicesWrapper">
       <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform:'translateX(600px)'
          }}
          end={{
            transform:'translateX(0px)'
          }} >
        <div className="about__content__servicesWrapper__innerContent">
        <div>
          <FaCss3 size={60} color="var(--yellow-theme-main-color)" />
        </div>
        <div>
        <FaReact size={60} color="var(--yellow-theme-main-color)" />
        </div>
        <div>
        <FaJsSquare size={60} color="var(--yellow-theme-main-color)" />
        </div>
        <div>
        <FaHtml5 size={60} color="var(--yellow-theme-main-color)" />
        </div>
        </div>
        </Animate>
       </div>
        
       
        </div>
      </section>
    )
  };
  
  export default About;
