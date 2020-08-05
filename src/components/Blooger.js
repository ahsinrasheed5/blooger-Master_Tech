import React,{useEffect} from 'react';
import Carousel from "react-elastic-carousel";

import Aos from "aos";
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
import Sdata from './Sdata';
import EasyToUse from './EasyToUse';
import Posts from './Posts';
import Pdata from './Pdata';
import Categories from './Categories';
import Cdata from './Cdata';
import Popular from './Popular';
import Ppdata from './Ppdata';
import Newsletter from './Newsletter';
import Tangs from './Tangs';
import Footer from './Footer';



const Blooger = () => {
	const breakpoints=[
		{width: 1 ,itemsToShow: 1},
		{width: 550 ,itemsToShow: 2},
		{width: 768 ,itemsToShow: 3},
		{width: 1200 ,itemsToShow: 4},
		{loop:Infinity}
	];
	 useEffect(()=>{
        Aos.init({duration: 2000 });
    },[]);
    return (
        <>
            {/* <!--  site Section Start --> */}
		<section className="site-title">
			<div className="site-background" data-aos="fade-up" data-aos-delay="100">
				<h3>Tours &amp; Travels</h3>
				<h1>Amazing Place on Earth</h1>
				<Link to= "/" className="btn">Explore</Link>
			</div>
		</section>
		<div className="container">
            <Carousel breakPoints={breakpoints}>
				{
					Sdata.map((val, ind)=>{
					return <EasyToUse key={ind}
						imgsrc={val.imgsrc}
						title={val.title}
					/>
					})
				}
			</Carousel>
        </div>
		<div className='container posts'> 
			<div className="row">
				<div className="col-md-8">
				{
					Pdata.map((val, ind)=>{
					return <Posts key={ind}
						imgsrc={val.imgsrc}
						desc={val.desc}
					/>
					})
				}
				</div>
				<div className='col-md-4'>
					<div className="category">
						<h2>Category</h2>
						<ul className="category-list">
						{
							Cdata.map((val, ind)=>{
							return <Categories key={ind}
								categ={val.categ}
								no={val.no}
							/>
							})
						}
						</ul>
            		</div>
					<div className="popular-post">
                		<h2 className="">Popular Post</h2>
					{
						Ppdata.map((val,ind)=>{
							return <Popular key={ind}
							imgsrc={val.imgsrc}
							desc={val.desc}
							link ={val.link}
							/>
						})
					}
					</div>
					<Newsletter/>
					<Tangs/>
				</div>
			</div>
		</div>
		<Footer/>
        </>
    )
}
export default Blooger
