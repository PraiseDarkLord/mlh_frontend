import React from 'react'
import "./CSS/Home.css"
import heroImage from "../Assets/Logo.svg"
import FeaturesCard from './FeaturesCard'

import Notetaking from "../Assets/notetaking.svg"
import Speech from "../Assets/speech.svg"
import Secure from "../Assets/lock.svg"
import Team from "../Assets/team.svg"

function Home() {
  return (
    <div className='home-component'>

      <div className="hero-section">

        <div className="text">

          <h1 className="hero-title">
            Collect your <br /> Thoughts
          </h1>

          <div className="login">
            <button className="login-btn">Get Started</button>
            <p className="info">Take the Notes Simple <br /> Way for free . Forever</p>
          </div>

        </div>

        <div className="image">
          <img src={heroImage} alt="" />
        </div>

      </div>

      <div className="features">
        <h2 className="features-why"> Why use NekoNotes ? </h2>
        <div className="features-cards">
          <FeaturesCard img={Notetaking} title={"Easy Notetaking"} />
          <FeaturesCard img={Speech} title={"Text To Speech"} />
          <FeaturesCard img={Secure} title={"Secure Notes"} />
        </div>
      </div>


      <div className="get-started">
        <h2 className="features-why">Get Started For Free !</h2>
        <p >Lorem ipsum dolor sit amet consectetur adijsupisicing elit. Officia quas unde exercitationem <br /> quisquam illum veritatis blanditiis maiores quos incidunt aut.</p>
        <button className="login-btn">Get Started</button>
        <img src={Team} alt="" />
      </div>
    </div>
  )
}

export default Home