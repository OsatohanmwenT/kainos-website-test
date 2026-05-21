
interface PageHeaderProps {
  title: string;
  description: string;
  bg?: string;
}

export function PageHeader({ title, description, bg = "bg-primary-50" }: PageHeaderProps) {
  return (
    <section className={`w-full h-35.5 flex flex-col justify-center px-6 lg:px-16 ${bg}`}>
      <div className="mx-auto w-full">
        <h2 className="font-fraunces text-3xl md:text-[40px] font-semibold tracking-tight text-text-header">
          {title}
        </h2>
        <p className="font-dm-sans text-sm max-md:mt-2 md:text-base text-text-body">
          {description}
        </p>
      </div>
    </section>
  );
}
