import { useState, useEffect } from "react"
import { Heart, ShoppingCart, Eye, ChevronLeft, ChevronRight } from "lucide-react"

const PRIMARY = "#E17A6E"
const SECONDARY = "#3498db"

type Banner = {
    title: string
    href: string
    eyebrow: string
    heading: string
    highlight: string
    copy: string
    image: string
}

const banners: Banner[] = [
    {
        title: "Dear June",
        href: "/telehealth",
        eyebrow: "",
        heading: "Dear",
        highlight: "June",
        copy: "A telehealth check-in, just for you.",
        image: "https://supertal-bucket.s3.amazonaws.com/banner/c7481fa8-6735-5ee5-ba69-896cc51f3ae4-banner.jpg",
    },
    {
        title: "Discount Alert",
        href: "/product-details/natures-bounty",
        eyebrow: "",
        heading: "Discount",
        highlight: "Alert",
        copy: "Treat yourself to a glow-up. Beauty starts from within!",
        image: "https://supertal-bucket.s3.amazonaws.com/banner/a104589c-b596-5973-a756-0ee75cb15ca0-banner.jpg",
    },
    {
        title: "Baby Formula",
        href: "/product-details/gaullac",
        eyebrow: "",
        heading: "Baby",
        highlight: "Formula",
        copy: "Trusted nutrition for your little one.",
        image: "https://supertal-bucket.s3.amazonaws.com/banner/ef1ee05c-92c4-516b-a39e-a5953230d7e2-banner.jpg",
    },
    {
        title: "Tilla",
        href: "/search-results?q=tilla",
        eyebrow: "",
        heading: "Meet",
        highlight: "Tilla",
        copy: "Everything you need, all in one search.",
        image: "https://supertal-bucket.s3.amazonaws.com/banner/f94102d7-e3bc-52f6-80c8-2cb3160bc224-4.jpg",
    },
]

type Product = {
    category: string
    name: string
    price: string
    oldPrice?: string
    discount?: string
    href: string
    image: string
}

const products: Product[] = [
    {
        category: "Vitamins and Supplements",
        name: "Natures Bounty Hair, Skin and Nails Biotin Gummie",
        price: "3,000",
        oldPrice: "3,500",
        discount: "14% Off",
        href: "/product-details/natures-bounty/6500",
        image: "https://supertal-bucket.s3.us-east-1.amazonaws.com/product_variant_image/728ed946-2eb3-5337-a82d-29dd670428b6-2026Y.png",
    },
    {
        category: "Mommy & Baby",
        name: "Gaullac 1 Infant Formula",
        price: "1,000",
        href: "/product-details/gaullac-1/6486",
        image: "https://supertal-bucket.s3.us-east-1.amazonaws.com/product_variant_image/f3cd9946-cdf4-5560-a9a6-3ebe0f7f4bf4-5.png",
    },
    {
        category: "Mommy & Baby",
        name: "Gaullac 2 Follow-On Formula",
        price: "1,000",
        href: "/product-details/gaullac-2/6487",
        image: "https://supertal-bucket.s3.us-east-1.amazonaws.com/product_variant_image/70afa35d-8afb-5a66-9ca1-af8c62e76003-6.png",
    },
    {
        category: "Over The Counter",
        name: "Equate Cold & Flu Nighttime Softgels",
        price: "2,880",
        href: "/product-details/equate-cold-flu/6456",
        image: "https://supertal-bucket.s3.us-east-1.amazonaws.com/product_variant_image/0d68d14e-21be-57e5-84fc-dd314ad48bc9-71.png",
    },
    {
        category: "Cough Cold and Flu",
        name: "Equate Children's Ibuprofen Oral Suspension",
        price: "1,500",
        href: "/product-details/equate-ibuprofen/6424",
        image: "https://supertal-bucket.s3.us-east-1.amazonaws.com/product_variant_image/2f20e1d1-8a2b-53d6-b185-bf4382abf06c-2026Y.png",
    },
]

type Article = {
    title: string
    excerpt: string
    href: string
    image: string
}

const articles: Article[] = [
    {
        title: "Premature Menopause: Why Does it Happen and How Do You Prevent It?",
        excerpt: "Even though the right age of menopause is around 50, it can happen below the age of 40.",
        href: "/read/premature-menopause",
        image: "https://supertal-bucket.s3.us-east-1.amazonaws.com/media/premature-menopause-1713709423695.webp",
    },
    {
        title: "Can a Strict Diet Really Fix Hormonal Imbalance?",
        excerpt: "Feeling hormonal? You're not alone. But what if the answer wasn't some crazy workout or diet?",
        href: "/read/strict-diet-hormonal-imbalance",
        image: "https://supertal-bucket.s3.us-east-1.amazonaws.com/media/can-a-strict-diet-really-fix-hormonal-imbalance--1718356865273.webp",
    },
    {
        title: "Empowered Aging: Key Exercises, Supplements, and Understanding Hormones",
        excerpt: "Embrace the aging process with confidence with the right info on hormones.",
        href: "/read/empowered-aging",
        image: "https://supertal-bucket.s3.us-east-1.amazonaws.com/media/empowered-aging-key-exercises-supplements-and-understanding-hormones-1718734850854.webp",
    },
    {
        title: "Key Health Checks Every Woman Needs: From Young Adults to Seniors",
        excerpt: "From young adults to seniors, here are the key health checks every woman needs.",
        href: "/read/key-health-checks-every-woman-needs",
        image: "https://supertal-bucket.s3.us-east-1.amazonaws.com/media/key-health-checks-every-woman-needs-1720444780204.webp",
    },
]

export default function Hero() {
    const [activeBanner, setActiveBanner] = useState(0)

    const nextBanner = () => setActiveBanner((i) => (i + 1) % banners.length)
    const prevBanner = () => setActiveBanner((i) => (i - 1 + banners.length) % banners.length)

    // Auto-cycle banners every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            nextBanner()
        }, 5000) // 1 second

        return () => clearInterval(interval)
    }, [])

    const current = banners[activeBanner]

    return (
        <section className="w-full grid md:grid-cols-12 gap-4 px-2 md:px-4 py-4 bg-[#f8f8f8ff]">
            {/* Left: banner carousel + quick links */}
            <div className="md:col-span-5 flex flex-col gap-4">
                <div
                    className="relative w-full rounded-2xl shadow overflow-hidden h-[80vh] flex flex-col justify-between p-8 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${current.image})`,
                    }}
                >


                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {banners.map((b, i) => (
                            <button
                                key={b.title}
                                type="button"
                                aria-label={`Go to ${b.title}`}
                                onClick={() => setActiveBanner(i)}
                                className="h-[16px] rounded-full transition-all duration-300"
                                style={{
                                    width: i === activeBanner ? 48 : 24,
                                    backgroundColor: i === activeBanner ? SECONDARY : "#ffffffaa",
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Quick link pills */}
                <div className="grid grid-cols-4 gap-2">
                    {banners.map((b, i) => (
                        <button
                            key={b.title}
                            type="button"
                            onClick={() => setActiveBanner(i)}
                            title={b.title}
                            className="rounded-xl px-2 py-2 text-xs font-semibold border truncate transition-all duration-200"
                            style={
                                i === activeBanner
                                    ? {
                                        backgroundColor: SECONDARY,
                                        color: "#fff",
                                        borderColor: SECONDARY,
                                    }
                                    : {
                                        backgroundColor: "transparent",
                                        color: SECONDARY,
                                        borderColor: SECONDARY,
                                    }
                            }
                            onMouseEnter={(e) => {
                                if (i !== activeBanner) {
                                    e.currentTarget.style.backgroundColor = PRIMARY
                                    e.currentTarget.style.borderColor = SECONDARY
                                    e.currentTarget.style.color = "#fff"
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (i !== activeBanner) {
                                    e.currentTarget.style.backgroundColor = "transparent"
                                    e.currentTarget.style.borderColor = SECONDARY
                                    e.currentTarget.style.color = SECONDARY
                                }
                            }}
                        >
                            {b.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right: featured products + featured learning */}
            <div className="md:col-span-7 flex flex-col gap-4">
                {/* Featured Products */}
                <div className="bg-white rounded-2xl shadow p-4">
                    <h2 className="text-sm font-semibold text-[#0f0f0f] mb-3">Featured Products</h2>
                    <div className="flex gap-3 overflow-x-auto pb-1">
                        {products.map((p) => (
                            <div
                                key={p.name}
                                className="group flex-shrink-0 w-[170px] bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden flex flex-col transition-all"
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                                        style={{
                                            backgroundImage: `url(${p.image})`,
                                        }}
                                    />

                                    {p.discount && (
                                        <span
                                            className="absolute top-2 left-2 z-10 text-[9px] font-bold uppercase tracking-wide text-white px-2 py-1 rounded-md"
                                            style={{ backgroundColor: SECONDARY }}
                                        >
                                            {p.discount}
                                        </span>
                                    )}

                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                        <button
                                            type="button"
                                            className="bg-white/90 text-gray-800 text-[9px] font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1 hover:text-white"
                                            style={{ ["--hover-bg" as any]: SECONDARY }}
                                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = SECONDARY)}
                                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                                        >
                                            <Eye size={12} />
                                            Quick View
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col flex-grow p-2.5">
                                    <a
                                        href={p.href}
                                        className="text-[9px] text-gray-400 font-medium uppercase tracking-wide truncate block mb-0.5"
                                    >
                                        {p.category}
                                    </a>
                                    <a href={p.href} className="block mb-1">
                                        <h3 className="text-xs font-bold text-gray-800 line-clamp-2 min-h-[28px] leading-snug">
                                            {p.name}
                                        </h3>
                                    </a>
                                    <div className="flex items-baseline gap-1.5 mt-auto mb-1.5">
                                        <span className="text-sm font-bold text-gray-900">
                                            {p.price} <span className="text-[10px] font-normal text-gray-500">ETB</span>
                                        </span>
                                        {p.oldPrice && (
                                            <span className="text-[10px] text-gray-400 line-through">{p.oldPrice}</span>
                                        )}
                                    </div>
                                    <div className="flex gap-2 h-8">
                                        <button
                                            type="button"
                                            aria-label="Add to wishlist"
                                            className="w-9 flex-shrink-0 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#ED887C] transition-colors"
                                        >
                                            <Heart size={14} className="text-gray-400" />
                                        </button>
                                        <button
                                            type="button"
                                            className="flex-grow rounded-lg flex items-center justify-center gap-1.5 font-semibold text-[10px] text-white transition-colors"
                                            style={{ backgroundColor: PRIMARY }}
                                        >
                                            <ShoppingCart size={12} />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured In Learning */}
                <div className="bg-white rounded-2xl shadow p-4">
                    <h2 className="text-sm font-semibold text-[#0f0f0f] mb-3">Featured In Learning</h2>
                    <div className="flex gap-3 overflow-x-auto pb-1">
                        {articles.map((a) => (
                            <a
                                key={a.title}
                                href={a.href}
                                className="flex-shrink-0 w-[260px] rounded-xl border overflow-hidden hover:shadow-md transition-shadow"
                                style={{ borderColor: SECONDARY }}
                            >
                                <div
                                    className="h-32 w-full bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(${a.image})`,
                                    }}
                                />
                                <div className="p-3">
                                    <h3 className="text-sm font-semibold text-[#1d2a38] leading-snug line-clamp-2 mb-1">
                                        {a.title}
                                    </h3>
                                    <p className="text-xs text-[#7d879c] line-clamp-2">
                                        {a.excerpt}{" "}
                                        <span className="underline" style={{ color: SECONDARY }}>
                                            Read more
                                        </span>
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}