import keywordTargets from '../data/seo-keywords.json';

export type KeywordTarget = {
  path: string;
  page: string;
  intent: string;
  primaryKeyword: string;
  supportingKeywords: string[];
};

export const seoKeywordTargets = keywordTargets as KeywordTarget[];

export const getKeywordTarget = (path: string) => {
  const target = seoKeywordTargets.find((item) => item.path === path);
  if (!target) throw new Error(`Missing SEO keyword target for ${path}`);
  return target;
};

export const keywordLabel = (keyword: string) => keyword.charAt(0).toUpperCase() + keyword.slice(1);
