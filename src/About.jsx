import React from 'react'
import about from "./images/about.svg"
import about2 from "./images/about2.gif"

function About() {
  return (
    <div>
      <div className="about-pg">
        <div className="f-div">

          <div className="about-img">
            <img src={about2} alt="" />
          </div>
          <div className="about-txt">
          <p className="heading-txt">About</p>

            <p className='hero-para'>Hello! my name is <span className='name'>Dheeraj Yadav</span>. I know just a name doesn‘t make any sense. So Let me introduce myself, i am <span className='name'>fullstack web developer & UI designer</span> based in <span className='name'>Jabalpur, MadhyaPradesh, INDIA</span>, who love to design and developer beautiful  <span className='name'>web applications & Ui designs</span>  .</p>
            <p className='hero-para'>I enjoy the constant change in the technologies used in the area and love diving into new frameworks and technologies.I have been coding from over a year now. One of my hobbie is writing and creating content.</p>
          </div>


        </div>



        <div className="f-div">
          <div className="about-txt">
            <ul>My Journey:
              <li>Fullstack Web dev <a href="http://www.aadishesh.com/#" target="_blank">@ Aadishesh Software </a> <br />
                Sep 2022 - Present</li>
              <li>Internship <a href="https://5eb2f317da648.site123.me/" target="_blank">@ Vistaar Technology</a> <br />
                Apr 2021 - Aug 2022</li>
              <li>Graduation in <span>Bachelor Of Arts</span> <br />
                2018 - 2020</li>
              <li>Diploma in <span>Electronics Engineering</span> <br />
                2014 - 2017</li>
            </ul>
          </div>
          <div className="about-img">
            <img src={about} alt="" />
            {/* <img src="https://cdn.dribbble.com/users/285475/screenshots/2928587/mondays.gif" alt="" /> */}
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

export default About;