import { ArrowMoveIcon, SendIcon } from "@/components/icons";
import { PublicationDownloadButton } from "@/components/publications/PublicationFile";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { StatsBand } from "@/components/shared/StatsBand";
import { FadeIn } from "@/components/FadeIn";
import type {
    PublicArticle,
    PublicDataset,
    PublicReport,
} from "@/lib/api/types";
import { ArrowUpRight, Database, SquareKanban } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Research Reports",
    description:
      "Comprehensive analytical reports on economic, social, and policy topics with rigorous methodology and peer review.",
    icon: SquareKanban,
    tone: "bg-semantic-success-500/15 text-semantic-success-900",
  },
  {
    title: "Public Datasets",
    description:
      "Curated, validated datasets covering fiscal, monetary, and socioeconomic indicators with full documentation.",
    icon: Database,
    tone: "bg-admin-accent-50 text-admin-accent-500",
  },
  {
    title: "Consultancy Services",
    description:
      "Custom research and data analysis projects tailored to your institution's specific strategic needs.",
    icon: ArrowMoveIcon,
    tone: "bg-primary-100 text-primary-700",
  },
];

interface HomePageContentProps {
  featuredReports: PublicReport[];
  featuredDatasets: PublicDataset[];
  latestArticles: PublicArticle[];
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function HeroDashboard() {
  return (
    <>
      <div className="absolute left-0 top-0 z-10 hidden w-36 overflow-hidden rounded-sm bg-white shadow-sm md:block lg:left-6 lg:w-44">
        <Image
          src="/landing/report.png"
          alt="Quarterly analysis report preview"
          width={176}
          height={112}
          sizes="176px"
          className="h-auto w-full"
          style={{ height: "auto" }}
        />
      </div>

      <div className="absolute right-0 top-36 z-10 hidden w-40 overflow-hidden rounded-sm bg-white shadow-sm md:block lg:right-6 lg:w-48">
        <Image
          src="/landing/real-time.png"
          alt="Real-time market index preview"
          width={192}
          height={96}
          sizes="192px"
          className="h-auto w-full"
          style={{ height: "auto" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-150">
        <Image
          src="/landing/dashboard-preview.png"
          alt="KIDMP dashboard preview"
          width={1120}
          height={760}
          priority
          sizes="(min-width: 1024px) 600px, 94vw"
          className="h-auto w-full drop-shadow-2xl"
        />
      </div>
    </>
  );
}

function SectionHeader({
  title,
  href,
  action,
}: {
  title: string;
  href?: string;
  action?: string;
}) {
  return (
    <div className="mb-8 flex items-center justify-between gap-4">
      <h2 className="font-fraunces text-2xl font-semibold text-primary-800 md:text-3xl">
        {title}
      </h2>
      {href && action ? (
        <Link
          href={href}
          className="inline-flex items-center gap-1 font-dm-sans text-sm font-bold text-primary-700 transition-colors hover:text-primary-500"
        >
          {action}
          <ArrowUpRight className="size-4" />
        </Link>
      ) : null}
    </div>
  );
}

function LandingReportCard({ report }: { report: PublicReport }) {
  const authors = Array.isArray(report.authors)
    ? report.authors.join(", ")
    : (report.authors ?? null);
  const dataType = report.stored_items?.data_type ?? null;
  const formattedDate = report.publication_date
    ? formatDate(report.publication_date)
    : null;
  const canDownload = report.is_visible !== false && report.allow_download;
  const accessHref = `/contact?request=access&itemType=report&itemId=${encodeURIComponent(
    report.id
  )}&itemTitle=${encodeURIComponent(report.public_title)}#contact-form`;

  return (
    <article className="flex h-full flex-col rounded-xl border border-border-default bg-primary-50 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
      <div className="flex flex-wrap gap-2">
        {dataType && (
          <span className="w-fit rounded-full bg-primary-100 px-3 py-1 font-dm-sans text-xs font-bold text-primary-700">
            {dataType}
          </span>
        )}
        {!canDownload && (
          <span className="w-fit rounded-full bg-[#FFF4D6] px-3 py-1 font-dm-sans text-xs font-bold text-[#8A6500]">
            Restricted Access
          </span>
        )}
      </div>
      <h3 className="mt-4 font-dm-sans text-lg font-bold text-text-header">
        {report.public_title}
      </h3>
      {report.summary && (
        <p className="mt-3 line-clamp-2 font-dm-sans text-sm leading-6 text-text-body">
          {report.summary}
        </p>
      )}
      <div className="mt-5 flex items-center justify-between font-dm-sans text-xs text-text-body">
        <div>
          {authors && <p className="font-bold text-text-header">{authors}</p>}
          {formattedDate && <p>{formattedDate}</p>}
        </div>
      </div>
      {canDownload ? (
        <PublicationDownloadButton
          publicationId={report.id}
          label="Download Report"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-2xl bg-primary-500 px-5 font-dm-sans text-sm font-bold text-white transition-colors hover:bg-primary-700"
        />
      ) : (
        <a
          href={accessHref}
          className="mt-6 inline-flex h-12 items-center justify-center rounded-2xl bg-primary-500 px-5 font-dm-sans text-sm font-bold text-white transition-colors hover:bg-primary-700"
        >
          Request Access
        </a>
      )}
    </article>
  );
}

function LandingDatasetCard({ dataset }: { dataset: PublicDataset }) {
  const dataType = dataset.stored_items?.data_type ?? null;
  const year = dataset.stored_items?.year?.toString() ?? null;
  const frequency = dataset.stored_items?.frequency ?? null;

  return (
    <article className="flex h-full flex-col rounded-xl border border-border-default bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
      {dataType && (
        <span className="w-fit rounded-full bg-admin-accent-50 px-3 py-1 font-dm-sans text-xs font-bold text-admin-accent-500">
          {dataType}
        </span>
      )}
      <h3 className="mt-4 line-clamp-2 font-dm-sans text-lg font-bold text-text-header">
        {dataset.public_title}
      </h3>
      {dataset.summary && (
        <p className="mt-3 line-clamp-2 font-dm-sans text-sm leading-6 text-text-body">
          {dataset.summary}
        </p>
      )}
      {(year || frequency) && (
        <div className="mt-5 grid grid-cols-2 gap-3 font-dm-sans text-xs">
          {year && (
            <div>
              <p className="font-bold uppercase text-text-label">Year</p>
              <p className="mt-1 font-bold text-text-header">{year}</p>
            </div>
          )}
          {frequency && (
            <div>
              <p className="font-bold uppercase text-text-label">Frequency</p>
              <p className="mt-1 font-bold text-text-header">{frequency}</p>
            </div>
          )}
        </div>
      )}
      <Link
        href="/data"
        className="mt-6 inline-flex h-12 items-center justify-center rounded-2xl border border-primary-500 px-5 font-dm-sans text-sm font-bold text-primary-500 transition-colors hover:bg-primary-50"
      >
        Access Dataset
      </Link>
    </article>
  );
}

function LandingArticleCard({ article }: { article: PublicArticle }) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500";
  const imageUrl = article.image_url ?? fallbackImage;

  return (
    <article className="group flex min-w-0 flex-col">
      <div
        className="aspect-16/10 rounded-xl bg-neutral-100 bg-cover bg-center transition-transform duration-300 group-hover:-translate-y-1"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {(article.category || article.read_time) && (
        <div className="mt-4 flex items-center gap-2 font-dm-sans text-[10px] font-bold uppercase tracking-wide text-primary-700">
          {article.category && <span>{article.category}</span>}
          {article.category && article.read_time && (
            <span className="size-1 rounded-full bg-primary-700" />
          )}
          {article.read_time && <span>{article.read_time} min read</span>}
        </div>
      )}
      <h3 className="mt-3 font-dm-sans text-lg font-bold leading-snug text-text-header transition-colors group-hover:text-primary-700">
        {article.title}
      </h3>
      {article.summary && (
        <p className="mt-2 line-clamp-2 font-dm-sans text-sm leading-6 text-text-body">
          {article.summary}
        </p>
      )}
    </article>
  );
}

export function HomePageContent({
  featuredReports,
  featuredDatasets,
  latestArticles,
}: HomePageContentProps) {
  return (
    <div className="flex min-h-screen flex-col bg-primary-50">
      <section className="relative overflow-visible bg-[#FFFBF4] px-6 pb-0 pt-14 lg:px-16 lg:pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFBF4_0%,#FFFBF4_24%,#FFF8ED_44%,#FDEBC8_74%,#FAD28A_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[72%] bg-[radial-gradient(ellipse_78%_95%_at_50%_100%,rgba(250,210,138,0.68)_0%,rgba(253,235,200,0.46)_44%,rgba(255,248,237,0)_78%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(250,210,138,0.42)_1px,transparent_1px),linear-gradient(to_bottom,rgba(250,210,138,0.42)_1px,transparent_1px)] bg-size-[72px_72px] bg-position-[72px_72px] opacity-80" />

        <div className="relative mx-auto max-w-5xl text-center">
          <FadeIn animation="fade-up">
            <h1 className="mx-auto max-w-5xl font-fraunces text-4xl font-bold leading-tight text-text-header md:text-6xl">
              Data-Driven Insights for Institutional Decision-Making
            </h1>
          </FadeIn>
          <FadeIn animation="fade-up" delay={200}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/consultancy#consultation-form"
                className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-primary-500 px-8 font-dm-sans text-sm font-bold text-white transition-colors hover:bg-primary-700 sm:w-auto"
              >
                Book a Consultancy Session
              </Link>
              <Link
                href="/data"
                className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-primary-500 bg-white/60 px-8 font-dm-sans text-sm font-bold text-primary-700 transition-colors hover:bg-primary-50 sm:w-auto"
              >
                Browse Data
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn
          animation="fade-up"
          delay={400}
          className="relative z-20 mx-auto mt-14 -mb-24 w-full max-w-6xl overflow-visible px-0 md:-mb-32 md:px-12"
        >
          <HeroDashboard />
        </FadeIn>
      </section>

      <section className="relative z-10 w-full bg-primary-50 px-6 pb-16 pt-32 md:pt-40 lg:px-16 lg:pb-20">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-fraunces text-3xl font-semibold text-primary-800 md:text-[40px]">
            What We Do
          </h2>
          <p className="mt-4 font-dm-sans text-base leading-7 text-text-body">
            KainosEdge provides institutional research, data analysis, and
            policy insights to support evidence-based decision-making for
            government agencies, research institutions, and strategic partners.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn
                key={service.title}
                animation="fade-up"
                delay={index * 150}
              >
                <article className="h-full rounded-xl border border-border-default bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1">
                  <div
                    className={`flex size-10 items-center justify-center rounded-full ${service.tone}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-8 font-dm-sans text-xl font-bold text-text-header">
                    {service.title}
                  </h3>
                  <p className="mt-4 font-dm-sans text-sm leading-6 text-text-body">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <FadeIn>
        <StatsBand className="" />
      </FadeIn>

      <section className="w-full bg-primary-50 px-6 py-16 lg:px-16 lg:py-20">
        <FadeIn>
          <SectionHeader
            title="Featured Reports"
            href="/reports"
            action="View All Reports"
          />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-3">
          {featuredReports.map((report, index) => (
            <FadeIn key={report.id} delay={index * 100}>
              <LandingReportCard report={report} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="w-full bg-white px-6 py-16 lg:px-16 lg:py-20">
        <FadeIn>
          <SectionHeader
            title="Featured Datasets"
            href="/data"
            action="Browse All Data"
          />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-3">
          {featuredDatasets.map((dataset, index) => (
            <FadeIn key={dataset.id} delay={index * 100}>
              <LandingDatasetCard dataset={dataset} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="w-full bg-primary-50 px-6 py-16 lg:px-16 lg:py-20">
        <FadeIn>
          <SectionHeader
            title="Latest Insights"
            href="/blog"
            action="Read All Posts"
          />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-3">
          {latestArticles.map((article, index) => (
            <FadeIn key={article.id} delay={index * 100}>
              <LandingArticleCard article={article} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="w-full bg-white px-6 py-16 lg:px-16 lg:py-20">
        <FadeIn>
          <h2 className="text-center font-fraunces text-3xl font-semibold text-primary-800 md:text-[40px]">
            Our Partners
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <PartnerLogos />
        </FadeIn>
      </section>

      <section className="relative min-h-80 w-full overflow-hidden">
        <Image
          src="/landing/data-workspace.png"
          alt="Research data workspace with charts and analysis documents"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-text-header/55" />
        <FadeIn className="relative z-10 flex min-h-80 flex-col items-center justify-center px-6 py-16 text-center lg:px-16">
          <h2 className="max-w-3xl font-fraunces text-3xl font-semibold leading-tight text-white md:text-5xl">
            The data you need. Validated, governed, and ready.
          </h2>
          <p className="mt-5 max-w-2xl font-dm-sans text-base leading-7 text-white/90">
            Browse hundreds of structured datasets and research reports, then
            access the insight your institution needs for confident decisions.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/data"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-8 font-dm-sans text-sm font-bold text-primary-700 transition-colors hover:bg-primary-50"
            >
              Access Dataset
            </Link>
            <Link
              href="/consultancy#consultation-form"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary-500 px-8 font-dm-sans text-sm font-bold text-white transition-colors hover:bg-primary-700"
            >
              Let&apos;s Talk
              <SendIcon className="ml-2 size-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
