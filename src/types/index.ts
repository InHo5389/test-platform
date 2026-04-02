export type PersonalColorSeason = 'spring' | 'summer' | 'autumn' | 'winter';

export interface ColorInfo {
  season: PersonalColorSeason;
  colorName: string;
  hex: string;
}

export interface PersonalColorResult {
  season: PersonalColorSeason;
  colorName: string;
  hex: string;
  description: string;
  keywords: string[];
  goodColors: ColorInfo[];
  badColors: ColorInfo[];
}

export interface Answer {
  type: PersonalColorSeason;
  content: string;
}

export interface Question {
  which: string;
  question: string;
  answers: Answer[];
}

export type ScoreType = 'personalColor';

export interface TestInfo {
  mainTitle: string;
  subTitle: string;
  mainUrl: string;
  scoreType: ScoreType;
  mainImage: string;
  thumbImage: string;
  lang: string;
  category: string;
  description: string;
  tags: string[];
  author: string;
  viewCount: number;
  duration: string;
}

export interface Test {
  info: TestInfo;
  questions: Question[];
  results: PersonalColorResult[];
}
