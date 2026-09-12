import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '내일배움카드 네일학원 | 국비지원 조건·자부담금',
  description: '내일배움카드 신청 절차와 자부담금 구조, 국비지원 과정과 일반 과정의 차이를 정리했습니다.',
  alternates: { canonical: '/funding' },
  openGraph: {
    title: '내일배움카드 네일학원 | 국비지원 조건·자부담금',
    description: '내일배움카드 신청 절차와 자부담금, 국비지원 과정과 일반 과정 비교.',
    url: '/funding',
    type: 'website',
  },
};

export default function FundingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
