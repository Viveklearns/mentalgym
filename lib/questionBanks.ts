import { Question } from "@/types";
import { QUESTIONS } from "./questions";

// Bank 1: Original MVP questions (same as QUESTIONS export)
export const BANK_1 = QUESTIONS;

// Future: Banks 2-9 will be added here
export const BANK_2: Question[] = []; // TODO: Add from nstd_quiz_banks.md
export const BANK_3: Question[] = []; // TODO: Add from nstd_quiz_banks.md
export const BANK_4: Question[] = []; // TODO: Add from nstd_quiz_banks_expanded.md
export const BANK_5: Question[] = []; // TODO: Add from nstd_quiz_banks_expanded.md
export const BANK_6: Question[] = []; // TODO: Add from nstd_quiz_banks_expanded.md
export const BANK_7: Question[] = []; // TODO: Create new bank
export const BANK_8: Question[] = []; // TODO: Create new bank
export const BANK_9: Question[] = []; // TODO: Create new bank

export type BankNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export const ALL_BANKS: Record<BankNumber, Question[]> = {
  1: BANK_1,
  2: BANK_2,
  3: BANK_3,
  4: BANK_4,
  5: BANK_5,
  6: BANK_6,
  7: BANK_7,
  8: BANK_8,
  9: BANK_9
};

export function getBankQuestions(bankNumber: BankNumber): Question[] {
  return ALL_BANKS[bankNumber];
}

export function isBankAvailable(bankNumber: BankNumber): boolean {
  return ALL_BANKS[bankNumber].length > 0;
}

export const AVAILABLE_BANKS: BankNumber[] = Object.keys(ALL_BANKS)
  .map(Number)
  .filter((n) => isBankAvailable(n as BankNumber)) as BankNumber[];
