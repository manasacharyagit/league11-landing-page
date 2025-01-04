import React from 'react'
import mock1 from '../Resources/mock1.png'

const Hero = () => {
    return (
        <>
            <div className='flex w-screen flex-col md:flex-row md:gap-6 m-4 border mt-12'>

                <div className='flex flex-col p-4'>

                    <p className=' text-indigo-950 m-2 text-crazy-large font-bold '>
                        Mecca of All <span className='text-yellow-400'>Fantasy Sports <img
                            width="40"
                            height="40"
                            className="inline-block mt-6"
                            src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-cricket-ball-sports-and-games-icongeek26-linear-colour-icongeek26.png"
                            alt="cricket-ball-icon"
                        /></span>
                    </p>
                    <p className='text-justify left-12'>Combine your passion for fantasy sports with strategic gameplay. Build your star team using real-life players and compete against fans like you. Every run, catch, wicket, 4/6 s taken scores points for your team, bringing the thrill of the fantasy game right to your fingertips.</p>

                </div>

                <div className='flex justify-center items-center p-4'>
                    <img src={mock1} alt="" />

                </div>


            </div>
        </>
    )
}

export default Hero
