import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../constants'
import { arrow } from '../assets/icons'
import { CTA } from '../components'
const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I've worked on a variety of projects, ranging from web development to DevOps, but these are some of my favorites.
          many of them are open source, so feel free to check them out on my <Link to={'https://github.com/xsankalp13'} className='blue-gradient_text drop-shadow'>Github</Link>.
          and fell to explore codebase and contribute your ideas for futher enhancement.
          Your collaboration is highly valued.
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project, index) => (
          <div className='lg:w-400 w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-semibold font-poppins'>{project.name}</h4>
              <p className='text-slate-500 mt-2'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins hover:gap-4 duration-300'>
                <Link to={project.link} target='_blank' rel='noopener noreferrer' className='font-semibold text-blue-600'>
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200'/>
      <CTA/>
      </section>
  )
}

export default Projects