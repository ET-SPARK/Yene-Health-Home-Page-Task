import { useState, useEffect } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown } from "lucide-react"
import logo from "@/assets/logo.svg"

const PRIMARY = "#e17a6e"
const SECONDARY = "#e1d1cfff"
// Muted sage/teal used for the footer link grid inside the open mobile menu
const MENU_LINK_MUTED = "#9CC4B5"

const mainNavLinks = [
  { label: "Home", href: "/", current: true },
  { label: "Shop", href: "/pharmacy", hasDropdown: true },
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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close the menu's language popover whenever the menu itself closes
  useEffect(() => {
    if (!mobileOpen) setLangOpen(false)
  }, [mobileOpen])

  return (
    <header className="w-full">
      {/* Top utility bar */}
      <div
        className={`hidden md:flex justify-end items-center w-full h-[42px] px-[30px] transition-all duration-500 ease-in-out ${isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
          }`}
        style={{ backgroundColor: PRIMARY }}
      >
        <ul className="flex items-center gap-[28px] text-white text-xs" key={isScrolled ? 'hidden' : 'visible'}>
          {topBarLinks.map((link) => (
            <li
              key={link.label}
              className={!isScrolled ? "animate-slide-down" : ""}
            >
              <a
                href={link.href}
                aria-label={`Go to ${link.label}`}
                className="font-normal leading-snug hover:opacity-80 transition-opacity text-xs"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main desktop header */}
      <div
        className={`hidden md:flex flex-col gap-5 items-center w-full bg-[#E7E7E7] py-2 px-[1%] transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-md" : "relative"
          }`}
      >
        <div className="flex w-full items-center justify-between">
          {/* Logo + primary nav */}
          <div className="flex items-center gap-3">
            <a href="/" aria-label="Yene Health" className="flex items-center gap-3">
              <img src={logo} alt="Yene Health" className="h-[40px] w-[90px] rounded-md flex items-center justify-center text-white font-bold text-sm shrink-0" />

              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-[20px]">
                  {mainNavLinks.map((link) => (
                    <NavigationMenuItem key={link.label}>
                      <NavigationMenuLink
                        href={link.href}
                        aria-current={link.current ? "page" : undefined}
                        className={`text-xs font-medium rounded-[28px] px-2.5 py-1.5 transition-colors flex items-center gap-1 ${link.current
                          ? "text-white"
                          : "hover:text-[#E17A6E]"
                          }`}
                        style={{
                          color: link.current ? "#fff" : PRIMARY,
                          backgroundColor: link.current ? PRIMARY : "transparent",
                        }}
                      >
                        {link.label}
                        {link.hasDropdown && <ChevronDown size={12} />}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </a>
          </div>

          {/* Search bar */}
          <div className="w-[40%] max-w-[480px] mx-6">
            <div className="flex items-center rounded-full bg-white p-1.5 w-full border relative">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-l-full border-none focus:outline-none flex-1 text-black px-2 w-full bg-transparent text-xs"
              />
              <button
                type="button"
                className="text-xs px-2 py-1 transition-colors text-gray-500"
                title="Click to Filter"
              >
                Filter
              </button>
              <div className="border-l h-5 mx-1 border-gray-400" />
              <button
                type="button"
                className="text-xs px-2 py-1 transition-colors text-gray-500"
                title="Click to Sort"
              >
                Sort
              </button>
              <button
                type="button"
                aria-label="Search"
                className="rounded-xl text-white flex items-center justify-center shrink-0"
                style={{ backgroundColor: PRIMARY, width: 64, height: 32 }}
              >
                <Search size={16} />
              </button>
            </div>
          </div>

          {/* Right cluster */}
          <ul className="flex items-center gap-3 text-xs font-medium">
            <li>
              <a
                href="https://marketplace.yenehealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[48px] px-3 py-1.5 text-white font-semibold inline-flex items-center justify-center text-xs"
                style={{ backgroundColor: PRIMARY }}
              >
                For Businesses
              </a>
            </li>

            <li className="relative">
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1 min-w-[70px] text-xs"
                style={{ color: PRIMARY }}
              >
                <span>English</span>
                <ChevronDown size={12} />
              </button>
              {langOpen && (
                <ul className="absolute right-0 mt-2 bg-white border rounded-md shadow-md py-1 w-24 text-black z-10">
                  {["English", "Amharic", "French"].map((lng) => (
                    <li
                      key={lng}
                      className="px-2.5 py-1 hover:bg-gray-100 cursor-pointer text-xs"
                      onClick={() => setLangOpen(false)}
                    >
                      {lng}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="cursor-pointer text-xs" style={{ color: PRIMARY }}>
              SIGN IN
            </li>

            <li className="cursor-pointer" style={{ color: PRIMARY }}>
              <Heart size={20} />
            </li>

            <li className="cursor-pointer" style={{ color: PRIMARY }}>
              <ShoppingCart size={20} />
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile header bar - only rendered while the sheet is closed; the sheet renders its own top row when open */}
      {!mobileOpen && (
        <div className="md:hidden flex justify-between items-center w-full px-[15px] py-3 bg-white relative z-[110]">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              style={{ color: PRIMARY }}
            >
              <Menu size={26} />
            </button>

            <a href="/" aria-label="Yene Health" title="Yene Health">
              <img src={logo} alt="Yene Health" className="h-[35px] w-auto" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Search size={22} style={{ color: PRIMARY }} />
            <Heart size={22} style={{ color: PRIMARY }} />
            <ShoppingCart size={22} style={{ color: PRIMARY }} />
          </div>
        </div>
      )}

      {/* Mobile dropdown menu */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="top"
          showCloseButton={false}
          className="md:hidden p-0 border-none flex flex-col inset-0 max-w-none rounded-none"
          style={{
            backgroundColor: PRIMARY,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: "100dvh",
            width: "100vw",
          }}
        >
          {/* Visually hidden title/description - required for accessibility */}
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation menu</SheetTitle>
            <SheetDescription>Site navigation links</SheetDescription>
          </SheetHeader>

          {/* Top row lives inside the sheet itself, so the close action is always reliable */}
          <div className="flex justify-between items-center px-[15px] py-4 shrink-0">
            <SheetClose asChild>
              <button type="button" aria-label="Close menu" className="text-white">
                <X size={26} />
              </button>
            </SheetClose>

            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangOpen((o) => !o)}
                  className="flex items-center gap-1 text-white"
                >
                  <span className="text-xs font-semibold">English</span>
                  <ChevronDown size={12} />
                </button>
                {langOpen && (
                  <ul className="absolute top-full right-0 mt-2 bg-white border rounded-md shadow-md py-1 w-28 text-black z-10">
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
              </div>
              <span className="text-xs font-semibold text-white cursor-pointer">SIGN IN</span>
              <ShoppingCart size={20} className="cursor-pointer text-white" />
            </div>
          </div>

          <div className="flex flex-col flex-1 overflow-y-auto">
            {/* Main navigation links - each row is full-width, active item gets a white band */}
            <div className="flex flex-col items-center justify-start pt-6 w-full">
              {mainNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-2xl font-medium py-4 px-8 w-full flex items-center justify-center gap-2 transition-colors ${link.current ? "bg-white text-[#e17a6e]" : "bg-transparent text-white"
                    }`}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && <ChevronDown size={18} />}
                </a>
              ))}
            </div>

            {/* Bottom section - For Businesses and footer links */}
            <div className="flex flex-col items-center pb-10 gap-5 mt-auto pt-12">
              <a
                href="https://marketplace.yenehealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-8 py-2.5 bg-white font-semibold text-sm"
                style={{ color: PRIMARY }}
              >
                For Businesses
              </a>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                {topBarLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:opacity-80 transition-opacity text-left font-medium text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}