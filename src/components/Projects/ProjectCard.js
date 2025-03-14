import React from 'react'

import './ProjectCard.css'

const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, link },
}) => {
    return (
        <div className='pc-container'>
            <img
                src={imageSrc}
                alt={`Image of ${title}`}
                className="card-image"
            />
            <h3 className="pc-title">{title}</h3>
            <p className="pc-desc">{description}</p>
            <ul className="pc-skills">
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className='pc-skill'>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className="pc-links">
                <a href={link} className="pc-link">
                    Link
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
