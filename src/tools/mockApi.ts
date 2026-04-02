import { TESTS } from '../data/TESTS';
import type { Test, PersonalColorResult, PersonalColorSeason } from '../types';

const FAKE_DELAY = 400;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchTests(): Promise<Test[]> {
  await delay(FAKE_DELAY);
  return TESTS;
}

export async function fetchTestById(id: string): Promise<Test | null> {
  await delay(FAKE_DELAY);
  return TESTS.find((t) => t.info.mainUrl === id) ?? null;
}

export async function fetchResultBySeason(
  testId: string,
  season: PersonalColorSeason
): Promise<PersonalColorResult | null> {
  await delay(FAKE_DELAY);
  const test = TESTS.find((t) => t.info.mainUrl === testId);
  if (!test) return null;
  return test.results.find((r) => r.season === season) ?? null;
}

export function calculateSeason(answers: PersonalColorSeason[]): PersonalColorSeason {
  const scores: Record<PersonalColorSeason, number> = {
    spring: 0,
    summer: 0,
    autumn: 0,
    winter: 0,
  };
  answers.forEach((season) => {
    scores[season]++;
  });
  return (Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0] as PersonalColorSeason);
}
