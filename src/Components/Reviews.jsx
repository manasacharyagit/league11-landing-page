import React from 'react'
import navlogo from '../Resources/navlogoo.png'

const Reviews = () => {
    return (
        <div className='m-4 mt-6 p-6 gap-6'>
            <p className="text-6xl text-center m-6 font-bold flex flex-col sm:flex-row items-center justify-center">
                Legends of
                <img className="w-40 mt-2 sm:mt-0 sm:ml-2" src={navlogo} alt="" />
            </p>

            <div className='flex flex-col md:flex-row justify-center items-center md:justify-evenly'>

                <div className="card w-96">
                    <figure>
                        <img
                            className='w-40'
                            src="https://d1k8sn41pix00a.cloudfront.net/media/promotion/Review_Aditya_Jagtap.jpeg"
                            alt="car!" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Aditya Jagtap</h2>
                        <p>
                            After coming across all the fantasy cricket apps, I
                            finally found the best fantasy cricket app that suits my
                            gameplay. It introduces genuine leaderboards with 100%
                            real users &amp; provides various contests from SL, GL to
                            Head-to-Head contests. This app is perfect for me as it
                            has the lowest platform fees, real users, and multiple
                            contests like iPhone contests, free contests, 5 vs 5, etc
                            which allows me to play willingly &amp; openly on this
                            platform. I would suggest every fantasy player to play on
                            this platform and earn good rewards.
                        </p>

                    </div>
                </div>
                <div className="card w-96 ">
                    <figure>
                        <img
                            className='w-40'
                            src="https://d1k8sn41pix00a.cloudfront.net/media/promotion/Review_Jatin_Raval_1.jpeg"
                            alt="car!" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Jatin Rawal</h2>
                        <p>
                            I have been playing on League11 since its inception in
                            2019. It is the top fantasy app and I don't think that any
                            fantasy app could be better than League11. After GST the
                            market of fantasy sports has gone down. Many companies are
                            charging various taxes from the users while this platform
                            is handling the burden of the government's taxes. In
                            addition to this, the ambient UI of League11 makes it more
                            appealing to play on this fantasy cricket app. They also
                            don't.
                        </p>

                    </div>
                </div>
                <div className="card w-96">
                    <figure>
                        <img
                            className='w-40'
                            src="https://d1k8sn41pix00a.cloudfront.net/media/promotion/Review_Chandrabhan.jpeg"
                            alt="car!" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Chandrabhan</h2>
                        <p>
                            League11 is the best fantasy app with one of the lowest
                            platform fees in the market. Personally, I like to bring
                            one thing to light is that you have brought contests for
                            both small and high investors which is a very good part as
                            everyone is not able to invest big. Their interface is
                            very receptive and one of the best in the fantasy industry
                            right now. One more thing I would like to add is that the
                            customer service is very good and responsive. Wish them
                            luck and a bright future ahead.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews