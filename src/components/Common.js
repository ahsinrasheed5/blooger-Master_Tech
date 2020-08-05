import React from 'react';
import Carousel from "react-elastic-carousel";

import { Link } from 'react-router-dom';


const breakpoints=[
    {width: 1 ,itemsToShow: 1},
    {width: 550 ,itemsToShow: 2},
    {width: 768 ,itemsToShow: 3},
    {width: 1200 ,itemsToShow: 4},
    {loop:Infinity}
];

const Common = (props) => {
    return (
       <>
            <div className="container">
                <Carousel breakPoints={breakpoints}>
                    <Item data-aos="zoom-in" data-aos-delay="200" className="item-list">
                        <img src={props.imgsrc} alt='img'/>
                        <h2>{props.title}</h2>
                        <Link to='/home'>Fashion</Link>
                    </Item>
                </Carousel>
            </div>
       </>
    )
}

export default Common;
