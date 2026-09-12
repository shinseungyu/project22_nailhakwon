import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import FormSection from '@/components/FormSection';
import { SITE_NAME, SITE_URL, OPERATOR, UPDATED } from '@/lib/site';

export const metadata: Metadata = {
  title: '문의하기 — 상담 신청과 정보 수정 요청',
  description: '네일학원 상담 신청, 정보 오류 신고, 개인정보 관련 문의를 접수하는 방법을 안내합니다.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#contact`,
    url: `${SITE_URL}/contact`,
    name: '문의하기',
    inLanguage: 'ko-KR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      email: OPERATOR.email,
    },
  };

  return (
    <main style={{ maxWidth: 780, margin: '0 auto', padding: '48px 1.25rem 100px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav aria-label="브레드크럼" style={{ marginBottom: 24 }}>
        <Link
          href="/"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700 }}
        >
          <ChevronLeft size={15} /> 홈으로
        </Link>
      </nav>

      <h1
        style={{
          fontSize: 'clamp(26px, 5vw, 34px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          lineHeight: 1.3,
          margin: '0 0 20px',
          color: 'var(--text-primary)',
        }}
      >
        문의하기
      </h1>

      <p
        style={{
          fontSize: 16.5,
          lineHeight: 1.85,
          color: 'var(--text-secondary)',
          margin: '0 0 40px',
        }}
      >
        학원 상담은 아래 신청 폼으로, 그 외 문의는 이메일로 접수합니다.
      </p>

      <section style={{ marginBottom: 52 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900, margin: '0 0 14px', color: 'var(--text-primary)' }}>
          학원 상담 신청
        </h2>
        <p style={{ fontSize: 15.5, lineHeight: 1.8, color: 'var(--text-secondary)', margin: '0 0 18px' }}>
          지역과 관심 과정을 남겨 주시면 조건에 맞는 상담처를 안내해 드립니다. 비용은 들지 않습니다.
        </p>
        <FormSection />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900, margin: '0 0 14px', color: 'var(--text-primary)' }}>
          이메일 문의
        </h2>
        <div
          style={{
            background: '#fafaf9',
            border: '1px solid #f1f0ef',
            borderRadius: 16,
            padding: '22px 24px',
          }}
        >
          <p style={{ fontSize: 15.5, lineHeight: 2, color: 'var(--text-secondary)', margin: 0 }}>
            <strong style={{ color: 'var(--text-primary)' }}>이메일</strong>{' '}
            <a href={`mailto:${OPERATOR.email}`} style={{ color: 'var(--primary)', fontWeight: 700 }}>
              {OPERATOR.email}
            </a>
            <br />
            <strong style={{ color: 'var(--text-primary)' }}>운영시간</strong> {OPERATOR.hours}
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900, margin: '0 0 14px', color: 'var(--text-primary)' }}>
          이런 문의를 받습니다
        </h2>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
          {[
            ['정보 오류 신고', '금액·제도·요건이 실제와 다르다면 알려 주세요. 확인 후 수정하고 수정일을 표시합니다.'],
            ['개인정보 관련', '열람·정정·삭제·처리정지 요청을 접수합니다.'],
            ['제휴 상담처 목록', '개인정보를 제공받는 상담처 목록을 요청하시면 회신해 드립니다.'],
            ['제휴 문의', '교육기관 제휴 관련 문의를 받습니다.'],
          ].map(([label, desc]) => (
            <li
              key={label}
              style={{
                display: 'flex',
                gap: 14,
                padding: '14px 0',
                borderBottom: '1px solid #f5f5f4',
                fontSize: 15.5,
                lineHeight: 1.75,
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontWeight: 900, color: 'var(--primary)', flexShrink: 0, minWidth: 130 }}>
                {label}
              </span>
              <span style={{ color: 'var(--text-secondary)', flex: 1, minWidth: 200 }}>{desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 28px' }}>
        최종 수정일 <time dateTime={UPDATED}>{UPDATED}</time>
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {[
          { href: '/about', label: '사이트 소개' },
          { href: '/qna', label: '자주 묻는 질문' },
          { href: '/board', label: '정보글' },
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
    </main>
  );
}
