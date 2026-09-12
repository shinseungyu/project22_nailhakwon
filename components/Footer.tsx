import Link from 'next/link';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import LegalNoticeModal from './LegalNoticeModal';
import { SITE_NAME, SITE_ROLE, OPERATOR, FOOTER_LINKS } from '@/lib/site';

/**
 * ⚠️ 이전 푸터에는 '대표: 홍길동 / 사업자등록번호: 123-45-67890 /
 * 서울특별시 강남구 테헤란로 123 네일타워 4층' 이라는 템플릿 더미값이
 * 그대로 노출되고 있었고, 저작권 표기도 다른 사이트 이름('네일샵 창업')이었다.
 * 확인되지 않은 사업자 정보는 표시하지 않는다.
 *
 * 링크도 6개 중 3개가 전부 href="/" 여서 /curriculum·/guide 가 어디에서도
 * 링크를 받지 못하는 고아 페이지였다. lib/site.ts 의 FOOTER_LINKS 로 통일한다.
 */
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1c1917',
        borderTop: '1px solid #292524',
        marginTop: '6rem',
        padding: '4rem 1rem',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            fontSize: '20px',
            fontWeight: 900,
            color: 'var(--primary)',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          {SITE_NAME}
        </div>

        <p
          style={{
            fontSize: '13.5px',
            color: '#a8a29e',
            lineHeight: 1.8,
            maxWidth: 520,
            margin: '0 auto 2rem',
          }}
        >
          {SITE_ROLE}
        </p>

        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
            color: '#a8a29e',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          {FOOTER_LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: '#a8a29e', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
          <PrivacyPolicyModal />
          <LegalNoticeModal />
        </nav>

        <div
          style={{
            fontSize: '13px',
            color: '#78716c',
            lineHeight: 1.8,
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <p style={{ marginBottom: '8px' }}>
            {OPERATOR.company} | 개인정보 보호책임자: {OPERATOR.privacyOfficer}
            <br />
            문의: {OPERATOR.email} | 운영시간: {OPERATOR.hours}
          </p>
          <p>© 2026 {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
