import React, { useEffect } from 'react'
import Card from '../../Components/Card/Card';
import FeatureCard from '../../Components/Card/FeatureCard';
import CardComponents from '../../Components/CardCompnents/CardComponents'
import ImageCard from '../../Components/imageCard/ImageCard';

import Screenshort from '../../Components/Slider/Screenshort';
import Btn1 from './../../Components/Button/Btn1';

const Home = () => {
    useEffect(() => {
        const counters = document.querySelectorAll(".counter")
        counters.forEach((counter) => {
            counter.innerHTML = '0'

            const updateCounter = () => {
                const target = +counter.getAttribute("data-target")
                const c = +counter.innerHTML
                const increment = target / 600
                if (c < target) {
                    counter.innerHTML = `${Math.ceil(c + increment)}`
                    setTimeout(updateCounter, 1);
                } else {
                    counter.innerHTML = target
                }
            }
            updateCounter()
        })
    }, [])


    return (
        <div>
            {/* ============ Hero Section =============== */}
            <div id='hero' className=''>
                <div className="content lg:pl-12 pl-4 lg:w-3/6  ">
                    <h1 className='homeText md:text-6xl capitalize text-5xl font-semibold mb-4 text-white ' data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="0">A better platform of e-sport tournament</h1>
                    <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="0" className='text-2xl text-gray-200 mb-4'>Play free fire tournaments daily and win cash money by winning matches. Download our Android app below</h1>
                    <Btn1 />
                </div>
            </div>

            {/* ======== Card Section  ================*/}
            <div className='grid lg:grid-cols-3 px-6 py-20 gap-10'>
                {/* card 1 */}
                <div className='px-10 py-6 bg-gray-900 rounded-md flex flex-col gap-4'>
                    <figure>
                        <img className='w-16' src="assets/image/features/one.png" alt="not found" />
                    </figure>
                    <h1 className='text-gray-200 font-semibold lg:text-3xl text-4xl'><span className="counter" data-target="1000" >1000</span>+ Downloads</h1>
                    <h1 className='text-gray-600 font-semibold lg:text-xl text-xl'>The platform of choice for the gaming industry and community at large</h1>
                </div>
                {/* card 2 */}
                <div className='px-10 py-6 bg-gray-900 rounded-md flex flex-col gap-4'>
                    <figure>
                        <img className='w-16' src="assets/image/features/two.png" alt="not found" />
                    </figure>
                    <h1 className='text-gray-200 font-semibold lg:text-3xl text-4xl'><span className="counter" data-target="2000" >2000</span>+ Active User</h1>
                    <h1 className='text-gray-600 font-semibold lg:text-xl text-xl'>To choose from and join. Of all shapes and sizes</h1>
                </div>

            </div>

            {/* ================= Screen Shorts Image Slider =====================*/}
            <Screenshort />

            {/* ================= Card Components  =============*/}
            <CardComponents />
            {/* ============ image Card Section ================= */}
            <ImageCard />
        </div>
    )
}

export default Home 