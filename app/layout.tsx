import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Geist } from 'next/font/google'
import './globals.css'
import '../styles/globals.css'
import Footer from '@/components/Footer'
import {
  SITE_NAME,
  SITE_SHORT,
  SITE_URL,
  OG_IMAGE,
  ADSENSE_PUB,
  GA_ID,
  NAVER_VERIFICATION,
  NAV,
} from '@/lib/site'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const TITLE = '네일아트 학원비 비교 | 국비지원·자격증·해외취업 2026';
const DESC = '네일학원 학원비를 총액 기준으로 비교하고 국비지원·자격증·해외취업 정보를 2026년 기준으로 정리했습니다.';

export const metadata: Metadata = {
  title: {
    default: TITLE,
    // 네이버 서치어드바이저 권장(40자)을 맞추려고 접미사는 짧은 이름을 쓴다
    template: `%s | ${SITE_SHORT}`,
  },
  description: DESC,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  /**
   * keywords 는 검색 순위에 쓰이지 않는다. 이전에는 23개를 나열해 두었는데
   * 주제만 흐려지므로 이 페이지의 핵심 키워드만 남긴다.
   * 개별 페이지는 각자 자기 키워드를 metadata 에서 선언한다.
   */
  keywords: ['네일학원비', '네일학원 비교', '네일 국비지원', '네일 국가자격증', '네일리스트 해외취업'],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: '/',
    siteName: SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: '네일학원 학원비 비교사이트',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [OG_IMAGE],
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
  verification: {
    other: { 'naver-site-verification': NAVER_VERIFICATION },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  other: {
    'google-adsense-account': ADSENSE_PUB,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  /**
   * 루트 레이아웃에는 "사이트 전체에 해당하는" 노드만 둔다.
   *
   * 이전에는 여기에 두 가지가 더 있었고 둘 다 문제였다.
   *  ① 홈 전용 WebPage 노드 — url 이 홈으로 고정돼 있어서 모든 하위 페이지가
   *     "나는 홈페이지다" 라고 선언하고 있었다.
   *  ② FAQPage 5개 — 화면에 그 Q&A 가 없는 페이지에까지 전부 붙었고,
   *     내용도 '저희 학원에서는 1:1 진도표를 운영합니다' 처럼 이 사이트가
   *     실제로 하지 않는 일을 서술하고 있었다.
   *     FAQ 스키마는 그 화면에 실제로 보이는 Q&A 로만 만든다 → /qna 로 옮김.
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: DESC,
        inLanguage: 'ko-KR',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        description:
          '네일 학원비·국비지원·자격증·해외취업 정보를 비교해 제공하는 정보 사이트입니다.',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/favicon.png`,
        },
      },
    ],
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/*
          JSON-LD 는 next/script 로 넣으면 서버 HTML 에 self.__next_s 페이로드로만 나가고
          실제 <script type="application/ld+json"> 태그는 하이드레이션 이후에 생긴다.
          strategy="beforeInteractive" 여도 마찬가지다. JS 를 렌더하지 않는 크롤러와
          스키마 검증 도구가 못 읽으므로 일반 script 로 렌더한다.
          반대로 외부 스크립트(gtag·adsbygoogle)는 실제로 로드돼야 하므로 next/script 가 맞다.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB}`}
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
              gap: 1rem;
            }
            .nav-logo {
              font-weight: bold;
              color: black;
              font-size: 1.125rem;
              text-decoration: none;
              display: flex;
              align-items: center;
              flex-shrink: 0;
            }
            .nav-links {
              display: flex;
              gap: 1.5rem;
              overflow-x: auto;
              scrollbar-width: none;
            }
            .nav-links::-webkit-scrollbar {
              display: none;
            }
            .nav-link {
              text-decoration: none;
              color: #6b7280;
              font-size: 0.875rem;
              font-weight: 500;
              transition: color 0.2s;
              white-space: nowrap;
            }
            .nav-link:hover {
              color: black;
            }
            @media (max-width: 760px) {
              .nav-logo {
                font-size: 0.95rem;
              }
              .nav-links {
                gap: 0.85rem;
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
            <Link href="/" className="nav-logo" style={{ color: "var(--primary)" }}>
              네일아트 학원비 비교
            </Link>
            <div className="nav-links">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  )
}
