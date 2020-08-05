import React from 'react'
import { Link } from 'react-router-dom'

const Popular = (props) => {
    return (
        <>
            
                <div className="post-content"data-aos="flip-up" data-aos-delay="200">
                    <div className="post-image">
                        <div>
                            <img src={props.imgsrc} className="img" alt="blog1"/>
                        </div>
                        <div className="post-info flex-row">
                            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;{props.desc}</span>
                            <span>2 Commets</span>
                        </div>
                    </div>
                    <div className="post-title">
                        <Link to="/">{props.link}</Link>
                    </div>
                </div>

        </>
    )
}

export default Popular
