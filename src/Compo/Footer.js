import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer_container'>
                    <div className='box_1'>
                        <h5>About Us</h5>
                        <hr />
                        <img src='images/logo-2.png' alt='logo' />
                        <p>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been
                            the industry’s</p>
                    </div>
                    <div className='box_1'>
                        <h5 style={{ paddingLeft: 30, }}>Information</h5>
                        <hr />
                        <ul>
                            <li>About</li>
                            <li>Meet Our Team</li>
                            <li>Our Portfolio</li>
                            <li>Latest News</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='box_1'>
                        <h5>Helpful</h5>
                        <hr />
                        <div className='icon'>
                            <p><BsFillTelephoneFill /> +(91)96****5484</p>
                        </div>
                        <div className='icon'>
                            <p><IoIosMail fontSize={23} />   07.hemant.007@gmail.com</p>
                        </div>
                        <div>
                            <img src='images/fb.png' alt='socal' />
                            <img src='images/in.png' alt='socal' />
                            <img src='images/link.png' alt='socal' />
                            <img src='images/twi.png' alt='socal' />
                        </div>
                    </div>
                    <div className='box_1'>
                        <h5>Get the best viral
                            strories straight into
                            your inbox!</h5>
                        <hr />
                        <div className='btn_box'>
                            <input type='text' placeholder='Email' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='bottom_text'>
                    <p>Copyright © 2024 prayer-wordpress | Powered by prayer-wordpress</p>
                </div>
            </div>
        </>
    )
}

export default Footer