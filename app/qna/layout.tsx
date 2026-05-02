import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '네일학원비 비교 FAQ | 학원비용·국비지원·취업 Q&A 총정리',
  description: '네일학원비 비교할 때 궁금한 것들을 모았습니다. 네일아트 학원비용, 내일배움카드 네일학원 등록 방법, 자격증 취득 후 취업까지 한번에 해결.',
  alternates: { canonical: '/qna' },
  openGraph: {
    title: '네일학원비 비교 FAQ | 학원비용·국비지원·취업 Q&A',
    description: '네일학원비 비교 FAQ. 네일아트 학원비용·내일배움카드·취업 가능 여부 등 자주 묻는 질문 총정리.',
    url: '/qna',
    type: 'website',
  },
};

export default function QnaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
