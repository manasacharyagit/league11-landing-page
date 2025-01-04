import React, { useState } from 'react';
// If using react-intersection-observer, import it like this:
// import { useInView } from '@researchgate/react-intersection-observer';

const Features = () => {
    // State to track if the section is in view
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer callback to detect when section is in view
    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsVisible(true);
        }
    };

    // Observer options
    const observerOptions = {
        threshold: 0.1, // When 10% of the section is in view
    };

    React.useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        const target = document.querySelector('#features-section');
        if (target) observer.observe(target);

        // Cleanup observer on unmount
        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);

    return (
        <div id="features-section" className='w-screen'>
            <div className='flex items-center justify-center'>
                <img
                    className={`${isVisible ? 'animate-slide-down' : ''
                        } transition-all duration-1000`}
                    src="https://5.imimg.com/data5/SELLER/Default/2023/11/362822350/PQ/AK/TU/203456756/lgo1-png-250x250.png"
                    alt=""
                />
            </div>
            <div className='flex flex-col md:flex-row border p-6 bg-slate-800'>
                <div className="flex flex-wrap w-full text-center">
                    <div className={`w-1/3 p-2 gap-6 flex justify-center items-center flex-col ${isVisible ? 'animate-slide-down' : ''}`}>
                        <img className='w-14' src="https://cdn.iconscout.com/icon/premium/png-512-thumb/100-number-5387791-4506627.png?f=webp&w=256" alt="" />
                        <p className='text-yellow-400 text-lg'>100% Real People</p>
                        <p className='text-blue-300 hidden md:block'>Play Leaderboards with 100% real users. Experience the real rivalry with 1M+ users.</p>
                    </div>

                    <div className={`w-1/3 p-2 gap-6 flex justify-center items-center flex-col ${isVisible ? 'animate-slide-down' : ''}`}>
                        <img className='w-14' src="https://cdn.iconscout.com/icon/premium/png-512-thumb/coin-1491069-1262927.png?f=webp&w=256" alt="" />
                        <p className='text-yellow-400 text-lg'>Lowest Platform Fee</p>
                        <p className='text-blue-300 hidden md:block'>Lowest fees fantasy platform in the fantasy sports industry.</p>
                    </div>

                    <div className={`w-1/3 p-2 gap-6 flex justify-center items-center flex-col ${isVisible ? 'animate-slide-down' : ''}`}>
                        <img className='w-14' src="https://cdn.iconscout.com/icon/premium/png-512-thumb/withdrawal-1477945-1246730.png?f=webp&w=256" alt="" />
                        <p className='text-yellow-400 text-lg'>Faster Withdrawl</p>
                        <p className='text-blue-300 hidden md:block'>League11 tends to process withdrawal at its best for all legends of league11</p>
                    </div>

                    <div className={`w-1/3 p-2 gap-6 flex justify-center items-center flex-col ${isVisible ? 'animate-slide-down' : ''}`}>
                        <img className='w-14' src="https://cdn.iconscout.com/icon/premium/png-512-thumb/gaming-3716800-3105494.png?f=webp&w=256" alt="" />
                        <p className='text-yellow-400 text-lg'>Multiple Gaming Modes</p>
                        <p className='text-blue-300 hidden md:block'>Innovative game modes, exclusive Multiplier scoring for groundbreaking experience.</p>
                    </div>

                    <div className={`w-1/3 p-2 gap-6 flex justify-center items-center flex-col ${isVisible ? 'animate-slide-down' : ''}`}>
                        <img className='w-14' src="https://cdn.iconscout.com/icon/premium/png-512-thumb/leaderboard-10358097-8469487.png?f=webp&w=256" alt="" />
                        <p className='text-yellow-400 text-lg'>
                            Leaderboards</p>
                        <p className='text-blue-300 hidden md:block'>Compare players, stats, performances for optimal line-up decisions.</p>
                    </div>

                    <div className={`w-1/3 p-2 gap-6 flex justify-center items-center flex-col ${isVisible ? 'animate-slide-down' : ''}`}>
                        <img className='w-14' src="https://cdn.iconscout.com/icon/premium/png-512-thumb/gift-2889932-2397899.png?f=webp&w=256" alt="" />
                        <p className='text-yellow-400 text-lg'>Rewards</p>
                        <p className='text-blue-300 hidden md:block'>Play Leader Boards with 100% real users. Earn rewards by competing in contests & free entries.</p>
                    </div>
                </div>
                <div className={`hidden md:block ${isVisible ? 'animate-slide-down' : ''}`}>
                    <img className='w-80' src="https://league11-cdn.s3.ap-south-1.amazonaws.com/new_webapp/homepage-images/hero/phone-image.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Features;
