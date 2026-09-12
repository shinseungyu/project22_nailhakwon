import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, OPERATOR, UPDATED } from '@/lib/site'

/**
 * ⚠️ 이 페이지는 project5(newsioo.com)의 "관세계산기" 처리방침이 그대로 복사돼 있었다.
 * 운영 주체도 newsioo.com 으로 적혀 있었고, "회원가입 절차가 없으므로 이름·연락처 등
 * 개인정보를 수집하지 않습니다" 라고 되어 있었는데 실제로는 상담 폼이
 * 이름·생년월일·연락처·성별·지역을 수집해 제휴 상담처에 제공한다.
 * 사실과 다른 처리방침이라 이 사이트의 실제 처리 내용으로 다시 작성했다.
 */
export const metadata: Metadata = {
  title: `개인정보 처리방침 | ${SITE_NAME}`,
  description: '상담 신청 시 수집하는 개인정보의 항목과 이용 목적, 제3자 제공, 보유 기간을 안내합니다.',
  alternates: { canonical: '/privacy-policy' },
  // 사이트맵에서 제외하되 크롤은 허용하고 여기서 noindex 로 처리한다
  robots: { index: false, follow: true },
}

const h2Style = {
  fontSize: '1.25rem',
  fontWeight: 'bold' as const,
  marginBottom: '12px',
  borderBottom: '2px solid #eee',
  paddingBottom: '8px',
}
const sectionStyle = { marginBottom: '32px' }
const ulStyle = { paddingLeft: '20px', marginTop: '8px' }

export default function PrivacyPolicyPage() {
  return (
    <main
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        color: '#333',
        lineHeight: 1.8,
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>개인정보 처리방침</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>최종 업데이트: {UPDATED}</p>

      <section style={sectionStyle}>
        <h2 style={h2Style}>1. 개요</h2>
        <p>
          본 개인정보 처리방침은 {OPERATOR.company}(이하 &quot;회사&quot;)가 운영하는{' '}
          <strong>{SITE_URL.replace('https://', '')}</strong>({SITE_NAME}, 이하 &quot;사이트&quot;)에서
          이용자의 개인정보를 어떻게 수집·이용·제공·보호하는지를 설명합니다. 본 사이트는 네일 교육 관련
          정보를 제공하고, 이용자가 신청한 경우 제휴 상담처를 연결해 드리는 서비스를 운영합니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>2. 수집하는 개인정보 항목</h2>
        <p>
          <strong>상담 신청 시 (이용자가 직접 입력)</strong>
        </p>
        <ul style={ulStyle}>
          <li>필수: 이름, 생년월일, 휴대전화번호, 성별, 관심 지역, 자격증 보유 여부</li>
        </ul>
        <p style={{ marginTop: '12px' }}>
          <strong>서비스 이용 과정에서 자동 수집</strong>
        </p>
        <ul style={ulStyle}>
          <li>방문 페이지, 체류 시간 등 이용 기록</li>
          <li>IP 주소, 브라우저 유형, 운영체제 정보</li>
          <li>쿠키 및 유사 기술을 통한 데이터</li>
        </ul>
        <p style={{ marginTop: '12px' }}>
          상담 신청을 하지 않고 정보만 열람하는 경우에는 이름·연락처 등을 수집하지 않습니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>3. 개인정보의 수집·이용 목적</h2>
        <ul style={ulStyle}>
          <li>상담 신청 접수 및 본인 확인</li>
          <li>이용자가 선택한 지역·관심 과정에 맞는 제휴 상담처 연결</li>
          <li>수강료·개강 일정 등 문의하신 내용에 대한 안내</li>
          <li>서비스 운영 및 개선, 방문자 통계 분석</li>
          <li>맞춤형 광고 제공</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>4. 개인정보의 제3자 제공</h2>
        <p>
          회사는 이용자가 <strong>별도로 동의한 경우에 한하여</strong> 아래와 같이 개인정보를 제3자에게
          제공합니다. 동의하지 않으실 수 있으며, 동의하지 않더라도 사이트의 정보 열람에는 제한이 없습니다.
        </p>
        <ul style={ulStyle}>
          <li>
            <strong>제공받는 자</strong> — 네일·뷰티 교육기관(학원·아카데미) 및 해당 기관의 상담 위탁사
            (이하 &quot;제휴 상담처&quot;)
          </li>
          <li>
            <strong>제공 항목</strong> — 이름, 생년월일, 휴대전화번호, 성별, 관심 지역, 자격증 보유 여부
          </li>
          <li>
            <strong>제공 목적</strong> — 수강 상담 및 과정·수강료 안내
          </li>
          <li>
            <strong>보유·이용 기간</strong> — 제공받은 자의 상담 목적 달성 시까지
          </li>
        </ul>
        <p style={{ marginTop: '12px' }}>
          제휴 상담처는 이용자가 선택한 지역·관심 과정에 따라 정해지며, 한 곳이 아닌 복수의 상담처에
          제공될 수 있습니다. <strong>실제 제공 시에는 제공받는 상담처의 상호를 특정하여 사전에 안내</strong>
          드리며, 원하지 않으실 경우 제공하지 않습니다. 현재 제휴 상담처 목록은{' '}
          <a href={`mailto:${OPERATOR.email}`} style={{ color: '#2563eb' }}>
            {OPERATOR.email}
          </a>{' '}
          으로 요청하시면 회신해 드립니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>5. 개인정보의 보유 및 파기</h2>
        <ul style={ulStyle}>
          <li>상담 신청 정보는 상담 목적 달성 후 지체 없이 파기합니다.</li>
          <li>
            관계 법령에 따라 보존할 필요가 있는 경우에는 해당 법령에서 정한 기간 동안 보관한 뒤 파기합니다.
          </li>
          <li>전자적 파일은 복구할 수 없는 방법으로 삭제합니다.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>6. 이용자의 권리</h2>
        <p>
          이용자는 언제든지 자신의 개인정보에 대한 열람·정정·삭제·처리정지를 요구할 수 있습니다. 아래
          연락처로 요청하시면 지체 없이 조치합니다.
        </p>
        <ul style={ulStyle}>
          <li>개인정보 보호책임자: {OPERATOR.privacyOfficer}</li>
          <li>
            이메일:{' '}
            <a href={`mailto:${OPERATOR.email}`} style={{ color: '#2563eb' }}>
              {OPERATOR.email}
            </a>
          </li>
          <li>운영시간: {OPERATOR.hours}</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>7. Google AdSense 및 제3자 광고</h2>
        <p>
          본 사이트는 <strong>Google AdSense</strong>를 통해 광고를 게재합니다. Google은 쿠키를 사용하여
          이용자의 이전 방문 기록을 기반으로 관련 광고를 표시합니다.
        </p>
        <ul style={ulStyle}>
          <li>
            Google의 광고 쿠키 사용은{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2563eb' }}
            >
              Google 개인정보 처리방침
            </a>
            을 따릅니다.
          </li>
          <li>
            이용자는{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2563eb' }}
            >
              Google 광고 설정
            </a>
            에서 개인화 광고를 비활성화할 수 있습니다.
          </li>
          <li>
            또는{' '}
            <a
              href="https://www.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2563eb' }}
            >
              aboutads.info
            </a>
            에서 제3자 광고 쿠키를 거부할 수 있습니다.
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>8. 방문자 통계</h2>
        <p>
          본 사이트는 Google Analytics를 사용하여 방문자 통계를 수집합니다. 수집된 정보는 개인을 식별할 수
          없는 형태로 처리되며 서비스 개선 목적으로만 사용됩니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>9. 처리방침의 변경</h2>
        <p>
          본 방침이 변경되는 경우 사이트를 통해 공지합니다. 중요한 변경이 있을 때에는 변경 사항과 시행일을
          함께 안내합니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>10. 문의처</h2>
        <p>
          {OPERATOR.company}
          <br />
          개인정보 보호책임자: {OPERATOR.privacyOfficer}
          <br />
          이메일:{' '}
          <a href={`mailto:${OPERATOR.email}`} style={{ color: '#2563eb' }}>
            {OPERATOR.email}
          </a>
        </p>
      </section>
    </main>
  )
}
