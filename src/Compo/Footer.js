import React from 'react';
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import './Footer.css'

import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-left footer'>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <div className='footer_box'>
                            <h5>About Us</h5>
                            <hr />
                            <img src='images/logo-2.png' alt='logo' />
                            <p>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been
                                the industry’s</p>
                        </div>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <div className='footer_box'>
                            <h5 className='mb-0'>Information</h5>
                            <hr />
                            <ul>
                                <li>About</li>
                                <li>Meet Our Team</li>
                                <li>Our Portfolio</li>
                                <li>Latest News</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <div className='footer_box' >
                            <h5>Helpful</h5>
                            <hr />
                            <div className='icon'>
                                <p><BsFillTelephoneFill /> +(91)96****5484</p>
                            </div>
                            <div className='icon'>
                                <p><IoIosMail fontSize={23} />  hemant@gmail.com</p>
                            </div>
                            <div className='socalimgbox'>
                                <img src='images/fb.png' alt='socal' />
                                <img src='images/in.png' alt='socal' />
                                <img src='images/link.png' alt='socal' />
                                <img src='images/twi.png' alt='socal' />
                            </div>
                        </div>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <div className='footer_box'>
                            <h5 style={{border: 'none'}} className=' mb-0'>Get the best viral
                                strories straight into
                                your inbox!</h5>
                            <hr />
                            <div className='btn_box'>
                                <input type='text' placeholder='Email' />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ color: '#999999', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <p>Copyright © 2024 prayer-Hemant-Saini | Powered by Hemant-Saini</p>
            </div>
        </MDBFooter>
    );
}