import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '내일배움카드 네일학원 | 네일 국비지원 vs 자체장학 비교 2026',
  description: '내일배움카드 네일학원 신청 방법부터 네일 국비지원 학원과 일반 학원 비용 비교까지. 수업 인원·재료비·대기기간 2026년 최신 정리.',
  alternates: { canonical: '/funding' },
  openGraph: {
    title: '내일배움카드 네일학원 | 네일 국비지원 vs 자체장학 비교',
    description: '내일배움카드 네일학원 신청 방법, 네일 국비지원 vs 일반 학원 비용·수업인원·재료비 2026 비교.',
    url: '/funding',
    type: 'website',
  },
};

export default function FundingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
