import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '네일리스트 해외취업 | 국가별 비자·시급 2026',
  description: '호주·캐나다·일본·영국 등 국가별 네일 취업 비자와 시급, 준비 항목을 정리했습니다.',
  alternates: { canonical: '/employment' },
  keywords: ['네일리스트 해외취업', '네일 워킹홀리데이', '호주 네일 취업', '캐나다 네일 취업', '일본 네일 취업', '네일아트 해외취업', '네일리스트 연봉', '네일 취업 준비', '네일 워홀'],
  openGraph: {
    title: '네일리스트 해외취업 | 국가별 비자·시급 가이드 2026',
    description: '국가별 네일 취업 비자와 시급, 준비 항목을 한곳에 정리했습니다.',
    url: '/employment',
    type: 'website',
  },
};

export default function EmploymentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
