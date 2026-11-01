import Navbar from './components/Navbar'
import LoanCalculator from './components/LoanCalculator'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#7B2CBF] to-purple-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF6600] rounded-full mb-4">
              Glory Cooperative Society Limited
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Secure Your Financial Future & Investments
            </h1>
            <p className="text-base sm:text-lg text-purple-100 mb-8">
              Trusted savings, cooperative credit facilities, and land investment opportunities tailored for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#calculator"
                className="rounded-lg bg-[#FF6600] px-6 py-3 text-sm font-bold text-white shadow hover:bg-[#e05a00] transition"
              >
                Calculate Loan
              </a>
              <a
                href="#reports"
                className="rounded-lg border border-white px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                2025 Financial Report
              </a>
            </div>
          </div>
        </section>

        {/* Loan Calculator Section */}
        <div id="calculator">
          <LoanCalculator />
        </div>
      </main>
    </div>
  )
}