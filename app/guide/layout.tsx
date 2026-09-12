import { Metadata } from 'next';

/**
 * /guide 에는 자체 metadata 가 없어서 루트 타이틀을 그대로 상속받고 있었다.
 * 홈과 <title>·description 이 완전히 같아 중복 페이지 신호가 나간다.
 */
export const metadata: Metadata = {
  title: '네일학원 고르는 법 | 학원비 비교 체크리스트',
  description: '네일학원을 총액·수업시간·연습실 기준으로 비교하는 방법과 등록 전 확인할 항목을 정리했습니다.',
  alternates: { canonical: '/guide' },
  keywords: ['네일학원 선택', '네일학원비 비교', '네일학원 체크리스트'],
  openGraph: {
    title: '네일학원 고르는 법 | 학원비 비교 체크리스트',
    description: '총액·수업시간·연습실 기준으로 네일학원을 비교하는 방법을 정리했습니다.',
    url: '/guide',
    type: 'website',
  },
};

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
