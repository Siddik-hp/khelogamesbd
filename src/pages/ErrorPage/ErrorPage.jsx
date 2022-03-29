import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <div className='Error'>
                <div className='text-center'>
                    <h1 className='lg:text-4xl text-3xl capitalize mb-4'>Page Not Found / Not Exits</h1>
                    <Link to="/">
                        <button className='px-10 py-2 rounded-xl'>Back</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ErrorPage