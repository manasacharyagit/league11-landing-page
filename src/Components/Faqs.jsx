import React from "react";

const Faqs = () => {
    return (
        <div>
            <div className="bg-[#F2F4FF] h-screen">
                <section className="max-w-5xl mx-auto py-10 sm:py-20">
                    <div className="flex items-center justify-center flex-col gap-y-2 py-5">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Frequently asked questions</h2>
                        {/* <p className="text-lg font-medium text-slate-700/70">Questions related to web hosting</p> */}
                    </div>
                    <div className="w-full px-7 md:px-10 xl:px-2 py-4">
                        <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
                            {/* Question 1 */}
                            <div className="border-b border-[#0A071B]/10">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        id="faq-1"
                                        className="peer hidden"
                                    />
                                    <label
                                        htmlFor="faq-1"
                                        className="flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 p-5 cursor-pointer"
                                    >
                                        <span>What are fantasy gaming apps?</span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className="mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] transform transition-transform duration-300 peer-checked:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                                        </svg>
                                    </label>
                                    <div className="answer hidden peer-checked:block pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium">
                                        You know every fantasy gaming app is an interactive online game that brings gaming & sports fans closer to their favorite sport. That platform helps you in creating your own real cricket teams in a real-time Fantasy gaming app, including selecting a Captain and Vice-Captain. If your team performs well and the Captain & Vice-Captain selection wins the match, you will be eligible to earn real money from the prize pool.

                                        A platform where users of the Fantasy gaming app compete against one another and form teams. Users earn real money every day from the Fantasy contests accessible in Leagues by applying their knowledge and talents. Fantasy League is a concept of online gaming that has seen Fantasy Players from all over the country join from humble beginnings and utilize all their talents and experience to earn real money every day.
                                    </div>
                                </div>
                            </div>

                            {/* Question 2 */}
                            <div className="border-b border-[#0A071B]/10">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        id="faq-2"
                                        className="peer hidden"
                                    />
                                    <label
                                        htmlFor="faq-2"
                                        className="flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 p-5 cursor-pointer"
                                    >
                                        <span>What play games on Fantasy Sports & Gaming apps?</span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className="mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] transform transition-transform duration-300 peer-checked:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                                        </svg>
                                    </label>
                                    <div className="answer hidden peer-checked:block pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium">
                                        In India, fantasy gaming apps have seen phenomenal development in terms of both the number of players and the particular income earned. By 2025, the Indian fantasy gaming app request is anticipated to be worth$1.2 Trillion. The number of fantasy gamers in India has surged by over more than 35 times in the past, while the number of fantasy sports operations has climbed by 9 times.

                                        Playing over gaming apps online is to bring your passion for games closer than ever before. This is the closest a sports fan will ever get to their favorite game. If you use skills, knowledge, and abilities to the greatest potential which helps to win real money daily.
                                    </div>
                                </div>
                            </div>

                            {/* Question 3 */}
                            <div className="border-b border-[#0A071B]/10">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        id="faq-3"
                                        className="peer hidden"
                                    />
                                    <label
                                        htmlFor="faq-3"
                                        className="flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 p-5 cursor-pointer"
                                    >
                                        <span>Can I actually win money on League11?</span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className="mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] transform transition-transform duration-300 peer-checked:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                                        </svg>
                                    </label>
                                    <div className="answer hidden peer-checked:block pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium">
                                        Absolutely! It's possible for you to win big prizes on League11 too, as a lot of players have already done so. The prizes and entry fees for each of our cash contests are different.

                                        Choose your own contest, beat the competition, and celebrate your victories!
                                    </div>
                                </div>
                            </div>

                            {/* Question 4 */}
                            <div className="">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        id="faq-4"
                                        className="peer hidden"
                                    />
                                    <label
                                        htmlFor="faq-4"
                                        className="flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 p-5 cursor-pointer"
                                    >
                                        <span>How does a user benefit from playing fantasy Gaming apps?</span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className="mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] transform transition-transform duration-300 peer-checked:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                                        </svg>
                                    </label>
                                    <div className="answer hidden peer-checked:block pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium">
                                        League11 gaming apps improve your knowledge, and abilities which allow you to win real money. League11 app which includes cricket and football, as well as other Fantasy games which improve your skills and allow you to earn real money. We provide a safe and secure environment for every user to participate in an online Fantasy gaming app at their convenience. Join India's No.1 fastest-growing online fantasy cricket platform to get started with the game right now and experience the real thing.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Faqs;
