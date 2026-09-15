/**
 * Utility functions for className merging.
 * @see cn - Combines clsx and tailwind-merge for conditional Tailwind classes
 */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
