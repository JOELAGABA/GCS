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
          All members hold a primary savings account as the foundation for accessing credit facilities, earning interest dividends, and participating in governance.
        </p>

        {/* Category Tabs */}
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
          {/* 1. Ordinary Savings */}
          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">Everyday Savers</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Ordinary Savings Account</h3>
              <p className="text-xs text-gray-600 mt-2">
                Designed for everyday members and small business operators needing regular liquidity and branch counter access.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                <li>• <strong>Withdrawals:</strong> Flexible access Mon–Sun</li>
                <li>• <strong>Min. Balance:</strong> UGX 10,000/=</li>
                <li>• <strong>Passbook:</strong> Required (UGX 3,000/=)</li>
                <li>• <strong>Credit Security:</strong> Serves as primary base for loan applications</li>
              </ul>
            </div>
            <button onClick={() => alert('Opening Ordinary Savings application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition">
              Open Account
            </button>
          </div>

          {/* 2. Bifuna Savings */}
          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">Medium-Term Goals</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Bifuna Savings Account</h3>
              <p className="text-xs text-gray-600 mt-2">
                Built for disciplined savers looking toward bulk stock purchasing, project setup, or capital expenditure.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                <li>• <strong>Monthly Interest:</strong> Earns 0.5% per month</li>
                <li>• <strong>Discipline:</strong> Structured quarterly/bi-annual withdrawals</li>
                <li>• <strong>Target:</strong> Traders & project builders</li>
              </ul>
            </div>
            <button onClick={() => alert('Opening Bifuna Savings application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition">
              Open Account
            </button>
          </div>

          {/* 3. Harvest Supersave & Fixed Deposit */}
          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">High-Yield Returns</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Harvest Supersave & Fixed Deposit</h3>
              <p className="text-xs text-gray-600 mt-2">
                For high-yield investors locking up lump sums for guaranteed term returns over 6, 12, or 24 months.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                <li>• <strong>Annual Return:</strong> Up to 15% p.a.</li>
                <li>• <strong>2-Year Tier:</strong> Up to 40% total return</li>
                <li>• <strong>Terms:</strong> 6, 12, or 24-month lock options</li>
              </ul>
            </div>
            <button onClick={() => alert('Opening Harvest Supersave application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition">
              Invest Now
            </button>
          </div>

          {/* 4. Junior Account */}
          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">Next Gen</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Junior Account (Toto Savings)</h3>
              <p className="text-xs text-gray-600 mt-2">
                Opened in a child's name (&lt;18 yrs) and operated jointly by a parent or guardian to secure future school fees.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                <li>• <strong>Operation:</strong> Joint parent/guardian sign-off</li>
                <li>• <strong>Threshold:</strong> Low entry deposit fees</li>
                <li>• <strong>Purpose:</strong> Secondary & tertiary fee savings</li>
              </ul>
            </div>
            <button onClick={() => alert('Opening Junior Account application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition">
              Open Junior Account
            </button>
          </div>

          {/* 5. Group / Association Accounts */}
          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">Collective Power</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Group / Association Accounts</h3>
              <p className="text-xs text-gray-600 mt-2">
                Tailored for registered SACCO groups, VSLA associations, local chamas, and informal trading collectives.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                <li>• <strong>Signatories:</strong> Multi-signatory authorization</li>
                <li>• <strong>Group Borrowing:</strong> Enhanced collective credit power</li>
                <li>• <strong>Cross-Guarantee:</strong> Member project financing</li>
              </ul>
            </div>
            <button onClick={() => alert('Opening Group Account application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition">
              Register Group
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