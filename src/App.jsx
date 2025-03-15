import React, { useState } from 'react'
import './App.css'
import { NavbarComponent } from './components/navbar'
import { HeroProfile } from './components/Hero'
import { TechnologicalSkill } from './components/Skills'
import { WorkExperience } from './components/Experience'
import { Projects } from './components/Projects'
function App() {
  return (
    <div className="font-secondary">
      <div className='fixed top-0 z-0 flex min-h-screen flex-col items-center'>
        <NavbarComponent/>
        <HeroProfile/>
      </div>
      <div className='relative flex justify-center top-[100vh] w-full'>
        <div className='flex flex-col sticky min-h-screen rounded-4xl top-0 z-1 w-[95%] bg-white rounded-flex'>
          {/* About Section */}
          <div className='flex w-full p-21'>
              {/* Summary */}
            <div className='flex w-1/2 flex-col space-y-4'>
              <div className='text-xl text-[#F6BD60]'>A BIT</div>
              <div className='text-4xl'>About Me</div>
              <div className='text-2xl'>
                I am a fourth-year at the University of California, 
                Irvine, currently pursuing a bacheolors of science in 
                computer science. I am interested in AI 
                and software development.
                <br/>
                <br/>
                With a desire for knowledge, I have learned that I 
                grow through rapid research, implementation, and 
                teaching. Teaching is essential to my learning 
                methodology as it tests my understanding and 
                communication capabilities.
                <br/>
                <br/>
                I am Filipino and grew up in California. I love to
                travel and have been fortunate enough to travel to
                multiple countries in Europe, Asia, and North America.
              </div>
            </div>
            <div className="w-1/2 aspect-square rounded-full overflow-hidden border-4 border-[#F6BD60] shadow-lg">
              <img 
              src="src/images/BG3.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
            </div>
          </div>
          {/* Education */}
          <div className='flex mb-20 w-full px-21 justify-between'>
            <div className='flex w-1/2'>
              <div className="w-2/3 aspect-square rounded-full overflow-hidden border-4 border-[#F6BD60] shadow-lg">
                <img 
                src="src/images/ant.zot.png" 
                alt="Profile" 
                className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className='flex w-1/2 flex-col space-y-4 justify-center'>
              <div className='text-xl text-[#F6BD60]'>ZOT ZOT ZOT!</div>
              <div className='text-4xl'>Education</div>
              <div className='flex flex-col space-y-2'>
                <div className='flex items-baseline justify-between'>
                  <div className='text-3xl'>B.S. in Computer Science</div>
                  <div className='text-gray-500 text-2xl'>2021-2025</div>
                </div>
                <div className='text-2xl text-[#F6BD60]'>University of California, Irvine</div>
                <div className='text-2xl'>
                  Regents Scholar. Specialized in Intelligent Systems.
                  Participated in the capstone program, developing AI
                  to detect deepfake music for the company, Sound Ethics.
                </div>
              </div>
            </div>
          </div>
          {/* Technologies */}
          <div className='flex flex-col mb-20 items-center p-21 space-y-10'>
            <span className='text-4xl'>Technical Skills</span>
            <TechnologicalSkill/>
          </div>
          {/* Work Experience */}
          <div className='flex w-full pt-20 text-2xl flex-col text-white items-center space-y-10 rounded-t-xl bg-[#0F0F0F]'>
            <span className='text-4xl'>Work Experience</span>
            <WorkExperience/> 
          </div>
          {/* Recent Projects */}
          <div className='flex w-full mb-20 text-2xl flex-col text-white items-center space-y-10 rounded-b-xl bg-[#0F0F0F]'>
            <span className='text-4xl'>Recent Projects</span>
            <Projects/>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default App
