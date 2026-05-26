import { Target, TrendingUp } from "lucide-react";
import { IconComponent, MedalIcon, UserGroupIcon } from "../icons";

export type AboutValue = {
  title: string;
  description: string;
  icon: IconComponent;
};

export const values: AboutValue[] = [
  {
    title: "Evidence-Based",
    description:
      "All our work is grounded in rigorous research methodology and validated data sources.",
    icon: Target,
  },
  {
    title: "Collaborative",
    description:
      "We partner closely with institutions to ensure research aligns with real-world results.",
    icon: UserGroupIcon,
  },
  {
    title: "Quality First",
    description:
      "Every dataset and report undergoes multiple rounds of validation and peer review.",
    icon: MedalIcon,
  },
  {
    title: "Impact Driven",
    description:
      "We measure success by the influence our research has on policy and practice.",
    icon: TrendingUp,
  },
];

export const team = [
  {
    name: "Joseph Olaoye Jaiyeola",
    role: "Chairman",
    image: "/about/image29_openai_refined_4k.png",
  },
  {
    name: "Dr. Adedoyin Salami",
    role: "Managing Director / CEO",
    image: "/about/image30_openai_refined_4k.png",
  },
  {
    name: "Dr. Kyari Abba Bukar",
    role: "Director",
    image: "/about/image34_openai_refined_4k.png",
  },
  {
    name: "Jibrin Jibiya Baros",
    role: "Chief Operations Officer",
    image: "/about/image31_openai_refined_4k.png",
  },
  {
    name: "Dr. Eyitemi Adegboye",
    role: "Senior Consultant",
    image: "/about/image32_openai_refined_4k.png",
  },
  {
    name: "Dr. Opadeji Opakunle",
    role: "Senior Consultant",
    image: "/about/image33_openai_refined_4k.png",
  },
];
