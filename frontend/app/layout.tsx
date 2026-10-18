import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OrganizationJsonLd } from "@/components/json-ld";
import { HeaderDropdownDismiss } from "@/components/header-dropdown-dismiss";
import { ScrollProgress } from "@/components/scroll-progress";
import { getDictionary } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";
import { SITE_URL, site } from "@/content/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.seo.title,
    template: "%s | Halimi Research",
  },
  description: site.seo.description,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/rss.xml" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: site.brand.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${jakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
        >
          {dict.header.skip}
        </a>
        <OrganizationJsonLd />
        <HeaderDropdownDismiss />
        <ScrollProgress />
        <SiteHeader dict={dict} locale={locale} />
        <main id="main-content" className="flex flex-1 flex-col">{children}</main>
        <SiteFooter dict={dict} />
      </body>
    </html>
  );
}
