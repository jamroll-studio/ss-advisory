"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import ImageRevealAnimation from "../ImageRevealAnimation";
import SectionLabel from "../ui/SectionLabel";
import HTwoTextAnimation from "../HTwoTextAnimation";

interface Service {
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface ServicesListProps {
  services: Service[];
  className?: string;
}

const ServicesList: React.FC<ServicesListProps> = ({
  services,
  className = "",
}) => {
  return (
    <section
      className={`bg-[#f8f8f8] overflow-hidden px-4 md:px-[120px] py-16 md:py-[100px] ${className}`}
    >
      <div className="flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-6">
          {/* Section Title */}
          <SectionLabel label="SERVICES" lineWidth="w-[100px] md:w-[191px]" />

          {/* Main Title */}
          <div className="flex-1">
            <HTwoTextAnimation
              text="Expertise You Can Trust"
              className="w-[250px] md:w-full"
            />
          </div>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-8 md:gap-12">
          {services.map((service, index) => (
            <div key={index}>
              <div className="flex flex-col gap-6 md:gap-9">
                {/* Service Header */}
                <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-[71px]">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[72px] md:w-[616px]">
                    <span className="text-xl md:text-2xl font-medium text-[#535967] md:w-[31px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <HTwoTextAnimation
                      className="text-xl md:text-[40px] md:leading-[40px] md:tracking-[-1.6px] font-bold text-[#0d1321] flex-1"
                      text={service.title}
                    />
                  </div>
                  <p className="text-sm md:text-lg lg:text-xl lg:leading-7 text-[#535967] md:w-[513px] md:mb-3">
                    {service.description}
                  </p>
                </div>

                {/* Service Content */}
                <div className="flex flex-col justify-between lg:flex-row gap-8 md:gap-[71px] md:ml-[103px]">
                  {/* Text and Features */}
                  <div className="flex flex-col gap-6 md:gap-10">
                    {/* Features List */}
                    <div className="flex flex-col gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <Check className="w-6 h-6 text-[#204199] flex-shrink-0" />
                          <span className="text-sm md:text-lg lg:text-xl lg:leading-7 text-[#545a62] flex-1 min-w-0 whitespace-normal break-words">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <button className="flex items-center justify-center gap-2 border border-[#204199] bg-[#eef8ff] rounded-xl px-4 py-[15px] w-full md:w-[205px] hover:bg-[#d4e4ff] transition-colors">
                      <ArrowRight className="w-5 h-5 text-[#204199]" />
                      <span className="text-sm md:text-base font-medium text-[#204199]">
                        Learn More
                      </span>
                      <ArrowRight className="w-5 h-5 text-[#204199]" />
                    </button>
                  </div>

                  {/* Service Image */}
                  <div className="flex-shrink-0">
                    <ImageRevealAnimation
                      src={service.image}
                      alt={service.title}
                      className="w-full md:w-[540px] h-[250px] md:h-[332px]"
                      aspectRatio="4 / 3"
                      borderRadius="0.75rem"
                      triggerPosition="top 80%"
                      duration={1.2}
                      ease="power3.out"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <div className="h-px bg-[#dde2eb] mt-8 md:mt-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
export type { Service };
