import { Phone } from "lucide-react";

interface ServicesFooterProps {
  className?: string;
}

export default function ServicesFooter({
  className = "",
}: ServicesFooterProps) {
  return (
    <>
      {/* Footer Section */}
      <section
        className={`bg-[#0d1321] text-white py-16 md:py-20 ${className}`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - CTA */}
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
                Let&apos;s discuss how our strategic solutions can drive your
                success.
              </p>
              <button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-4 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-colors">
                Get Started Today
              </button>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#ff6b35]" />
                    <span className="text-xs sm:text-sm md:text-base">
                      +880 1752-143459
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#ff6b35]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base">
                      contact@ssadvisorybd.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#ff6b35]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base">
                      House 654 (3rd Floor), Road 09 Mirpur DOHS
                      <br />
                      Dhaka 1216, Bangladesh
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-4">
                  Our Services
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm md:text-base text-gray-300">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#ff6b35] transition-colors"
                    >
                      Accounts, Audit & Assurance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#ff6b35] transition-colors"
                    >
                      Taxation & Compliance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#ff6b35] transition-colors"
                    >
                      VAT & Indirect Tax
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#ff6b35] transition-colors"
                    >
                      Company Registration & RJSC
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="bg-[#0a0f1a] text-gray-400 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm md:text-base">
              &copy; 2025 SS Advisory. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs sm:text-sm md:text-base">
              <a href="#" className="hover:text-[#ff6b35] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#ff6b35] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#ff6b35] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
