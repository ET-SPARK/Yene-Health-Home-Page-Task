import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown } from "lucide-react"
import logo from "@/assets/logo.svg"

const PRIMARY = "#e17a6e"
const SECONDARY = "#e1d1cfff"

const mainNavLinks = [
  { label: "Home", href: "/", current: true },
  { label: "Shop", href: "/pharmacy" },
  { label: "Learn", href: "/learn" },
  { label: "Doctors", href: "/" },
]

const topBarLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/services" },
  { label: "News", href: "/news" },
  { label: "Newsletter", href: "https://erp.yenehealth.com/newsletters/" },
  { label: "Contact Us", href: "/connect-with-us" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top utility bar */}
      <div
        className="hidden md:flex justify-end items-center w-full h-[42px] px-[30px]"
        style={{ backgroundColor: PRIMARY }}
      >
        <ul className="flex items-center gap-[28px] text-white text-sm">
          {topBarLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={`Go to ${link.label}`}
                className="font-normal leading-snug hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main desktop header */}
      <div className="hidden md:flex flex-col gap-5 items-center w-full bg-[#E7E7E7] py-2 px-[1%]">
        <div className="flex w-full items-center justify-between">
          {/* Logo + primary nav */}
          <div className="flex items-center gap-3">
            <a href="/" aria-label="Yene Health" className="flex items-center gap-3">
              <img src={logo} alt="Yene Health" className="h-[55px] w-[124px] rounded-md flex items-center justify-center text-white font-bold text-sm shrink-0" />

              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-[28px]">
                  {mainNavLinks.map((link) => (
                    <NavigationMenuItem key={link.label}>
                      <NavigationMenuLink
                        href={link.href}
                        aria-current={link.current ? "page" : undefined}
                        className={`text-[14px] font-medium rounded-[28px] px-3 py-2 transition-colors ${link.current
                          ? "text-white"
                          : "hover:text-[#E17A6E]"
                          }`}
                        style={{
                          color: link.current ? "#fff" : PRIMARY,
                          backgroundColor: link.current ? PRIMARY : "transparent",
                        }}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </a>
          </div>

          {/* Search bar */}
          <div className="w-[40%] max-w-[480px] mx-6">
            <div className="flex items-center rounded-full bg-white p-2 w-full border relative">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-l-full border-none focus:outline-none flex-1 text-black px-3 w-full bg-transparent"
              />
              <button
                type="button"
                className="text-sm px-3 py-1.5 transition-colors"
                style={{ color: SECONDARY }}
                title="Click to Filter"
              >
                Filter
              </button>
              <div className="border-l h-6 mx-1" />
              <button
                type="button"
                className="text-sm px-3 py-1.5 transition-colors"
                style={{ color: SECONDARY }}
                title="Click to Sort"
              >
                Sort
              </button>
              <button
                type="button"
                aria-label="Search"
                className="rounded-full text-white flex items-center justify-center shrink-0"
                style={{ backgroundColor: PRIMARY, width: 44, height: 44 }}
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Right cluster */}
          <ul className="flex items-center gap-4 text-sm font-medium">
            <li>
              <a
                href="https://marketplace.yenehealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[48px] px-4 py-2 text-white font-semibold inline-flex items-center justify-center"
                style={{ backgroundColor: PRIMARY }}
              >
                For Businesses
              </a>
            </li>

            <li className="relative">
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1 min-w-[90px]"
                style={{ color: PRIMARY }}
              >
                <span>English</span>
                <ChevronDown size={14} />
              </button>
              {langOpen && (
                <ul className="absolute right-0 mt-2 bg-white border rounded-md shadow-md py-1 w-28 text-black z-10">
                  {["English", "Amharic", "French"].map((lng) => (
                    <li
                      key={lng}
                      className="px-3 py-1.5 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => setLangOpen(false)}
                    >
                      {lng}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="cursor-pointer" style={{ color: PRIMARY }}>
              SIGN IN
            </li>

            <li className="cursor-pointer" style={{ color: PRIMARY }}>
              <Heart size={24} />
            </li>

            <li className="cursor-pointer" style={{ color: PRIMARY }}>
              <ShoppingCart size={24} />
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden flex justify-between items-center w-full px-[15px] py-3 bg-white">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="z-[120]"
            style={{ color: PRIMARY }}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          <a href="/" aria-label="Yene Health" title="Yene Health">
            <div
              className="h-[42px] w-28 rounded-md flex items-center justify-center text-white font-bold text-xs"
              style={{ backgroundColor: PRIMARY }}
            >
              Yene Health
            </div>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Search size={22} style={{ color: PRIMARY }} />
          <Heart size={22} style={{ color: PRIMARY }} />
          <ShoppingCart size={22} style={{ color: PRIMARY }} />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-[15px] py-4 flex flex-col gap-3">
          {mainNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: link.current ? SECONDARY : PRIMARY }}
            >
              {link.label}
            </a>
          ))}
          <div className="border-t my-2" />
          {topBarLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-gray-700">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}