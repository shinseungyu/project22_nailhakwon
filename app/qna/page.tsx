import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { SITE_NAME, SITE_URL, OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: '네일학원 자주 묻는 질문 — 비용·자격증·국비지원',
  description: '네일학원 수강 기간, 학원비 구성, 국비지원 조건, 취업 현실에 대해 자주 나오는 질문을 정리했습니다.',
  alternates: { canonical: '/qna' },
  openGraph: {
    title: '네일학원 자주 묻는 질문',
    description: '네일학원 비용·자격증·국비지원·취업에 대해 자주 나오는 질문을 정리했습니다.',
    url: `${SITE_URL}/qna`,
    siteName: SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '네일학원 자주 묻는 질문' }],
  },
};

/**
 * ⚠️ 이전 답변들은 이 사이트가 실제로 운영하지 않는 학원을 1인칭으로 서술하고 있었다.
 * '저희 학원은 소수정예 10명 이내', '수강생의 92%가 원패스 합격',
 * '재료 풀세트 무상 제공', '1:1 취업 매칭' 같은 문장이 그것이다.
 * 검증할 수 없는 수치이자 이 사이트가 제공하지 않는 서비스라서 전부 걷어내고,
 * 비교·안내 사이트의 3인칭 화법으로 다시 썼다.
 *
 * 이 목록은 아래 화면에 그대로 렌더되고 동시에 FAQPage 스키마가 된다.
 * 스키마와 화면이 어긋나면 안 되므로 반드시 이 배열 하나만 수정한다.
 */
const faqs = [
  {
    q: '네일 국가자격증을 따는 데 얼마나 걸리나요?',
    a: '주 3회 수업 기준으로 3개월 안팎을 잡는 과정이 일반적입니다. 다만 실기는 반복 연습 시간이 결과를 만들기 때문에, 수업 외에 연습할 수 있는 환경인지에 따라 실제 기간이 달라집니다. 직장과 병행한다면 기간을 더 길게 잡는 편이 현실적입니다.',
  },
  {
    q: '네일학원비는 보통 얼마인가요?',
    a: '과정과 지역에 따라 편차가 큽니다. 중요한 것은 수강료만 비교하면 안 된다는 점입니다. 재료비, 교재비, 자격증 응시료가 별도로 붙는 경우가 많아 총액 기준으로 따져야 실제 부담이 보입니다. 같은 과정이라도 재료 포함 여부에 따라 수십만 원이 차이 납니다.',
  },
  {
    q: '재료비는 수강료에 포함되나요?',
    a: '학원마다 다릅니다. 기본 키트만 포함되고 소모품은 개인 부담인 경우, 전부 별도인 경우, 포함인 경우가 모두 있습니다. 상담에서 안내되는 금액에 재료비가 빠져 있는 경우가 흔하므로 등록 전에 포함 항목을 목록으로 받아 두는 것이 좋습니다.',
  },
  {
    q: '내일배움카드로 네일학원을 다닐 수 있나요?',
    a: '국민내일배움카드로 수강할 수 있는 것은 고용노동부 인가를 받은 훈련기관의 인가 과정에 한합니다. 모든 네일학원이 해당하지는 않습니다. HRD-Net(hrd.go.kr)에서 지역과 과정을 직접 검색해 인가 여부와 자부담금을 확인하는 것이 정확합니다.',
  },
  {
    q: '국비지원이면 수강료가 전액 무료인가요?',
    a: '아닙니다. 훈련 과정과 개인 요건에 따라 자부담 비율이 정해져 있고, 재료비는 대개 지원 범위에 포함되지 않습니다. 또한 출석률 기준을 채우지 못하면 지원금 반환 문제가 생길 수 있어 등록 전에 규정을 확인해야 합니다.',
  },
  {
    q: '직장인도 병행할 수 있나요?',
    a: '야간반과 주말반을 운영하는 학원이 많아 수업 자체는 병행이 가능합니다. 실제 관건은 연습 시간 확보입니다. 수업 외 연습실을 언제까지 쓸 수 있는지, 주말에도 개방하는지를 확인하면 병행 가능성을 가늠할 수 있습니다.',
  },
  {
    q: '완전 초보도 시작할 수 있나요?',
    a: '자격증 과정 대부분이 기초부터 다루도록 구성되어 있어 사전 경험이 없어도 시작할 수 있습니다. 다만 실기는 손에 익는 시간이 필요하므로, 등록 전에 연습 공간을 자유롭게 쓸 수 있는지를 확인해 두는 것이 도움이 됩니다.',
  },
  {
    q: '자격증만 따면 바로 취업이 되나요?',
    a: '자격증은 전제에 가깝고, 채용은 시술 능력으로 결정되는 경우가 많습니다. 특히 기본 시술 속도와 연장 가능 여부를 확인하는 샵이 많습니다. 취업이 목적이라면 자격증 과정 이후 실무 과정을 함께 고려하는 경우가 일반적입니다.',
  },
  {
    q: '네일리스트 급여는 어느 정도인가요?',
    a: '지역, 경력, 샵 형태, 그리고 기본급과 인센티브 비중에 따라 차이가 큽니다. 신입 단계에서는 기본급 위주로 시작해 단골과 지명이 늘면서 올라가는 구조가 일반적입니다. 특정 금액을 일률적으로 말하기는 어렵고, 실제 채용 공고의 조건으로 확인하는 편이 정확합니다.',
  },
  {
    q: '해외에서 네일리스트로 일할 수 있나요?',
    a: '가능합니다. 호주·캐나다·영국·일본 등은 워킹홀리데이 비자로 입국해 현지 네일샵에 취업하는 경로가 있습니다. 다만 미국처럼 주별 라이선스가 법적으로 요구되는 나라도 있어 국가마다 조건이 크게 다릅니다. 국가별 비자와 시급은 해외취업 페이지에서 정리했습니다.',
  },
  {
    q: '한국 자격증이 해외에서 인정되나요?',
    a: '자동으로 인정되는 나라는 없습니다. 호주·영국처럼 별도 면허를 요구하지 않는 곳에서는 기술을 증명하는 자료로 쓰이고, 미국처럼 라이선스가 필요한 곳에서는 현지 시험을 따로 준비해야 합니다. 일본은 JNA 계열 민간자격이 업계 표준입니다.',
  },
  {
    q: '중간에 그만두면 환불받을 수 있나요?',
    a: '학원법에 따른 환불 기준이 있으나 과정 운영 방식에 따라 적용이 달라질 수 있습니다. 특히 재료를 이미 수령한 경우의 처리 방식은 학원마다 다르므로 등록 전에 환불 규정을 확인해 두는 것이 안전합니다.',
  },
];

export default function QnaPage() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/qna#faq`,
      url: `${SITE_URL}/qna`,
      inLanguage: 'ko-KR',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/qna#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: '자주 묻는 질문', item: `${SITE_URL}/qna` },
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
          href="/"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700 }}
        >
          <ChevronLeft size={15} /> 홈으로
        </Link>
      </nav>

      <header style={{ marginBottom: 40 }}>
        <h1
          style={{
            fontSize: 'clamp(26px, 5vw, 36px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.25,
            margin: '0 0 14px',
            color: 'var(--text-primary)',
          }}
        >
          네일학원 자주 묻는 질문
        </h1>
        <p style={{ fontSize: 16.5, lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0, maxWidth: 640 }}>
          학원을 알아볼 때 반복적으로 나오는 질문을 모았습니다. 비용, 자격증, 국비지원, 취업 순서로
          정리했습니다.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        {faqs.map((faq, i) => (
          <details
            key={i}
            open={i === 0}
            style={{
              background: '#fff',
              border: '1px solid #f1f0ef',
              borderRadius: 16,
              padding: '18px 22px',
              marginBottom: 12,
            }}
          >
            <summary
              style={{
                fontWeight: 800,
                fontSize: 16,
                cursor: 'pointer',
                color: 'var(--text-primary)',
                lineHeight: 1.6,
              }}
            >
              {faq.q}
            </summary>
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.85,
                color: 'var(--text-secondary)',
                margin: '14px 0 0',
              }}
            >
              {faq.a}
            </p>
          </details>
        ))}
      </section>

      <section
        style={{
          background: '#fafaf9',
          border: '1px solid #f1f0ef',
          borderRadius: 20,
          padding: '24px 26px',
        }}
      >
        <h2 style={{ fontSize: 16, fontWeight: 900, margin: '0 0 14px', color: 'var(--text-primary)' }}>
          더 자세한 내용
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            { href: '/guide', label: '학원비 비교 가이드' },
            { href: '/funding', label: '국비지원 안내' },
            { href: '/employment', label: '해외취업' },
            { href: '/board', label: '정보글' },
            { href: '/contact', label: '문의하기' },
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
