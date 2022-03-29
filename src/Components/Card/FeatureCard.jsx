import React from 'react'

const FeatureCard = ({ image, title, desc, number }) => {
    return (
        <>
            <div className='px-10 py-6 bg-gray-900 rounded-md flex flex-col gap-4'>
                <figure>
                    <img className='w-16' src={image} alt="not found" />
                </figure>
                <h1 className='text-gray-200 font-semibold lg:text-3xl text-4xl'><span className="counter" data-target={number} >{number}</span>{title}</h1>
                <h1 className='text-gray-600 font-semibold lg:text-xl text-xl'>{desc}</h1>
            </div>
        </>
    )
}

export default FeatureCard