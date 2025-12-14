import Image from "next/image";
import HTwoTextAnimation from "./HTwoTextAnimation";

const Footer = () => {
  return (
    <footer className="bg-[#0d1321] px-6 py-16 lg:px-[120px] lg:py-[100px] w-full">
      <div className="max-w-[1440px] mx-auto">
        {/* Main Content */}
        <div className="flex flex-col gap-10 lg:gap-12">
          {/* Header Section */}
          <div className="flex relative flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-0">
            <HTwoTextAnimation
              dark
              text="Let's make something great work together"
              className="w-full"
            />
            <div className="flex-shrink-0 absolute right-0 -top-10 w-32 h-32 lg:w-[200px] lg:h-[200px] self-start lg:self-center">
              <Image
                src="/images/megz9w7k-m7yknei.svg"
                alt="Arrow icon"
                width={200}
                height={200}
                className="w-full h-full "
              />
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Services Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-urbanist text-xl font-semibold leading-7">
                Services
              </h3>
              <div className="flex flex-col gap-3">
                <p className="text-white/80 font-urbanist text-lg leading-[25px]">
                  Accounts, Audit & Assurance
                </p>
                <p className="text-white/80 font-urbanist text-lg leading-[25px]">
                  Taxation & Compliance
                </p>
                <p className="text-white/80 font-urbanist text-lg leading-[25px]">
                  VAT & Indirect Tax
                </p>
                <p className="text-white/80 font-urbanist text-lg leading-[25px]">
                  Company Registration & RJSC
                </p>
              </div>
            </div>

            {/* Useful Links Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-urbanist text-xl font-semibold leading-7">
                Useful link
              </h3>
              <div className="flex flex-col gap-3">
                <p className="text-white/80 font-urbanist text-lg leading-[25px]">
                  Home
                </p>
                <p className="text-white/80 font-urbanist text-lg leading-[25px]">
                  About Us
                </p>
                <p className="text-white/80 font-urbanist text-lg leading-[25px]">
                  Testimonials
                </p>
                <p className="text-white/80 font-urbanist text-lg leading-[25px]">
                  Contact US
                </p>
              </div>
            </div>

            {/* Call Us Column */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/megz9w7k-r5s09p8.svg"
                  alt="Phone icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <h3 className="text-white font-urbanist text-xl font-semibold leading-7">
                  Call Us
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-white/80 font-urbanist text-lg leading-[25px]">
                  +880 1752-143459
                </p>
              </div>
            </div>

            {/* Send Email Column */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/megz9w7k-cow5b19.svg"
                  alt="Email icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <h3 className="text-white font-urbanist text-xl font-semibold leading-7">
                  Send a Email
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-white/80 font-urbanist text-lg leading-[25px]">
                  contact@ssadvisorybd.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/10 my-10"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0">
          <p className="text-white/80 font-urbanist text-center text-lg leading-[25px] max-w-[280px] mx-auto lg:mx-0">
            Copyright © 2025 SS Advisory
          </p>

          <div className="flex flex-col items-center gap-4">
            <p className="text-white font-urbanist text-lg leading-[25px] text-center">
              FOLLOW US
            </p>
            <Image
              src="/images/megz9w7k-uh57986.svg"
              alt="Social media icons"
              width={128}
              height={32}
              className="w-32 h-8"
            />
          </div>

          <div className="text-white/80 font-urbanist text-lg w-full leading-[25px] md:max-w-[280px] text-center md:text-center lg:text-right">
            <p>Made with Love by Jamroll Studio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
