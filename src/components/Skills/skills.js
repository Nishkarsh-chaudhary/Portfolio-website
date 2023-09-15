import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span> <br />
        <span className='skillDesc'>I'm taking my first steps in web development. I'm building small projects to practice what I'm learning, like creating a personal blog or a simple portfolio website.</span>
        <div className="skillBars">
            <div className="skillbar">
                <img src={UIDesign} alt="UIdesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text you can write your own content here</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={WebDesign} alt="webDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This demo text can be changed while making the production ready website</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>you can write text related to mobile app development</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills

