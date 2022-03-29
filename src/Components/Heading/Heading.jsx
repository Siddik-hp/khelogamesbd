import React from 'react'

const Heading = ({ title, desc }) => {
    return (
        <div className='text-center py-10 '>
            <h1 className='lg:text-5xl text-3xl mb-4 font-bold text-gray-200'>{title}</h1>
            <h2 className='text-gray-500 text-xl'>{desc} </h2>
        </div>
    )
}

export default Heading