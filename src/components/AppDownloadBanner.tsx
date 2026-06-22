const PRIMARY = "#E17A6E"
const SECONDARY = "#4A8C8A"

function StoreBadge({ store }: { store: "google" | "apple" }) {
    return (
        <img
            src={
                store === "google"
                    ? "https://yenehealth.com/icons/googleplay.svg"
                    : "https://yenehealth.com/icons/appstore.svg"
            }
            alt={store === "google" ? "Get it on Google Play" : "Download on the App Store"}
            className="h-[45px] md:h-[50px] w-auto object-contain hover:opacity-90 transition-opacity cursor-pointer"
        />
    )
}

export default function AppDownloadBanner() {
    return (
        <section className="w-full bg-gradient-to-b from-white via-[#FFE5E5] to-[#E17A6E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                {/* Phone mockups */}
                <div className="relative w-full flex items-center justify-center mb-12 md:mb-16 h-[280px] md:h-[350px]">
                    {/* Back phone (left) */}
                    <div className="absolute left-[15%] md:left-[30%] top-0 transform -rotate-12 z-10">
                        <img
                            src="https://yenehealth.com/images/back-mobile-home-banner-mob.png"
                            alt="YeneHealth App Screenshot"
                            className="w-[140px] md:w-[180px] lg:w-[200px] h-auto object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* Front phone (right) */}
                    <div className="absolute right-[15%] md:right-[30%] top-8 md:top-12 transform rotate-12 z-20">
                        <img
                            src="https://yenehealth.com/images/front-mobile-home-banner-mob1.png"
                            alt="YeneHealth App Screenshot"
                            className="w-[140px] md:w-[180px] lg:w-[200px] h-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="text-center flex flex-col items-center gap-6 md:gap-8">
                    {/* Heading */}
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                        Download our all new
                        <br />
                        Yenehealth app
                    </h2>

                    {/* App store badges */}
                    <div className="flex items-center justify-center gap-4 md:gap-6">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.yenehealth.app&hl=am&gl=US"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Yenehealth app from the Play Store"
                        >
                            <StoreBadge store="google" />
                        </a>

                        <a
                            href="https://apps.apple.com/tr/app/yenehealth/id1673152108"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Yenehealth app from the App Store"
                        >
                            <StoreBadge store="apple" />
                        </a>
                    </div>

                    {/* Help section */}
                    <div className="mt-8 md:mt-12 flex flex-col items-center gap-4">
                        <p className="text-white/90 text-lg md:text-xl font-medium">
                            Help make our app better
                        </p>

                        <a
                            href="/connect-with-us"
                            aria-label="Learn more about Yenehealth"
                            className="px-8 py-3 rounded-lg text-white font-semibold text-base md:text-lg transition-all hover:scale-105 hover:shadow-lg"
                            style={{ backgroundColor: SECONDARY }}
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
