import { useState } from 'react'

export default function Products() {
  const [activeTab, setActiveTab] = useState('savings')

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF6600] bg-orange-50 rounded-full mb-3">
          Glory Financial Solutions
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#7B2CBF]">
          Products & Services Hub
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Explore our tailored accounts, flexible credit options, and high-yield investment solutions designed to grow with you.
        </p>

        {/* Absa-inspired Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 border-b border-purple-100 pb-4">
          <button
            onClick={() => setActiveTab('savings')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition ${
              activeTab === 'savings'
                ? 'bg-[#7B2CBF] text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
            }`}
          >
            Savings Accounts
          </button>
          <button
            onClick={() => setActiveTab('loans')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition ${
              activeTab === 'loans'
                ? 'bg-[#7B2CBF] text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
            }`}
          >
            Loan Facilities
          </button>
          <button
            onClick={() => setActiveTab('investments')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition ${
              activeTab === 'investments'
                ? 'bg-[#7B2CBF] text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
            }`}
          >
            Investments & Land
          </button>
        </div>
      </div>

      {/* Tab Content 1: Savings Accounts */}
      {activeTab === 'savings' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">Daily Access</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Ordinary Savings Account</h3>
              <p className="text-xs text-gray-600 mt-2">
                Flexible access Monday to Sunday. Perfect for daily cash flow management, personal savings, and business operations.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                <li>• Minimum Opening Balance: UGX 10,000</li>
                <li>• No monthly ledger fees</li>
                <li>• Instant deposits and withdrawals</li>
              </ul>
            </div>
            <button onClick={() => alert('Opening Ordinary Savings application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition">
              Open Account
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">High Growth</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Bifuna Savings Account</h3>
              <p className="text-xs text-gray-600 mt-2">
                Earn steady monthly interest on your savings balance while maintaining structured reserves for future plans.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                <li>• Earn 0.5% interest per month</li>
                <li>• Structured monthly compounding</li>
                <li>• Ideal for medium-term goals</li>
              </ul>
            </div>
            <button onClick={() => alert('Opening Bifuna Savings application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition">
              Open Account
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">Term Deposit</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Harvest Supersave</h3>
              <p className="text-xs text-gray-600 mt-2">
                High-yield tier offering superior returns of up to 15% annually or up to 40% returns over a 2-year lock period.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                <li>• Up to 15% annual return</li>
                <li>• Up to 40% over 2 years</li>
                <li>• Premium wealth accumulation</li>
              </ul>
            </div>
            <button onClick={() => alert('Opening Harvest Supersave application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition">
              Invest Now
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">Next Gen</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Junior Account</h3>
              <p className="text-xs text-gray-600 mt-2">
                Designed specifically for dependents under 18 years to foster early financial literacy and secure school fees funds.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                <li>• For minors (&lt; 18 yrs)</li>
                <li>• Special bonus interest rates</li>
                <li>• Parental control and management</li>
              </ul>
            </div>
            <button onClick={() => alert('Opening Junior Account application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition">
              Open Junior Account
            </button>
          </div>
        </div>
      )}

      {/* Tab Content 2: Loan Facilities */}
      {activeTab === 'loans' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">Business Growth</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Business Development Loan</h3>
              <p className="text-xs text-gray-600 mt-2">
                Capital infusion designed for registered micro, small, and medium enterprises looking to expand stock or operations.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                <li>• Flexible repayment terms (3–36 mos)</li>
                <li>• Competitive monthly rates</li>
                <li>• Fast appraisal turnaround</li>
              </ul>
            </div>
            <button onClick={() => alert('Redirecting to loan application...')} className="mt-6 w-full rounded-lg bg-[#7B2CBF] py-2.5 text-xs font-bold text-white hover:bg-purple-800 transition">
              Apply For Loan
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">Education Support</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">School Fees Loan</h3>
              <p className="text-xs text-gray-600 mt-2">
                Ensure uninterrupted education for your dependents with timely school fees financing disbursed directly to institutions.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                <li>• Quick 72-hour processing</li>
                <li>• Low administrative fees</li>
                <li>• Flexible term structures</li>
              </ul>
            </div>
            <button onClick={() => alert('Redirecting to loan application...')} className="mt-6 w-full rounded-lg bg-[#7B2CBF] py-2.5 text-xs font-bold text-white hover:bg-purple-800 transition">
              Apply For Loan
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">Asset Acquisition</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Motor & Asset Financing</h3>
              <p className="text-xs text-gray-600 mt-2">
                Acquire income-generating vehicles, boda bodas, or equipment to boost your daily productivity.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                <li>• Up to 70% asset financing</li>
                <li>• Structured repayment plans</li>
                <li>• Transparent appraisal terms</li>
              </ul>
            </div>
            <button onClick={() => alert('Redirecting to loan application...')} className="mt-6 w-full rounded-lg bg-[#7B2CBF] py-2.5 text-xs font-bold text-white hover:bg-purple-800 transition">
              Apply For Loan
            </button>
          </div>
        </div>
      )}

      {/* Tab Content 3: Investments & Land */}
      {activeTab === 'investments' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
          <div className="bg-purple-900 text-white rounded-xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6600] rounded-full">
                Real Estate Opportunity
              </span>
              <h3 className="text-2xl font-bold mt-4">Strategic Land Investment & Sales</h3>
              <p className="text-sm text-purple-200 mt-3 leading-relaxed">
                Secure verified, title-ready land parcels in prime developing corridors across Uganda. Backed by Glory Cooperative’s secure title verification process.
              </p>
            </div>
            <div className="mt-8">
              <button onClick={() => alert('Inquiring about land plots...')} className="rounded-lg bg-[#FF6600] px-6 py-3 text-sm font-bold text-white shadow hover:bg-[#e05a00] transition">
                View Available Land Plots
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7B2CBF] bg-purple-50 rounded-full">
                Cooperative Growth
              </span>
              <h3 className="text-2xl font-bold text-[#7B2CBF] mt-4">Member Shareholding & Dividends</h3>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Grow your stake in the cooperative. Purchase shares at UGX 20,000/= each to qualify for annual member dividends and voting rights.
              </p>
            </div>
            <div className="mt-8">
              <button onClick={() => alert('Inquiring about share acquisition...')} className="rounded-lg border border-[#7B2CBF] px-6 py-3 text-sm font-bold text-[#7B2CBF] hover:bg-purple-50 transition">
                Learn About Shares
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 
