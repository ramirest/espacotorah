import type { Metadata } from "next";
import MuseumExperience from "@/components/museum/MuseumExperience";

export const metadata: Metadata = {
  title: "Museu · Sinagoga Espaço Torah",
  description:
    "Uma experiência imersiva: Israel, a Terra Santa, arte judaica e a memória viva da comunidade Espaço Torah.",
};

export default function MuseuPage() {
  return <MuseumExperience />;
}
