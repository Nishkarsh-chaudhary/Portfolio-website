import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import  Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import GithubIcon from '../../assets/github.png'
import LinkedinIcon from '../../assets/linkedin.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1av9n2e', 'template_cbucl3d', form.current, 'ZGnqdVDPgAl802eRx26AX')
          .then((result) => {
              console.log(result.text);
              alert('Email Sent !');
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section className='contactPage'>
        <div id='clients'>
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">While my portfolio may not feature past client projects just yet, I'm here with a burning passion and unwavering commitment to bring your vision to life. I'm excited to embark on this journey, and I can't wait to collaborate with you to create meaningful and exceptional work.
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="walmart" className="clientImg" />
                <img src={Adobe} alt='adobe' className="clientImg" />
                <img src={Microsoft} alt="microsoft" className="clientImg" />
                <img src={Facebook} alt="facebook" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>

            <form  id='myform' className="contactForm" ref={form}  onSubmit={sendEmail}>
              <input type="text" className='name' placeholder='Your Name'name='your_name' />
              <input type="email" className="email" placeholder='Your Email' name='your_email' />
              <textarea   className='msg' name="message"  rows="5" placeholder='Your Message'></textarea>
              <button onClick={sendEmail} type='submit' value='send' className="submitBtn">Submit</button>

              <div className="links">
                <a href="https://www.linkedin.com/in/nishkarsh-chaudhary-a08967225/" target='_blank'><img src={FacebookIcon} alt="facebook" id='link'/></a>

                <a href="https://github.com/Nishkarsh-chaudhary" target='_blank'><img src={GithubIcon} alt="github" id='link'/></a>

                <a href="https://www.linkedin.com/in/nishkarsh-chaudhary-a08967225/" target='_blank'><img src={LinkedinIcon} alt="linkedin" id='link'/></a>

                <a href="https://www.instagram.com/_nikku_51/" target='_blank'><img src={InstagramIcon} alt="instagram" id='link'/></a>
                
              </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
