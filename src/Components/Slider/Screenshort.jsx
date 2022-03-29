import React, { Component } from 'react'
import Slider from "react-slick";
export default class Screenshort extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className='px-20 py-10 slider'>
                <div className='mb-4'>
                    <h2 className='text-center my-4 lg:text-5xl text-3xl text-white'> Daily tournaments </h2>
                    <h2 className='text-center text-gray-500 text-xl'>Join our community to play tournaments everyday and win prize for winning matches.</h2>
                </div>
                <Slider {...settings}>
                    <div className='mx-auto'>
                        <figure>
                            <img className='mx-auto' src="assets/image/slider/1.png" alt="not found" />
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <img className='mx-auto' src="assets/image/slider/1.png" alt="not found" />
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <img className='mx-auto' src="assets/image/slider/1.png" alt="not found" />
                        </figure>
                    </div>

                </Slider>
            </div>
        );
    }
}

