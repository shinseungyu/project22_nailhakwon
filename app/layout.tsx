import type { Metadata } from 'next'
import Script from 'next/script';
import { Geist } from 'next/font/google'
import './globals.css'
import '../styles/globals.css'
import Footer from '@/components/Footer'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const SITE_NAME = '네일아트 학원비 비교사이트';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nailhakwon.com';
const TITLE = '네일아트 학원비 비교사이트 | 네일 국비지원·학원비·취업 총정리 2026';
const DESC = '네일아트 학원비 비교사이트. 네일 국비지원·학원비·취업까지 2026년 기준으로 한눈에 총정리합니다. 무료 상담으로 맞춤 정보를 받아보세요.';

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESC,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  keywords: ['네일아트 학원비 비교사이트', '네일아트 학원비용', '네일 학원비', '네일학원비 비교', '네일학원 학원비', '네일아트 학원비 얼마', '네일학원비용 비교', '네일 국비지원', '내일배움카드 네일학원', '네일아트 국비지원', '네일리스트 해외취업', '네일 워킹홀리데이', '호주 네일 취업', '캐나다 네일 취업', '일본 네일 취업', '네일아트 국가자격증', '네일 취업 학원', '네일학원비용', '네일아트학원비', '네일샵 창업', '네일리스트 자격증', '미용사 네일 자격증', '네일아트 배우기'],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: '/',
    siteName: SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://nailhakwon.com/thumb.webp',
        width: 1200,
        height: 630,
        alt: '네일학원 - 네일아트 학원비용 비교사이트',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '네일아트 학원비 비교사이트 | 네일 국비지원·학원비·취업 총정리 2026',
    description: '네일 국비지원·학원비·취업까지 2026년 기준으로 한눈에 총정리합니다.',
    images: ['https://nailhakwon.com/thumb.webp'],
  },
  authors: [{ name: SITE_NAME }],
  publisher: SITE_NAME,
  robots: { index: true, follow: true },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  verification: {},
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  other: {
    'google-adsense-account': 'ca-pub-5378247298190063',
    'NaverBot': 'all',
    'Yeti': 'all',
    'googlebot': 'all',
    'subject': '네일아트 학원비 비교사이트',
    'publisher': SITE_NAME,
    'author': SITE_NAME,
    'location': 'South Korea',
    'distribution': 'global',
    'rating': 'general',
    'format-detection': 'telephone=no, date=no, address=no, email=no',
    'itemprop:name': TITLE,
    'itemprop:description': DESC,
    'itemprop:image': 'https://nailhakwon.com/thumb.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nailhakwon.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: '네일아트 학원비 비교사이트',
        inLanguage: 'ko-KR',
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: '네일아트 학원비 비교사이트',
        url: `${siteUrl}/`,
        description: '네일아트 학원비용·국비지원·해외취업 정보를 비교 제공하는 네일 전문 정보 사이트입니다.',
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: '네일아트 학원비 비교사이트 | 네일 국비지원·학원비·취업 총정리 2026',
        inLanguage: 'ko-KR',
        description: '네일아트 학원비용·내일배움카드 국비지원·네일리스트 해외취업·워킹홀리데이까지 2026년 기준으로 한눈에 비교.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: ['네일아트 학원비용', '네일학원비 비교', '네일 국비지원', '내일배움카드 네일학원', '네일리스트 해외취업', '네일 워킹홀리데이'],
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: '네일아트 국가자격증 취득까지 기간이 얼마나 걸리나요?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '일반적으로 주 3회 수업 기준으로 평균 3개월(약 12주) 정도 소요됩니다. 저희 네일아트학원에서는 수강생 개개인의 습득 속도에 맞춘 1:1 진도표를 운영하여 단기간 합격을 지원합니다.',
            },
          },
          {
            '@type': 'Question',
            name: '직장인이나 학생도 수강할 수 있는 야간/주말 시간표가 있나요?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '네! 직장인과 학생분들을 위해 야간반과 주말반을 운영하고 있습니다. 본인의 스케줄에 맞춰 유동적으로 수업 시간을 조율하실 수 있어 업무와 병행이 가능합니다.',
            },
          },
          {
            '@type': 'Question',
            name: '네일아트 학원비 외에 추가되는 재료비는 별도인가요?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '수강생분들의 초기 비용 부담을 최소화하기 위해 등록 시 전문가용 재료 풀세트를 무상으로 제공해 드립니다. 별도 재료비 걱정 없이 시작하실 수 있습니다.',
            },
          },
          {
            '@type': 'Question',
            name: '내일배움카드(국비지원)로 수업을 들을 수 있나요?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '저희 학원은 내일배움카드로 직접 결제하는 국비지원 기관은 아닙니다. 다만 내일배움카드 소지자는 카드 사용 없이도 별도 할인 혜택을 즉시 받으실 수 있으며, 자체 장학 지원으로 국비 수준 이상의 혜택을 모든 수강생에게 제공합니다.',
            },
          },
          {
            '@type': 'Question',
            name: '자격증 취득 후 호주·캐나다 워킹홀리데이로 네일 취업이 가능한가요?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '네, 가능합니다. 한국 미용사(네일) 국가자격증을 영문 공증하면 호주·캐나다·일본 현지 네일샵 구직 시 핵심 스펙이 됩니다. 특히 호주 워킹홀리데이는 시급이 국내보다 높아 네일리스트 해외취업지로 인기가 높습니다.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <meta itemProp="name" content={TITLE} />
        <meta itemProp="description" content={DESC} />
        <meta itemProp="image" content="https://nailhakwon.com/thumb.webp" />
        <meta name="naver-site-verification" content="89526f8a6ecae4298dcb29200f67dbc70c6c1b48" />
        <meta name="naver-site-verification" content="593987aee24a5955b82f1db88f052255eb167d93" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HQ7J0K4PKJ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HQ7J0K4PKJ');
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5378247298190063"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            .nav-container {
              background-color: white;
              border-bottom: 1px solid #e5e7eb;
              position: sticky;
              top: 0;
              z-index: 50;
              padding: 0 1rem;
            }
            .nav-content {
              max-width: 1200px;
              margin: 0 auto;
              display: flex;
              height: 4rem;
              align-items: center;
              justify-content: space-between;
            }
            .nav-logo {
              font-weight: bold;
              color: black;
              font-size: 1.125rem;
              text-decoration: none;
              display: flex;
              align-items: center;
            }
            .nav-links {
              display: flex;
              gap: 2rem;
            }
            .nav-link {
              text-decoration: none;
              color: #6b7280;
              font-size: 0.875rem;
              font-weight: 500;
              transition: color 0.2s;
            }
            .nav-link:hover {
              color: black;
            }
            @media (max-width: 640px) {
              .nav-links {
                gap: 0.3rem;
              }
              .nav-link {
                font-size: 0.8rem;
              }
            }
          `
        }} />
      </head>
      <body className={geist.variable}>
        <nav className="nav-container">
          <div className="nav-content">
            <a href="/" className="nav-logo" style={{ color: "var(--primary)" }}>
              네일아트 학원비용 비교
            </a>
            <div className="nav-links">
              <a href="/" className="nav-link">홈</a>
              <a href="/employment" className="nav-link">해외취업</a>
              <a href="/funding" className="nav-link">국비지원</a>
              <a href="/qna" className="nav-link">FAQ</a>
              <a href="/board" className="nav-link">게시판</a>
            </div>
          </div>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  )
}
