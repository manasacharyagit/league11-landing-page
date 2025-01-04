import React from 'react'
import navlogo from '../Resources/navlogoo.png'

const Learntoplay = () => {
    return (
        <div className='gap-8 m-4'>
            <div className='flex flex-col text-center md:text-justify justify-center items-center p-4 gap-8'>
                <p className='text-6xl text-center m-6 font-bold flex flex-col sm:flex-row items-center justify-center'>How to Play at
                    <img className="w-40 mt-2 sm:mt-0 sm:ml-2" src={navlogo} alt="" />
                </p>
                <img className='w-10 h-10' src="https://www.svgrepo.com/show/255162/trophy.svg" alt="" />
                <p className='text-justify'>Ready to be a fantasy sports champion? Learn how to pick the perfect players, analyse match-ups, and make those crucial decisions that can lead to victory.<br /> Dive into the exciting world of Fantasy Sports with League11.</p>
            </div>

            <div className=' flex flex-col md:flex-row gap-6'>
                <div className='flex justify-center items-center'>
                    <img src="https://league11-cdn.s3.ap-south-1.amazonaws.com/new_webapp/homepage-images/join/1-select.png" alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <img src="https://league11-cdn.s3.ap-south-1.amazonaws.com/new_webapp/homepage-images/join/2-create.png" alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <img src="https://league11-cdn.s3.ap-south-1.amazonaws.com/new_webapp/homepage-images/join/3-join.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Learntoplay