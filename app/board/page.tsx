import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import posts from '@/data/posts.json';
import { SITE_NAME, SITE_URL, OG_IMAGE } from '@/lib/site';
import PageConsult from '@/components/PageConsult';

type Post = {
  id: number;
  title: string;
  date: string;
  updated?: string;
  category: string;
  summary: string;
  content: string;
  tags: string[];
};

const allPosts = (posts as Post[]).slice().sort((a, b) => b.date.localeCompare(a.date));

export const metadata: Metadata = {
  title: '네일학원 정보글 — 자격증·국비지원·학원비 총정리',
  description: '네일 자격증 준비, 국비지원 신청, 학원비 비교, 취업 준비까지 주제별로 정리한 정보글 모음입니다.',
  alternates: { canonical: '/board' },
  openGraph: {
    title: '네일학원 정보글 — 자격증·국비지원·학원비 총정리',
    description: '네일 자격증·국비지원·학원비·취업 정보를 주제별로 정리했습니다.',
    url: `${SITE_URL}/board`,
    siteName: SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '네일학원 정보글' }],
  },
};

export default function BoardPage() {
  /**
   * 목록 스키마(ItemList·CollectionPage)는 이 페이지에만 둔다.
   * board/layout.tsx 에 두면 /board/[id] 에도 상속돼서
   * 개별 글이 Article 과 CollectionPage 를 동시에 선언하게 된다.
   */
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/board#collection`,
      url: `${SITE_URL}/board`,
      name: '네일학원 정보글',
      description: '네일 자격증·국비지원·학원비·취업 정보 모음',
      inLanguage: 'ko-KR',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${SITE_URL}/board#itemlist`,
      itemListElement: allPosts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.title,
        url: `${SITE_URL}/board/${p.id}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/board#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: '정보글', item: `${SITE_URL}/board` },
      ],
    },
  ];

  return (
    <main style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 1.25rem 100px' }}>
      {schemas.map((s, i) => (
        <script
          key={`ld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <nav aria-label="브레드크럼" style={{ marginBottom: 24 }}>
        <Link
          href="/"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700 }}
        >
          <ChevronLeft size={15} /> 홈으로
        </Link>
      </nav>

      <header style={{ marginBottom: 44 }}>
        <h1
          style={{
            fontSize: 'clamp(27px, 5vw, 36px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.25,
            margin: '0 0 14px',
            color: 'var(--text-primary)',
          }}
        >
          네일학원 정보글
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 16.5, lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
          네일 자격증 준비부터 국비지원 신청, 학원비 비교, 취업 준비까지 주제별로 정리했습니다.
          모두 학원 선택 전에 확인해 두면 좋은 내용입니다.
        </p>
      </header>

      {/* 상담 폼 — 메인과 같은 폼, H1 바로 아래·첫 h2 위 */}
      <PageConsult label="네일학원 무료 상담 신청" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 18,
        }}
      >
        {allPosts.map((post) => (
          <Link
            key={post.id}
            href={`/board/${post.id}`}
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              background: '#fff',
              border: '1px solid #f1f0ef',
              borderRadius: 18,
              padding: '24px 24px 22px',
            }}
          >
            <span
              style={{
                color: 'var(--primary)',
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: '0.08em',
                marginBottom: 10,
              }}
            >
              {post.category}
            </span>
            <h2
              style={{
                fontSize: 17,
                fontWeight: 800,
                lineHeight: 1.5,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                margin: '0 0 10px',
              }}
            >
              {post.title}
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                margin: '0 0 16px',
                flexGrow: 1,
              }}
            >
              {post.summary}
            </p>
            <time dateTime={post.date} style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>
              {post.date}
            </time>
          </Link>
        ))}
      </div>
    </main>
  );
}
