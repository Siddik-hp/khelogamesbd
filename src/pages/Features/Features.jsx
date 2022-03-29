import React from 'react'
import FeatureCard from '../../Components/Card/FeatureCard';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer';

const Features = () => {
    return (
        <>
            <div id='features' className=''>
                <div className="content lg:px-4 px-3  lg:w-3/4 ">
                    <h1 className='md:text-6xl capitalize text-4xl mb-4 text-white ' data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="0">The Mobile eSports Revolution is Here</h1>
                    <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="0" className='lg:text-2xl text-xl text-gray-200 mb-4'>Download our app to be immersed in the mobile gaming world, explore diverse communities, improve your skills, gain credibility, and win rewards!</h1>
                    <div className='bg-gray-900 text-center  w-3/4 px-3 py-4 rounded-xl  lg:w-1/3 mx-auto'>
                        <h1 className='text-xl  text-gray-300 mb-2'>Download the application now</h1>
                        <a href="https://khelogamesbd.com/KheloGames.apk">
                            <button className='px-6 py-2 rounded-md'>Download Apk</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 px-6 py-20 gap-10'>
                <FeatureCard image="assets/image/features/one.png" title="10k+ Downloads" desc="The platform of choice for the gaming industry and community at large" />
                <FeatureCard image="assets/image/features/two.png" title="14K+ Guilds" desc="To choose from and join. Of all shapes and sizes" />
                <FeatureCard image="assets/image/features/three.png" title="6+ Countries" desc="With multi-lingual and multi-regional support and presence" />
            </div>

        </>
    )
}

export default Features