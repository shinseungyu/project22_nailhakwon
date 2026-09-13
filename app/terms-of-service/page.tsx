import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, OPERATOR, UPDATED } from '@/lib/site'
import PageConsult from '@/components/PageConsult';

/**
 * ⚠️ 이 페이지도 project5(newsioo.com)의 "관세계산기" 약관이 그대로 복사돼 있었다.
 * 서비스 내용이 '해외 직구 관세 및 부가세 자동 계산', '합산과세 계산기' 로 적혀 있었고
 * 면책 조항도 관세청 기준을 인용하고 있었다. 이 사이트의 실제 서비스로 다시 작성했다.
 */
export const metadata: Metadata = {
  title: `이용약관 | ${SITE_NAME}`,
  description: '본 사이트가 제공하는 정보 제공 및 상담 연결 서비스의 이용 조건과 면책 사항을 안내합니다.',
  alternates: { canonical: '/terms-of-service' },
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

export default function TermsOfServicePage() {
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
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>이용약관</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>최종 업데이트: {UPDATED}</p>

      {/* 상담 폼 — 메인과 같은 폼, H1 바로 아래·첫 h2 위 */}
      <PageConsult label="네일학원 무료 상담 신청" />

      <section style={sectionStyle}>
        <h2 style={h2Style}>1. 목적</h2>
        <p>
          본 약관은 {OPERATOR.company}(이하 &quot;회사&quot;)가 운영하는{' '}
          <strong>{SITE_URL.replace('https://', '')}</strong>({SITE_NAME}, 이하 &quot;사이트&quot;)가
          제공하는 서비스의 이용 조건과 절차, 회사와 이용자의 권리·의무를 정하는 것을 목적으로 합니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>2. 서비스의 내용</h2>
        <p>본 사이트가 제공하는 서비스는 다음과 같습니다.</p>
        <ul style={ulStyle}>
          <li>네일 학원비·국비지원·자격증·취업에 관한 정보 제공</li>
          <li>국가별 네일리스트 해외취업 정보 제공</li>
          <li>이용자가 신청한 경우 제휴 상담처 연결</li>
        </ul>
        <p style={{ marginTop: '12px' }}>
          <strong>
            회사는 교육기관이 아니며, 직접 강의를 제공하거나 수강 계약의 당사자가 되지 않습니다.
          </strong>{' '}
          수강 등록, 수강료 결제, 환불 등은 이용자와 해당 교육기관 사이에서 이루어집니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>3. 서비스 이용</h2>
        <ul style={ulStyle}>
          <li>정보 열람은 별도의 가입 절차 없이 누구나 이용할 수 있습니다.</li>
          <li>
            상담 신청은 이용자가 개인정보 수집·이용 및 제3자 제공에 동의한 경우에 한하여 처리됩니다.
          </li>
          <li>상담 연결 서비스는 무료로 제공됩니다.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>4. 이용자의 의무</h2>
        <ul style={ulStyle}>
          <li>상담 신청 시 본인의 정확한 정보를 입력해야 합니다.</li>
          <li>타인의 정보를 도용하여 신청해서는 안 됩니다.</li>
          <li>사이트의 콘텐츠를 무단으로 복제·배포·상업적으로 이용해서는 안 됩니다.</li>
          <li>서비스의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>5. 정보의 정확성과 면책</h2>
        <p>
          본 사이트가 제공하는 수강료·시급·지원금 등의 금액과 제도·비자 관련 정보는{' '}
          <strong>작성 시점의 자료를 바탕으로 정리한 참고 정보</strong>이며, 법적 효력이나 보증을 갖지
          않습니다.
        </p>
        <ul style={ulStyle}>
          <li>
            수강료와 재료비는 학원·지역·과정에 따라 다르며, 정확한 금액은 해당 교육기관에서 확인해야
            합니다.
          </li>
          <li>
            국비지원 요건과 자부담금은 정책에 따라 변경됩니다. 최종 기준은 HRD-Net(hrd.go.kr)과
            고용노동부 공지입니다.
          </li>
          <li>
            자격시험 일정·응시 자격은 큐넷(q-net.or.kr)의 공고가 기준입니다.
          </li>
          <li>
            해외 비자·취업 요건은 각국 이민 당국의 고시가 기준이며 수시로 변경됩니다. 반드시 공식 출처에서
            확인하시기 바랍니다.
          </li>
        </ul>
        <p style={{ marginTop: '12px' }}>
          회사는 이용자가 본 사이트의 정보에 근거하여 내린 결정과 그 결과에 대해 책임을 지지 않습니다.
          또한 제휴 상담처와 이용자 사이에 발생한 분쟁에 대하여 회사는 당사자가 아니며, 다만 원활한 해결을
          위해 필요한 범위에서 협조합니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>6. 광고의 게재</h2>
        <p>
          본 사이트는 Google AdSense 등 제3자 광고 서비스를 통해 광고를 게재할 수 있습니다. 광고에 표시된
          상품·서비스는 회사가 제공하는 것이 아니며, 이에 대한 책임은 해당 광고주에게 있습니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>7. 저작권</h2>
        <p>
          사이트에 게시된 텍스트·표·이미지 등 콘텐츠의 저작권은 회사에 있습니다. 사전 동의 없이 복제,
          배포, 전송, 2차적 저작물 작성 등의 방법으로 이용할 수 없습니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>8. 약관의 변경</h2>
        <p>
          회사는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 사이트에 게시함으로써 효력이
          발생합니다. 이용자에게 불리한 변경의 경우 시행일 전에 그 내용과 사유를 함께 안내합니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>9. 문의처</h2>
        <p>
          {OPERATOR.company}
          <br />
          이메일:{' '}
          <a href={`mailto:${OPERATOR.email}`} style={{ color: '#2563eb' }}>
            {OPERATOR.email}
          </a>
          <br />
          운영시간: {OPERATOR.hours}
        </p>
      </section>
    </main>
  )
}
