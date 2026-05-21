export type ReportStatus = "pending" | "resubmitted" | "overdue" | "approved";

export interface Report {
  id: string;
  title: string;
  type: string;
  description: string;
  author: string;
  date: string;
  downloads: string;
  status: ReportStatus;
}
export type AccessType = "download" | "request";

export interface Dataset {
  id: string;
  title: string;
  type: string;
  description: string;
  year: string;
  frequency: string;
  dataType: string;
  format: string;
  lastUpdated: string;
  status: ReportStatus;
  accessType: AccessType;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  description: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  featured: boolean;
  status: ReportStatus;
}

export const mockReports: Report[] = Array.from({ length: 26 }).map((_, i) => {
  const isOld = i > 15;
  const statuses: ReportStatus[] = [
    "pending",
    "resubmitted",
    "overdue",
    "approved",
  ];
  let status = statuses[3];
  if (i < 11) status = "pending";
  else if (i < 14) status = "resubmitted";
  else if (i === 14) status = "overdue";

  const types = [
    "Economic Analysis",
    "Social Indicators",
    "Strategic Analysis",
    "Market Research",
  ];
  const type = types[i % types.length];

  return {
    id: `report-${i + 1}`,
    title: `Quarterly Analysis 202${5 - Math.floor(i / 10)} Report ${isOld ? "(Archive)" : ""}`,
    type,
    description:
      "Comprehensive analytical reports on fiscal and monetary policy indicators across key sectors and their widespread effects.",
    author: "Dr Sarah Chen",
    date: new Date(2025, 2, 15 - i).toISOString(),
    downloads: `${(1.2 + (i % 5) * 0.1).toFixed(1)}k`,
    status,
  };
});

export const mockDatasets: Dataset[] = Array.from({ length: 14 }).map(
  (_, i) => {
    const statuses: ReportStatus[] = [
      "pending",
      "resubmitted",
      "overdue",
      "approved",
    ];
    let status = statuses[3];
    if (i < 5) status = "pending";
    else if (i < 7) status = "resubmitted";
    else if (i === 7) status = "overdue";

    const types = [
      "Economic Analysis",
      "Social Indicators",
      "Strategic Analysis",
      "Market Research",
    ];
    const type = types[i % types.length];

    return {
      id: `dataset-${i + 1}`,
      title: `Government Expenditure Q${(i % 4) + 1}`,
      type,
      description:
        "Comprehensive analytical reports on fiscal and monetary policy indicators across key sectors.",
      year: "2025",
      frequency: "Monthly",
      dataType: "Primary Data",
      format: "CSV, JSON",
      lastUpdated: "March 2026",
      status,
      accessType: i % 3 === 0 ? "request" : "download", // Mix of request and download
    };
  },
);

export const mockArticles: BlogArticle[] = Array.from({ length: 15 }).map(
  (_, i) => {
    const statuses: ReportStatus[] = [
      "pending",
      "resubmitted",
      "overdue",
      "approved",
    ];
    let status = statuses[3];
    if (i < 3) status = "pending";
    else if (i < 5) status = "resubmitted";
    else if (i === 5) status = "overdue";

    const categories = [
      "Technology",
      "Sustainability",
      "Analysis",
      "Policy",
      "Markets",
    ];
    const category = categories[i % categories.length];

    const titles = [
      "The Future of Quantitative Easing in Fragmented Markets",
      "Predictive Modeling and the KIDMP Engine",
      "Measuring Social Governance: Beyond the Buzzwords",
      "Global Supply Chain Realignments",
      "Fiscal Policy Adaptations for 2026",
    ];

    const descriptions = [
      "Why traditional stimulus methods are meeting unprecedented resistance in the current global climate.",
      "How we utilize neural networks to identify non-obvious correlations in sovereign debt markets.",
      "A new metric for quantifying social impact in emerging industrial zones of Southeast Asia.",
      "Examining the systemic changes driving modern trade routes.",
      "How central banks are adjusting targets for upcoming inflation reports.",
    ];

    return {
      id: `article-${i + 1}`,
      title: titles[i % titles.length],
      category,
      description: descriptions[i % descriptions.length],
      author: "Dr Sarah Chen",
      date: new Date(2025, 2, 15 - i).toISOString(),
      readTime: 5 + (i % 5),
      image: `https://images.unsplash.com/photo-${1551288049 + i}-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500`, // Better Unsplash IDs
      featured: i === 0,
      status,
    };
  },
);

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

export const mockServices: Service[] = [
  {
    id: "policy-analysis",
    icon: "FileText",
    title: "Policy Analysis & Advisory",
    description:
      "Evidence-based policy recommendations and impact assessments for government agencies and institutions.",
    features: [
      "Fiscal policy evaluation",
      "Regulatory impact analysis",
      "Program effectiveness studies",
      "Strategic planning support",
    ],
  },
  {
    id: "data-solutions",
    icon: "Settings",
    title: "Custom Data Solutions",
    description:
      "Tailored datasets and data collection services designed for your specific research or operational needs.",
    features: [
      "Survey design & implementation",
      "Data collection & validation",
      "Database architecture",
      "Data integration services",
    ],
  },
  {
    id: "research-reporting",
    icon: "BarChart3",
    title: "Research & Reporting",
    description:
      "Comprehensive research studies with rigorous methodology and publication-ready reports.",
    features: [
      "Economic research studies",
      "Economic research studies",
      "Sector-specific research",
      "White papers & briefs",
    ],
  },
  {
    id: "capacity-building",
    icon: "TrendingUp",
    title: "Capacity Building",
    description:
      "Training and institutional strengthening programs for research teams and data management.",
    features: [
      "Data governance training",
      "Research methodology workshops",
      "Statistical analysis courses",
      "Quality assurance systems",
    ],
  },
];

export const mockProcessSteps: ProcessStep[] = [
  {
    id: "step-1",
    number: 1,
    title: "Initial Consultation",
    description:
      "Prior exploratory call to understand your needs and objectives.",
  },
  {
    id: "step-2",
    number: 2,
    title: "Proposal & Scoping",
    description:
      "Detailed project plan with methodology, timeline and pricing.",
  },
  {
    id: "step-3",
    number: 3,
    title: "Project Execution",
    description: "Research and analysis with regular progress updates.",
  },
  {
    id: "step-4",
    number: 4,
    title: "Delivery & Support",
    description: "Final report with presentation and post-project support.",
  },
];
