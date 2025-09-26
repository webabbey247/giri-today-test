import { productProps } from "@/utils/types"; // adjust import to your type

export const getPriceRange = (products: productProps[]) => {
  if (!products || products.length === 0) return { min: 0, max: 0 };

  const prices = products.map((p) => p.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return { min, max };
};
