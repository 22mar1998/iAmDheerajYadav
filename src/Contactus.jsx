import React from 'react';
import contact from "./images/contact.svg"

const Contactus = () => {
    return (
        <div>
            <div className="contact-pg">

                <div className="f-div">
                    <div className="contact-text">
                        <p className="heading-txt">Get in touch</p>
                        <p className='hero-para'>Do not hesitate to contact me through the form here or by direct email on <span className='name'>Dheeru713@gmail.com</span> regardless of the subject.</p>

                        <div className="contact-form">
                            <form action="https://formspree.io/f/mqkjrdgq" method="post">
                                <p className="hero-para">What‘s your name ?</p>
                                <input type="text" name="username" placeholder='Dheeraj Yadav' required autoComplete='off' className='c-i' />
                                <p className="hero-para">What's your email address ?</p>

                                <input type="email" name="email" placeholder='Dheeru713@gmail.com' required autoComplete='off' className='c-i' />
                                <p className="hero-para">Type your message ?</p>

                                <textarea name="message" autoComplete='off' placeholder="Hi Dheeraj, Let's work." required className='c-t'></textarea>
                                <input type="submit" value="send" className='send-btn' />
                            </form>
                        </div>
                        <p className='hero-para'>Or connect with me on social networks:</p>
                        <ul className="social-links">
                            <li><a href="https://www.linkedin.com/in/dheeraj-yadav-0b5859217/" target="_blank"><i className="ri-linkedin-line"></i> </a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100013956199176" target="_blank"><i className="ri-facebook-line"></i></a></li>
                            <li><a href="https://www.instagram.com/22march1998/" target="_blank"><i className="ri-instagram-line"></i></a></li>
                        </ul>
                    </div>
                    <div className="contact-image">
                        <img src={contact} alt="" />
                    </div>


                </div>


                <div className="bubble one"></div>
                <div className="bubble two"></div>
                <div className="bubble three"></div>
                <div className="bubble four"></div>
            </div>
        </div>
    )
}

export default Contactus;