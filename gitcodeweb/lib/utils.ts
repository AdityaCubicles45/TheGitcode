import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// #region Functions (1)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// #endregion Functions (1)
