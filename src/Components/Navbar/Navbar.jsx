import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {

    const show = () => {
        const nav = document.querySelector(".navBar")
        const hide = document.querySelector(".hide")
        const show = document.querySelector(".show")
        nav.style.right = "0%"
        show.style.display = "none"
        setTimeout(() => {
            hide.style.display = "block"
        }, 400);
    }
    const hide = () => {
        const nav = document.querySelector(".navBar")
        const hide = document.querySelector(".hide")
        const show = document.querySelector(".show")
        nav.style.right = "-100%"
        hide.style.display = "none"
        setTimeout(() => {
            show.style.display = "block"
        }, 400);
    }
    const remove = () => {
        const nav = document.querySelector(".navBar")
        const show = document.querySelector(".show")
        const hide = document.querySelector(".hide")
        if (window.innerWidth < 768) {
            nav.style.right = "-100%"
            hide.style.display = "none"
            show.style.display = "block"

        }

    }



    return (
        <>
            <header className="text-gray-600 body-font ">
                <div className="container mx-auto flex flex-wrap px-5 md:pl-14 py-4 justify-between md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium  text-gray-900 mb-4 md:mb-0">
                        <img data-aos="fade-right" data-aos-duration="1000" className='md:w-18 w-16' src="assets/image/khelogames.png" alt="Not Found" />
                    </Link>
                    <div>
                        <svg onClick={show} xmlns="http://www.w3.org/2000/svg" className="show h-10 w-10  ml-auto md:ml-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                        <svg onClick={hide} xmlns="http://www.w3.org/2000/svg" className="hide h-10 w-10 ml-auto md:ml-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <nav className="navBar md:ml-auto md:flex  items-center md:justify-center lg:text-xl" >

                        <Link onClick={remove} to='/' className="mr-5  cursor-pointer " data-aos="fade-down" data-aos-duration="400" data-aos-offset="0">Home</Link>
                        <Link to='/features' className="mr-5  cursor-pointer" data-aos="fade-left" data-aos-duration="400" data-aos-offset="0" data-aos-delay="400" onClick={remove}>Features</Link>
                        <Link to='video' className="mr-5  cursor-pointer" data-aos="fade-left" data-aos-duration="400" data-aos-offset="0" data-aos-delay="500" onClick={remove}>Video</Link>
                        <Link to='privacy' className="mr-5  cursor-pointer" data-aos="fade-left" data-aos-duration="400" data-aos-offset="0" data-aos-delay="600" onClick={remove}>Privacy policy</Link>
                        <a href='https://khelogamesbd.com/KheloGames.apk' className="download_nav_btn lg:hidden  px-6 py-2 rounded-md cursor-pointer" data-aos="fade-left" data-aos-duration="400" data-aos-offset="0" data-aos-delay="600">Download Apk</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar