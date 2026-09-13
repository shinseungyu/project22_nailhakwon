import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { SITE_NAME, SITE_URL, SITE_ROLE, OPERATOR, UPDATED } from '@/lib/site';
import PageConsult from '@/components/PageConsult';

export const metadata: Metadata = {
  title: '사이트 소개 — 무엇을 어떻게 정리하나',
  description: '네일아트 학원비 비교사이트의 운영 목적, 정보 작성 기준, 운영 주체를 안내합니다.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/about#about`,
    url: `${SITE_URL}/about`,
    name: '사이트 소개',
    inLanguage: 'ko-KR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
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
        사이트 소개
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
          margin: '0 0 40px',
        }}
      >
        {SITE_ROLE}
      </p>

      {/* 상담 폼 — 메인과 같은 폼, H1 바로 아래·첫 h2 위 */}
      <PageConsult label="네일학원 무료 상담 신청" />

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 14px', color: 'var(--text-primary)' }}>
          무엇을 다루나요
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--text-secondary)', margin: '0 0 14px' }}>
          네일 교육을 알아볼 때 흩어져 있어 비교하기 어려운 정보를 한곳에 모읍니다. 학원비의 실제 구성,
          국비지원 제도의 적용 조건, 자격증 준비 순서, 그리고 국내외 취업 경로가 주요 주제입니다.
        </p>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
          {[
            ['학원비', '수강료만이 아니라 재료비·응시료를 포함한 총액 기준으로 비교하는 방법'],
            ['국비지원', '국민내일배움카드 신청 절차와 자부담금 구조, 확인해야 할 조건'],
            ['자격증', '미용사(네일) 국가자격증 필기·실기 준비 순서와 감점 요인'],
            ['해외취업', '호주·캐나다·일본·영국 등 국가별 비자 구조와 시급, 준비 항목'],
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
              }}
            >
              <span style={{ fontWeight: 900, color: 'var(--primary)', flexShrink: 0, minWidth: 68 }}>
                {label}
              </span>
              <span style={{ color: 'var(--text-secondary)' }}>{desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 14px', color: 'var(--text-primary)' }}>
          정보를 쓰는 기준
        </h2>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
          {[
            '금액과 시급은 범위로 적고, 참고치라는 점과 기준을 함께 밝힙니다. 지역·경력·환율에 따라 달라지기 때문입니다.',
            '제도와 비자 요건은 단정하지 않고 공식 출처를 함께 안내합니다. HRD-Net, 큐넷, 각국 이민 당국 고시가 최종 기준입니다.',
            '특정 학원을 단정적으로 추천하지 않습니다. 대신 무엇을 확인하고 무엇을 물어야 하는지를 정리합니다.',
            '제도가 바뀌면 해당 문서를 수정하고 수정일을 표시합니다.',
          ].map((t, i) => (
            <li
              key={i}
              style={{
                position: 'relative',
                paddingLeft: 22,
                marginBottom: 12,
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
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 14px', color: 'var(--text-primary)' }}>
          운영 주체
        </h2>
        <div
          style={{
            background: '#fafaf9',
            border: '1px solid #f1f0ef',
            borderRadius: 16,
            padding: '22px 24px',
            fontSize: 15.5,
            lineHeight: 2,
            color: 'var(--text-secondary)',
          }}
        >
          <p style={{ margin: 0 }}>
            <strong style={{ color: 'var(--text-primary)' }}>운영</strong> {OPERATOR.company}
            <br />
            <strong style={{ color: 'var(--text-primary)' }}>개인정보 보호책임자</strong>{' '}
            {OPERATOR.privacyOfficer}
            <br />
            <strong style={{ color: 'var(--text-primary)' }}>문의</strong>{' '}
            <a href={`mailto:${OPERATOR.email}`} style={{ color: 'var(--primary)' }}>
              {OPERATOR.email}
            </a>
            <br />
            <strong style={{ color: 'var(--text-primary)' }}>운영시간</strong> {OPERATOR.hours}
          </p>
        </div>
        <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.8, margin: '14px 0 0' }}>
          본 사이트는 교육기관이 아닙니다. 상담 신청 시 입력하신 정보는 동의하신 범위에서 올댓뷰티 상담사에게
          전달되며, 자세한 내용은 개인정보 처리방침에서 확인하실 수 있습니다.
        </p>
      </section>

      <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 28px' }}>
        최종 수정일 <time dateTime={UPDATED}>{UPDATED}</time>
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {[
          { href: '/contact', label: '문의하기' },
          { href: '/guide', label: '학원비 가이드' },
          { href: '/employment', label: '해외취업' },
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
