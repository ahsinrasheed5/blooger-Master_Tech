import React from 'react';
import Item from "./Item";
import { Link } from 'react-router-dom';
const EasyToUse = (props) => {
    return (
       <>
            <Item data-aos="zoom-in" data-aos-delay="200" className="item-list">
                <img src={props.imgsrc} alt='img'/>
                <h2>{props.title}</h2>
                <Link to='/home'>Fashion</Link>
            </Item>
       </>
    )
}
export default EasyToUse
