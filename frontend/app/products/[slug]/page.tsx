import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/product-detail-page";
import { getDictionary } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";
import { site } from "@/content/site";

export function generateStaticParams() {
  return site.products.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = site.products.items.find((i) => i.slug === slug);
  if (!item) return {};
  return {
    title: item.name,
    description: item.tagline,
    alternates: { canonical: `/products/${item.slug}` },
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  if (!site.products.items.some((i) => i.slug === slug)) notFound();
  const dict = getDictionary(await getLocale());
  return <ProductDetailPage slug={slug} dict={dict} />;
}
