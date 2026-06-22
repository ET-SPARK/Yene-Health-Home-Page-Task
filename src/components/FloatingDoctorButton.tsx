import { useState, useEffect } from "react"
import { Stethoscope } from "lucide-react"

const PRIMARY = "#4A8C8A"

export default function FloatingDoctorButton() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [nextTextIndex, setNextTextIndex] = useState(1)
    const [isAnimating, setIsAnimating] = useState(false)
    const [showNext, setShowNext] = useState(false)
    const [pulseScale1, setPulseScale1] = useState(1)
    const [pulseScale2, setPulseScale2] = useState(1)
    const [iconBounce, setIconBounce] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    const textOptions = ["See a Doctor Now", "Doctors are Online"]

    // Text rotation effect with animation trigger
    useEffect(() => {
        const interval = setInterval(() => {
            // Phase 1: Start fade out and immediately trigger next text
            setIsAnimating(true)
            setShowNext(true) // Start next text immediately

            // Phase 2: Update indices and reset after animation
            setTimeout(() => {
                setCurrentTextIndex((prev) => (prev + 1) % textOptions.length)
                setNextTextIndex((prev) => (prev + 1) % textOptions.length)
                setIsAnimating(false)
                setShowNext(false)
            }, 600) // 600ms slide animation
        }, 4000) // 4 seconds between cycles
        return () => clearInterval(interval)
    }, [])

    // Continuous pulse animations
    useEffect(() => {
        const animateGlow = () => {
            const time = Date.now()
            setPulseScale1(1 + Math.sin(time * 0.002) * 0.05)
            setPulseScale2(1 + Math.sin(time * 0.003) * 0.08)
            setIconBounce(Math.sin(time * 0.004) * 0.5)
        }

        const interval = setInterval(animateGlow, 16) // ~60fps
        return () => clearInterval(interval)
    }, [])

    // Hide button when footer is in view
    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer')
            if (footer) {
                const footerRect = footer.getBoundingClientRect()
                const windowHeight = window.innerHeight

                // Hide button if footer is visible in viewport
                if (footerRect.top < windowHeight) {
                    setIsVisible(false)
                } else {
                    setIsVisible(true)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check initial state

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className="fixed right-6 bottom-10 z-50 transition-all duration-300"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(20px)',
                pointerEvents: isVisible ? 'auto' : 'none'
            }}
        >
            <div className="relative">
                <div className="relative" tabIndex={0} style={{ transform: 'none' }}>
                    {/* Outer blur glow */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-4 rounded-full"
                        style={{
                            backgroundColor: PRIMARY,
                            filter: 'blur(20px)',
                            transform: `scale(${pulseScale1})`,
                            transition: 'transform 0.3s ease-out'
                        }}
                    />

                    {/* Inner blur glow */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-2 rounded-full"
                        style={{
                            backgroundColor: PRIMARY,
                            filter: 'blur(12px)',
                            transform: `scale(${pulseScale2})`,
                            transition: 'transform 0.3s ease-out'
                        }}
                    />

                    {/* Main button */}
                    <a
                        href="/telehealth"
                        className="relative flex items-center justify-center rounded-full transition-all hover:scale-105"
                        style={{
                            backgroundColor: PRIMARY,
                            borderColor: PRIMARY,
                            color: '#fff',
                            padding: '12px 20px',
                            fontWeight: 400,
                        }}
                    >
                        <span className="relative z-10 inline-flex items-center gap-2">
                            {/* Icon */}
                            <Stethoscope
                                className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0"
                                strokeWidth={2}
                                style={{
                                    transform: `translateY(${iconBounce}px)`,
                                    transition: 'transform 0.1s ease-out'
                                }}
                            />

                            {/* Text container with overflow hidden for slide animation */}
                            <span className="relative overflow-hidden inline-block" style={{ height: '1.5rem', width: '160px' }}>
                                {/* Current text - fades out and slides up */}
                                {!isAnimating && (
                                    <span
                                        className="absolute left-0 text-sm md:text-base font-semibold text-white whitespace-nowrap"
                                        style={{
                                            transform: 'translateY(0)',
                                            opacity: 1,
                                            transition: 'transform 600ms ease-in-out, opacity 300ms ease-in-out'
                                        }}
                                    >
                                        {textOptions[currentTextIndex]}
                                    </span>
                                )}

                                {/* Fading out text - slides up like credits */}
                                {isAnimating && !showNext && (
                                    <span
                                        className="absolute left-0 text-sm md:text-base font-semibold text-white whitespace-nowrap"
                                        style={{
                                            transform: 'translateY(-100%)',
                                            opacity: 0,
                                            transition: 'transform 600ms ease-in-out, opacity 300ms ease-in-out'
                                        }}
                                    >
                                        {textOptions[currentTextIndex]}
                                    </span>
                                )}

                                {/* Next text - slides up from bottom like movie credits */}
                                {showNext && (
                                    <span
                                        className="absolute left-0 text-sm md:text-base font-semibold text-white whitespace-nowrap"
                                        style={{
                                            transform: 'translateY(0)',
                                            opacity: 1,
                                            transition: 'transform 600ms ease-in-out, opacity 600ms ease-in-out'
                                        }}
                                    >
                                        {textOptions[nextTextIndex]}
                                    </span>
                                )}

                                {/* Starting position for next text */}
                                {showNext === false && isAnimating && (
                                    <span
                                        className="absolute left-0 text-sm md:text-base font-semibold text-white whitespace-nowrap"
                                        style={{
                                            transform: 'translateY(100%)',
                                            opacity: 0,
                                            transition: 'none'
                                        }}
                                    >
                                        {textOptions[nextTextIndex]}
                                    </span>
                                )}
                            </span>
                        </span>

                        {/* White overlay */}
                        <span
                            className="absolute inset-0 rounded-full pointer-events-none"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
