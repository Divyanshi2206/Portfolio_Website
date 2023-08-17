import {React,useRef} from 'react';
import {RiContactsFill} from 'react-icons/ri'
import './contact.scss';
import PageHeaderContent from '../../components/Pageheader';
import { Animate } from 'react-simple-animate';
import emailjs from '@emailjs/browser' 
import { FaGithub } from 'react-icons/fa';
import {CiInstagram, CiLinkedin} from 'react-icons/ci'

const Contact = () => {
  const refForm=useRef();
    const sendEmail=(e)=>{
        e.preventDefault()
        emailjs
            .sendForm(
                'service_e3noz2p',
                'template_fpyh523',
                refForm.current,
                'JXr0M2IzjOZOGqshu'

            )

            .then(
                () =>{
                    alert("Message successfully sent!")
                    window.location.reload(false)
                },

                () =>{
                    alert("Failed to send the message, please try again")
                }
            )
    }

    return (
      <section id='contact' className='contact'>
        <PageHeaderContent HeaderText='Contact Me' icon={<RiContactsFill size={40} />} />
        <div className='contact__content'>
          <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform:"translateX(-200px)"
          }}
          end={{
            transform:"translateX(0px)"
          }}
          >
            <p className='contact__content__header-text'>I'm always open to new opportunities, whether it's collaborating on exciting projects or discussing potential partnerships. Feel free to reach out to me via Email Address or connect with me on GitHub / Instagram / Linkedin.
           <p> Thank you for visiting my portfolio! I look forward to the opportunity to work together and create exceptional web experiences.</p> 
          </p>
            </Animate>
            <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform:"translateX(200px)"
          }}
          end={{
            transform:"translateX(0px)"
          }}
          >
            <form className="contact__content__form" ref={refForm} onSubmit={sendEmail}>
              <div className='contact__content__form__controlswrapper' >
                <div>
                  <input required name='from_name' className='inputName' text={'text'} />
                  <label htmlFor='name' className='nameLabel'>Name</label>
                </div>
                <div>
                <input required name='email' className='inputEmail' text={'text'} />
                  <label htmlFor='email' className='emailLabel'>Email</label>
                </div>
                <div>
                <textarea required name='description' className='inputDescription' text={'text'} rows={5}/>
                  <label htmlFor='description' className='descriptionLabel'>Description</label>
                </div>
              </div>
              <div className='footer'>
              <button type='submit'>Submit</button>
              <div>
              <a href='https://github.com/Divyanshi2206'  target='_blank'>
                <FaGithub size={60} color='var(--yellow-theme-main-color)' />
            </a>
            <a href='https://www.instagram.com/divyanshiii22/'  target='_blank'>
                <CiInstagram size={60} color='var(--yellow-theme-main-color)' />
            </a>
            <a href='https://www.linkedin.com/in/divyanshi-agarwal-98b776229/' target='_blank'>
                <CiLinkedin size={60} color='var(--yellow-theme-main-color)' />
            </a>
              </div>
              </div>
              
              
              
              
            </form>
          </Animate>
           
      </div>
      </section>

      
    )
  };
  
  export default Contact;