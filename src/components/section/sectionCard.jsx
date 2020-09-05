import React from 'react';




//stylesheet import
import '../../scss/section1.scss';



//components import
import Frontend from '../card/FrontendCard';
import Backend from '../card/BackendCard';
import OtherCard from '../card/OtherCard';


const SectionCard = () => {
  return(
    <section className="section1">
      <div className="container">
        <h3>Skills Overview</h3>
        <div className="sectionIntroText">
          I have more than 8 years experience building rich web applications for clients all over the world. Below is a quick overiew of my main technical skills sets and tools I use. Want to find out more about my experience?
          <a href="/">Check out my online resume</a>
        </div>
        <div className="sectionSkillBlock">
          <div className="row">
            <Frontend />
            <Backend />
            <OtherCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionCard;