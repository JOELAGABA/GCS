export default function About({ setCurrentPage }) {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* 1. HERO & ORIGIN STORY */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF6600] bg-orange-50 rounded-full">
          Institutional Heritage
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#7B2CBF]">
          About Glory Cooperative Society Limited
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Glory Cooperative Society Limited is a member-based financial institution operating under the Tier IV Financial Institutions (SACCO) framework, regulated by the Registrar of Cooperatives under the Ministry of Trade, Industry and Cooperatives.
        </p>
      </section>

      {/* Origin Card */}
      <div className="bg-gradient-to-br from-[#7B2CBF] to-purple-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-purple-800 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600] bg-white/10 px-3 py-1 rounded-full">
            Our Founding Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Initiated for Member Growth & Empowerment
          </h2>
          <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
            The Society was initiated by the Senior Pastor of Glory of Christ Church Kasubi-Kawaala with a vision to build a sustainable, faith-based financial support structure necessary for personal, business, and community development across Uganda.
          </p>
          <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
            From humble beginnings, Glory Cooperative has expanded across three regional branches—Kawaala, Kasubi, and Kasangati—empowering thousands of everyday savers, market traders, and real estate investors.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 space-y-4 text-xs">
          <h3 className="font-bold text-sm text-[#FF6600] border-b border-purple-700/60 pb-2">
            Key Institutional Pillars
          </h3>
          <div className="space-y-2.5 text-purple-100">
            <div className="flex items-start gap-2">
              <span className="text-[#FF6600] font-bold">✓</span>
              <span><strong>Regulatory Framework:</strong> Regulated Tier IV SACCO under the Ministry of Trade, Industry and Cooperatives.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF6600] font-bold">✓</span>
              <span><strong>Democratic Governance:</strong> Member-owned structure where each share grants equal voting rights and annual dividends.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF6600] font-bold">✓</span>
              <span><strong>Multifunctional Services:</strong> Savings accounts, credit facilities, agent banking, and verified real estate plots.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. VISION, MISSION & CORE VALUES */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">Strategic Direction</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#7B2CBF] mt-1">Vision, Mission & Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision & Mission Card */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-purple-100 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-[#FF6600] tracking-wider">Our Vision</span>
              <h3 className="text-xl font-extrabold text-[#7B2CBF]">
                To be the leading Christian Cooperative Society in the country.
              </h3>
            </div>
            <div className="border-t border-purple-50 pt-6 space-y-2">
              <span className="text-xs font-bold uppercase text-[#FF6600] tracking-wider">Our Mission</span>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                Providing the financial support structure necessary for development to our valued members.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-[#FF6600] tracking-wider">Guiding Principles</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1 mb-4">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-gray-700">
                <div className="bg-white p-3 rounded-lg border border-purple-100 flex items-center gap-2">
                  <span className="text-[#FF6600] font-bold">✦</span> Transparency & Accountability
                </div>
                <div className="bg-white p-3 rounded-lg border border-purple-100 flex items-center gap-2">
                  <span className="text-[#FF6600] font-bold">✦</span> Respect of God
                </div>
                <div className="bg-white p-3 rounded-lg border border-purple-100 flex items-center gap-2">
                  <span className="text-[#FF6600] font-bold">✦</span> Respect for One Another
                </div>
                <div className="bg-white p-3 rounded-lg border border-purple-100 flex items-center gap-2">
                  <span className="text-[#FF6600] font-bold">✦</span> Unity of Purpose
                </div>
                <div className="bg-white p-3 rounded-lg border border-purple-100 flex items-center gap-2">
                  <span className="text-[#FF6600] font-bold">✦</span> Teamwork
                </div>
                <div className="bg-white p-3 rounded-lg border border-purple-100 flex items-center gap-2">
                  <span className="text-[#FF6600] font-bold">✦</span> Healthy Relationships
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AUDITED OPERATIONAL STATISTICS */}
      <section className="bg-gray-50 rounded-2xl p-8 sm:p-12 border border-purple-100 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">Financial Performance</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#7B2CBF] mt-1">Operational Statistics (As of Dec 31, 2025)</h2>
          <p className="text-xs text-gray-600 mt-2">
            Audited financial figures reflecting robust governance, capital growth, and expanding member deposits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
            <span className="text-xs font-bold text-gray-500 uppercase">Total Assets</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#7B2CBF] mt-1">UGX 5.999B</div>
            <p className="text-[11px] text-green-600 font-semibold mt-1">↑ Growing from 4.72B in 2024</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
            <span className="text-xs font-bold text-gray-500 uppercase">Member Savings Deposits</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6600] mt-1">UGX 3.308B</div>
            <p className="text-[11px] text-green-600 font-semibold mt-1">↑ Growing from 2.73B in 2024</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
            <span className="text-xs font-bold text-gray-500 uppercase">Loan Portfolio Growth</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#7B2CBF] mt-1">UGX 1.641B</div>
            <p className="text-[11px] text-green-600 font-semibold mt-1">↑ Growing from 1.27B in 2024</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
            <span className="text-xs font-bold text-gray-500 uppercase">Active Membership</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6600] mt-1">5,222 Members</div>
            <p className="text-[11px] text-purple-700 font-semibold mt-1">Across Kawaala, Kasubi & Kasangati</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
            <span className="text-xs font-bold text-gray-500 uppercase">Share Capital</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#7B2CBF] mt-1">UGX 831.79M</div>
            <p className="text-[11px] text-gray-500 font-semibold mt-1">Member-funded capital reserve</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
            <span className="text-xs font-bold text-gray-500 uppercase">Pre-Appropriation Net Profit</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6600] mt-1">UGX 348.31M</div>
            <p className="text-[11px] text-gray-500 font-semibold mt-1">For fiscal year ending 31/12/2025</p>
          </div>
        </div>
      </section>

      {/* 4. GOVERNANCE & HUMAN RESOURCES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">Team & Operations</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#7B2CBF]">
            Dedicated Staff & Professional Leadership
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Glory Cooperative Society Limited is operated by 16 professional staff members across account management, credit analysis, audit, and member service desks.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Our staff works closely with elected Board Committees and Supervisory Committees to ensure total transparency, compliance with cooperative bylaws, and swift processing of member credit requests within 72 hours.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-md space-y-4">
          <h3 className="font-bold text-base text-[#7B2CBF] border-b border-gray-100 pb-2">
            Branch Operations Center
          </h3>
          <div className="space-y-3 text-xs text-gray-700">
            <div className="p-3 bg-purple-50 rounded-lg">
              <strong className="block text-[#7B2CBF]">Kawaala Main Branch</strong>
              <span>Glory of Christ Church Building, along Kasubi–Kawaala Road.</span>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <strong className="block text-[#7B2CBF]">Kasubi Branch</strong>
              <span>Opposite Kasubi Tombs, along Hoima Road.</span>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <strong className="block text-[#7B2CBF]">Kasangati Branch</strong>
              <span>Ssendege Plaza & Serviced Apartments, along Gayaza Road.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION / JOIN THE COOPERATIVE */}
      <div className="rounded-2xl bg-gradient-to-r from-[#7B2CBF] to-[#FF6600] text-white p-8 sm:p-12 text-center space-y-6 shadow-xl">
        <h2 className="text-2xl sm:text-4xl font-extrabold">Become a Member-Owner Today</h2>
        <p className="text-xs sm:text-sm text-purple-100 max-w-2xl mx-auto leading-relaxed">
          Open an account with UGX 10,000/= and purchase shares at UGX 20,000/= per share to participate in annual dividends and access affordable credit facilities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setCurrentPage('products')}
            className="bg-white text-[#7B2CBF] font-bold px-8 py-3.5 rounded-lg text-xs sm:text-sm shadow-md hover:bg-purple-50 transition cursor-pointer"
          >
            Explore Account Products
          </button>
        </div>
      </div>
    </div>
  )
} 
