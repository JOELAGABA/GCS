export default function Footer() {
  return (
    <footer className="bg-[#5B21B6] text-white pt-12 pb-8 border-t-4 border-[#FF6600]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & License */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF6600] font-bold text-white text-lg">
                GCS
              </span>
              <div>
                <h3 className="font-bold text-base text-white">Glory Cooperative</h3>
                <span className="text-xs text-purple-200">Savings & Credit Society Ltd</span>
              </div>
            </div>
            <p className="text-xs text-purple-200 leading-relaxed">
              Your trusted financial partner, ensuring growth and success through high-yield savings, affordable loans, and land investments.
            </p>
            <div className="rounded-md bg-purple-900/60 p-2.5 text-[11px] text-purple-200 border border-purple-700">
              <strong className="text-white block">UMRA Licensed:</strong>
              Reg No. UMRA02237SACCO
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FF6600] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-purple-200">
              <li><a href="#about" className="hover:text-white transition">About Our Cooperative</a></li>
              <li><a href="#accounts" className="hover:text-white transition">Savings Accounts</a></li>
              <li><a href="#loans" className="hover:text-white transition">Loan Products</a></li>
              <li><a href="#branches" className="hover:text-white transition">Branch Network</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Accounts & Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FF6600] mb-4">Savings & Credit</h4>
            <ul className="space-y-2 text-xs text-purple-200">
              <li>Ordinary Savings Account</li>
              <li>Bifuna Account (0.5%/mo)</li>
              <li>Harvest Supersave (Up to 15% p.a.)</li>
              <li>Junior Account (&lt; 18 yrs)</li>
              <li>Business & School Fees Loans</li>
              <li>Land Investment & Sales</li>
            </ul>
          </div>

          {/* Col 4: Contact & Branches */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FF6600] mb-4">Branch Helpline</h4>
            <div className="space-y-3 text-xs text-purple-200">
              <div>
                <strong className="text-white block">Call/WhatsApp:</strong>
                <a href="tel:0786367115" className="text-[#FF6600] font-bold hover:underline text-sm">0786-367-115</a>
              </div>
              <div>
                <strong className="text-white block">Main Branches:</strong>
                <span>Kawaala • Kasubi • Kasangati</span>
              </div>
              {/* Social Media Links */}
              <div>
                <strong className="text-white block mb-2">Connect With Us:</strong>
                <div className="flex gap-3">
                  <a href="#facebook" className="h-8 w-8 rounded-full bg-purple-800 flex items-center justify-center hover:bg-[#FF6600] transition">FB</a>
                  <a href="#x" className="h-8 w-8 rounded-full bg-purple-800 flex items-center justify-center hover:bg-[#FF6600] transition">X</a>
                  <a href="#youtube" className="h-8 w-8 rounded-full bg-purple-800 flex items-center justify-center hover:bg-[#FF6600] transition">YT</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300 gap-4">
          <p>© {new Date().getFullYear()} Glory Co-operative Savings and Credit Society Limited. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
} 
