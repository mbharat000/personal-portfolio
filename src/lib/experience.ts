/**
 * Dynamically computes Bharat Mishra's total professional software engineering experience.
 * Career Start Date: August 2022 (Volkswagen Group Digital Solutions India)
 *
 * Automatically increments every month:
 * - Oct 2026: 4 years, 2 months -> "4.2"
 * - Nov 2026: 4 years, 3 months -> "4.3"
 * - Aug 2027: 5 years, 0 months -> "5.0"
 */

export const CAREER_START_DATE = new Date(2022, 7, 1); // August 1, 2022

export function getExperience(): {
  years: number;
  months: number;
  formatted: string;
  formattedPlus: string;
  totalMonths: number;
} {
  const now = new Date();

  const startYear = CAREER_START_DATE.getFullYear();
  const startMonth = CAREER_START_DATE.getMonth(); // 7 for August

  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  let totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth);
  if (totalMonths < 0) totalMonths = 0;

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  const formatted = `${years}.${remainingMonths}`;
  const formattedPlus = `${years}.${remainingMonths}+`;

  return {
    years,
    months: remainingMonths,
    formatted,
    formattedPlus,
    totalMonths,
  };
}
