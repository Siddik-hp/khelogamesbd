import React from 'react'
import { Link } from 'react-router-dom'

const LinkNav = ({ one, two, three, four }) => {
    return (
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10 capitalize" >
                <li className='mb-3'>
                    <Link to="#" className="text-gray-100  hover:text-gray-500 transition-all">{one}</Link>
                </li>
                <li className='mb-3'>
                    <Link to="#" className="text-gray-100 hover:text-gray-500 transition-all">{two}</Link>
                </li>
                <li className='mb-3'>
                    <Link to='#' className="text-gray-100 hover:text-gray-500 transition-all">{three}</Link>
                </li>
                <li className='mb-3'>
                    <Link to='#' className="text-gray-100 hover:text-gray-500 transition-all">{four}</Link>
                </li>
            </nav>
        </div>
    )
}

export default LinkNav