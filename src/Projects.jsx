import React from 'react'
import './css/Projects.css'
import { projects } from './Data'

const Projects = () => {
    return (
        <section className='projects-container'>

            {/* Bölüm Başlığı */}
            <h2 className='section-title'>Öne Çıkan Projeler</h2>

            {/* Grid Yapısı */}
            <div className='projects-grid'>

                {/* map fonk ile dön */}
                {projects.map((project) => (
                    <div key={project.id} className="project-card">

                        <div className='image-wrapper'>
                            <img src={project.image} alt={project.title} className='project-img'></img>
                        </div>
                        <div className='card-content'>
                            <h3 className='project-title'>{project.title}</h3>
                            <p className='project-desc'>{project.description}</p>
                            <a className='project-keywords'>{project.keywords}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects