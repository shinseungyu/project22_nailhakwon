import type { MetadataRoute } from 'next';
import posts from '@/data/posts.json';
import { jobPages } from '@/data/jobs';
import { SITE_URL, UPDATED } from '@/lib/site';

type Post = { id: number; date: string; updated?: string };

/**
 * ⚠️ lastModified 에 `new Date()` 를 쓰면 안 된다.
 * 배포할 때마다 전 URL 이 "방금 수정됨" 으로 나가고, 그게 반복되면
 * 구글이 이 사이트의 lastmod 를 신뢰하지 않게 된다.
 * 글은 글 자체의 날짜를, 정적 페이지는 콘텐츠 갱신일 상수를 쓴다.
 * 날짜를 특정할 수 없는 정책 페이지는 lastModified 를 아예 넣지 않는다.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(UPDATED);

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: updated, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/employment`, lastModified: updated, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/funding`, lastModified: updated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/curriculum`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/guide`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/qna`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/board`, lastModified: updated, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: updated, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: updated, changeFrequency: 'yearly', priority: 0.5 },
  ];

  // 해외취업 서브페이지
  const jobUrls: MetadataRoute.Sitemap = jobPages.map((p) => ({
    url: `${SITE_URL}/employment/${p.slug}`,
    lastModified: updated,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 정보글 — 개별 URL 로 전부 등록한다 (이전에는 사이트맵에 글이 하나도 없었다)
  const postUrls: MetadataRoute.Sitemap = (posts as Post[]).map((p) => ({
    url: `${SITE_URL}/board/${p.id}`,
    lastModified: new Date(p.updated || p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  /**
   * 정책 페이지는 색인 대상이 아니라 metadata 에서 noindex 로 처리한다.
   * robots.txt 로 크롤을 막으면 크롤러가 들어오지 못해 그 noindex 를 읽지 못하므로
   * 사이트맵에서는 빼되 크롤은 허용한다.
   */
  return [...staticPages, ...jobUrls, ...postUrls];
}
