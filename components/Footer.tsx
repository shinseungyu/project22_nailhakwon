import PrivacyPolicyModal from './PrivacyPolicyModal'
import LegalNoticeModal from './LegalNoticeModal'

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#1c1917', 
      borderTop: '1px solid #292524', 
      marginTop: '6rem', 
      padding: '4rem 1rem', 
      width: '100%',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          fontSize: '20px',
          fontWeight: '900',
          color: 'var(--primary)',
          marginBottom: '2rem',
          letterSpacing: '-0.02em'
        }}>
          네일아트 학원비 비교사이트
        </div>

        <nav style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
          color: '#a8a29e',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          <a href="/" style={{ color: '#a8a29e', textDecoration: 'none' }}>홈</a>
          <a href="/#consulting" style={{ color: '#a8a29e', textDecoration: 'none' }}>무료상담</a>
          <a href="/#curriculum" style={{ color: '#a8a29e', textDecoration: 'none' }}>커리큘럼</a>
          <a href="/" style={{ color: '#a8a29e', textDecoration: 'none' }}>취업지원</a>
          <a href="/" style={{ color: '#a8a29e', textDecoration: 'none' }}>국비지원</a>
          <a href="/" style={{ color: '#a8a29e', textDecoration: 'none' }}>수강후기</a>
          <PrivacyPolicyModal />
          <LegalNoticeModal />
        </nav>

        <div style={{ 
          fontSize: '13px', 
          color: '#78716c', 
          lineHeight: '1.8',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <p style={{ marginBottom: '8px' }}>
            네일아트학원 교육센터 | 대표: 홍길동 | 사업자등록번호: 123-45-67890<br/>
            주소: 서울특별시 강남구 테헤란로 123 네일타워 4층
          </p>
          <p>© 2026 네일샵 창업. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
