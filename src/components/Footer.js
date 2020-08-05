import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook ,faInstagram ,faYoutube} from '@fortawesome/free-brands-svg-icons';
import blog from '../images/blog1.PNG';
import blog1 from '../images/blog2.PNG';
import blog2 from '../images/blog3.PNG';
import post from '../images/post-1.PNG';
import post1 from '../images/post-2.png';
import post2 from '../images/post-3.PNG';
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="about-us"data-aos="fade-right" data-aos-delay="200">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, magni, mollitia? Temporibus fuga, sunt perspiciatis asperiores!</p>
                    </div>
                    <div className="newsletter"data-aos="fade-right" data-aos-delay="200">
                        <h2>Newsletter</h2>
                        <p>Stay Update with our lates</p>
                        <div className="form-element">
                            <input type="text" placeholder="Email"/><span><i className="fas fa-chevron-right"></i></span>
                        </div>
                    </div>
                    <div className="instagram"data-aos="fade-left" data-aos-delay="200">
                        <h2>INstagram</h2>
                        <div className="flex-row">
                            <img src={blog1} alt="pics"/>
                            <img src={blog2} alt="pics"/>
                            <img src={blog} alt="pics"/>
                        </div>
                        <div className="flex-row">
                            <img src={post} alt="pics"/>
                            <img src={post1} alt="pics"/>
                            <img src={post2} alt="pics"/>
                        </div>
                    </div>
                    <div className="follow" data-aos="fade-left" data-aos-delay="200">
                        <h2>Follow Us</h2>
                        <p>Let us be Social</p>
                        <div>
                            <FontAwesomeIcon icon={faTwitter} size='2x'   color="white"/>
                            <FontAwesomeIcon icon={faFacebook} size='2x' color="white" />
                            <FontAwesomeIcon icon={faInstagram} size='2x' color="white" />
                            <FontAwesomeIcon icon={faYoutube} size='2x' color="white"/>
                        </div>
                    </div>
                </div>
                <div className="rights flex-row">
                    <h4 className="text-gray">
                        Copyright &#169; All rights reserved | Made by 
                        <Link to="#" target="_blank">Master_Tech<i className="fab fa-youtube"></i></Link>  
                    </h4>
                </div>
                <div className="move-up">
                    <span><i className="fas fa-arrow-circle-up fa-2x"></i></span>	
                </div>
	        </footer>
        </>
    )
}
export default Footer
