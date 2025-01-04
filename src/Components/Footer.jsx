import React from 'react'
import footerlogo from '../Resources/navlogoo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content p-10">
                <div className='flex justify-center items-center flex-col'>
                    <img src='https://5.imimg.com/data5/SELLER/Default/2023/11/362822350/PQ/AK/TU/203456756/lgo1-png-250x250.png' alt="" />
                    <p className='text-white'>Discover why League11 is a hit with over 1 Million+ players.<br />
                        Play fantasy sports like never before.</p>

                </div>
                <nav>
                    <h6 className="footer-title">Products</h6>
                    <a className="link link-hover">Fantasy Cricket</a>
                    <a className="link link-hover">Fantasy Kabaddi App</a>
                    <a className="link link-hover">Live Cricket Score</a>
                    <a className="link link-hover">Cricket Upcoming</a>
                    <a className="link link-hover">Get it on Play store</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Download App</a>
                    <a className="link link-hover">How to Play</a>
                    <a className="link link-hover">Refer and Earn</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Pointing System</a>
                    <a className="link link-hover">Fair Play</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Cricket Players</a>
                </nav>
                <nav className='gap-8'>
                    <h6 className="footer-title">Payment Partners</h6>
                    <a className="link link-hover">
                        <img className='w-40' src="https://d8ozzhe9u4o2s.cloudfront.net/new_webapp/footer-Paytm.png" alt="" />
                    </a>
                    <a className="link link-hover">
                        <img className='w-40' src="https://justicepoker.s3.ap-south-1.amazonaws.com/WebsiteStatic/SafeCheck.png" alt="" />
                    </a>
                    <a className="link link-hover">
                        <img className='w-40' src="data:image/png;base64,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" alt="" />
                    </a>

                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer