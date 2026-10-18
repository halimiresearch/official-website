import type { Metadata } from "next";
import { CareersPage } from "@/components/careers-page";
import { getDictionary } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description: site.careers.intro,
  alternates: { canonical: "/careers" },
};

export default async function Careers() {
  const dict = getDictionary(await getLocale());
  return <CareersPage dict={dict} />;
}
