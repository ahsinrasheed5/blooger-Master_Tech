import React from 'react'
import { Link } from 'react-router-dom'

const Categories = (props) => {
    return (
        <>
            <li className="list-items"data-aos="fade-left" data-aos-delay="100">
                <Link to="/">{props.categ}</Link>
                <span>({props.no})</span>
            </li>
        </>
    )
}

export default Categories
