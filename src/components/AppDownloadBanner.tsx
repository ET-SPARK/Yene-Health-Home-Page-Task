const PRIMARY = "#E17A6E"
const SECONDARY = "#4A8C8A"

export default function AppDownloadBanner() {
    return (
        <div className="w-full bg-white sm:bg-[#f8f8f8ff] sm:px-4 pt-[100px] ">
            {/* Desktop banner */}
            <div
                className="bg-primary hidden relative w-full md:h-[320px] 3xl:h-[400px] rounded-xl overflow-hidden md:grid md:grid-cols-12 px-[2%] 3xl:px-[4%]"
                style={{ backgroundColor: PRIMARY }}
            >
                {/* App images section */}
                <div className="w-full relative col-span-7 overflow-hidden">
                    <img
                        className="absolute md:top-[-220px] 3xl:top-[-160px] md:right-[130px] 3xl:right-[320px] z-10 md:w-[500px] md:h-[490px]"
                        src="https://yenehealth.com/images/home-banner-englishu.svg"
                        alt="yenehealth app english"
                        loading="eager"
                    />
                    <img
                        className="absolute md:bottom-[-35px] 3xl:bottom-[-15px] md:w-[450.53px] md:max-h-[340px] bg-cover object-cover h-full"
                        src="	https://yenehealth.com/images/home-banner-amharic0.png"
                        alt="yenehealth app amharic"
                        loading="eager"
                    />
                </div>

                {/* Text and badges section */}
                <div className="w-full flex flex-col items-center justify-center gap-8 col-start-8 col-end-13">
                    <h3 className="text-center text-white opacity-80 md:text-3xl 3xl:text-5xl font-bold w-full leading-tight break-words">
                        Download our all new<br />Yenehealth app
                    </h3>
                    <div className="max-w-[289.09px] w-full h-[38.03px] opacity-80 justify-start items-start gap-[26px] inline-flex">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Yenehealth app from the play Store"
                            href="https://play.google.com/store/apps/details?id=com.yenehealth.app&hl=am&gl=US"
                        >
                            <img src="https://yenehealth.com/icons/googleplay.svg" alt="Google play store" className="w-[105.17px] h-[30.42px] relative" />
                        </a>
                        <a
                            href="https://apps.apple.com/tr/app/yenehealth/id1673152108"
                            className="max-w-[131.64px] w-full h-[38.03px] relative"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Yenehealth app from the App Store"
                        >
                            <img src="https://yenehealth.com/icons/appstore.svg" alt="App store" className="w-[105.17px] h-[30.42px] relative" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile banner + help section */}
            <div
                className="md:hidden border-b border-[#E28075]"
                style={{
                    background: `
        linear-gradient(
            180deg,
            #fff 0%,
            #fff 20%,
            rgba(226,128,117,0.25) 25%,
            rgba(226,128,117,0.65) 45%,
            rgba(226,128,117,1) 70%,
            rgba(226,128,117,0.95) 85%,
            rgba(226,128,117,0.4) 95%,
            #fff 100%
        )
    `,
                }}
            >
                {/* Mobile banner */}
                <div id="home-banner" className="w-full h-[500px]">
                    <div className="w-full relative h-full flex justify-center">
                        <img
                            src="https://yenehealth.com/images/front-mobile-home-banner-mob1.png"
                            className="absolute sm:left-[38%] xs:left-[30%] z-10 top-0 w-[230px] h-[350px]"
                            alt="yene health app"
                            style={{ transform: 'scale(1.1)' }}
                        />

                        <img
                            src="https://yenehealth.com/images/back-mobile-home-banner-mob.png"
                            className="absolute w-[204px] h-[244px] top-[95px] left-[2%]"
                            alt="yene health app"
                        />

                        <div className="absolute bottom-2 flex flex-col gap-3 justify-center items-center">
                            <h3 className="text-center text-white text-xl font-bold leading-relaxed break-words">
                                Download our all new
                                <br />
                                Yenehealth app
                            </h3>

                            <div className="w-[274.09px] h-[38.03px] justify-start items-start gap-[11px] inline-flex">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.yenehealth.app&hl=am&gl=US"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://yenehealth.com/icons/googleplay.svg"
                                        alt="Google play store"
                                    />
                                </a>

                                <a
                                    href="https://apps.apple.com/tr/app/yenehealth/id1673152108"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://yenehealth.com/icons/appstore.svg"
                                        alt="App store"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile help section */}
                <div className="w-full h-[189px] px-[73px] mt-[-10px]  flex-col justify-center items-center gap-[11px] flex">
                    <div className="text-center text-white text-xl font-normal leading-relaxed">
                        Help make our app better
                    </div>

                    <a
                        aria-label="Learn more about Yenehealth"
                        className="max-w-[151px] w-full h-12 px-8 py-2.5 rounded justify-center items-center gap-2.5 inline-flex"
                        style={{ backgroundColor: SECONDARY }}
                        href="/about-us"
                    >
                        <span className="sr-only">Learn more about Yenehealth</span>

                        <button
                            type="button"
                            className="text-center text-white text-base font-medium leading-[18px] whitespace-nowrap"
                        >
                            Learn More
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
