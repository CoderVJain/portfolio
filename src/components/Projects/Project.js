import React from 'react'
import './Project.css'
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <section className="projects2 project-container">
      <h2 className='project-title'>Projects</h2>
      <div className="projects">
        {
          projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })
        }
      </div>
    </section>
  )
}

export default Project
