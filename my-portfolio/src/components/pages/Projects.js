
import React from 'react'
import { projects } from "../../data"

export default function Projects() {

  return (

    <section id="projects">

      <div className='container px-2 py-10 mx-auto text-center'>
        <div className="flex flex-col w-full mb-20 .mx-auto">
          <img src="./boxes.svg" alt="Box Icon" width={32} height={32}></img>
          <h1 className='font-weight-bold  text-white'>Apps I've built</h1>
          <p className='pt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi fugiat adipisci ullam repudiandae aut ea aliquam dicta suscipit corrupti vel consequuntur eveniet rem beatae id, doloremque voluptatibus tenetur explicabo.</p>
        </div>
        <div className='d-flex flex-row flex-wrap border:1px solid bg-primary '>
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="w-50 p-3 inline-block text-white">
              <div className="d-flex position-relative">
                <img
                  alt="project images"
                  className='position-absolute'
                  src={project.image}></img>
                <div className='px-8 py-10 position-relative z-10 w-100 border border-dark bg-dark opacity-0 '>
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