"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel } from "./ui/SectionLabel";
import HTwoTextAnimation from "./HTwoTextAnimation";

// Register the useGSAP plugin
gsap.registerPlugin(useGSAP);

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  isExpanded?: boolean;
  image?: string;
  tags?: string[];
}

const Services = () => {
  const [expandedService, setExpandedService] = useState<string>("01");
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const services: ServiceItem[] = [
    {
      id: "01",
      number: "01",
      title: "Accounts, Audit & Assurance",
      description:
        "Bookkeeping, reporting, and assurance services to keep your finances accurate, compliant, and audit-ready.",
      image: "/images/services/service-1.png",
      tags: [
        "Bookkeeping",
        "Financial Statements",
        "Internal Audit",
        "Payroll",
        "Assurance",
      ],
    },
    {
      id: "02",
      number: "02",
      title: "Taxation & Compliance Services",
      description:
        "Tax filing, compliance, and advisory support for individuals and corporations—delivered with precision and clarity.",
      image: "/images/services/service-4.png",
      tags: [
        "e-TIN Registration",
        "Tax Filing",
        "Tax Planning",
        "Withholding Tax",
        "Audit Support",
      ],
    },
    {
      id: "03",
      number: "03",
      title: "VAT & Indirect Tax Services",
      description:
        "VAT registration, monthly returns, and ongoing compliance management to reduce risk and streamline reporting.",
      image: "/images/services/service-2.png",
      tags: [
        "VAT Registration",
        "Monthly Returns",
        "Compliance",
        "VAT Planning",
        "Audit Support",
      ],
    },
    {
      id: "04",
      number: "04",
      title: "Company Registration & RJSC",
      description:
        "Company formation, statutory filings, and corporate secretarial support to keep your RJSC obligations on track.",
      image: "/images/services/service-3.png",
      tags: [
        "Company Formation",
        "Post-Incorporation",
        "Annual Compliance",
        "Secretarial Support",
        "Closure Services",
      ],
    },
  ];

  // GSAP animation functions
  const { contextSafe } = useGSAP({
    scope: containerRef,
  });

  const animateExpand = contextSafe((serviceId: string) => {
    const content = contentRefs.current[serviceId];
    const arrow = containerRef.current?.querySelector(
      `[data-arrow="${serviceId}"]`
    );

    if (content && arrow) {
      const tl = gsap.timeline({
        onComplete: () => {
          // Clear will-change after animation completes for better performance
          gsap.set(content, { willChange: "auto" });
          gsap.set(content.querySelectorAll(".animate-in"), {
            willChange: "auto",
          });
          gsap.set(arrow, { willChange: "auto" });
        },
      });

      // Set will-change before animation starts
      gsap.set([content, arrow], { willChange: "height, opacity, transform" });
      gsap.set(content.querySelectorAll(".animate-in"), {
        willChange: "transform, opacity",
      });

      // Animate content expansion
      tl.to(content, {
        height: "auto",
        autoAlpha: 1,
        duration: 0.6,
        ease: "power2.out",
      })
        // Animate arrow rotation
        .to(
          arrow,
          {
            rotation: -45,
            duration: 0.4,
            ease: "power2.out",
          },
          0
        )
        // Animate inner elements with stagger
        .fromTo(
          content.querySelectorAll(".animate-in"),
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.2
        );
    }
  });

  const animateCollapse = contextSafe((serviceId: string) => {
    const content = contentRefs.current[serviceId];
    const arrow = containerRef.current?.querySelector(
      `[data-arrow="${serviceId}"]`
    );

    if (content && arrow) {
      // Instant collapse without animations
      gsap.set(content, { height: 0, autoAlpha: 0, willChange: "auto" });
      gsap.set(content.querySelectorAll(".animate-in"), {
        y: 20,
        autoAlpha: 0,
        willChange: "auto",
      });
      gsap.set(arrow, { rotation: 0, willChange: "auto" });
    }
  });

  const toggleService = contextSafe((serviceId: string) => {
    const newExpandedService = expandedService === serviceId ? "" : serviceId;

    // Collapse current expanded service
    if (expandedService && expandedService !== serviceId) {
      animateCollapse(expandedService);
    }

    // Expand new service or collapse current
    if (newExpandedService) {
      // Small delay to ensure previous collapse starts
      gsap.delayedCall(
        expandedService && expandedService !== serviceId ? 0.2 : 0,
        () => {
          animateExpand(serviceId);
        }
      );
    } else if (expandedService === serviceId) {
      animateCollapse(serviceId);
    }

    setExpandedService(newExpandedService);
  });

  // Initialize animations on mount - only run once
  useGSAP(
    () => {
      // Set initial states for all content sections
      services.forEach((service) => {
        const content = contentRefs.current[service.id];
        if (content) {
          if (service.id === "01") {
            // Set first service as expanded by default
            gsap.set(content, {
              height: "auto",
              autoAlpha: 1,
              willChange: "auto",
            });
            gsap.set(content.querySelectorAll(".animate-in"), {
              y: 0,
              autoAlpha: 1,
              willChange: "auto",
            });
            const arrow = containerRef.current?.querySelector(
              `[data-arrow="${service.id}"]`
            );
            if (arrow) {
              gsap.set(arrow, { rotation: -45, willChange: "auto" });
            }
          } else {
            // Set other services as collapsed
            gsap.set(content, {
              height: 0,
              autoAlpha: 0,
              willChange: "height, opacity",
            });
            gsap.set(content.querySelectorAll(".animate-in"), {
              y: 20,
              autoAlpha: 0,
              willChange: "transform, opacity",
            });
            const arrow = containerRef.current?.querySelector(
              `[data-arrow="${service.id}"]`
            );
            if (arrow) {
              gsap.set(arrow, { rotation: 0, willChange: "transform" });
            }
          }
        }
      });

      // Cleanup function to remove will-change when component unmounts
      return () => {
        services.forEach((service) => {
          const content = contentRefs.current[service.id];
          if (content) {
            gsap.set(content, { willChange: "auto" });
            gsap.set(content.querySelectorAll(".animate-in"), {
              willChange: "auto",
            });
            const arrow = containerRef.current?.querySelector(
              `[data-arrow="${service.id}"]`
            );
            if (arrow) {
              gsap.set(arrow, { willChange: "auto" });
            }
          }
        });
      };
    },
    { scope: containerRef, dependencies: [] }
  ); // Explicitly set empty dependencies to ensure it only runs once

  return (
    <section className="bg-white w-full">
      <div className="flex flex-col items-start px-4 py-12 gap-8 md:px-[120px] md:py-[100px] md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-start self-stretch gap-4 md:flex-row md:items-center md:gap-6">
          <SectionLabel label="SERVICES" lineWidth="w-[191px]" />
          <HTwoTextAnimation
            text="Professional Services for Your Success"
            highlightStart="Professional Services"
            highlightEnd="for Your Success"
            className="font-urbanist md:max-w-xl font-semibold text-[40px] leading-[48px] md:text-[64px] md:leading-[77px] tracking-[-1.6px] md:tracking-[-2.56px] w-full"
          />
        </div>

        {/* Services List */}
        <div
          ref={containerRef}
          className="flex flex-col items-start self-stretch gap-8 md:gap-12"
        >
          {services.map((service, index) => {
            const isExpanded = expandedService === service.id;
            return (
              <React.Fragment key={service.id}>
                {/* Service Item - Unified Structure */}
                <div className="flex flex-col items-start self-stretch gap-6 md:gap-10">
                  {/* Service Header */}
                  <div
                    className="flex flex-col md:flex-row md:items-end self-stretch cursor-pointer group gap-4 md:gap-8"
                    onClick={() => toggleService(service.id)}
                  >
                    {/* Header Section */}
                    <div className="flex items-center gap-5 md:gap-[72px] md:w-[687px]">
                      <p className="font-urbanist font-medium text-lg md:text-2xl leading-[25px] md:leading-[34px] text-[#535967] w-[31px]">
                        {service.number}
                      </p>
                      <p className="flex-grow font-urbanist font-bold text-2xl md:text-[40px] leading-6 md:leading-10 tracking-[-0.96px] md:tracking-[-1.6px] text-[#0d1321]">
                        {service.title}
                      </p>
                    </div>

                    {/* Description Section */}
                    <div className="flex items-end justify-between gap-4 md:flex-row md:gap-[47px]">
                      <p className="font-urbanist text-base md:text-xl leading-6 md:leading-7 text-[#535967] md:w-[378px] flex-grow">
                        {service.description}
                      </p>
                      <div
                        className={`inline-flex items-center rounded-full border-2 transition-all duration-300 p-1 md:p-1.5 ${
                          isExpanded
                            ? "bg-[#204199] border-[#204199]"
                            : "border-[#4d67ad] bg-[#eef8ff] group-hover:bg-[#204199]"
                        }`}
                      >
                        <svg
                          data-arrow={service.id}
                          width="32"
                          height="32"
                          viewBox="0 0 40 40"
                          fill="none"
                          className="md:w-10 md:h-10 transition-colors duration-300"
                        >
                          <path
                            d="M13.3333 26.6667L26.6667 13.3333M26.6667 13.3333H16.6667M26.6667 13.3333V23.3333"
                            stroke={isExpanded ? "#ffffff" : "#204199"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:stroke-white transition-colors duration-300"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div
                    ref={(el) => {
                      contentRefs.current[service.id] = el;
                    }}
                    className="flex flex-col md:flex-row md:items-end self-stretch gap-4 md:gap-[135px] overflow-hidden"
                    style={{ height: 0 }}
                  >
                    {/* Image */}
                    <div className="flex flex-col items-center md:items-end justify-center w-full md:w-[584px] animate-in">
                      {service.image && (
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={481}
                          height={200}
                          className="rounded-xl object-cover w-full md:w-[481px] h-[200px]"
                        />
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-col items-start gap-3 md:gap-4 animate-in">
                      {service.tags && (
                        <>
                          {/* First Row */}
                          <div className="flex flex-wrap items-center gap-2 animate-in">
                            {service.tags.slice(0, 2).map((tag, tagIndex) => (
                              <div
                                key={tagIndex}
                                className="inline-flex items-center rounded-full border border-[#dde2eb] px-3 py-1 bg-gradient-to-r from-[#2041991a] to-[#ffffff1a]"
                              >
                                <p className="font-urbanist text-sm md:text-base leading-6 text-[#535967]">
                                  {tag}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Second Row */}
                          {service.tags.length > 2 && (
                            <div className="flex flex-wrap items-center gap-2 animate-in">
                              {service.tags.slice(2, 5).map((tag, tagIndex) => (
                                <div
                                  key={tagIndex + 2}
                                  className="inline-flex items-center rounded-full border border-[#dde2eb] px-3 py-1 bg-gradient-to-r from-[#2041991a] to-[#ffffff1a]"
                                >
                                  <p className="font-urbanist text-sm md:text-base leading-6 text-[#535967]">
                                    {tag}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                {index < services.length - 1 && (
                  <div
                    className="self-stretch"
                    style={{ height: "1px", backgroundColor: "#dde2eb" }}
                  ></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
