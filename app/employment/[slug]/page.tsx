import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { jobPages, getJobPage } from '@/data/jobs';
import Blocks from '@/components/Blocks';
import { SITE_NAME, SITE_URL, OG_IMAGE, UPDATED, PUBLISHED } from '@/lib/site';
import PageConsult from '@/components/PageConsult';

export const dynamicParams = false;

export function generateStaticParams() {
  return jobPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getJobPage(slug);
  if (!page) return {};

  const url = `${SITE_URL}/employment/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: [page.keyword],
    alternates: { canonical: `/employment/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      locale: 'ko_KR',
      type: 'article',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: page.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [OG_IMAGE],
    },
  };
}

export default async function JobPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getJobPage(slug);
  if (!page) notFound();

  const url = `${SITE_URL}/employment/${page.slug}`;
  const related = page.related.map(getJobPage).filter(Boolean);

  // 본문 글자 수 — Article 스키마의 wordCount 에 쓴다
  const wordCount =
    page.lead.length +
    page.sections.reduce(
      (sum, s) =>
        sum +
        (s.p?.join('').length ?? 0) +
        (s.list?.join('').length ?? 0) +
        (s.after?.join('').length ?? 0),
      0,
    );

  /**
   * JSON-LD 는 next/script 가 아니라 일반 <script> 로 렌더한다.
   * next/script 로 넣으면 서버 HTML 에 self.__next_s 페이로드로만 나가고
   * 실제 ld+json 태그는 하이드레이션 후에 생겨서, JS 를 렌더하지 않는
   * 크롤러와 스키마 검증 도구가 아예 못 읽는다.
   */
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: page.h1,
      description: page.description,
      inLanguage: 'ko-KR',
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      image: [OG_IMAGE],
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      wordCount,
      about: page.keyword,
      author: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.png` },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: '해외취업', item: `${SITE_URL}/employment` },
        { '@type': 'ListItem', position: 3, name: page.nav, item: url },
      ],
    },
    // FAQPage 는 화면에 실제로 보이는 Q&A 로만 만든다 (아래 FAQ 섹션과 1:1)
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: page.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <main style={{ maxWidth: 820, margin: '0 auto', padding: '48px 1.25rem 100px' }}>
      {schemas.map((s, i) => (
        <script
          key={`ld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <nav aria-label="브레드크럼" style={{ marginBottom: 24, fontSize: 13, color: 'var(--text-muted)' }}>
        <Link
          href="/employment"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 700 }}
        >
          <ChevronLeft size={15} /> 해외취업 전체보기
        </Link>
      </nav>

      <header style={{ marginBottom: 28 }}>
        {page.flag && <span style={{ fontSize: 40, display: 'block', marginBottom: 8 }}>{page.flag}</span>}
        <h1
          style={{
            fontSize: 'clamp(26px, 5.2vw, 38px)',
            fontWeight: 900,
            lineHeight: 1.25,
            letterSpacing: '-0.03em',
            margin: '0 0 16px',
            color: 'var(--text-primary)',
          }}
        >
          {page.h1}
        </h1>
        <p
          style={{
            fontSize: 16.5,
            lineHeight: 1.85,
            color: 'var(--text-secondary)',
            background: '#fafaf9',
            border: '1px solid #f1f0ef',
            borderRadius: 16,
            padding: '20px 22px',
            margin: 0,
          }}
        >
          {page.lead}
        </p>
      </header>

      {/* 상담 폼은 H1 바로 아래, 첫 h2 위 */}
      <PageConsult label="해외취업 준비, 무료로 상담받기" />

      <Blocks sections={page.sections} />

      {page.faq.length > 0 && (
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 'clamp(20px, 3.4vw, 26px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              margin: '0 0 18px',
              color: 'var(--text-primary)',
            }}
          >
            자주 묻는 질문
          </h2>
          {page.faq.map((f, i) => (
            <details
              key={`faq-${i}`}
              style={{
                background: '#fff',
                border: '1px solid #f1f0ef',
                borderRadius: 14,
                padding: '16px 18px',
                marginBottom: 10,
              }}
            >
              <summary
                style={{ fontWeight: 800, fontSize: 15.5, cursor: 'pointer', color: 'var(--text-primary)', lineHeight: 1.6 }}
              >
                {f.q}
              </summary>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-secondary)', margin: '12px 0 0' }}>
                {f.a}
              </p>
            </details>
          ))}
        </section>
      )}

      {related.length > 0 && (
        <section
          style={{
            background: '#fafaf9',
            border: '1px solid #f1f0ef',
            borderRadius: 20,
            padding: '24px 26px',
          }}
        >
          <h2 style={{ fontSize: 16, fontWeight: 900, margin: '0 0 14px', color: 'var(--text-primary)' }}>
            함께 보면 좋은 글
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {related.map((r) => (
              <Link
                key={r!.slug}
                href={`/employment/${r!.slug}`}
                style={{
                  background: 'var(--primary-light, #fff1f2)',
                  color: 'var(--primary-dark, #9f1239)',
                  fontSize: 13.5,
                  fontWeight: 700,
                  padding: '9px 18px',
                  borderRadius: 50,
                  textDecoration: 'none',
                }}
              >
                {r!.flag ? `${r!.flag} ` : ''}
                {r!.nav} →
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
