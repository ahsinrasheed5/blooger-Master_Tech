import React from 'react'
import Cards from './Cards';
import Prodata from "./Prodata";

const Page = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Pages</h1>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                   {
                       Prodata.map((val, ind)=>{
                           return <Cards key={ind}
                            imgsrc={val.imgsrc}
                            desc={val.desc}
                            link={val.link}
                           />
                       })
                   }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Page;