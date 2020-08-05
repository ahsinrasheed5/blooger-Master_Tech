import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div className="newsletter" data-aos="fade-up" data-aos-delay="300">
                <h2>Newsletter</h2>
                <div className="form-element">
                    <input type="text" name="name" className="input-element" placeholder="Email"/>
                    <button type="button" className="btn form-btn">Subcribe</button>
                </div>
            </div>
        </>
    )
}
export default Newsletter
