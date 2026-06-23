"use client"

import { useState, useEffect, type FormEvent } from "react"
import { ArrowRight, Send, ArrowUp } from "lucide-react"

const PRIMARY = "#E17A6E"
const TEAL_SOCIAL = "#489497"


// lucide-react no longer ships brand/social icons, so these are inline SVGs
function FacebookIcon({ size = 26, color = TEAL_SOCIAL }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.25 12.5H20V16.25H16.25V25H12.5V16.25H8.75V12.5H12.5V10.9312C12.5 9.445 12.9675 7.5675 13.8975 6.54125C14.8275 5.5125 15.9888 5 17.38 5H20V8.75H17.375C16.7525 8.75 16.25 9.2525 16.25 9.87375V12.5Z"
                fill={color}
            />
        </svg>
    )
}

function TwitterIcon({ size = 26, color = TEAL_SOCIAL }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.26687 2.5C4.01119 2.5 2.99414 3.51705 2.99414 4.77273V25.2273C2.99414 26.483 4.01119 27.5 5.26687 27.5H25.7214C26.9771 27.5 27.9941 26.483 27.9941 25.2273V4.77273C27.9941 3.51705 26.9771 2.5 25.7214 2.5H5.26687ZM8.27646 8.18182H13.5166L16.575 12.5542L20.3592 8.18182H22.0083L17.3163 13.6151L23.0558 21.8182H17.8157L14.4221 16.9664L10.2318 21.8182H8.55611L13.6764 15.9033L8.27646 8.18182ZM10.8111 9.52681L18.486 20.4665H20.519L12.8419 9.52681H10.8111Z"
                fill={color}
            />
        </svg>
    )
}

function YoutubeIcon({ size = 26, color = TEAL_SOCIAL }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M29.8035 8.71816C29.8035 6.08144 27.864 3.96035 25.4675 3.96035C22.2215 3.80859 18.9109 3.75 15.5277 3.75H14.473C11.098 3.75 7.78161 3.80859 4.53551 3.96094C2.14489 3.96094 0.205434 6.09375 0.205434 8.73047C0.0589501 10.8158 -0.00315931 12.9018 0.000356313 14.9877C-0.00550306 17.0736 0.0609032 19.1615 0.199575 21.2514C0.199575 23.8881 2.13903 26.0268 4.52965 26.0268C7.93981 26.185 11.4379 26.2553 14.9945 26.2494C18.557 26.2611 22.0453 26.1869 25.4593 26.0268C27.8558 26.0268 29.7953 23.8881 29.7953 21.2514C29.9359 19.1596 30.0004 17.0736 29.9945 14.9818C30.0078 12.8959 29.9441 10.808 29.8035 8.71816ZM12.1293 20.7357V9.22207L20.6254 14.976L12.1293 20.7357Z"
                fill={color}
            />
        </svg>
    )
}

function InstagramIcon({ size = 26, color = TEAL_SOCIAL }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.2847 2.5C17.691 2.50375 18.4047 2.51125 19.021 2.52875L19.2635 2.5375C19.5435 2.5475 19.8197 2.56 20.1535 2.575C21.4835 2.6375 22.391 2.8475 23.1872 3.15625C24.0122 3.47375 24.7072 3.90375 25.4022 4.5975C26.0379 5.22237 26.5297 5.97824 26.8435 6.8125C27.1522 7.60875 27.3622 8.51625 27.4247 9.8475C27.4397 10.18 27.4522 10.4563 27.4622 10.7375L27.4697 10.98C27.4885 11.595 27.496 12.3088 27.4985 13.715L27.4997 14.6475V16.285C27.5028 17.1968 27.4932 18.1085 27.471 19.02L27.4635 19.2625C27.4535 19.5437 27.441 19.82 27.426 20.1525C27.3635 21.4837 27.151 22.39 26.8435 23.1875C26.5306 24.0222 26.0386 24.7783 25.4022 25.4025C24.7772 26.0379 24.0214 26.5297 23.1872 26.8438C22.391 27.1525 21.4835 27.3625 20.1535 27.425C19.8569 27.439 19.5602 27.4515 19.2635 27.4625L19.021 27.47C18.4047 27.4875 17.691 27.4963 16.2847 27.4988L15.3522 27.5H13.716C12.8038 27.5031 11.8917 27.4936 10.9797 27.4712L10.7372 27.4638C10.4405 27.4525 10.1438 27.4396 9.84724 27.425C8.51724 27.3625 7.60974 27.1525 6.81224 26.8438C5.97808 26.5305 5.22252 26.0386 4.59849 25.4025C3.9623 24.7779 3.47002 24.0219 3.15599 23.1875C2.84724 22.3912 2.63724 21.4837 2.57474 20.1525C2.56082 19.8559 2.54832 19.5592 2.53724 19.2625L2.53099 19.02C2.50796 18.1085 2.49754 17.1968 2.49974 16.285V13.715C2.49626 12.8033 2.50542 11.8915 2.52724 10.98L2.53599 10.7375C2.54599 10.4563 2.55849 10.18 2.57349 9.8475C2.63599 8.51625 2.84599 7.61 3.15474 6.8125C3.46864 5.97738 3.9619 5.22128 4.59974 4.5975C5.22361 3.96184 5.97867 3.46998 6.81224 3.15625C7.60974 2.8475 8.51599 2.6375 9.84724 2.575C10.1797 2.56 10.4572 2.5475 10.7372 2.5375L10.9797 2.53C11.8912 2.50779 12.803 2.49821 13.7147 2.50125L16.2847 2.5ZM14.9997 8.75C13.3421 8.75 11.7524 9.40848 10.5803 10.5806C9.40823 11.7527 8.74974 13.3424 8.74974 15C8.74974 16.6576 9.40823 18.2473 10.5803 19.4194C11.7524 20.5915 13.3421 21.25 14.9997 21.25C16.6573 21.25 18.2471 20.5915 19.4192 19.4194C20.5913 18.2473 21.2497 16.6576 21.2497 15C21.2497 13.3424 20.5913 11.7527 19.4192 10.5806C18.2471 9.40848 16.6573 8.75 14.9997 8.75ZM14.9997 11.25C15.4922 11.2499 15.9799 11.3468 16.4349 11.5352C16.8899 11.7236 17.3033 11.9997 17.6516 12.3479C17.9999 12.6961 18.2761 13.1094 18.4647 13.5644C18.6532 14.0193 18.7503 14.5069 18.7504 14.9994C18.7505 15.4918 18.6535 15.9795 18.4652 16.4345C18.2768 16.8895 18.0006 17.3029 17.6525 17.6512C17.3043 17.9995 16.891 18.2758 16.436 18.4643C15.9811 18.6528 15.4935 18.7499 15.001 18.75C14.0064 18.75 13.0526 18.3549 12.3493 17.6517C11.6461 16.9484 11.251 15.9946 11.251 15C11.251 14.0054 11.6461 13.0516 12.3493 12.3483C13.0526 11.6451 14.0064 11.25 15.001 11.25M21.5635 6.875C21.1491 6.875 20.7517 7.03962 20.4586 7.33265C20.1656 7.62567 20.001 8.0231 20.001 8.4375C20.001 8.8519 20.1656 9.24933 20.4586 9.54235C20.7517 9.83538 21.1491 10 21.5635 10C21.9779 10 22.3753 9.83538 22.6684 9.54235C22.9614 9.24933 23.126 8.8519 23.126 8.4375C23.126 8.0231 22.9614 7.62567 22.6684 7.33265C22.3753 7.03962 21.9779 6.875 21.5635 6.875Z"
                fill={color}
            />
        </svg>
    )
}

function LinkedinIcon({ size = 26, color = TEAL_SOCIAL }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M23.75 3.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75ZM23.125 23.125V16.5C23.125 15.4192 22.6957 14.3828 21.9315 13.6185C21.1672 12.8543 20.1308 12.425 19.05 12.425C17.9875 12.425 16.75 13.075 16.15 14.05V12.6625H12.6625V23.125H16.15V16.9625C16.15 16 16.925 15.2125 17.8875 15.2125C18.3516 15.2125 18.7967 15.3969 19.1249 15.7251C19.4531 16.0533 19.6375 16.4984 19.6375 16.9625V23.125H23.125ZM8.6 10.7C9.15695 10.7 9.6911 10.4788 10.0849 10.0849C10.4788 9.6911 10.7 9.15695 10.7 8.6C10.7 7.4375 9.7625 6.4875 8.6 6.4875C8.03973 6.4875 7.50241 6.71007 7.10624 7.10624C6.71007 7.50241 6.4875 8.03973 6.4875 8.6C6.4875 9.7625 7.4375 10.7 8.6 10.7ZM10.3375 23.125V12.6625H6.875V23.125H10.3375Z"
                fill={color}
            />
        </svg>
    )
}

function TelegramIcon({ size = 26, color = TEAL_SOCIAL }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M25.8875 4.56814C25.8875 4.56814 28.3156 3.62126 28.1125 5.92064C28.0456 6.86751 27.4388 10.1819 26.9663 13.7663L25.3475 24.385C25.3475 24.385 25.2125 25.9406 23.9981 26.2113C22.7844 26.4813 20.9631 25.2644 20.6256 24.9938C20.3556 24.7906 15.5669 21.7469 13.8806 20.2594C13.4081 19.8531 12.8681 19.0419 13.9481 18.095L21.0306 11.3313C21.84 10.5188 22.6494 8.62501 19.2769 10.925L9.83313 17.35C9.83313 17.35 8.75375 18.0269 6.73063 17.4181L2.34563 16.065C2.34563 16.065 0.726876 15.0506 3.4925 14.0363C10.2381 10.8575 18.535 7.61126 25.8869 4.56751"
                fill={color}
            />
        </svg>
    )
}

const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/yenehealth/", Icon: FacebookIcon },
    { label: "Twitter", href: "https://twitter.com/YeneHealth", Icon: TwitterIcon },
    { label: "YouTube", href: "https://youtube.com/channel/UCFwoNjdg9crbJxh4ezvm3KQ", Icon: YoutubeIcon },
    { label: "Instagram", href: "https://www.instagram.com/yenehealth/?utm_medium=copy_link", Icon: InstagramIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/70435034/", Icon: LinkedinIcon },
    { label: "Telegram", href: "https://t.me/+dMnhM2SHWUE1ZDU0", Icon: TelegramIcon },
]

const footerColumns = [
    [
        { label: "About Us", href: "/about-us" },
        { label: "Our Services", href: "/services" },
        { label: "Contact Us", href: "/connect-with-us" },
        { label: "News", href: "/news" },
        { label: "Newsletter", href: "https://erp.yenehealth.com/newsletters/" },
    ],
    [
        { label: "Learn", href: "/learn" },
        { label: "FAQ", href: "/user-dashboard/settings?modal=faq" },
        { label: "Careers", href: "https://erp.yenehealth.com/jobs" },
        { label: "Terms & Conditions", href: "/user-dashboard/settings?modal=terms-of-service" },
        { label: "Return and refund policy", href: "/user-dashboard/settings?modal=return-refund-policy" },
    ],
]

export default function Footer() {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [isAtFooter, setIsAtFooter] = useState(false)
    const [showScrollButton, setShowScrollButton] = useState(true)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!email) return
        // wire this up to your real newsletter endpoint
        setSubmitted(true)
        setEmail("")
    }

    const handleScrollToTop = () => {
        setShowScrollButton(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })

        // Show button again after a delay (when user scrolls down again)
        setTimeout(() => {
            setShowScrollButton(true)
        }, 1000)
    }

    // Handle scroll to detect when footer is visible
    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('footer-section')
            if (!footer) return

            const footerRect = footer.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Check if footer is visible in viewport (at least 100px into view)
            setIsAtFooter(footerRect.top <= windowHeight - 100)

            // Show button when scrolled down, hide when at top
            if (window.scrollY > 300) {
                setShowScrollButton(true)
            } else {
                setShowScrollButton(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check initial state

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <footer id="footer-section" className="mt-auto w-full bg-white relative">
            {/* Scroll to Top Button - Sticky/Fixed */}
            {showScrollButton && (
                <button
                    onClick={handleScrollToTop}
                    className={`flex w-12 h-12 rounded-full items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 z-50 shadow-lg ${isAtFooter ? 'absolute bottom-16 right-4 md:right-8' : 'fixed bottom-8 right-4 md:right-8'
                        }`}
                    style={{ backgroundColor: PRIMARY }}
                    aria-label="Scroll to top"
                    title="Scroll to top"
                >
                    <ArrowUp size={22} className="text-white" />
                </button>
            )}
            {/* Desktop Layout */}
            <div className="hidden md:block">
                <div className="grid grid-cols-3 gap-8 px-[75px] py-12 bg-[#f8f8f8]">
                    {/* Newsletter Section */}
                    <div className="flex flex-col gap-4 bg-white p-6 rounded-[14px]">
                        <h3 className="text-gray-800 text-sm font-semibold leading-snug">
                            Stay informed, Get exclusive updates
                        </h3>
                        <p className="text-[#7d879c] text-xs">
                            Join 60,000+ Subscribers and get a new discount coupon on every week.
                        </p>

                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="flex items-center rounded-full bg-[#F2F2F2] w-full">
                                <input
                                    placeholder="Your email address"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="rounded-l-full border-none focus:outline-none h-[50px] bg-[#F2F2F2] flex-1 px-4 min-w-0 text-sm placeholder:text-gray-400"
                                />
                                <button
                                    title="Subscribe to our newsletter"
                                    type="submit"
                                    className="mr-1 text-white py-[3px] h-[48px] px-4 rounded-[30px] flex items-center gap-1 leading-[18px] tracking-wide text-xs font-semibold whitespace-nowrap shrink-0"
                                    style={{ backgroundColor: TEAL_SOCIAL }}
                                >
                                    SUBSCRIBE <ArrowRight size={14} />
                                </button>
                            </div>
                            {submitted && (
                                <p className="text-xs mt-2" style={{ color: PRIMARY }}>
                                    Thanks for subscribing!
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Telegram + Social + Contact Section */}
                    <div className="flex flex-col gap-4  items-center">
                        <div className="flex gap-2 items-center">
                            <Send size={18} style={{ color: "#4DA3DD" }} />
                            <a
                                className="font-semibold leading-relaxed text-xs"
                                style={{ color: "#4DA3DD" }}
                                href="https://t.me/yenehealth"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join our telegram channel
                            </a>
                        </div>

                        <div className="flex gap-4 py-4 flex-wrap justify-center">
                            {socialLinks.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    title={label}
                                    aria-label={`Visit YeneHealth on ${label}`}
                                    rel="noopener"
                                    target="_blank"
                                    href={href}
                                    className="hover:opacity-75 transition-opacity"
                                >
                                    <Icon size={22} color={PRIMARY} />
                                </a>
                            ))}
                        </div>


                        <a
                            title="Go to for investors page"
                            aria-label="Go to for investors page"
                            href="/for-investor"
                            className="inline-flex h-8 px-5 rounded-3xl justify-center items-center w-fit text-white text-xs font-semibold"
                            style={{ backgroundColor: PRIMARY }}
                        >
                            For Investors
                        </a>
                    </div>

                    {/* Navigation Links - Combined */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs text-gray-700 uppercase">
                        <nav className="flex flex-col gap-3">
                            {footerColumns[0].map((link) => (
                                <a
                                    key={link.label}
                                    aria-label={link.label}
                                    className="hover:opacity-80 transition-opacity"
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <nav className="flex flex-col gap-3">
                            {footerColumns[1].map((link) => (
                                <a
                                    key={link.label}
                                    aria-label={link.label}
                                    className="hover:opacity-80 transition-opacity"
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Desktop Bottom Bar */}
                <div
                    className="w-full h-[45px] flex items-center justify-between text-white text-xs px-[75px]"
                    style={{ backgroundColor: PRIMARY }}
                >
                    {/* Left: Contact Info */}
                    <div className="flex gap-4 items-center">
                        <a href="tel:+251906999111" className="hover:opacity-80 transition-opacity">
                            (+251) 90-699-9111
                        </a>
                        <a href="mailto:support@yenehealth.com" className="hover:opacity-80 transition-opacity">
                            support@yenehealth.com
                        </a>
                    </div>

                    {/* Right: Copyright */}
                    <p className="font-normal">
                        © 2026 – YeneHealth • All Rights Reserved •{" "}
                        <a
                            aria-label="Go to privacy policy page"
                            title="Go to privacy policy page"
                            className="hover:underline"
                            href="/user-dashboard/settings?modal=privacy-policy"
                        >
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
                <div className="bg-gray-100 px-6 py-8">
                    {/* Newsletter Section */}
                    <div className="flex flex-col gap-4 mb-8 bg-gray-100 p-6">
                        <h3 className="text-gray-800 text-md font-bold leading-snug text-center">
                            Stay informed, Get exclusive updates
                        </h3>
                        <p className="text-center text-[#7d879c] text-xs">
                            Join 60,000+ Subscribers and get a new discount coupon on every week.
                        </p>

                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="flex items-center rounded-full bg-white w-full">
                                <input
                                    placeholder="Your email address"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="rounded-l-full border-none focus:outline-none h-[50px] bg-white flex-1 px-4 min-w-0 text-sm placeholder:text-gray-400"
                                />
                                <button
                                    title="Subscribe to our newsletter"
                                    type="submit"
                                    className="mr-1 text-white py-[3px] h-[48px] px-4 rounded-[30px] flex items-center gap-1 leading-[18px] tracking-wide text-xs font-semibold whitespace-nowrap shrink-0"
                                    style={{ backgroundColor: TEAL_SOCIAL }}
                                >
                                    SUBSCRIBE <ArrowRight size={14} />
                                </button>
                            </div>
                            {submitted && (
                                <p className="text-xs mt-2 text-center" style={{ color: PRIMARY }}>
                                    Thanks for subscribing!
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* White background section */}
                <div className="bg-white px-6 py-8">

                    {/* Telegram Link */}
                    <div className="flex gap-2  items-center justify-center mb-6">
                        <Send size={18} style={{ color: "#4DA3DD" }} />
                        <a
                            className="font-semibold leading-relaxed text-xs"
                            style={{ color: "#4DA3DD" }}
                            href="https://t.me/yenehealth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Join our telegram channel
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 justify-center mb-6">
                        {socialLinks.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                title={label}
                                aria-label={`Visit YeneHealth on ${label}`}
                                rel="noopener"
                                target="_blank"
                                href={href}
                                className="hover:opacity-75 transition-opacity"
                            >
                                <Icon size={22} color={TEAL_SOCIAL} />
                            </a>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-3 items-center mb-6">
                        <a href="tel:+251906999111" className="text-xs" style={{ color: "#4DA3DD" }}>
                            (+251) 90-699-9111
                        </a>
                        <a className="text-xs text-gray-600" href="mailto:support@yenehealth.com">
                            support@yenehealth.com
                        </a>
                    </div>

                    {/* For Investors Button */}
                    <div className="flex justify-center mb-8">
                        <a
                            title="Go to for investors page"
                            aria-label="Go to for investors page"
                            href="/for-investor"
                            className="text-xs text-white py-2.5 rounded-3xl px-8 inline-flex items-center justify-center"
                            style={{ backgroundColor: PRIMARY }}
                        >
                            For Investors
                        </a>
                    </div>
                </div>

                {/* Mobile Navigation Links */}
                <div className="w-full" style={{ backgroundColor: PRIMARY }}>
                    <nav className="grid grid-cols-2 gap-x-8 gap-y-4 text-white text-center py-6 px-6 uppercase text-xs">
                        <div className="flex flex-col gap-4">
                            {footerColumns[0].map((link) => (
                                <a
                                    key={link.label}
                                    aria-label={link.label}
                                    className="hover:opacity-80 transition-opacity"
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4">
                            {footerColumns[1].map((link) => (
                                <a
                                    key={link.label}
                                    aria-label={link.label}
                                    className="hover:opacity-80 transition-opacity"
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Mobile Copyright */}
                    <div className="text-center text-xs text-white pb-4 px-4">
                        © 2026 – YeneHealth • All Rights Reserved •{" "}
                        <a
                            title="Privacy Policy"
                            className="underline"
                            href="/user-dashboard/settings?modal=privacy-policy"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}