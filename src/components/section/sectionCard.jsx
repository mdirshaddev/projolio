import React from 'react';


//components import
import Frontend from '../card/FrontendCard';
import Backend from '../card/BackendCard';
import OtherCard from '../card/OtherCard';


const SectionCard = () => (
  // section for skills
  <section className="skills-section container-topBottom">
    <div className="content">
    {/* section text holder */}
      <h3>Skills Overview</h3>
      {/* section intro text */}
      <div className="sectionIntroText">
        <p>
          I have more than 8 years experience building rich web applications 
          for clients all over the world. Below is a quick overiew of my main 
          technical skills sets and tools I use. Want to find out more about 
          my experience?
        </p>
        <a href="/">Check out my online resume</a>
      </div>
      {/* container of skillcard */}
      <div className="sectionSkillBlock container-topBottom">
      {/* row of skillcard */}
        <div className="row">
          {/* skill cards */}
          <Frontend />
          <Backend />
          <OtherCard />
        </div>
      </div>
    </div>
  </section>
)

export default SectionCard;