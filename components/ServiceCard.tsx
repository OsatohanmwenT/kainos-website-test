import { Service } from "@/lib/mockData";
import { CheckCircle2 } from "lucide-react";
import {
    AnalysisIcon,
    DataPieIcon,
    ProgressionIcon,
    ReportFormsIcon,
} from "./icons";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <AnalysisIcon className="size-6 text-neutral-600" />,
  Settings: <DataPieIcon className="size-6 text-neutral-600" />,
  BarChart3: <ReportFormsIcon className="size-6 text-neutral-600" />,
  TrendingUp: <ProgressionIcon className="size-6 text-neutral-600" />,
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col p-8 border border-border-subtle rounded-[20px] bg-white hover:shadow-md transition-shadow">
      {/* Icon */}
      <div className="mb-6 w-12 h-12 bg-super-admin-accent-100 rounded-full flex items-center justify-center">
        {iconMap[service.icon]}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-text-header font-dm-sans mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-text-body font-dm-sans mb-8 leading-relaxed">
        {service.description}
      </p>

      {/* Features List */}
      <ul className="space-y-3">
        {service.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm text-text-body font-dm-sans leading-tight"
          >
            <CheckCircle2 className="w-4.5 h-4.5 text-semantic-success-900 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
