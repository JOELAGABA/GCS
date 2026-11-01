export default function Home({ setCurrentPage }) {
  return (
    <div className="space-y-16">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#7B2CBF] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6600] rounded-full shadow">
                Glory Cooperative Society Limited
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Your Trusted Partner for Saving, Loans & Investments
              </h1>
              <p className="text-base sm:text-lg text-purple-100 max-w-2xl leading-relaxed font-medium">
                Empowering members across Uganda with high-yield savings plans, fast-turnaround loans, and strategic land investment opportunities.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setCurrentPage('products')}
                  className="rounded-lg bg-[#FF6600] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#e05a00] transition cursor-pointer"
                >
                  Explore Products & Loans
                </button>
              </div>
            </div>

            {/* Quick Membership Requirements Card */}
            <div className="rounded-2xl bg-purple-900 border border-purple-700 p-6 text-white space-y-4 shadow-xl">
              <h3 className="text-lg font-bold border-b border-purple-700 pb-3 text-[#FF6600]">
                Membership Requirements
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-purple-950 p-3 rounded-lg border border-purple-800">
                  <span className="block text-purple-300">Registration Fee</span>
                  <strong className="text-base text-white">UGX 10,000/=</strong>
                </div>
                <div className="bg-purple-950 p-3 rounded-lg border border-purple-800">
                  <span className="block text-purple-300">Share Price</span>
                  <strong className="text-base text-white">UGX 20,000/=</strong>
                </div>
                <div className="bg-purple-950 p-3 rounded-lg border border-purple-800">
                  <span className="block text-purple-300">Passbook Fee</span>
                  <strong className="text-base text-white">UGX 3,000/=</strong>
                </div>
                <div className="bg-purple-950 p-3 rounded-lg border border-purple-800">
                  <span className="block text-purple-300">Min. Balance</span>
                  <strong className="text-base text-white">UGX 10,000/=</strong>
                </div>
              </div>
              <p className="text-[11px] text-purple-200 text-center pt-1">
                Open your account at any branch with a valid National ID (NIN).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US HIGHLIGHTS */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">Why Choose Glory</span>
          <h2 className="text-3xl font-extrabold text-[#7B2CBF] mt-1">Built For Member Prosperity</h2>
          <p className="text-sm text-gray-600 mt-2">
            We offer guaranteed returns on member investments, affordable loan interest rates based on development objectives, and long-term wealth creation.
          </p>
        </div>
      </section>

      {/* 3. BRANCH LOCATIONS */}
      <section id="branches" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">Visit Us</span>
            <h2 className="text-3xl font-extrabold text-[#7B2CBF] mt-1">Our Branch Network</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
              <h3 className="font-bold text-lg text-[#7B2CBF]">Kawaala Branch</h3>
              <p className="text-xs text-gray-600 mt-2">Glory of Christ Church Building, along Kasubi–Kawaala Road.</p>
              <div className="mt-4 text-xs font-bold text-[#FF6600]">Tel: 0786-367-115</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
              <h3 className="font-bold text-lg text-[#7B2CBF]">Kasubi Branch</h3>
              <p className="text-xs text-gray-600 mt-2">Opposite Kasubi Tombs, along Hoima Road.</p>
              <div className="mt-4 text-xs font-bold text-[#FF6600]">Tel: 0786-367-115</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
              <h3 className="font-bold text-lg text-[#7B2CBF]">Kasangati Branch</h3>
              <p className="text-xs text-gray-600 mt-2">Ssendege Plaza & Serviced Apartments, along Gayaza Road.</p>
              <div className="mt-4 text-xs font-bold text-[#FF6600]">Tel: 0786-367-115</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}