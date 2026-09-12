import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '네일아트 학원비용 | 과정별 커리큘럼·수강료 2026',
  description: '국가자격증반·살롱 실무반·창업반의 과정별 커리큘럼과 수강료를 비교했습니다.',
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
