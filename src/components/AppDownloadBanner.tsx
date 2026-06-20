const PRIMARY = "#E17A6E"
const SECONDARY = "#3498db"

function StoreBadge({ store }: { store: "google" | "apple" }) {
    return (
        <img
            src={
                store === "google"
                    ? "https://yenehealth.com/icons/googleplay.svg"
                    : "https://yenehealth.com/icons/appstore.svg"
            }
            alt={store === "google" ? "Google Play" : "App Store"}
            className="h-[50px] md:h-[56px] w-auto object-contain hover:opacity-90 transition-opacity"
        />
    )
}

export default function AppDownloadBanner() {
    return (
        <section className="w-full flex flex-col gap-8 bg-[#f8f8f8ff]">
            {/* Desktop banner */}
            <div
                className="hidden md:grid md:grid-cols-12 relative w-full h-[320px] 3xl:h-[400px] rounded-xl overflow-hidden px-[2%] 3xl:px-[4%]"
                style={{ backgroundColor: PRIMARY }}
            >
                {/* App screenshots */}
                <div className="col-span-7 relative w-full overflow-hidden">
                    <img
                        src="https://yenehealth.com/images/home-banner-amharic0.png"
                        alt="YeneHealth Amharic App"
                        className="absolute z-10 object-contain"
                        style={{
                            width: 230,
                            height: 460,
                            top: 30,
                            left: 60,
                        }}
                    />

                    <img
                        src="https://yenehealth.com/images/home-banner-englishu.svg"
                        alt="YeneHealth English App"
                        className="absolute z-0 object-contain"
                        style={{
                            width: 230,
                            height: 460,
                            top: 60,
                            left: 220,
                        }}
                    />
                </div>

                {/* Copy + store badges */}
                <div className="col-start-8 col-end-13 w-full flex flex-col items-center justify-center gap-8">
                    <h3 className="text-center text-white/80 text-3xl 3xl:text-5xl font-bold leading-tight break-words">
                        Download our all new
                        <br />
                        Yenehealth app
                    </h3>

                    <div className="flex items-start gap-[26px] opacity-90">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Yenehealth app from the Play Store"
                            href="https://play.google.com/store/apps/details?id=com.yenehealth.app&hl=am&gl=US"
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
                </div>
            </div>

            {/* Mobile banner */}
            <div
                className="md:hidden w-full h-[500px] relative flex justify-center overflow-hidden border-b"
                style={{
                    borderColor: "#E28075",
                    backgroundColor: PRIMARY,
                }}
            >
                <img
                    src="https://yenehealth.com/images/home-banner-amharic0.png"
                    alt="YeneHealth Amharic App"
                    className="absolute z-10 top-0 left-[30%] w-[230px] h-[350px] object-contain"
                />

                <img
                    src="https://yenehealth.com/images/home-banner-englishu.svg"
                    alt="YeneHealth English App"
                    className="absolute z-0 top-20 left-[10%] w-[204px] h-[244px] object-contain"
                />

                <div className="absolute bottom-4 flex flex-col gap-3 justify-center items-center px-4">
                    <h3 className="text-center text-zinc-100 text-xl font-bold leading-relaxed break-words">
                        Download our all new
                        <br />
                        Yenehealth app
                    </h3>

                    <div className="flex items-start gap-[11px]">
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
                </div>
            </div>

            {/* Mobile CTA */}
            <div
                className="md:hidden w-full h-[189px] px-[40px] -mt-8 border-t flex flex-col justify-center items-center gap-[11px]"
                style={{
                    borderColor: "#E28075",
                    backgroundColor: PRIMARY,
                }}
            >
                <div className="text-center text-white text-xl font-normal leading-relaxed">
                    Help make our app better
                </div>

                <a
                    aria-label="Learn more about Yenehealth"
                    className="max-w-[151px] w-full h-12 px-8 py-2.5 rounded flex justify-center items-center"
                    style={{ backgroundColor: SECONDARY }}
                    href="/about-us"
                >
                    <span className="text-center text-white text-base font-medium leading-[18px]">
                        Learn More
                    </span>
                </a>
            </div>

            {/* Desktop CTA */}
            <div className="w-full hidden md:block">
                <div
                    className="h-[50px] 3xl:h-[76px] flex gap-3 items-center justify-center px-5 py-[14px] rounded-xl"
                    style={{ backgroundColor: "#4A8C8A" }}
                >
                    <p className="text-center text-white text-[20px] 3xl:text-[25px] font-light w-full max-w-[400px] leading-[31.20px]">
                        Help make our app better
                    </p>

                    <a
                        aria-label="Connect with us"
                        className="max-w-[141px]"
                        href="/connect-with-us"
                    >
                        <button
                            type="button"
                            className="w-full text-white py-3 px-6 flex justify-center items-center rounded transition-opacity hover:opacity-90"
                            style={{ backgroundColor: SECONDARY }}
                        >
                            Learn More
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}