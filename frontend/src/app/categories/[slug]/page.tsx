import { categoryList, slugifyCategory } from "@/lib/productData";
import CategoryClient from "./CategoryClient";

// ✅ Static export ("output: export") ke liye required — batata hai ki
// kaunse-kaunse [slug] values pehle se HTML pages ke roop mein generate karne hain
export function generateStaticParams() {
  return categoryList.map((category) => ({
    slug: slugifyCategory(category),
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CategoryClient slug={slug} />;
}