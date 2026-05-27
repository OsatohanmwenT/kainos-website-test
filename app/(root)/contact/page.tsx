import { ContactForm } from "@/components/ContactForm";
import {
  ClockIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
} from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with KainosEdge for research, data, media, partnership, and consultancy enquiries. We respond within 24 business hours.",
  openGraph: {
    title: "Contact Us | KainosEdge",
    description:
      "Get in touch with KainosEdge for research, data, media, partnership, and consultancy enquiries. We respond within 24 business hours.",
    url: "https://www.kainosedge.com/contact",
  },
  twitter: {
    title: "Contact Us | KainosEdge",
    description:
      "Get in touch with KainosEdge for research, data, media, partnership, and consultancy enquiries. We respond within 24 business hours.",
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const request = Array.isArray(query?.request)
    ? query.request[0]
    : query?.request;
  const itemType = Array.isArray(query?.itemType)
    ? query.itemType[0]
    : query?.itemType;
  const itemId = Array.isArray(query?.itemId) ? query.itemId[0] : query?.itemId;
  const itemTitle = Array.isArray(query?.itemTitle)
    ? query.itemTitle[0]
    : query?.itemTitle;
  const isAccessRequest = request === "access";
  const itemLabel =
    itemType === "dataset" ? "dataset" : itemType === "report" ? "report" : "publication";
  const initialValues = isAccessRequest
    ? {
        serviceName: itemType === "dataset" ? "data-solutions" : "research-reporting",
        projectDescription: itemTitle
          ? `I would like to request access to "${itemTitle}"${
              itemId ? ` (${itemLabel} ID: ${itemId})` : ""
            }.`
          : "I would like to request access to a KainosEdge publication.",
      }
    : undefined;

  return (
    <div className="flex min-h-screen w-full flex-col bg-primary-50">
      <PageHeader
        title="Get in Touch"
        description="Have questions about our research, data, or services? We're here to help."
        bg="bg-super-admin-accent-50"
      />

      <section className="w-full px-6 py-16 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            {/* Contact Information Card */}
            <div className="rounded-[20px] border border-border-default bg-white p-6 shadow-sm md:p-8">
              <h3 className="font-fraunces text-xl font-semibold text-text-header mb-6">
                Contact Information
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 rounded-lg p-3 shrink-0 mt-0.5">
                    <EmailIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-text-label tracking-wider uppercase font-dm-sans mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@kainosedge.com"
                      className="text-semantic-link hover:underline text-[15px] font-dm-sans font-medium"
                    >
                      info@kainosedge.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 rounded-lg p-3 shrink-0 mt-0.5">
                    <PhoneIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-text-label tracking-wider uppercase font-dm-sans mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+2349034292848"
                      className="text-semantic-link hover:underline text-[15px] font-dm-sans font-medium"
                    >
                      09034292848
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 rounded-lg p-3 shrink-0 mt-0.5">
                    <LocationIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-text-label tracking-wider uppercase font-dm-sans mb-1">
                      Address
                    </p>
                    <p className="text-[15px] text-text-body font-dm-sans leading-relaxed font-medium">
                      77 Ademola St., Off Awolowo Rd., Ikoyi, Lagos,
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 rounded-lg p-3 shrink-0 mt-0.5">
                    <ClockIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-text-label tracking-wider uppercase font-dm-sans mb-1">
                      Business Hours
                    </p>
                    <p className="text-[15px] text-text-body font-dm-sans font-medium">
                      Monday - Friday
                    </p>
                    <p className="text-[15px] text-text-body font-dm-sans font-medium">
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="flex overflow-hidden rounded-[20px] bg-primary-100">
              {/* Left accent border */}
              <div className="w-1.5 shrink-0 bg-primary-500 rounded-l-[20px]" />
              <div className="p-6">
                <p className="text-[15px] text-primary-700 font-dm-sans font-medium leading-relaxed italic">
                  <strong className="font-semibold not-italic">
                    Response Time:
                  </strong>{" "}
                  We aim to respond to all inquiries within 24 business hours.
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Direct Contacts Card */}
            <div className="rounded-[20px] border border-border-default bg-white p-6 shadow-sm md:p-8">
              <h3 className="font-fraunces text-xl font-semibold text-text-header mb-6">
                Direct Contacts
              </h3>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="font-semibold text-[15px] font-dm-sans text-text-header mb-1">
                    General Inquiries
                  </p>
                  <p className="text-xs font-dm-sans text-text-label mb-1">
                    Questions about our services or platform
                  </p>
                  <a
                    href="mailto:info@kainosedge.com"
                    className="text-semantic-link hover:underline text-[15px] font-dm-sans font-medium"
                  >
                    info@kainosedge.com
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-[15px] font-dm-sans text-text-header mb-1">
                    Media Relations
                  </p>
                  <p className="text-xs font-dm-sans text-text-label mb-1">
                    Press inquiries and media requests
                  </p>
                  <a
                    href="mailto:info@kainosedge.com"
                    className="text-semantic-link hover:underline text-[15px] font-dm-sans font-medium"
                  >
                    info@kainosedge.com
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-[15px] font-dm-sans text-text-header mb-1">
                    Data Requests
                  </p>
                  <p className="text-xs font-dm-sans text-text-label mb-1">
                    Custom Dataset or data access requests
                  </p>
                  <a
                    href="mailto:info@kainosedge.com"
                    className="text-semantic-link hover:underline text-[15px] font-dm-sans font-medium"
                  >
                    info@kainosedge.com
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-[15px] font-dm-sans text-text-header mb-1">
                    Partnerships
                  </p>
                  <p className="text-xs font-dm-sans text-text-label mb-1">
                    Institutional partnerships and collaborations
                  </p>
                  <a
                    href="mailto:info@kainosedge.com"
                    className="text-semantic-link hover:underline text-[15px] font-dm-sans font-medium"
                  >
                    info@kainosedge.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div id="contact-form" className="scroll-mt-24 lg:col-span-8">
            <div className="rounded-[20px] border border-border-default bg-white p-6 shadow-sm md:p-10 lg:p-12">
              <h2 className="font-fraunces text-3xl md:text-[32px] font-semibold text-text-header mb-8">
                {isAccessRequest ? "Request Access" : "Send Us a Message"}
              </h2>

              <ContactForm
                initialValues={initialValues}
                submitMode={isAccessRequest ? "access-request" : "contact"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
