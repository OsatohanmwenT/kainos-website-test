import type { Metadata } from "next";
import { KaylaChat } from "@/components/kayla/kayla-chat";

export const metadata: Metadata = {
  title: "Kayla — KainosEdge",
  description: "Ask Kayla, KainosEdge's AI assistant, about Nigeria's economy.",
};

export default async function KaylaPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div className="pt-[72px]">
      <KaylaChat initialPrompt={q} />
    </div>
  );
}
