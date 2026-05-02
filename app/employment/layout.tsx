import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '네일리스트 해외취업·워킹홀리데이 | 호주·캐나다·일본 네일 취업 완벽 가이드 2026',
  description: '네일리스트 해외취업 완벽 가이드. 호주·캐나다·일본·영국 네일 워킹홀리데이 준비 방법, 필요 자격증, 예상 연봉까지. 국내 네일 자격증 취득 후 해외 취업까지 한번에.',
  alternates: { canonical: '/employment' },
  keywords: ['네일리스트 해외취업', '네일 워킹홀리데이', '호주 네일 취업', '캐나다 네일 취업', '일본 네일 취업', '네일아트 해외취업', '네일리스트 연봉', '네일 취업 준비', '네일 워홀'],
  openGraph: {
    title: '네일리스트 해외취업·워킹홀리데이 완벽 가이드 2026',
    description: '호주·캐나다·일본 네일 워킹홀리데이 준비법·연봉·자격증 총정리. 국내 자격증부터 해외 취업까지.',
    url: '/employment',
    type: 'website',
  },
};

export default function EmploymentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
