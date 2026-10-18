import { HomePage } from "@/components/home-page";
import { getDictionary } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";
import { getAllNotes } from "@/lib/notes";

export default async function Home() {
  const dict = getDictionary(await getLocale());
  return <HomePage notes={getAllNotes()} dict={dict} />;
}
