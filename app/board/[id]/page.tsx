import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import posts from '@/data/posts.json';
import FormSection from '@/components/FormSection';
import { parseArticle, tableOfContents, countWords } from '@/lib/article';
import { SITE_NAME, SITE_URL, OG_IMAGE } from '@/lib/site';

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

const allPosts = posts as Post[];

export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = allPosts.find((p) => p.id === Number(id));
  if (!post) return {};

  const url = `${SITE_URL}/board/${post.id}`;
  return {
    title: post.title,
    description: post.summary,
    keywords: post.tags,
    alternates: { canonical: `/board/${post.id}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      url,
      siteName: SITE_NAME,
      locale: 'ko_KR',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      tags: post.tags,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [OG_IMAGE],
    },
  };
}

export default async function BoardDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = allPosts.find((p) => p.id === Number(id));
  if (!post) notFound();

  const url = `${SITE_URL}/board/${post.id}`;
  const blocks = parseArticle(post.content);
  const toc = tableOfContents(blocks);

  // 관련 글은 최신순 고정이 아니라 같은 카테고리·태그를 우선한다
  const related = allPosts
    .filter((p) => p.id !== post.id)
    .map((p) => ({
      post: p,
      score:
        (p.category === post.category ? 2 : 0) +
        p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || b.post.id - a.post.id)
    .slice(0, 3)
    .map((x) => x.post);

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: post.title,
      description: post.summary,
      inLanguage: 'ko-KR',
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      image: [OG_IMAGE],
      datePublished: post.date,
      dateModified: post.updated || post.date,
      wordCount: countWords(post.content),
      keywords: post.tags.join(', '),
      articleSection: post.category,
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
        { '@type': 'ListItem', position: 2, name: '정보글', item: `${SITE_URL}/board` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
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

      <nav aria-label="브레드크럼" style={{ marginBottom: 24 }}>
        <Link
          href="/board"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700 }}
        >
          <ChevronLeft size={15} /> 정보글 목록
        </Link>
      </nav>

      <header style={{ marginBottom: 28 }}>
        <span
          style={{
            background: 'var(--primary-light, #fff1f2)',
            color: 'var(--primary-dark, #9f1239)',
            fontSize: 11.5,
            fontWeight: 900,
            padding: '5px 14px',
            borderRadius: 50,
            letterSpacing: '0.06em',
          }}
        >
          {post.category}
        </span>
        <h1
          style={{
            fontSize: 'clamp(25px, 5vw, 36px)',
            fontWeight: 900,
            lineHeight: 1.28,
            letterSpacing: '-0.03em',
            margin: '16px 0 12px',
            color: 'var(--text-primary)',
          }}
        >
          {post.title}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 13.5, margin: 0 }}>
          <time dateTime={post.date}>{post.date}</time>
          {post.updated && post.updated !== post.date && (
            <span> · 최종 수정 <time dateTime={post.updated}>{post.updated}</time></span>
          )}
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 14, color: 'var(--text-primary)' }}>
          네일학원 맞춤 상담받기
        </h2>
        <FormSection />
      </section>

      {toc.length > 1 && (
        <nav
          aria-label="목차"
          style={{
            background: '#fafaf9',
            border: '1px solid #f1f0ef',
            borderRadius: 16,
            padding: '18px 22px',
            marginBottom: 36,
          }}
        >
          <p style={{ fontSize: 12, fontWeight: 900, letterSpacing: '0.08em', color: 'var(--text-muted)', margin: '0 0 10px' }}>
            목차
          </p>
          <ol style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {toc.map((h) => (
              <li key={h.id} style={{ fontSize: 14.5, lineHeight: 1.6 }}>
                <a href={`#${h.id}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {h.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <article>
        {blocks.map((b, i) => {
          if (b.type === 'h2') {
            return (
              <h2
                key={`b-${i}`}
                id={b.id}
                style={{
                  fontSize: 'clamp(20px, 3.4vw, 25px)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.4,
                  margin: '40px 0 16px',
                  color: 'var(--text-primary)',
                  scrollMarginTop: 80,
                }}
              >
                {b.text}
              </h2>
            );
          }
          if (b.type === 'p') {
            return (
              <p
                key={`b-${i}`}
                style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--text-secondary)', margin: '0 0 16px' }}
              >
                {b.text}
              </p>
            );
          }
          if (b.type === 'ol') {
            return (
              <ol key={`b-${i}`} style={{ margin: '0 0 18px', paddingLeft: 22 }}>
                {b.items.map((it, j) => (
                  <li
                    key={`b-${i}-${j}`}
                    style={{ fontSize: 15.5, lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: 8 }}
                  >
                    {it}
                  </li>
                ))}
              </ol>
            );
          }
          return (
            <ul key={`b-${i}`} style={{ margin: '0 0 18px', paddingLeft: 0, listStyle: 'none' }}>
              {b.items.map((it, j) => (
                <li
                  key={`b-${i}-${j}`}
                  style={{
                    position: 'relative',
                    paddingLeft: 22,
                    marginBottom: 8,
                    fontSize: 15.5,
                    lineHeight: 1.85,
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: 4,
                      top: '0.7em',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--primary)',
                    }}
                  />
                  {it}
                </li>
              ))}
            </ul>
          );
        })}
      </article>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 32 }}>
        {post.tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: 'var(--primary-light, #fff1f2)',
              color: 'var(--primary-dark, #9f1239)',
              fontSize: 12,
              fontWeight: 700,
              padding: '6px 15px',
              borderRadius: 50,
            }}
          >
            #{tag}
          </span>
        ))}
      </div>

      {related.length > 0 && (
        <section style={{ marginTop: 64 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 18, color: 'var(--text-primary)' }}>
            관련 글
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/board/${p.id}`}
                style={{
                  textDecoration: 'none',
                  background: '#fff',
                  border: '1px solid #f1f0ef',
                  borderRadius: 16,
                  padding: '20px 22px',
                  display: 'block',
                }}
              >
                <span
                  style={{
                    color: 'var(--primary)',
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: 6,
                  }}
                >
                  {p.category}
                </span>
                <span style={{ fontWeight: 800, fontSize: 15.5, color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  {p.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section
        style={{
          marginTop: 48,
          background: '#fafaf9',
          border: '1px solid #f1f0ef',
          borderRadius: 20,
          padding: '24px 26px',
        }}
      >
        <h2 style={{ fontSize: 16, fontWeight: 900, margin: '0 0 14px', color: 'var(--text-primary)' }}>
          도움이 되는 가이드
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            { href: '/funding', label: '국비지원 안내' },
            { href: '/guide', label: '학원비 비교 가이드' },
            { href: '/curriculum', label: '커리큘럼' },
            { href: '/employment', label: '해외취업' },
            { href: '/qna', label: '자주 묻는 질문' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
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
              {label} →
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
