import { useState, useEffect } from "react"
import { Stethoscope } from "lucide-react"

const PRIMARY = "#E17A6E"

export default function FloatingDoctorButton() {
    const [doctorText, setDoctorText] = useState("Doctor")
    const [isGlowing, setIsGlowing] = useState(false)

    const doctorTypes = ["Doctor", "Specialist", "Physician", "Consultant", "Expert"]

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlowing(true)
            setTimeout(() => {
                setDoctorText((prev) => {
                    const currentIndex = doctorTypes.indexOf(prev)
                    return doctorTypes[(currentIndex + 1) % doctorTypes.length]
                })
                setTimeout(() => setIsGlowing(false), 300)
            }, 200)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <a
            href="/telehealth"
            className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            style={{
                backgroundColor: PRIMARY,
                boxShadow: isGlowing
                    ? `0 0 20px ${PRIMARY}, 0 0 40px ${PRIMARY}80`
                    : '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Stethoscope
                size={20}
                className="text-white animate-pulse"
                strokeWidth={2.5}
            />
            <span className="text-white font-semibold text-sm whitespace-nowrap">
                See a{" "}
                <span
                    className="transition-all duration-300"
                    style={{
                        color: isGlowing ? '#fff' : '#fff',
                        textShadow: isGlowing ? '0 0 10px rgba(255,255,255,0.8)' : 'none',
                    }}
                >
                    {doctorText}
                </span>
                {" "}Now
            </span>
        </a>
    )
}
