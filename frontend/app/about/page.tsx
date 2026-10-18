import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { getDictionary } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are, how we work, and what Halimi Research believes about building technology.",
  alternates: { canonical: "/about" },
};

export default async function About() {
  const dict = getDictionary(await getLocale());
  return <AboutPage dict={dict} />;
}
