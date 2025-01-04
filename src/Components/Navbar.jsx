import React from 'react'
import navlogo from '../Resources/navlogoo.png'


const Navbar = () => {

    return (
        <div className=''>
            <div className="navbar bg-white/30 backdrop-blur-md rounded-lg border-white/40 shadow-lg bg-base-100 border fixed top-0 z-50 flex justify-evenly">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-8 "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                            <li><a>About</a></li>
                            <li><a>Download App</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="hover:cursor-pointer">
                        <img
                            className='md:h-16 h-10'
                            src={navlogo} alt="" />
                    </a>
                </div>
                <div className="navbar-end">
                    <button className="btn w-30 overflow-hidden  bg-indigo-950 text-white  rounded-full md:w-40 hover:bg-slate-500 text-md md:text-lg font-bold hover:text-white">Play Now</button>

                </div>
            </div>
        </div>
    )
}

export default Navbar