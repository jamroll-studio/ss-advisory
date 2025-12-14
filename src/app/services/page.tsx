import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import CoreValues from "@/components/services/CoreValues";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title:
    "Accounting, Tax, VAT & RJSC Services - SS Advisory | Professional Business Solutions",
  description:
    "Comprehensive accounting, tax, VAT, and RJSC services including bookkeeping, financial reporting, return preparation, audit support, and statutory compliance. Professional support tailored to your business needs.",
  keywords:
    "accounting services, bookkeeping, financial reporting, payroll processing, tax services, tax compliance, tax planning, VAT services, VAT compliance, VAT return, RJSC services, company formation, statutory compliance, audit support",

  openGraph: {
    title:
      "Accounting, Tax, VAT & RJSC Services - SS Advisory | Professional Business Solutions",
    description:
      "Comprehensive accounting, tax, VAT, and RJSC services including bookkeeping, return preparation, and audit support.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Accounting, Tax, VAT & RJSC Services - SS Advisory | Professional Business Solutions",
    description:
      "Comprehensive accounting, tax, VAT, and RJSC services including bookkeeping, return preparation, and audit support.",
  },
};

const ServicesPage = () => {
  const services = [
    {
      title: "Taxation & Compliance Services",
      description:
        "End-to-end tax compliance, filing, and advisory support for individuals and corporations.",
      features: [
        "e-TIN registration and basic compliance",
        "Individual and corporate tax filing",
        "Corporate tax compliance",
        "Tax advisory and tax planning",
        "e-Return preparation and submission",
        "Corporate withholding tax return preparation",
        "Tax audit support, hearing, and assessment",
      ],
      image: "/images/services/service-4.png",
    },
    {
      title: "VAT & Indirect Tax Services",
      description:
        "Practical VAT support from registration to monthly returns and audit assistance.",
      features: [
        "VAT registration and basic compliance",
        "Monthly VAT return preparation and submission",
        "VAT compliance management",
        "VAT audit support, hearing, and assessment",
        "VAT planning and advisory",
        "Sector-specific VAT solutions",
      ],
      image: "/images/services/service-2.png",
    },
    {
      title: "Accounts, Audit & Assurance",
      description:
        "Reliable bookkeeping, reporting, and assurance services that strengthen financial control.",
      features: [
        "Accounting and bookkeeping services",
        "Financial statement preparation and reporting",
        "Internal audit and internal control review",
        "Management and cost accounting",
        "Payroll processing and compliance accounting",
        "Specialized assurance and certification",
      ],
      image: "/images/services/service-1.png",
    },
    {
      title: "Company Registration & RJSC",
      description:
        "Complete RJSC support for incorporation, statutory filings, and corporate secretarial services.",
      features: [
        "Company formation and registration",
        "Post-incorporation services",
        "Annual and statutory compliance",
        "Partnership and society registration",
        "Corporate secretarial support",
        "Winding up and closure services",
        "Specialized RJSC services",
      ],
      image: "/images/services/service-3.png",
    },
  ];

  const coreValues = [
    {
      icon: "/images/meh65pgq-0jv0fmr.svg",
      title: "Accuracy & Precision",
      description:
        "We maintain the highest standards of accuracy in all accounting, tax, and compliance work to ensure your business stays on track.",
    },
    {
      icon: "/images/meh65pgq-3dijsh8.svg",
      title: "Transparent Communication",
      description:
        "Clear, honest communication about your financial position, tax obligations, and compliance requirements helps you make informed business decisions.",
    },
    {
      icon: "/images/meh65pgq-3qqmufv.svg",
      title: "Regulatory Compliance",
      description:
        "We stay current with all tax laws and regulations to ensure your business remains compliant and avoids costly penalties.",
    },
    {
      icon: "/images/meh65pgq-5h8z45g.svg",
      title: "Proactive Advisory",
      description:
        "We provide forward-thinking advice and strategic planning to help your business grow while maintaining financial health.",
    },
    {
      icon: "/images/meh65pgq-7z52jg9.svg",
      title: "Technology-Driven Solutions",
      description:
        "Our modern accounting systems and digital processes ensure efficient, secure, and accessible financial management.",
    },
    {
      icon: "/images/meh65pgq-9tvih1a.svg",
      title: "Comprehensive Support",
      description:
        "We provide end-to-end accounting and tax services, from daily bookkeeping to strategic business planning and compliance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesList services={services} />
      <Testimonials />
      <CoreValues coreValues={coreValues} />
    </div>
  );
};

export default ServicesPage;
