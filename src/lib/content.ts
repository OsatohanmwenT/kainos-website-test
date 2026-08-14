export const site = {
  name: "KainosEdge",
  legalName: "KainosEdge Consulting Limited",
  primaryCta: "See how we work",
  primaryCtaHref: "/about#approach",
  email: "info@kainosedge.com",
  phone: "+234-803-812-8392",
  address: "77 Ademola St., Off Awolowo Rd., Ikoyi, Lagos",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "What we do", href: "/what-we-do" },
  { label: "Our work", href: "/our-work" },
  { label: "Blog", href: "/blog" },
  { label: "Market news", href: "/market-news" },
  { label: "Data portal & Kayla", href: "/data-portal" },
  { label: "Contact", href: "/contact" },
];

export const workStreams = [
  {
    slug: "environmental-scan",
    name: "Environmental Scan",
    description:
      "We track the economic and business environment continuously, so our clients see risks and opportunities before they show up in the numbers.",
    capabilities: [
      "Continuous macroeconomic and sector monitoring",
      "Early-warning indicators for policy and market shifts",
      "Structured briefings clients can act on, not just read",
    ],
    relatedWorkSlug: "inflation-scan",
  },
  {
    slug: "sustainability-resilience",
    name: "Sustainability & Resilience",
    description:
      "Resilience isn't only environmental. We look at the economic, governance, and social threads that hold an organisation or a system together, and help clients plan for what could break them.",
    capabilities: [
      "Governance and institutional-resilience assessments",
      "Scenario planning across economic, social, and environmental risk",
      "Stress-testing for organisations and systems, not just balance sheets",
    ],
    relatedWorkSlug: "resilience-audit",
  },
  {
    slug: "commodities-economic-analysis",
    name: "Commodities & Economic Analysis",
    description:
      "Sector-level and commodity-level analysis that tells clients what's actually happening in the market they operate in, not the generic national picture.",
    capabilities: [
      "Sector and commodity-level market analysis",
      "Price, demand, and supply-chain tracking",
      "Analysis built around the market clients actually operate in",
    ],
    relatedWorkSlug: "commodities-outlook",
  },
  {
    slug: "ehn",
    name: "EHN — Economy of Households in Nigeria",
    description:
      "A national survey platform building a socio-economic index for Nigeria: the data points government and business decisions have been missing.",
    capabilities: [
      "National household-level survey infrastructure",
      "A socio-economic index built for Nigeria specifically",
      "Data designed to inform government and business decisions",
    ],
    cta: "See the EHN project",
    relatedWorkSlug: "ehn-socioeconomic-index",
  },
];

export const crossCuttingCapabilities = [
  "Data Services",
  "Impact Assessment",
  "Public Communication",
  "Research Outsourcing",
  "Capacity Development & Training",
];

export const featuredWork = [
  {
    slug: "ehn-socioeconomic-index",
    category: "Datasets",
    title: "Building a socio-economic index for Nigeria",
    summary:
      "The EHN survey platform turns household-level data into an index government and business decisions have been missing.",
    stat: 56,
    statLabel: "LGAs covered in pilot phase",
    year: "2024",
    image: "/images/work-ehn.jpg",
    caseStudy: {
      industry: "Public sector & development",
      client: "EHN — Economy of Households in Nigeria",
      engagementType: "National survey platform & index design",
      duration: "Ongoing",
      challenge:
        "Government and business decisions were being made without a reliable, current picture of household-level economic conditions across Nigeria's local government areas.",
      approach:
        "KainosEdge designed a national survey platform and a socio-economic index methodology, piloting collection across a first wave of LGAs before scaling.",
      coreFeatures: [
        "Household-level survey instrument design",
        "A composite socio-economic index methodology",
        "LGA-by-LGA data collection infrastructure",
        "A pipeline built to scale nationally",
      ],
      valueDelivered:
        "A structured, repeatable way to see household-level economic conditions that didn't exist before, ready to inform both policy and investment decisions.",
      results:
        "The pilot phase covered 56 LGAs, establishing the methodology and infrastructure for a nationwide rollout.",
    },
  },
  {
    slug: "inflation-scan",
    category: "Research",
    title: "Reading the inflation shock, sector by sector",
    summary:
      "A continuous environmental scan gave a banking client an early read on where subsidy removal would hit hardest.",
    stat: 34,
    statLabel: "sectors modelled",
    year: "2023",
    image: "/images/work-inflation.jpg",
    caseStudy: {
      industry: "Banking & financial services",
      client: "A Nigerian banking institution",
      engagementType: "Environmental Scan",
      duration: "4 months",
      challenge:
        "Following the 2023 fuel subsidy removal, the client needed to understand which sectors of their loan book were most exposed to the resulting inflation shock, faster than lagging national indicators could show.",
      approach:
        "KainosEdge built a continuous environmental scan across 34 sectors, tracking price and cost signals as they emerged rather than waiting for quarterly releases.",
      coreFeatures: [
        "Sector-by-sector inflation exposure modelling",
        "Continuous monitoring rather than point-in-time reporting",
        "Early-warning thresholds tied to portfolio risk",
      ],
      valueDelivered:
        "The client re-weighted exposure across its portfolio ahead of the sectors that turned out to be hit hardest.",
      results: "34 sectors modelled, with exposure flags delivered weeks ahead of official data.",
    },
  },
  {
    slug: "resilience-audit",
    category: "Case Studies",
    title: "Stress-testing an institution's resilience",
    summary:
      "Economic, governance, and social threads mapped together to show a client what could break them, and what wouldn't.",
    stat: 12,
    statLabel: "risk vectors identified",
    year: "2024",
    image: "/images/work-resilience.jpg",
    caseStudy: {
      industry: "Financial services",
      client: "A Nigerian financial institution",
      engagementType: "Sustainability & Resilience audit",
      duration: "3 months",
      challenge:
        "The client had strong financial controls but no structured view of the governance and social threads that could still break the organisation under stress.",
      approach:
        "KainosEdge mapped economic, governance, and social risk together in a single resilience framework, rather than treating them as separate audits.",
      coreFeatures: [
        "Cross-cutting risk-vector identification",
        "Governance and institutional-resilience assessment",
        "Scenario planning tied to each identified vector",
      ],
      valueDelivered:
        "A prioritised, board-ready view of what could break the institution, and a plan for what wouldn't.",
      results: "12 distinct risk vectors identified and ranked by likelihood and impact.",
    },
  },
  {
    slug: "commodities-outlook",
    category: "Policy Briefs",
    title: "A commodity-level view markets could act on",
    summary:
      "Sector-level analysis that replaced a generic national picture with decisions clients could actually use.",
    stat: 8,
    statLabel: "commodity markets tracked",
    year: "2023",
    image: "/images/work-commodities.jpg",
    caseStudy: {
      industry: "Commodities & trade",
      client: "An institutional commodities client",
      engagementType: "Commodities & Economic Analysis",
      duration: "Ongoing",
      challenge:
        "National-level commodity commentary wasn't specific enough to inform the client's actual trading and procurement decisions.",
      approach:
        "KainosEdge built sector- and commodity-level tracking across 8 markets the client actually operates in.",
      coreFeatures: [
        "Price, demand, and supply-chain tracking per commodity",
        "Policy-brief format built for decision-makers, not analysts",
        "Market-specific rather than national-level framing",
      ],
      valueDelivered: "Briefs the client could act on directly, replacing generic national commentary.",
      results: "8 commodity markets tracked on a continuing basis.",
    },
  },
  {
    slug: "capacity-development-report",
    category: "Reports",
    title: "The full formal output behind a capacity-development programme",
    summary:
      "A complete, formal report on building institutional capacity, not just the headline findings.",
    stat: 3,
    statLabel: "institutions covered",
    year: "2023",
    image: "/images/work-capacity.jpg",
    caseStudy: {
      industry: "Institutional development",
      client: "Three partner institutions",
      engagementType: "Capacity Development & Training",
      duration: "6 months",
      challenge:
        "Three partner institutions needed a documented, formal record of a shared capacity-development programme, not just a summary of outcomes.",
      approach:
        "KainosEdge ran the training and development programme and compiled the full formal report behind it, methodology included.",
      coreFeatures: [
        "Structured capacity-development curriculum",
        "Full methodology and formal documentation",
        "Institution-by-institution outcome tracking",
      ],
      valueDelivered:
        "A complete formal report each institution could use for internal review and future funding conversations.",
      results: "3 institutions covered, each with a documented capacity uplift.",
    },
  },
  {
    slug: "subsidy-removal-explainer",
    category: "Articles",
    title: "What the subsidy removal actually changed",
    summary:
      "A shorter take on how one policy decision reshaped household spending and business costs.",
    stat: 6,
    statLabel: "indicators explained",
    year: "2024",
    image: "/images/work-subsidy.jpg",
    caseStudy: {
      industry: "Public commentary",
      client: "Public Communication",
      engagementType: "Article / commentary",
      duration: "2 weeks",
      challenge:
        "The public conversation around the fuel subsidy removal had outpaced clear explanation of what was actually changing for households and businesses.",
      approach:
        "KainosEdge distilled six key indicators into a shorter, direct explainer aimed at a general audience.",
      coreFeatures: [
        "Six indicators explained in plain language",
        "Household and business impact separated out",
        "Written for a general, not specialist, audience",
      ],
      valueDelivered: "A widely shared, accessible explanation of a complex policy shift.",
      results: "6 indicators explained in a single, shareable piece.",
    },
  },
  {
    slug: "quarterly-gdp-insight",
    category: "Insights",
    title: "Where GDP growth is really coming from this quarter",
    summary: "A quick read on the sectors doing the heavy lifting, and the ones that aren't.",
    stat: 5,
    statLabel: "sectors flagged",
    year: "2024",
    image: "/images/work-gdp.jpg",
    caseStudy: {
      industry: "Macroeconomics",
      client: "Public insight",
      engagementType: "Quick-read insight",
      duration: "1 week",
      challenge:
        "Headline GDP growth figures were masking which sectors were actually driving the number, and which were lagging behind it.",
      approach:
        "KainosEdge broke the quarterly GDP figure down by sector to flag the five doing the most, and least, work.",
      coreFeatures: [
        "Sector-by-sector contribution breakdown",
        "Five sectors flagged as over- or under-performing",
        "A quick-read format built for fast decisions",
      ],
      valueDelivered: "A faster, more specific read on where growth was really coming from.",
      results: "5 sectors flagged as the quarter's key movers.",
    },
  },
];

export const marketNews = [
  {
    headline: "Naira volatility eases as FX reserves climb for a third month",
    take: "Reserve accumulation is doing more for stability here than rate policy is.",
  },
  {
    headline: "OPEC+ output decision leaves Nigeria's 2027 budget assumptions exposed",
    take: "The benchmark oil price in the budget is now the most fragile number in it.",
  },
  {
    headline: "Manufacturing PMI ticks up for the second straight month",
    take: "Input-cost relief, not demand growth, is what's actually moving this number.",
  },
  {
    headline: "Global rate cuts open a window for Eurobond refinancing",
    take: "The window is real, but it's narrower than the headlines suggest.",
  },
  {
    headline: "Diaspora remittance inflows post a fifth consecutive rise",
    take: "This is doing more for the FX market than any single policy announcement this quarter.",
  },
  {
    headline: "Cocoa and cashew export earnings diverge sharply from the naira's official rate",
    take: "The gap between farm-gate pricing and export earnings is where the real story is.",
  },
  {
    headline: "Federal borrowing plan revised as revenue targets slip",
    take: "The revision is smaller than the miss it's covering for.",
  },
  {
    headline: "Regional trade bloc flags new non-tariff barriers affecting Nigerian exporters",
    take: "Worth watching for any business with cross-border logistics exposure.",
  },
];

// Illustrative snapshot values, not a live feed.
export const marketTicker: { label: string; value: string; change: string; direction: "up" | "down"; icon: "currency" | "globe" | "bank" | "chart" }[] = [
  { label: "USD/GHS", value: "10.95", change: "-2.71%", direction: "down", icon: "currency" },
  { label: "Gold (oz)", value: "4,352.29", change: "-1.29%", direction: "down", icon: "globe" },
  { label: "MPR", value: "27.5%", change: "-0.0", direction: "down", icon: "bank" },
  { label: "CPI (Inflation)", value: "22.8%", change: "-0.4", direction: "down", icon: "bank" },
  { label: "GDP Growth", value: "3.2%", change: "+0.1", direction: "up", icon: "bank" },
  { label: "USD/NGN", value: "1,360.88", change: "-0.17%", direction: "down", icon: "currency" },
  { label: "EUR/USD", value: "1.15", change: "+0.03%", direction: "up", icon: "chart" },
  { label: "GBP/USD", value: "1.35", change: "-0.12%", direction: "down", icon: "chart" },
];

export const newsFeedContinents = ["All Continents", "Africa", "Europe", "Asia", "Middle East", "Americas"];

export const newsFeedCountries = [
  "All Countries",
  "Nigeria",
  "Ghana",
  "South Africa",
  "Kenya",
  "Egypt",
  "United States",
  "United Kingdom",
  "Germany",
  "China",
  "India",
  "Brazil",
  "Saudi Arabia",
  "United Arab Emirates",
];

export const newsFeedIndicators = ["All", "Household", "Business", "Government", "Markets"];

export const newsFeedCategories = ["All", "Markets", "Business", "Politics", "Technology", "Security"];

// Raw aggregated headlines — the unedited feed underneath KainosEdge's own commentary.
// Original headlines written for this site; not reproduced from any live source.
export const newsFeed = [
  {
    headline: "Nigeria's non-oil exports post strongest quarter since 2019",
    source: "Continental Wire",
    country: "Nigeria",
    continent: "Africa",
    indicator: "Government",
    category: "Markets",
    timeAgo: "3h ago",
  },
  {
    headline: "Ghana's cedi steadies as central bank holds rates",
    source: "Frontier Markets Desk",
    country: "Ghana",
    continent: "Africa",
    indicator: "Government",
    category: "Markets",
    timeAgo: "5h ago",
  },
  {
    headline: "Shipping insurers reprice Gulf routes after fresh tanker incident",
    source: "Meridian News",
    country: "Saudi Arabia",
    continent: "Middle East",
    indicator: "Business",
    category: "Security",
    timeAgo: "6h ago",
  },
  {
    headline: "US Federal Reserve officials split on pace of further cuts",
    source: "Capital Flows Daily",
    country: "United States",
    continent: "Americas",
    indicator: "Markets",
    category: "Markets",
    timeAgo: "8h ago",
  },
  {
    headline: "China's export controls on rare earths tighten further",
    source: "TechLedger",
    country: "China",
    continent: "Asia",
    indicator: "Business",
    category: "Technology",
    timeAgo: "9h ago",
  },
  {
    headline: "South Africa's power utility reports fourth straight month without load-shedding",
    source: "Southbound Post",
    country: "South Africa",
    continent: "Africa",
    indicator: "Household",
    category: "Business",
    timeAgo: "10h ago",
  },
  {
    headline: "UK inflation data surprises to the downside",
    source: "Global Business Report",
    country: "United Kingdom",
    continent: "Europe",
    indicator: "Household",
    category: "Markets",
    timeAgo: "11h ago",
  },
  {
    headline: "Kenyan fintech raises largest Series B in East Africa this year",
    source: "AfricaBrief",
    country: "Kenya",
    continent: "Africa",
    indicator: "Business",
    category: "Business",
    timeAgo: "13h ago",
  },
  {
    headline: "Cybersecurity researchers flag new state-linked phishing campaign targeting banks",
    source: "TechLedger",
    country: "United States",
    continent: "Americas",
    indicator: "Business",
    category: "Technology",
    timeAgo: "14h ago",
  },
  {
    headline: "Cocoa futures ease as West African harvest outlook improves",
    source: "TradeLines",
    country: "Ghana",
    continent: "Africa",
    indicator: "Markets",
    category: "Markets",
    timeAgo: "16h ago",
  },
  {
    headline: "Nigeria's federal government revises 2027 borrowing plan",
    source: "PolicyWatch",
    country: "Nigeria",
    continent: "Africa",
    indicator: "Government",
    category: "Politics",
    timeAgo: "1d ago",
  },
  {
    headline: "German manufacturing orders fall for a third straight month",
    source: "Global Business Report",
    country: "Germany",
    continent: "Europe",
    indicator: "Business",
    category: "Markets",
    timeAgo: "1d ago",
  },
  {
    headline: "Egyptian pound stabilizes as tourism receipts climb",
    source: "Meridian News",
    country: "Egypt",
    continent: "Africa",
    indicator: "Household",
    category: "Markets",
    timeAgo: "1d ago",
  },
  {
    headline: "India overtakes another economy to become world's fourth-largest",
    source: "Capital Flows Daily",
    country: "India",
    continent: "Asia",
    indicator: "Government",
    category: "Markets",
    timeAgo: "1d ago",
  },
  {
    headline: "Diaspora remittance platforms cut transfer fees across West Africa",
    source: "AfricaBrief",
    country: "Nigeria",
    continent: "Africa",
    indicator: "Household",
    category: "Business",
    timeAgo: "1d ago",
  },
  {
    headline: "Brazil's central bank signals extended pause on rate cuts",
    source: "Capital Flows Daily",
    country: "Brazil",
    continent: "Americas",
    indicator: "Markets",
    category: "Markets",
    timeAgo: "1d ago",
  },
  {
    headline: "UAE announces new free-zone incentives for AI startups",
    source: "TechLedger",
    country: "United Arab Emirates",
    continent: "Middle East",
    indicator: "Business",
    category: "Technology",
    timeAgo: "2d ago",
  },
  {
    headline: "Port congestion eases at Lagos terminals after new scheduling system",
    source: "TradeLines",
    country: "Nigeria",
    continent: "Africa",
    indicator: "Business",
    category: "Business",
    timeAgo: "2d ago",
  },
];

export const dataPortalTiers = [
  {
    name: "Free",
    audience: "Public / guest user",
    features: [
      "Browse headline macroeconomic indicators",
      "Limited time series",
      "Select visualisations and summaries",
      "Basic Kayla Q&A",
    ],
    cta: "Browse the data",
  },
  {
    name: "Pro",
    audience: "Individual professional or SME",
    features: [
      "Full indicator library",
      "CSV / Excel exports",
      "Historical trend access",
      "Natural-language queries via Kayla",
      "Deeper analysis and insight generation",
    ],
    cta: "Start free, upgrade anytime",
    emphasized: true,
  },
  {
    name: "Enterprise",
    audience: "Institutional client (bespoke)",
    features: [
      "API access",
      "Custom data reports",
      "Dedicated analyst support",
      "White-labelled / embedded data feeds",
      "SLA",
      "Full Kayla capabilities including bespoke report generation",
    ],
    cta: "Talk to us",
  },
];

export const examplePrompts = [
  "What has happened to Nigeria's inflation rate since the fuel subsidy removal in 2023?",
  "How does Nigeria's current account balance compare to the five-year average?",
  "What sectors are showing the strongest GDP growth this quarter?",
];

export const clientLogos = [
  "NIMASA",
  "CIBN",
  "Shell",
  "Mastercard",
  "Investment One",
  "FirstBank",
  "Polaris Bank",
  "FBNQuest",
  "Sterling",
  "ACA",
  "NB",
  "Wema Bank",
  "Guinness Nigeria",
  "Kuker Holdings",
  "Bank of Industry",
  "Tolaram",
  "CSCS",
  "PenCom/PenOp",
];

// `logo` is optional — drop a real logo file (e.g. "/logos/firstbank.svg") in
// public/logos and set it here to replace the placeholder hover treatment.
// `invert` flips a white-on-transparent mark to dark so it reads on the white card.
export const clients: { name: string; logo?: string; invert?: boolean }[] = [
  { name: "NIMASA", logo: "/logos/nimasa.jpg" },
  { name: "CIBN", logo: "/logos/cibn.png" },
  { name: "Shell", logo: "/logos/shell.svg" },
  { name: "Mastercard", logo: "/logos/mastercard.svg" },
  { name: "Investment One", logo: "/logos/investment-one.png" },
  { name: "FirstBank", logo: "/logos/firstbank.svg" },
  { name: "Polaris Bank", logo: "/logos/polaris-bank.png" },
  { name: "FBNQuest", logo: "/logos/fbnquest.png" },
  { name: "Sterling", logo: "/logos/sterling.png" },
  { name: "ACA", logo: "/logos/aca.png", invert: true },
  { name: "NB", logo: "/logos/nb.png" },
  { name: "Wema Bank", logo: "/logos/wema-bank.svg" },
  { name: "Guinness Nigeria", logo: "/logos/guinness-nigeria.svg" },
  { name: "Kuker Holdings" },
  { name: "Bank of Industry", logo: "/logos/bank-of-industry.png" },
  { name: "Tolaram", logo: "/logos/tolaram.png" },
  { name: "CSCS", logo: "/logos/cscs.png" },
  { name: "PenCom/PenOp", logo: "/logos/pencom.png" },
];

export const leadership = [
  { name: "Joseph Olaoye Jaiyeola", title: "Chairman" },
  { name: "Dr. Adedoyin Salami", title: "Managing Director / CEO" },
  { name: "Dr. Kyari Abba Bukar", title: "Director" },
];

export const management = [
  { name: "Jibrin Jibiya Baros", title: "Chief Operations Officer" },
  { name: "Dr. Eyitemi Adegboye", title: "Senior Consultant" },
  { name: "Dr. Opadeji Opakunle", title: "Senior Consultant" },
];

export const approach = [
  {
    step: "Discover",
    description:
      "We begin every engagement by helping clients uncover the unseen. Using rigorous economic analysis, strategic insight, and market intelligence, we identify opportunities, surface hidden challenges, and generate knowledge that matters.",
  },
  {
    step: "Utilize",
    description:
      "We don't just deliver insights, we make them usable. We equip organisations with the tools, frameworks, and capabilities required to turn data into action, bridging the gap between what is known and what must be done.",
  },
  {
    step: "Succeed",
    description:
      "Success for us is our clients' ability to implement change, drive performance, and create sustainable impact. We co-create solutions that work in real-world conditions and support continuous improvement.",
  },
];

export const values = [
  { letter: "K", word: "Knowledge" },
  { letter: "I", word: "Innovation" },
  { letter: "R", word: "Relationship" },
  { letter: "I", word: "Integrity" },
];

export const workCategories = [
  { name: "Research", description: "The studies behind the headlines." },
  { name: "Policy Briefs", description: "Short, direct reads for decision-makers." },
  { name: "Case Studies", description: "Real problems, real clients, what changed." },
  { name: "Reports", description: "The full, formal output." },
  { name: "Datasets", description: "Data you can build on." },
  { name: "Articles", description: "Shorter takes and commentary." },
  { name: "Insights", description: "Quick reads on what's moving." },
];
