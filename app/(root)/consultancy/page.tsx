import { ConsultationForm } from "@/components/ConsultationForm";
import { ProcessStepCard } from "@/components/ProcessStepCard";
import { ServiceCard } from "@/components/ServiceCard";
import { mockProcessSteps, mockServices } from "@/lib/mockData";
import Link from "next/link";

export const metadata = {
  title: "Consultancy Services",
  description:
    "Partner with KainosEdge for tailored research, data analysis, and policy advisory services. Request a consultation with our expert team.",
  openGraph: {
    title: "Consultancy Services | KainosEdge",
    description:
      "Partner with KainosEdge for tailored research, data analysis, and policy advisory services. Request a consultation with our expert team.",
    url: "https://kainosedge.org/consultancy",
  },
  twitter: {
    title: "Consultancy Services | KainosEdge",
    description:
      "Partner with KainosEdge for tailored research, data analysis, and policy advisory services. Request a consultation with our expert team.",
  },
};

export default function ConsultancyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full bg-super-admin-accent-50 px-6 lg:px-16 py-8">
        <div className="mx-auto w-full">
          <h1 className="text-3xl md:text-[40px] font-semibold text-text-header font-fraunces mb-2">
            Consult With Us
          </h1>
          <p className="text-base md:text-lg text-text-body font-dm-sans mb-4">
            Partner with our expert team for tailored research, data analysis,
            and policy advisory services designed for institutional excellence.
          </p>
          <Link
            href="#consultation-form"
            className="inline-flex h-13 items-center rounded-3xl bg-primary-500 px-5 font-dm-sans font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Request Consultation
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <section className="w-full px-6 py-16 md:py-20 lg:px-16 lg:py-24 bg-primary-50">
        <div className="mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[40px] tracking-tight font-semibold text-text-header font-fraunces mb-4">
              Our Services
            </h2>
            <p className="text-base text-text-body font-dm-sans">
              Comprehensive consulting services tailored to your
              institution&apos;s needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {mockServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full px-6 lg:px-16 py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[40px] tracking-tight font-semibold text-text-header font-fraunces mb-3">
              How We Work
            </h2>
          </div>

          {/* Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-0 relative">
            {mockProcessSteps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col w-full items-center relative"
              >
                {/* Connector Line */}
                {index < mockProcessSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[65%] w-[calc(70%+5px)] h-0.5 bg-primary-500" />
                )}

                <ProcessStepCard step={step} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section
        id="consultation-form"
        className="w-full scroll-mt-24 px-6 lg:px-16 py-16 md:py-20 lg:py-24 bg-primary-50"
      >
        <div className="max-w-200 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[40px] tracking-tight font-semibold text-text-header font-fraunces mb-4">
              Request a Consultation
            </h2>
            <p className="text-[15px] text-text-body font-dm-sans">
              Tell us about your project and we&apos;ll get back to you within
              24 hours
            </p>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-[20px] border border-border-default">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
