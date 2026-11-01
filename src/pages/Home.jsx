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
                Your Trusted Financial Partner for Savings, Loans & Land Investments
              </h1>
              <p className="text-base sm:text-lg text-purple-100 max-w-2xl leading-relaxed font-medium">
                Serving over 5,200 members across Uganda with high-yield savings accounts, affordable credit, and verified land investment opportunities.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setCurrentPage('products')}
                  className="rounded-lg bg-[#FF6600] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#e05a00] transition cursor-pointer"
                >
                  Explore Accounts & Loans
                </button>
                <a
                  href="#land"
                  className="rounded-lg border-2 border-white px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition"
                >
                  Land Investment
                </a>
              </div>
            </div>

            {/* Membership Requirements Card (Passbook Fee Removed) */}
            <div className="rounded-2xl bg-purple-900 border border-purple-700 p-6 text-white space-y-4 shadow-xl">
              <h3 className="text-lg font-bold border-b border-purple-700 pb-3 text-[#FF6600]">
                Membership Baseline Requirements
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-purple-950 p-3 rounded-lg border border-purple-800">
                  <span className="block text-purple-300">Registration Fee</span>
                  <strong className="text-base text-white">UGX 10,000/=</strong>
                </div>
                <div className="bg-purple-950 p-3 rounded-lg border border-purple-800">
                  <span className="block text-purple-300">Share Price (Min 1)</span>
                  <strong className="text-base text-white">UGX 20,000/=</strong>
                </div>
                <div className="bg-purple-950 p-3 rounded-lg border border-purple-800 col-span-2">
                  <span className="block text-purple-300">Min. Account Balance</span>
                  <strong className="text-base text-white">UGX 10,000/=</strong>
                </div>
              </div>

              {/* Documentation Requirements Added */}
              <div className="border-t border-purple-800 pt-3 text-[11px] text-purple-200 space-y-1">
                <strong className="text-white block">Required Application Documentation:</strong>
                <p>• Valid National ID (NIN) copy</p>
                <p>• Two (2) recent passport-size photographs</p>
                <p>• LC1 Recommendation Letter or Proof of Residence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER SLOT 1 (Promotional / Announcement Banner) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-[#FF6600] text-white p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-purple-900 bg-white/90 px-2.5 py-0.5 rounded-full">
              Notice / Special Offer
            </span>
            <h3 className="text-xl font-extrabold text-white">2026 Land Sale & High-Yield Dividends</h3>
            <p className="text-xs text-orange-100">
              Verified estate plots available in developing corridors with flexible member installment plans.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('products')}
            className="shrink-0 bg-[#7B2CBF] text-white font-bold px-6 py-3 rounded-lg text-xs hover:bg-purple-900 transition cursor-pointer"
          >
            Inquire Land Plots
          </button>
        </div>
      </div>

      {/* 2. OPERATIONAL & FINANCIAL METRICS (Dec 31, 2025 Audit) */}
      <section className="bg-purple-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">Proven Growth</span>
            <h2 className="text-3xl font-extrabold text-[#7B2CBF] mt-1">2025 Financial Performance Highlights</h2>
            <p className="text-xs text-gray-600 mt-2">
              Audited operational statistics as of December 31, 2025 demonstrating financial strength and member commitment.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow border border-purple-100 text-center">
              <span className="text-xs font-bold text-gray-500 uppercase">Total Assets</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#7B2CBF] mt-1">UGX 6.0B</div>
              <span className="text-[11px] text-green-600 font-semibold">↑ Up from 4.72B (2024)</span>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-purple-100 text-center">
              <span className="text-xs font-bold text-gray-500 uppercase">Member Savings</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6600] mt-1">UGX 3.3B</div>
              <span className="text-[11px] text-green-600 font-semibold">↑ Up from 2.73B (2024)</span>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-purple-100 text-center">
              <span className="text-xs font-bold text-gray-500 uppercase">Loan Portfolio</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#7B2CBF] mt-1">UGX 1.64B</div>
              <span className="text-[11px] text-green-600 font-semibold">↑ Up from 1.27B (2024)</span>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-purple-100 text-center">
              <span className="text-xs font-bold text-gray-500 uppercase">Active Membership</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6600] mt-1">5,222</div>
              <span className="text-[11px] text-purple-700 font-semibold">Served by 16 Staff</span>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 pt-2">
            Share Capital: <strong>UGX 831,790,000</strong> • Pre-Appropriation Profit: <strong>UGX 348,318,613</strong>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE & INSTITUTIONAL PROFILE */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">Institutional Profile</span>
            <h2 className="text-3xl font-extrabold text-[#7B2CBF]">Who We Are</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Glory Cooperative Society Limited is a member-based financial institution operating under Tier IV Financial Institutions (SACCO) framework, regulated by the Registrar of Cooperatives under the Ministry of Trade, Industry and Cooperatives.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              The Society was initiated by the Senior Pastor of Glory of Christ Church Kasubi-Kawaala with a vision to build a sustainable financial support structure for individual, group, and business development across Uganda.
            </p>
          </div>

          {/* Vision, Mission, and Core Values Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase text-[#FF6600] tracking-wider">Our Vision</h4>
              <p className="text-base font-bold text-[#7B2CBF] mt-1">
                To be the leading Christian Cooperative Society in the country.
              </p>
            </div>

            <div className="border-t border-purple-50 pt-4">
              <h4 className="text-xs font-bold uppercase text-[#FF6600] tracking-wider">Our Mission</h4>
              <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                Providing financial support structure necessary for development to the members.
              </p>
            </div>

            <div className="border-t border-purple-50 pt-4">
              <h4 className="text-xs font-bold uppercase text-[#FF6600] tracking-wider mb-2">Our Core Values</h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-gray-700">
                <div className="flex items-center gap-1.5"><span className="text-[#FF6600]">✓</span> Transparency & Accountability</div>
                <div className="flex items-center gap-1.5"><span className="text-[#FF6600]">✓</span> Respect of God</div>
                <div className="flex items-center gap-1.5"><span className="text-[#FF6600]">✓</span> Respect for one another</div>
                <div className="flex items-center gap-1.5"><span className="text-[#FF6600]">✓</span> Unity of purpose</div>
                <div className="flex items-center gap-1.5"><span className="text-[#FF6600]">✓</span> Teamwork</div>
                <div className="flex items-center gap-1.5"><span className="text-[#FF6600]">✓</span> Healthy relationships</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER SLOT 2 (Mid-Page Visual Placeholder) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-dashed border-purple-200 bg-purple-50/50 p-8 text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Media & Advertisement Banner Area</span>
          <p className="text-xs text-purple-600">
            Placeholder reserved for AGM highlights video embed, promotional land advert graphics, or member testimonials.
          </p>
        </div>
      </div>

      {/* 4. STRATEGIC LAND & REAL ESTATE SALES */}
      <section id="land" className="bg-purple-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6600] rounded-full">
              Real Estate Division
            </span>
            <h2 className="text-3xl font-extrabold text-white">Strategic Land Investment & Sales</h2>
            <p className="text-sm text-purple-200 leading-relaxed">
              We acquire and offer verified, title-ready land parcels in prime growth corridors. Members enjoy flexible repayment schedules and direct cooperative title verification.
            </p>
            <button
              onClick={() => setCurrentPage('products')}
              className="rounded-lg bg-[#FF6600] px-6 py-3 text-sm font-bold text-white shadow hover:bg-[#e05a00] transition cursor-pointer"
            >
              Inquire About Land Plots
            </button>
          </div>

          <div className="bg-purple-950 p-6 rounded-2xl border border-purple-800 space-y-4 text-xs">
            <h4 className="text-sm font-bold text-[#FF6600]">Land Investment Features</h4>
            <div className="space-y-2 text-purple-200">
              <p>• Verified land titles audited by cooperative legal counsel.</p>
              <p>• Flexible installment terms for active cooperative members.</p>
              <p>• High-growth potential locations in developing municipal areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AGENT BANKING SERVICES */}
      <section id="agent-banking" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl p-8 border border-purple-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">Convenient Banking</span>
            <h3 className="text-2xl font-bold text-[#7B2CBF]">Agent Banking Network</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Access your Glory Cooperative account easily through authorized agent banking outlets across Uganda. Deposit savings, make loan repayments, or inquire about account balances right in your community.
            </p>
          </div>
          <button
            onClick={() => alert('Agent Banking Outlets: Kawaala, Kasubi, Kasangati and partner SACCO points.')}
            className="shrink-0 bg-[#7B2CBF] text-white font-bold px-6 py-3 rounded-lg text-xs hover:bg-purple-800 transition cursor-pointer"
          >
            Locate Nearest Agent
          </button>
        </div>
      </section>

      {/* 6. BRANCH NETWORK */}
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