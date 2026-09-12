/**
 * 해외취업 서브페이지 콘텐츠 모델
 *
 * 원칙: 키워드 1개 = URL 1개 = H1 1개.
 * - keyword : 타겟 검색어. H1 에 원형 그대로 들어간다.
 * - h1      : 페이지에 하나만 존재. keyword 를 포함한다.
 * - title   : <title>. 네이버 서치어드바이저 권장에 맞춰 40자 이내로 맞춘다.
 * - description : 80자 이내.
 * - lead    : 검색 스니펫·AI 답변용 "먼저 답부터" 요약.
 */

export type TableBlock = {
  caption?: string;
  head: string[];
  rows: string[][];
  /** 표 아래 각주 — 수치의 성격(참고치·기준일)을 반드시 밝힌다 */
  note?: string;
};

export type Section = {
  h2: string;
  /** 문단. **굵게** 표기는 렌더러가 <strong> 으로 바꾼다. */
  p?: string[];
  list?: string[];
  /** list/table 뒤에 이어지는 문단 */
  after?: string[];
  table?: TableBlock;
  callout?: { label: string; body: string };
};

export type Faq = { q: string; a: string };

export type JobPage = {
  /** /employment/<slug> */
  slug: string;
  /** 메뉴·카드에 쓰는 짧은 이름 */
  nav: string;
  /** 국가 페이지면 국기 이모지 */
  flag?: string;
  /** 'country' | 'topic' — 목록에서 그룹을 나눈다 */
  group: 'country' | 'topic';
  keyword: string;
  h1: string;
  title: string;
  description: string;
  lead: string;
  sections: Section[];
  faq: Faq[];
  /** 관련 페이지 slug — 내부링크용 */
  related: string[];
};
