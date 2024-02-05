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
        <div className='blog_container'>
          <div className='top_box'>
            <h6>BENEFIT</h6>
            <h1>THE BENEFITS OF JOINING OUR TEMPLE</h1>
          </div>
          <div className='contant_container'>
            <div className='contant_box'>
              <div className='left_box'>
                <div>
                  <h4>DONATE EVENTS</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                </div>
              </div>
              <div className='right_box'>
                <img src='images/about/benifet-1.png' alt='blog' />
              </div>
            </div>
            <div className='contant_box'>
              <div className='right_box'>
                <img src='images/about/benifet-2.png' alt='blog' />
              </div>
              <div className='left_box'>
                <div style={{ textAlign: 'left', }}>
                  <h4>ALL ARE WELCOME</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                </div>
              </div>
            </div>
            <div className='contant_box'>
              <div className='left_box'>
                <div>
                  <h4>FIND FULFILLMENT AND JOY</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                </div>
              </div>
              <div className='right_box'>
                <img src='images/about/benifet-3.png' alt='blog' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About