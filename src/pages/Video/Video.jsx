import React from 'react'

const Video = () => {
    return (
        <>
            <div className='grid lg:grid-cols-3  gap-10 px-4 py-20 mt-32'>
                <iframe className='w-full lg:h-60  h-80  rounded-xl shadow-sm shadow-indigo-800' src="https://www.youtube.com/embed/box4SFtGvA0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className='w-full lg:h-60  h-80  rounded-xl shadow-sm shadow-indigo-800' src="https://www.youtube.com/embed/6cfhJO5M0Xo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className='w-full lg:h-60 h-80 rounded-xl shadow-sm shadow-indigo-800' src="https://www.youtube.com/embed/l-js57c7zsg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    )
}

export default Video