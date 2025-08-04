import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const langDictionary = {
  "es-419": "Español",
  "es-ES": "Español",
  "en": "English"
}