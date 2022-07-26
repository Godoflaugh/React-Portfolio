
import React from 'react'
import { projects } from "../../data"

export default function Projects() {

  return (

    <section id="projects">

      <div className='container px-2 py-10 mx-auto text-center'>
        <div className="flex flex-col w-full mb-20 .mx-auto">
          <img src="./boxes.svg" alt="Box Icon" width={32} height={32}></img>
          <h1 className='font-weight-bold  text-white'>Apps I've built</h1>
          <p className='pt-3 text-white'>Below are is a sample of the projects that I have completed during my start into web development. They include the ability to create backend code for a database using SQL and NOSQL. API management and utiling external API's to render data for the end user. As well as a custom made API that allows the user to utilize CRUD on a data set.</p>
        </div>
        <div className='d-flex flex-row flex-wrap border:5px solid col-l-12  col-m-12 col-s-12'>
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="w-50 p-3 inline-block text-white">
              <div className="d-flex position-relative bg-dark">
                <img
                  alt="project images"
                  className='position-absolute img-responsive'
                  width={620}
                  height={190}
                  src={project.image}></img>
                <div className=' border: 1px border-dark hover-overlay'>
                  <h2 className=''>{project.subtitle}</h2>
                  <h1 className=''>{project.title}</h1>
                  <p className=''>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>



  )





}