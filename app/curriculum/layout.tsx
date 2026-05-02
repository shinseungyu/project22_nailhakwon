import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '네일아트 학원비용 | 과정별 커리큘럼·수강료 비교 2026',
  description: '네일아트 학원비용이 궁금하신가요? 국가자격증반·살롱 실무반·창업 마스터반 과정별 커리큘럼과 수강료를 2026년 기준으로 한눈에 비교.',
  alternates: { canonical: '/curriculum' },
  openGraph: {
    title: '네일아트 학원비용 | 과정별 커리큘럼·수강료 비교 2026',
    description: '네일아트 학원비용 과정별 비교. 국가자격증반·살롱 실무반·창업 마스터반 커리큘럼·수강료 2026 최신.',
    url: '/curriculum',
    type: 'website',
  },
};

export default function TipsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
