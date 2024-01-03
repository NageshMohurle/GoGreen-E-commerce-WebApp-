import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    var count = 0;
    function VisitCount() {
        count++;
    }
    return (


        <>
            <div className='footer' onLoad={VisitCount()}>
                <div className=' d-flex justify-content-around '>
                    <div className="d-flex flex-column about-us mt-3">
                        <h2 className='text-center'>About Us</h2>
                        <div>
                            <Link to="./about">About</Link>|
                            <Link to="./contact">Contact</Link>|
                            <Link to="./policy">Privacy Policy</Link>|
                        </div>
                    </div>
                    <div className=" d-flex flex-column mt-3">
                        <h2>Get In Touch</h2>
                        <div>Call : +91-9129-9129-91</div>
                        <div>Email : support@gogreen.com</div>
                    </div>
                    <div className="d-flex flex-column mt-3">
                        <h2 className='text-center'>FOLLOW US</h2>
                        <div className='follow-us mt-2'>
                            <Link to="./about"><span className='bi bi-facebook'></span></Link>
                            <Link to="./contact"><span className='bi bi-twitter'></span></Link>
                            <Link to="./policy"><span className='bi bi-linkedin'></span></Link>
                            <Link to="./policy"><span className='bi bi-instagram'></span></Link>
                            {/* <p>Visitor: <span id='count'>{count}</span></p> */}
                        </div>
                    </div>
                </div>
            <p className='mt-2 mb-0 position-relative bottom-0' style={{ position: 'relative', bottom: '0' }}>© 2023, GoGreen. All rights reserved.</p>
            </div>
        </>
    )
}
export default Footer