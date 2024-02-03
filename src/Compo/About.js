import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='banner_box'>
          <div className='top_banner'>
            <div className='contant'>
              <div className='contant_box'>
                <h5>ABOUT US</h5>
                <h1>OUR ACHIEVMENTS</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='main'>
          <div className='contant_box'>
            <h6>WELCOME TO OUR TEMPLE</h6>
            <h1>WE ARE A HINDU THAT BELIVES IN
              LORD RAMA AND VISHNU DEVA</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.</p>
          </div>
          <div className='img_box'>
            <img src='images/about/ab-1-1.png' alt='about' />
            <img src='images/about/ab-2-1.png' alt='about' />
            <img src='images/about/ab-3-1.png' alt='about' />
          </div>
        </div>
        <div className='containar'>
          <div className='contant_box'>
            <div className='left_box'>
              <h6>OUR MISSION & VISION</h6>
              <h3>BELIVES IN LORD RAMA AND VISHNU DEVA</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum.</p>
            </div>
            <div className='right_box'>
              <h6>WHAT WE DO</h6>
              <h3>OUR VOLUNTEERS ACHIEVMENTS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum.</p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About