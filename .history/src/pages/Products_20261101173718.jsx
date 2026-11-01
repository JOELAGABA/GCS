import { useState } from 'react'

export default function Products() {
  const [activeTab, setActiveTab] = useState('savings')
  const [selectedLoan, setSelectedLoan] = useState(null) // Active loan for deep view modal

  // Calculator states inside the deep loan modal
  const [amount, setAmount] = useState(5000000)
  const [months, setMonths] = useState(12)
  const [interestRateAnnual, setInterestRateAnnual] = useState(20)

  const rate = Number(interestRateAnnual) || 0
  const monthlyInterestRate = rate / 100 / 12
  const totalInterest = amount * monthlyInterestRate * (months / 2)
  const totalRepayment = amount + totalInterest
  const monthlyPayment = totalRepayment / (months || 1)

  const formatUGX = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'UGX', maximumFractionDigits: 0 }).format(val).replace('UGX', 'UGX ')
  }

  // Complete 8 Loan Types with exact requirements
  const loansList = [
    {
      id: 1,
      title: 'Emergency Loans',
      category: 'Quick Relief',
      terms: [
        'Must be a registered member with an active account',
        'Proof of income & Security required',
        'At least 2 guarantors',
        'Payment period: 3 months',
        '10% shares of applied amount'
      ]
    },
    {
      id: 2,
      title: 'Personal Development',
      category: 'Growth & Setup',
      terms: [
        'Society membership required',
        'Bank statement for at least 6 months',
        'At least 2 guarantors & Proof of income',
        'Recommendation from LC',
        'Security & 10% shares of applied amount'
      ]
    },
    {
      id: 3,
      title: 'Business Loans',
      category: 'Enterprise',
      terms: [
        'Society membership required',
        'Bank statement for at least 6 months',
        'Photocopy of ID & LC1 Recommendation',
        'Running business for at least 6 months',
        'At least 2 guarantors & 10% shares of amount applied'
      ]
    },
    {
      id: 4,
      title: 'Salary Loans',
      category: 'Employed',
      terms: [
        'Society membership required',
        'Bank statement for at least 6 months',
        'Photocopy of ID',
        'Letter of undertaking from employer',
        'Copy of appointment & At least 2 guarantors',
        '10% shares of amount applied'
      ]
    },
    {
      id: 5,
      title: 'Asset / Take Loan',
      category: 'Asset Financing',
      terms: [
        'Society membership required',
        'Bank statement for at least 6 months',
        'Photocopy of ID & LC1 Recommendation',
        'At least 2 guarantors',
        'Must have at least 30% of purchase price',
        'Income source (business or salary) & 10% shares'
      ]
    },
    {
      id: 6,
      title: 'Motor Loan',
      category: 'Vehicles',
      terms: [
        'Society membership required',
        'Bank statement for at least 6 months',
        'Photocopy of ID & Proof of income',
        'At least 2 guarantors',
        'Must have at least 50% of purchase price'
      ]
    },
    {
      id: 7,
      title: 'School Fees Loans',
      category: 'Education',
      terms: [
        'Existing account with the SACCO',
        'Two loan guarantors & Photocopy of ID',
        'Collateral Security',
        '10% shares of loan amount applied for',
        'Clear source of income'
      ]
    },
    {
      id: 8,
      title: 'Group Loans',
      category: 'Collectives',
      terms: [
        'Society membership required',
        "Group's bank statement for at least 6 months",
        'Running business for at least 6 months',
        'Photocopy of ID & LC1 Recommendation',
        'At least 2 guarantors & Chattels for security'
      ]
    }
  ]

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
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition cursor-pointer ${
              activeTab === 'savings'
                ? 'bg-[#7B2CBF] text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
            }`}
          >
            Savings Accounts
          </button>
          <button
            onClick={() => setActiveTab('loans')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition cursor-pointer ${
              activeTab === 'loans'
                ? 'bg-[#7B2CBF] text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
            }`}
          >
            Loan Facilities
          </button>
          <button
            onClick={() => setActiveTab('investments')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition cursor-pointer ${
              activeTab === 'investments'
                ? 'bg-[#7B2CBF] text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
            }`}
          >
            Investments & Land
          </button>
        </div>
      </div>

      {/* Tab Content 1: ALL 5 Savings Accounts Restored */}
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
            <button onClick={() => alert('Opening Ordinary Savings application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition cursor-pointer">
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
            <button onClick={() => alert('Opening Bifuna Savings application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition cursor-pointer">
              Open Account
            </button>
          </div>

          {/* 3. Harvest Supersave */}
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
            <button onClick={() => alert('Opening Harvest Supersave application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition cursor-pointer">
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
            <button onClick={() => alert('Opening Junior Account application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition cursor-pointer">
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
            <button onClick={() => alert('Opening Group Account application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition cursor-pointer">
              Register Group
            </button>
          </div>
        </div>
      )}

      {/* Tab Content 2: Clean Loan Facilities Grid */}
      {activeTab === 'loans' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {loansList.map((loan) => (
            <div key={loan.id} className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#FF6600] uppercase">{loan.category}</span>
                <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">{loan.title}</h3>
                <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                  {loan.terms.map((term, idx) => (
                    <li key={idx}>• {term}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setSelectedLoan(loan)}
                className="mt-6 w-full rounded-lg bg-[#7B2CBF] py-2.5 text-xs font-bold text-white hover:bg-purple-800 transition cursor-pointer shadow"
              >
                Apply For Loan
              </button>
            </div>
          ))}
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
              <button onClick={() => alert('Inquiring about land plots...')} className="rounded-lg bg-[#FF6600] px-6 py-3 text-sm font-bold text-white shadow hover:bg-[#e05a00] transition cursor-pointer">
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
              <button onClick={() => alert('Inquiring about share acquisition...')} className="rounded-lg border border-[#7B2CBF] px-6 py-3 text-sm font-bold text-[#7B2CBF] hover:bg-purple-50 transition cursor-pointer">
                Learn About Shares
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Loan Page Modal (Opened when clicking "Apply For Loan") */}
      {selectedLoan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-t-4 border-[#FF6600] space-y-6 my-8">
            <div className="flex justify-between items-start border-b border-gray-100 pb-3">
              <div>
                <span className="text-xs font-bold text-[#FF6600] uppercase">{selectedLoan.category}</span>
                <h2 className="text-2xl font-extrabold text-[#7B2CBF]">{selectedLoan.title} Portal</h2>
              </div>
              <button
                onClick={() => setSelectedLoan(null)}
                className="text-gray-400 hover:text-gray-700 text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Deep Details & Requirements */}
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <h4 className="text-xs font-bold text-[#7B2CBF] uppercase tracking-wider mb-2">Loan Requirements & Terms</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {selectedLoan.terms.map((term, i) => (
                  <li key={i} className="flex items-start gap-1">
                    <span className="text-[#FF6600] font-bold">✓</span> {term}
                  </li>
                ))}
              </ul>
            </div>

            {/* Embedded Loan Calculator inside the Loan's dedicated modal */}
            <div className="rounded-xl bg-gray-50 p-5 border border-purple-100 space-y-4">
              <h4 className="text-xs font-bold text-[#7B2CBF] uppercase tracking-wider">Calculate Repayment for {selectedLoan.title}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Borrow Amount:</span>
                    <span className="text-[#7B2CBF] font-bold">{formatUGX(amount)}</span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="50000000"
                    step="500000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-1.5 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-[#FF6600]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Tenure:</span>
                    <span className="text-[#7B2CBF] font-bold">{months} Months</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="36"
                    step="1"
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="w-full h-1.5 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-[#FF6600]"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center bg-[#7B2CBF] text-white p-3 rounded-lg text-xs">
                <div>
                  <span className="block text-purple-200">Estimated Monthly Payment</span>
                  <strong className="text-lg text-[#FF6600] font-extrabold">{formatUGX(monthlyPayment)}</strong>
                </div>
                <div className="text-right">
                  <span className="block text-purple-200">Total Credit Cost</span>
                  <strong className="text-sm text-white font-bold">{formatUGX(totalRepayment)}</strong>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <form onSubmit={(e) => { e.preventDefault(); alert(`Application submitted for ${selectedLoan.title}!`); setSelectedLoan(null); }} className="space-y-4 text-xs">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">Submit Member Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Full Name</label>
                  <input required type="text" placeholder="Your name" className="w-full rounded-md border border-gray-300 p-2.5 focus:border-[#7B2CBF] focus:outline-none" />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input required type="tel" placeholder="07XX XXX XXX" className="w-full rounded-md border border-gray-300 p-2.5 focus:border-[#7B2CBF] focus:outline-none" />
                </div>
              </div>

              <button type="submit" className="w-full rounded-lg bg-[#FF6600] py-3 text-center text-sm font-bold text-white shadow hover:bg-[#e05a00] transition cursor-pointer">
                Submit {selectedLoan.title} Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}