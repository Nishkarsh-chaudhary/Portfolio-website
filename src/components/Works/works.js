import React from 'react'
import './works.css'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worktitle'>My Portfolio</h2>
        <span className='worksDesc'>This portfolio is a snapshot of my early forays into the world of creativity, each project a stepping stone toward proficiency</span>
        <div className="worksImgs">
            <img src= {portfolio1} alt="port1" className="worksImg" />
            <img src= {portfolio2} alt="port2" className="worksImg" />
            <img src= {portfolio3} alt="port3" className="worksImg" />
            <img src= {portfolio4} alt="port4" className="worksImg" />
            <img src= {portfolio5} alt="port5" className="worksImg" />
            <img src= {portfolio6} alt="port6" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works
