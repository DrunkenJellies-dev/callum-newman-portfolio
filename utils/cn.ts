import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    //Merge tailwind classes and return
  return twMerge(clsx(inputs));
}
