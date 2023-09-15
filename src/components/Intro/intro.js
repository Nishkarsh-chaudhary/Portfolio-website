import React from 'react'
import './intro.css';
import bg from '../../assets/nishkarsh.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className='hello'>Hello, </span> <br/>
            <span className='introText'>I'm <span className="introName">Nishkarsh</span> <br/>Website Designer </span>
            <p className="introPara">Hey there! I'm excited to introduce myself as a beginner in the realm of web design. <br /> I may be new to this, but my enthusiasm for crafting beautiful and functional websites knows no bounds. <br /> Together, let's explore the exciting world of web design from a beginner's perspective</p>

            <Link><button className="btn"><img src={btnImg} alt="hireMe" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro;
