import { ProcessStep } from "@/lib/mockData";

export function ProcessStepCard({ step }: { step: ProcessStep }) {
  const isLast = step.number === 4;

  return (
    <div className="flex flex-col items-center text-center relative z-10 px-2 lg:px-6">
      {/* Step Number Circle */}
      {isLast ? (
        <div className="w-14 h-14 rounded-full border-2 bg-white border-primary-500 flex items-center justify-center mb-6">
          <span className="text-primary-500 font-dm-sans font-medium text-2xl">
            {step.number}
          </span>
        </div>
      ) : (
        <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center mb-6">
          <span className="text-white font-dm-sans font-medium text-2xl">
            {step.number}
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-base font-bold text-text-header font-dm-sans mb-3">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-text-body font-dm-sans max-w-50 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
