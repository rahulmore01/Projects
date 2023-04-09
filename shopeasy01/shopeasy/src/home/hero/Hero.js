import React from 'react'
import "./Hero.scss"
import heroimg from "../../images/hero.jpg"
const Hero = () => {
  return (
    <main className="hero">
        <div className="hero-text">
        <p className="hero-title">welcome to</p>
        <h1 className="hero-heading">Shopeasy store</h1>
        <p className="hero-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur odio tenetur porro, suscipit nemo odit? Optio, magni? Quia mollitia exercitationem dolore.</p>
        <button className="hero-btn">Show now</button>
        </div>

        <div>
          <img className="heroimg" src={heroimg} alt="" />
          {/* <img className="imgbg" src={imgbg} alt="" /> */}
        </div>
      </main>
  )
}

export default Hero
