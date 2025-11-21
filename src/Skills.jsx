import React from 'react'
import { skills } from './Data'
import './css/Skills.css'

const Skills = () => {
    return (
        <section className='skills-container'>

            <h2 className='section-title'>Tekolojik Birikimim</h2>
            <div className='skills-grid'>
                {skills.map((skill) => (
                    <div key={skill.id} className='skill-card'>

                        <div className='skill-icon-wrapper'>
                            <img src={skill.icon} alt={skill.title} className='skill-icon'></img>
                        </div>

                        <p className='skill-title'>
                            {skill.title}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Skills