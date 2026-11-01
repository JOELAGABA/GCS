import { useState } from 'react'

export default function LoanCalculator() {
  const [amount, setAmount] = useState(5000000) // 5M UGX default
  const [months, setMonths] = useState(12) // 12 months default
  const interestRateAnnual = 20 // 20% nominal rate from your notebook sketch

  // Simple monthly calculation formula
  const monthlyInterestRate = interestRateAnnual / 100 / 12
  const totalInterest = amount * monthlyInterestRate * (months / 2) // estimation or standard reducing balance approximation
  const totalRepayment = amount + totalInterest
  const monthlyPayment = totalRepayment / months

  const formatUGX = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'UGX', maximumFractionDigits: 0 }).format(val).replace('UGX', 'UGX ')
  }

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 sm:p-10 shadow-xl border border-purple-100">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF6600] bg-orange-50 rounded-full mb-2">
            NCBA-Inspired Financial Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#7B2CBF]">Interactive Loan Calculator</h2>
          <p className="text-sm text-gray-600 mt-1">Estimate your monthly installments and plan your financial growth.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Sliders Container */}
          <div className="space-y-6">
            {/* Amount Slider */}
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
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>UGX 500k</span>
                <span>UGX 50M</span>
              </div>
            </div>

            {/* Duration Slider */}
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
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>3 Months</span>
                <span>36 Months</span>
              </div>
            </div>

            <div className="rounded-lg bg-purple-50 p-4 border border-purple-100">
              <div className="text-xs text-purple-800 font-medium">Nominal Interest Rate</div>
              <div className="text-lg font-bold text-[#7B2CBF]">{interestRateAnnual}% Per Annum</div>
            </div>
          </div>

          {/* Results Summary Box */}
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

            <button
              onClick={() => alert('Redirecting to loan application form...')}
              className="mt-8 w-full rounded-lg bg-[#FF6600] py-3 text-center text-sm font-bold text-white shadow hover:bg-[#e05a00] transition"
            >
              Apply For This Loan Now
            </button>
          </div>
        </div>

        {/* Disclaimer matching your notebook sketch */}
        <div className="mt-8 border-t border-gray-100 pt-4 text-xs text-gray-500 leading-relaxed">
          <strong>Disclaimer:</strong> This installment amount is based on the loan product and term selected by you and is provided for illustration purposes only. Actual rates and terms are subject to final cooperative credit appraisal.
        </div>
      </div>
    </section>
  )
}