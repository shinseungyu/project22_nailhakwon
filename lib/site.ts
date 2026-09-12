// ─────────────────────────────────────────────────────────────
// 사이트 단일 소스 — 브랜드 · 운영주체 · 상수
//
// title / description / sitemap / JSON-LD / footer 가 전부 이 파일을 본다.
// 값을 고칠 일이 생기면 여기부터 고친다.
// ─────────────────────────────────────────────────────────────

export const SITE_NAME = '네일아트 학원비 비교사이트';
export const SITE_SHORT = '네일학원 비교';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://nailhakwon.com').replace(/\/$/, '');

export const OG_IMAGE = `${SITE_URL}/thumb.webp`;

/** 구글 애드센스 퍼블리셔 ID */
export const ADSENSE_PUB = 'ca-pub-5378247298190063';
/** GA4 측정 ID */
export const GA_ID = 'G-HQ7J0K4PKJ';
/** 네이버 서치어드바이저 사이트 소유확인 코드 */
export const NAVER_VERIFICATION = 'b054b0f3c28975e8a1c5f89fdb5bc55a5c9ee089';

/**
 * 사이트 콘텐츠 갱신일.
 *
 * ⚠️ sitemap 의 lastModified 에 `new Date()` 를 쓰면 배포할 때마다 전 URL 이
 * "수정됨" 으로 나가서 구글이 이 사이트의 lastmod 를 통째로 무시한다.
 * 정적 페이지는 이 상수를, 글은 글 자체의 날짜를 쓴다.
 */
export const UPDATED = '2026-09-12';
export const PUBLISHED = '2026-03-03';

/**
 * 운영 주체.
 *
 * ⚠️ 이전 푸터에 '대표: 홍길동 / 사업자등록번호: 123-45-67890 /
 * 서울특별시 강남구 테헤란로 123 네일타워 4층' 이라는 템플릿 더미값이
 * 그대로 노출되고 있었다. 허위 사업자 정보는 표시하지 않는다.
 * 확인된 값만 적고, 확인 안 된 항목은 아예 두지 않는다.
 */
export const OPERATOR = {
  company: '주식회사 와야미디어',
  email: 'shinsy711@gmail.com',
  privacyOfficer: '신승윤',
  hours: '월~토 10:00 ~ 19:00 (일요일·공휴일 휴무)',
};

/**
 * 이 사이트의 성격.
 *
 * 학원이 아니라 비교·정보 제공 사이트다. 기존 콘텐츠가 '저희 학원 원장님께서',
 * '등록 시 재료 풀세트 무상 제공' 같은 학원 1인칭으로 쓰여 있었는데,
 * 실제로 운영하지 않는 시설을 1인칭으로 말하면 E-E-A-T 상 신뢰도가 깨진다.
 * 새 콘텐츠는 전부 3인칭 비교·안내 화법으로 쓴다.
 */
export const SITE_ROLE =
  '네일 학원비·국비지원·해외취업 정보를 모아 비교해 주는 정보 사이트입니다. 특정 학원을 직접 운영하지 않습니다.';

/** 상단 내비게이션 */
export const NAV = [
  { href: '/', label: '홈' },
  { href: '/funding', label: '국비지원' },
  { href: '/curriculum', label: '커리큘럼' },
  { href: '/employment', label: '해외취업' },
  { href: '/guide', label: '학원비 가이드' },
  { href: '/qna', label: 'Q&A' },
  { href: '/board', label: '정보글' },
];

/** 푸터 링크 — 고아 페이지가 생기지 않도록 전 페이지를 여기서 잇는다 */
export const FOOTER_LINKS = [
  { href: '/funding', label: '국비지원·장학' },
  { href: '/curriculum', label: '커리큘럼' },
  { href: '/employment', label: '해외취업' },
  { href: '/guide', label: '학원비 가이드' },
  { href: '/qna', label: '자주 묻는 질문' },
  { href: '/board', label: '정보글' },
  { href: '/about', label: '사이트 소개' },
  { href: '/contact', label: '문의하기' },
];
