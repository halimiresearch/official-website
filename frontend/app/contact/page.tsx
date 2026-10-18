import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { getDictionary } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: site.contact.body,
  alternates: { canonical: "/contact" },
};

export default async function Contact() {
  const dict = getDictionary(await getLocale());
  return <ContactPage dict={dict} />;
}
