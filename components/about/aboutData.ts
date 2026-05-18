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
    role: "Chairman, Kainos",
    image: "/about/team-joseph.png",
  },
  {
    name: "Dr. Adedoyin Salami",
    role: "Managing Director / CEO",
    image: "/about/team-adedoyin.png",
  },
  {
    name: "Dr. Kyari Abba Bukar",
    role: "Director",
    image: "/about/team-kyari.png",
  },
  {
    name: "Jibrin Jibya B.",
    role: "Chief Operations Officer",
    image: "/about/team-jibrin.png",
  },
];
