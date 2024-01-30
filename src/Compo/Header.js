import React from 'react'
import './Header.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagramSquare, FaLinkedin, FaPinterestSquare, FaRegClock } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";





const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='contact_box'>
                    <div className='contact'>
                        <div className='icon'>
                            <BsFillTelephoneFill />
                        </div>
                        <h4>+(91) 9660785484</h4>
                    </div>
                    <div className='contact'>
                        <div className='icon'>
                            <FaRegClock />
                        </div>
                        <h4>Mon-Sat: 9:00-18:00</h4>
                    </div>
                </div>
                <div className='icon_container'>
                    <div className='icon_box'>
                        <div className='icon'>
                                <FaFacebookSquare style={{color:'blue',}} />
                        </div>
                        <div className='icon'>
                            <FaTwitterSquare style={{color:'#10A9B5',}} />
                        </div>
                        <div className='icon'>
                            <FaLinkedin style={{color:'#A72DAF',}} />
                        </div>
                        <div className='icon'>
                            <FaInstagramSquare style={{color:'#1165CA',}} />
                        </div>
                        <div className='icon'>
                            <FaPinterestSquare style={{color:'#B70A1C',}} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header