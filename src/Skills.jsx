import React from 'react'
import js from "./images/js.png";
import html5 from "./images/html5.png";
import css3 from "./images/css3.png";
import bootstrap from "./images/bootstrap.png";
import physics from "./images/physics.png";
import jquery from "./images/jquery.png";
import php from "./images/php.png";
import csharp from "./images/csharp.png"
import mysql from "./images/mysql.png";
import wp from "./images/wp.png";
import ts from "./images/ts.png";
import photoshop from "./images/photoshop.png";
import xd from "./images/xd.png";
import laravel from "./images/laravel.png";
import git from "./images/git.png";
import sk2 from "./images/sk2.svg";
function Skills() {
    return (
        <div>
            <div className="skills-pg">
                <div className="f-div">

                    <div className="skill-img">
                        <img src={sk2} alt="" />
                    </div>
                    <div className='skill-text'>
                        <p className="heading-txt">Front-end skills</p>
                        <ul>
                            <li>
                                <img src={html5} alt="" /> <span>html</span>
                            </li>
                            <li>
                                <img src={css3} alt="" /> <span>css</span>
                            </li>                <li>
                                <img src={js} alt="" /> <span>javascript</span>
                            </li>
                            <li>
                                <img src={jquery} alt="" /> <span>jquery</span>
                            </li>
                            <li>
                                <img src={bootstrap} alt="" /> <span>bootstrap</span>
                            </li>
                            <li>
                                <img src={ts} alt="" /> <span>tailwind</span>
                            </li>
                            <li>
                                <img src={physics} alt="" /> <span>react js</span>
                            </li>
                            <li>
                                <img src={wp} alt="" /> <span>wordpress</span>
                            </li>
                        </ul>
                        <p className="heading-txt">Back-end skills</p>
                        <ul>
                            <li>
                                <img src={php} alt="" /> <span>php</span>
                            </li>
                            <li>
                                <img src={csharp} alt="" /> <span>c-sharp</span>
                            </li>                <li>
                                <img src={mysql} alt="" /> <span>mysql</span>
                            </li>
                        </ul>
                        <p className="heading-txt">Other skills</p>
                        <ul>
                            <li>
                                <img src={photoshop} alt="" /> <span>photoshop</span>
                            </li>
                            <li>
                                <img src={xd} alt="" /> <span>adobe XD</span>
                            </li>
                            <li>
                                <img src={git} alt="" /> <span>Github</span>
                            </li>
                        </ul>
                        <p className="heading-txt">Currently learning</p>
                        <ul>
                            <li>
                                <img src={laravel} alt="" /> <span>laravel</span>
                            </li>
                        </ul>
                    </div>




                    <div className="bubble one"></div>
                    <div className="bubble two"></div>
                    <div className="bubble three"></div>
                    <div className="bubble four"></div>
                </div>
            </div>
        </div>
    )
}

export default Skills