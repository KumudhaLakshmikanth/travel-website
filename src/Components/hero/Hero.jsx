import React from "react";
import './hero.css'
import Slider from 'react-slick'

const HeroData=[
    {
        Heading:"1.Best Summer Days",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, omnis? Pariatur amet reprehenderit et non nihil at",
        tag:"BEST OFFERS",
        image:"https://i.pinimg.com/474x/07/77/b7/0777b7b0e17cabaf00a5933c998d60e2.jpg"
    },
    {
        Heading:"1.Best Summer Days",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, omnis? Pariatur amet reprehenderit et non nihil at",
        tag:"BEST OFFERS",
        image:"https://i.pinimg.com/474x/07/77/b7/0777b7b0e17cabaf00a5933c998d60e2.jpg"
    }

]

function Hero(){
    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoPlay:true,
        autoplaySpeed:500,
    }
 const details=[
    {
        Name:"Ana",
        LastMessage:"whats up",
        Time:"1am",
    },
    {
        Name:"Rohan",
        LastMessage:"what are you doing",
        Time="10pm",
    },
    {
        Name:"Sam",
        LastMessage:"meeting at 7am",
        Time="11pm"
    }
 ]
    return(
        // <div className="hero">
        //  <Slider {...settings}>
        //  <div className="row">
        // {
        //     HeroData.map((item, index)=>(
        //         <div className="col-12 col-sm-12 col-md-6 col-lg-3" key={index}>
        //         <div className="card">
        //             <img src={item.image} alt="" />
        //             <h1>{item.Heading}</h1>
        //             <p>{item.desc}</p>
        //             <i><b>{item.tag}</b></i>
        //         </div>
        //     </div>
        //     ))
        // }
        // </div>

          
        //  </Slider>
        // </div>

        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <div className="details">
                    {
                        details.map((item, index)=>(
                            <div>
                                
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Hero