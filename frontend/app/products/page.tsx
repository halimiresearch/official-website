import type { Metadata } from "next";
import { ProductsPage } from "@/components/products-page";
import { getDictionary } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Products",
  description: site.products.intro,
  alternates: { canonical: "/products" },
};

export default async function Products() {
  const dict = getDictionary(await getLocale());
  return <ProductsPage dict={dict} />;
}
