import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getImageUrl = (keyword, width = 400, height = 300) => {
  const encodedKeyword = encodeURIComponent(keyword);
  return `https://www.weavefox.cn/api/bolt/unsplash_image?keyword=${encodedKeyword}&width=${width}&height=${height}&random=${encodedKeyword}_${width}_${height}`;
};