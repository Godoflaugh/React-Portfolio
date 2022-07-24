import React from 'react'
import './PageStyling.css'



export default function About() {

  return (
    <section id="about">

      <div className="container-fluid bg-secondary">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white gradient-text">
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed text-white border border-secondary">
            Welcome to my page. I am an excited new Full Stack Developer, and I have the projects that I have completed below for you to peruse! I am passionate about designing and creating amazing applications for all types of use and would be a welcome addition to your team! If you would like to contact me, my information is listed above.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="btn btn-primary mr-3">
              Work With Me
            </a>
            <a
              href="#projects"
              className="btn btn-primary gap">
              See My Past Work
            </a>
          </div>
        </div>

        <div className="container-fluid">
          <div class="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <img
                className=""
                alt="developer Kevin"
                src="./Model Pic.jpg"
                width={500}
                height={500}
              />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6" styleName="border:1px solid #ddd">
              <h1 className="text-right">About Me</h1>
              <p>Welcome to my React Portfolio! All around you is a website that I have designed. Here's some history of myself. I am a Graduate of the UCI Full Stack Development program. I began my coding journey in June of 2022. I learned the skills that are needed to design responsive, and eloquent applications for our modern world.Eager to continue my learning and polishing my skills with a company to create amazing applications!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}