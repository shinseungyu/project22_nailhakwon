import HeroIntegratedForm from './HeroIntegratedForm';

/**
 * 메인 히어로와 같은 상담 폼(HeroIntegratedForm)을 서브페이지에 넣는 래퍼.
 *
 * 배치 규칙: 모든 페이지에서 H1(과 리드 문단) 바로 아래, 첫 h2 보다 위.
 * 제목을 h2 로 두지 않는다 — 전 페이지에 같은 h2 가 반복되면 문서 구조가 흐려진다.
 */
export default function PageConsult({ label = '무료 상담 신청' }: { label?: string }) {
  return (
    <div style={{ margin: '8px 0 48px' }}>
      <p
        style={{
          fontSize: 14,
          fontWeight: 800,
          color: 'var(--primary)',
          textAlign: 'center',
          margin: '0 0 14px',
        }}
      >
        {label}
      </p>
      <div className="relative w-full">
        <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full opacity-50 pointer-events-none" />
        <div className="relative">
          <HeroIntegratedForm />
        </div>
      </div>
    </div>
  );
}
