import React from 'react'
import { Link } from 'react-router-dom';
// import blog from '../images/blog1.PNG';

const Posts = (props) => {
    return (
        <>
            <div className="posts">
                <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                    <div className="post-image">
                        <div>
                            <img src={props.imgsrc} className="img" alt="blog1"/>
                        </div>
                        <div className="post-info flex-row">
                            <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,2020</span>
                            <span>2 Commets</span>
                        </div>
                    </div>
                    <div className="post-title">
                        <Link to="/">{props.desc}</Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis nihil, eum expedita nulla, consectetur adipisicing elit. Nisi reiciendis nihil, eum expedita nulla.</p>
                        <button type="button" className="btn post-btn">Read More &nbsp;<i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <hr/>
            </div>
        </>
    )
}

export default Posts
