import { useState } from 'react'

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (page, e) => {
    e.preventDefault()
    setCurrentPage(page)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Utility Bar in Rich Purple */}
      <div className="bg-[#7B2CBF] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-purple-100">
            <a href="tel:0786367115" className="inline-flex items-center gap-1.5 hover:text-white">
              <PhoneIcon />
              <span>0786-367-115</span>
            </a>
            <a
              href="mailto:support@glorycooperativesociety.com"
              className="hidden items-center gap-1.5 hover:text-white sm:inline-flex"
            >
              <MailIcon />
              <span>support@glorycooperativesociety.com</span>
            </a>
            <span className="hidden items-center gap-1.5 lg:inline-flex">
              <ClockIcon />
              <span>Mon–Fri 8:00 AM – 5:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <a href="#language" className="inline-flex items-center gap-1 hover:text-purple-100">
              <GlobeIcon />
              <span>EN</span>
            </a>
            <a href="#help" className="hover:text-purple-100">
              Help
            </a>
            <a href="#contact" className="hidden hover:text-purple-100 sm:inline">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-purple-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#"
            onClick={(e) => handleNavClick('home', e)}
            className="flex shrink-0 items-center gap-2.5 cursor-pointer"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7B2CBF] text-sm font-bold text-white shadow">
              GCS
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-wide text-gray-900">
                Glory Cooperative Society
              </span>
              <span className="block text-[11px] text-[#FF6600] font-semibold">Limited</span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            <a
              href="#"
              onClick={(e) => handleNavClick('home', e)}
              className={`text-sm font-medium transition ${
                currentPage === 'home' ? 'text-[#FF6600] font-bold' : 'text-gray-700 hover:text-[#FF6600]'
              }`}
            >
              Home
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick('about', e)}
              className={`text-sm font-medium transition ${
                currentPage === 'about' ? 'text-[#FF6600] font-bold' : 'text-gray-700 hover:text-[#FF6600]'
              }`}
            >
              About Us
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick('products', e)}
              className={`text-sm font-medium transition ${
                currentPage === 'products' ? 'text-[#FF6600] font-bold' : 'text-gray-700 hover:text-[#FF6600]'
              }`}
            >
              Products & Services
            </a>
            <a
              href="#agent-banking"
              onClick={(e) => {
                if (currentPage !== 'home') setCurrentPage('home')
              }}
              className="text-sm font-medium text-gray-700 hover:text-[#FF6600] transition"
            >
              Agent Banking
            </a>
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href="#branches"
              onClick={(e) => {
                if (currentPage !== 'home') setCurrentPage('home')
              }}
              className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <PinIcon />
              Find Branch
            </a>
            <a
              href="#contact"
              className="rounded-md border border-[#7B2CBF] px-3 py-2 text-sm font-medium text-[#7B2CBF] hover:bg-purple-50"
            >
              Talk to Us
            </a>
            <a
              href="#portal"
              className="rounded-md bg-[#FF6600] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#e05a00] transition"
            >
              Member Portal
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-gray-200 bg-white px-4 py-4 sm:px-6 lg:hidden">
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              <a
                href="#"
                className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                  currentPage === 'home' ? 'bg-purple-50 text-[#FF6600] font-bold' : 'text-gray-700 hover:bg-purple-50'
                }`}
                onClick={(e) => handleNavClick('home', e)}
              >
                Home
              </a>
              <a
                href="#"
                className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                  currentPage === 'about' ? 'bg-purple-50 text-[#FF6600] font-bold' : 'text-gray-700 hover:bg-purple-50'
                }`}
                onClick={(e) => handleNavClick('about', e)}
              >
                About Us
              </a>
              <a
                href="#"
                className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                  currentPage === 'products' ? 'bg-purple-50 text-[#FF6600] font-bold' : 'text-gray-700 hover:bg-purple-50'
                }`}
                onClick={(e) => handleNavClick('products', e)}
              >
                Products & Services
              </a>
              <a
                href="#agent-banking"
                className="rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-purple-50"
                onClick={(e) => {
                  setMobileOpen(false)
                  if (currentPage !== 'home') setCurrentPage('home')
                }}
              >
                Agent Banking
              </a>
            </nav>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="#portal"
                className="rounded-md bg-[#FF6600] px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Member Portal
              </a>
              <a
                href="#contact"
                className="rounded-md border border-[#7B2CBF] px-3 py-2.5 text-center text-sm font-medium text-[#7B2CBF]"
              >
                Talk to Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.1c.7 0 1.3.5 1.45 1.18l.5 2.3a1.5 1.5 0 0 1-.43 1.4L5.9 8.1a11.05 11.05 0 0 0 6 6l1.22-1.22a1.5 1.5 0 0 1 1.4-.43l2.3.5A1.5 1.5 0 0 1 18 14.4v2.1a1.5 1.5 0 0 1-1.5 1.5C8.16 18 2 11.84 2 4.5V3.5Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M2 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5Zm8 5.27L3.2 5.5h13.6L10 10.27Z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-12.25a.75.75 0 0 0-1.5 0v4.5c0 .2.08.39.22.53l2.5 2.5a.75.75 0 1 0 1.06-1.06L10.75 9.94V5.75Z" clipRule="evenodd" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1.1-1.6A12.3 12.3 0 0 1 7.1 10c0-2.3.4-4.5 1.1-6.4h2.2A12.3 12.3 0 0 1 12.9 10c0 2.3-.4 4.5-1.1 6.4H8.9ZM4.3 8.5h-2.1a8.03 8.03 0 0 0 0 3h2.1a14.6 14.6 0 0 1 0-3Zm13.5 0h-2.1a14.6 14.6 0 0 1 0 3h2.1a8.03 8.03 0 0 0 0-3ZM5.6 10c0 2.1.4 4.1 1.1 5.9A8.02 8.02 0 0 1 3.7 10 8.02 8.02 0 0 1 6.7 4.1C6 5.9 5.6 7.9 5.6 10Zm8.8 0c0-2.1-.4-4.1-1.1-5.9A8.02 8.02 0 0 1 16.3 10a8.02 8.02 0 0 1-3 5.9c.7-1.8 1.1-3.8 1.1-5.9Z" clipRule="evenodd" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9ZM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}