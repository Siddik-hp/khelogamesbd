import React from 'react'

const Card = ({ image, text }) => {
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className='lg:text-center flex lg:flex-col flex-row  items-center md:px-2 md:py-14 px-4 py-7 gap-10 rounded-lg shadow-sm shadow-indigo-900 cursor-pointer bg-gray-900 transition-all hover:scale-105 mx-auto'>
            <figure>
                <img className='lg:w-24 w-32' src={image} alt="not found" />
            </figure>
            <h1 className='text-gray-200 font-semibold lg:text-xl text-xl'>{text}</h1>
        </div>
    )
}

export default Card