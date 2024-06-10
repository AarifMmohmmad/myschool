import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div class="container">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 mb-3">
                            <div className='logo-container'>
                                <img className="footer-logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Footer Logo" />
                                <div className='icon-container'>
                                    <div className='social-icon-conater'>
                                        <i class="fa fa-facebook footer-social-icon" aria-hidden="true"></i>
                                    </div>
                                    <div className='social-icon-conater'>
                                        <i class="fa fa-instagram footer-social-icon" aria-hidden="true"></i>
                                    </div>
                                    <div className='social-icon-conater'>
                                        <i class="fa fa-envelope footer-social-icon" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                            <h5>Contact Us</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2 "><Link to="#" class="nav-link p-0 footer-li ">Gaurav Path, Vaishali Nagar, Ajmer, Rajasthan 305001</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 footer-li">+91 98299 54444</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 footer-li">+0145 2971111</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 footer-li">+0145 2971112</Link></li>
                            </ul>
                        </div>

                        <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                            <h5>Support</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><Link to="/aboutUs" class="nav-link p-0 footer-li">Online Fee Payment</Link></li>
                                <li class="nav-item mb-2"><Link to="/contact" class="nav-link p-0 footer-li">Registration Form</Link></li>
                                <li class="nav-item mb-2"><Link to="/disclaimer" class="nav-link p-0 footer-li">ERP Login</Link></li>
                            </ul>
                        </div>
                        <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                            <h5>Explore</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><Link to="/aboutUs" class="nav-link p-0 footer-li">News Letters</Link></li>
                                <li class="nav-item mb-2"><Link to="/contact" class="nav-link p-0 footer-li">Events</Link></li>
                                <li class="nav-item mb-2"><Link to="/disclaimer" class="nav-link p-0 footer-li">Gallery</Link></li>
                                <li class="nav-item mb-2"><Link to="/termsandConditions" class="nav-link p-0 footer-li">Alumni</Link></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
