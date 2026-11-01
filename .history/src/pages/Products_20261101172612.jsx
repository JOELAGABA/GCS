import { useState } from 'react'

export default function Products() {
  const [activeTab, setActiveTab] = useState('savings')
  const [selectedLoan, setSelectedLoan] = useState(null) // For the popup modal

  // Calculator states
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

  const loansList = [
    { id: 1, title: 'Emergency Loans', category: 'Quick Relief', terms: ['Active membership required', 'Proof of income & security', 'At least 2 guarantors', 'Payment period: 3 months', '10% shares of applied amount'] },
    { id: 2, title: 'Personal Development', category: 'Growth & Setup', terms: ['Society membership required', 'Bank statement for at least 6 months', 'At least 2 guarantors & proof of income', 'Recommendation from LC1', '10% shares of applied amount'] },
    { id: 3, title: 'Business Loans', category: 'Enterprise', terms: ['Society membership required', 'Bank statement for at least 6 months', 'Photocopy of ID & LC1 Recommendation', 'Running business for at least 6 months', '10% shares of amount applied'] },
    { id: 4, title: 'Salary Loans', category: 'Employed', terms: ['Society membership required', 'Bank statement for at least 6 months', 'Letter of undertaking from employer', 'Copy of appointment & 2 guarantors', '10% shares of amount applied'] },
    { id: 5, title: 'Asset / Take Loan', category: 'Asset Financing', terms: ['Society membership required', 'Bank statement for at least 6 months', 'LC1 Recommendation & 2 guarantors', 'Must have at least 30% of purchase price', '10% shares of amount applied'] },
    { id: 6, title: 'Motor Loan', category: 'Vehicles', terms: ['Society membership required', 'Bank statement for at least 6 months', 'Proof of income & 2 guarantors', 'Must have at least 50% of purchase price'] },
    { id: 7, title: 'School Fees Loans', category: 'Education', terms: ['Existing account with the SACCO', 'Two loan guarantors & Photocopy of ID', 'Collateral security & Clear income source', '10% shares of loan amount applied for'] },
    { id: 8, title: 'Group Loans', category: 'Collectives', terms: ['Society membership required', "Group's bank statement for 6+ months", 'Running business for at least 6 months', 'Chattels for security & LC1 Recommendation'] }
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
          Explore our accounts, credit facilities, and investment opportunities designed for your financial empowerment.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 border-b border-purple-100 pb-4">
          <button
            onClick={() => setActiveTab('savings')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition cursor-pointer ${
              activeTab === 'savings' ? 'bg-[#7B2CBF] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
            }`}
          >
            Savings Accounts
          </button>
          <button
            onClick={() => setActiveTab('loans')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition cursor-pointer ${
              activeTab === 'loans' ? 'bg-[#7B2CBF] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
            }`}
          >
            Loan Facilities & Calculator
          </button>
          <button
            onClick={() => setActiveTab('investments')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition cursor-pointer ${
              activeTab === 'investments' ? 'bg-[#7B2CBF] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
            }`}
          >
            Investments & Land
          </button>
        </div>
      </div>

      {/* Tab Content 1: Savings Accounts */}
      {activeTab === 'savings' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">Everyday Savers</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Ordinary Savings Account</h3>
              <p className="text-xs text-gray-600 mt-2">Flexible access Mon–Sun with a minimum balance of UGX 10,000/=. Serves as your primary credit security base.</p>
            </div>
            <button onClick={() => alert('Opening Ordinary Savings application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition cursor-pointer">
              Open Account
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">Medium-Term Goals</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Bifuna Savings Account</h3>
              <p className="text-xs text-gray-600 mt-2">Earn 0.5% interest per month with structured withdrawal intervals to protect your capital building reserves.</p>
            </div>
            <button onClick={() => alert('Opening Bifuna Savings application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition cursor-pointer">
              Open Account
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase">High-Yield Returns</span>
              <h3 className="text-xl font-bold text-[#7B2CBF] mt-1">Harvest Supersave</h3>
              <p className="text-xs text-gray-600 mt-2">Term deposits earning up to 15% annual interest or up to 40% returns over a 2-year lock period.</p>
            </div>
            <button onClick={() => alert('Opening Harvest Supersave application...')} className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition cursor-pointer">
              Invest Now
            </button>
          </div>
        </div>
      )}

      {/* Tab Content 2: Loan Facilities & Calculator */}
      {activeTab === 'loans' && (
        <div className="space-y-12">
          {/* Interactive Loan Calculator placed right here on the Loans page */}
          <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-xl border border-purple-100">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF6600] bg-orange-50 rounded-full mb-2">
                Interactive Financial Tool
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#7B2CBF]">Loan Repayment Calculator</h2>
              <p className="text-sm text-gray-600 mt-1">Simulate your borrowing amounts, tenure, and adjustable interest rates.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-700">I want to Borrow</label>
                    <span className="text-base font-bold text-[#7B2CBF]">{formatUGX(amount)}</span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="50000000"
                    step="500000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-purple-100 rounded-lg appearance-none cursor-pointer accent-[#FF6600]"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-700">Repayment Period</label>
                    <span className="text-base font-bold text-[#7B2CBF]">{months} Months</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="36"
                    step="1"
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="w-full h-2 bg-purple-100 rounded-lg appearance-none cursor-pointer accent-[#FF6600]"
                  />
                </div>

                <div className="rounded-lg bg-purple-50 p-4 border border-purple-100 flex items-center justify-between">
                  <label className="text-xs text-purple-900 font-semibold uppercase tracking-wider">Interest Rate (% p.a.)</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    step="0.5"
                    value={interestRateAnnual}
                    onChange={(e) => setInterestRateAnnual(e.target.value)}
                    className="w-20 rounded-md border border-purple-300 bg-white px-3 py-1.5 text-right text-lg font-bold text-[#7B2CBF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="rounded-xl bg-[#7B2CBF] text-white p-6 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-purple-200 mb-4">Repayment Breakdown</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-purple-200">Estimated Monthly Payment</div>
                      <div className="text-3xl font-extrabold text-[#FF6600] mt-1">{formatUGX(monthlyPayment)}</div>
                    </div>
                    <div className="border-t border-purple-800 pt-3">
                      <div className="text-xs text-purple-200">Total Credit Cost</div>
                      <div className="text-lg font-bold text-white mt-0.5">{formatUGX(totalRepayment)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 8 Loan Cards */}
          <div>
            <h3 className="text-2xl font-bold text-[#7B2CBF] mb-6">All Loan Facilities & Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loansList.map((loan) => (
                <div key={loan.id} className="bg-white rounded-xl p-6 shadow border border-purple-100 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#FF6600] uppercase">{loan.category}</span>
                    <h4 className="text-lg font-bold text-[#7B2CBF] mt-1">{loan.title}</h4>
                    <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                      {loan.terms.map((term, i) => (
                        <li key={i}>• {term}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setSelectedLoan(loan)}
                    className="mt-6 w-full rounded-lg bg-[#FF6600] py-2.5 text-xs font-bold text-white hover:bg-[#e05a00] transition cursor-pointer shadow"
                  >
                    Apply For This Loan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 3: Investments & Land */}
      {activeTab === 'investments' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-900 text-white rounded-xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6600] rounded-full">Real Estate</span>
              <h3 className="text-2xl font-bold mt-4">Strategic Land Investment & Sales</h3>
              <p className="text-sm text-purple-200 mt-3">Secure title-ready land parcels in prime corridors across Uganda with verified titles.</p>
            </div>
            <button onClick={() => alert('Inquiring about land...')} className="mt-8 rounded-lg bg-[#FF6600] px-6 py-3 text-sm font-bold text-white hover:bg-[#e05a00] cursor-pointer">
              View Available Land
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7B2CBF] bg-purple-50 rounded-full">Shareholding</span>
              <h3 className="text-2xl font-bold text-[#7B2CBF] mt-4">Member Shares & Dividends</h3>
              <p className="text-sm text-gray-600 mt-3">Purchase shares at UGX 20,000/= each to qualify for annual dividends and voting rights.</p>
            </div>
            <button onClick={() => alert('Inquiring about shares...')} className="mt-8 rounded-lg border border-[#7B2CBF] px-6 py-3 text-sm font-bold text-[#7B2CBF] hover:bg-purple-50 cursor-pointer">
              Learn About Shares
            </button>
          </div>
        </div>
      )}

      {/* Pop-up Application Modal */}
      {selectedLoan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-t-4 border-[#FF6600] space-y-4 animate-fadeIn">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <div>
                <span className="text-xs font-bold text-[#FF6600] uppercase">Application Portal</span>
                <h3 className="text-xl font-bold text-[#7B2CBF]">{selectedLoan.title}</h3>
              </div>
              <button
                onClick={() => setSelectedLoan(null)}
                className="text-gray-400 hover:text-gray-700 text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-gray-600">
              Please enter your member details below to initiate your application. Our credit team will contact you within 72 hours.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert(`Application submitted successfully for ${selectedLoan.title}!`); setSelectedLoan(null); }} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Full Name (as per ID)</label>
                <input required type="text" placeholder="Enter your full name" className="w-full rounded-md border border-gray-300 p-2.5 focus:border-[#7B2CBF] focus:outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input required type="tel" placeholder="07XX XXX XXX" className="w-full rounded-md border border-gray-300 p-2.5 focus:border-[#7B2CBF] focus:outline-none" />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Requested Amount (UGX)</label>
                  <input required type="number" placeholder="e.g. 5000000" className="w-full rounded-md border border-gray-300 p-2.5 focus:border-[#7B2CBF] focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">National ID (NIN)</label>
                <input required type="text" placeholder="CMXXXXXXXXXXXX" className="w-full rounded-md border border-gray-300 p-2.5 focus:border-[#7B2CBF] focus:outline-none" />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full rounded-lg bg-[#FF6600] py-3 text-center text-sm font-bold text-white shadow hover:bg-[#e05a00] transition cursor-pointer">
                  Submit Loan Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}