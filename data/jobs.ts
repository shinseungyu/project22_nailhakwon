import type { JobPage } from '@/lib/types';
import { countryPages } from './jobs-country';
import { topicPages } from './jobs-topic';

/** /employment/<slug> 로 생성되는 전체 페이지 */
export const jobPages: JobPage[] = [...countryPages, ...topicPages];

const BY_SLUG = new Map(jobPages.map((p) => [p.slug, p]));

export function getJobPage(slug: string): JobPage | undefined {
  return BY_SLUG.get(slug);
}

export const countryList = countryPages;
export const topicList = topicPages;
