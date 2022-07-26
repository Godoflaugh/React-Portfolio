import React from 'react'
import './PageStyling.css'



export default function About() {

  return (
    <section id="about">

      <div className="container-fluid">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white gradient-text">
            <br className="hidden lg:inline-block gradient-text" />I love to build amazing apps. Welcome to my Portfolio!
          </h1>

        </div>

        <div className="container-fluid">
          <div class="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <img
                className="rounded"
                alt="developer Kevin"
                src="./Model Pic.jpg"
                width={500}
                height={500}
              />
              <h2></h2>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6" styleName="border:1px solid #ddd">
              <h1 className="text-right text-white">About Me</h1>
              <p className='text-white'>Welcome to my React Portfolio! All around you is a website that I have designed. Here's some history of myself. I am a Graduate of the UCI Full Stack Development program. I began my coding journey in June of 2022. I learned the skills that are needed to design responsive, and eloquent applications for our modern world.Eager to continue my learning and polishing my skills with a company to create amazing applications!</p>

              <h1 className="text-right text-white">Skills</h1>
              <ul className="text-right text-white">
                <li>HTMl, CSS, JavaScript</li>
                <li>API Management</li>
                <li>MERN Stack Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}