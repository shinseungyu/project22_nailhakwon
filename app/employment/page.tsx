"use client";

import Link from "next/link";
import { ChevronLeft, CheckCircle2, Globe, Plane, DollarSign } from "lucide-react";
import styles from "../page.module.css";

export default function EmploymentPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div style={{ marginBottom: 24 }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
            <ChevronLeft size={16} /> 홈으로 돌아가기
          </Link>
        </div>

        <header className={styles.header}>
          <div className={styles.headerIcon}><Globe size={24} /></div>
          <h1 className={styles.title}>네일리스트 해외취업 · 워킹홀리데이</h1>
          <p className={styles.subtitle}>호주·캐나다·일본·영국 네일 취업 완벽 가이드 2026</p>
        </header>

        {/* 왜 해외취업인가 */}
        <section className={styles.card} style={{ marginBottom: 32, borderLeft: "4px solid var(--primary)", background: "var(--primary-light)" }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, color: "var(--primary)" }}>왜 지금 네일리스트 해외취업인가요?</h2>
          <p style={{ color: "var(--text-primary)", fontSize: 15, lineHeight: 1.7 }}>
            K-뷰티 열풍으로 한국 네일 기술은 전 세계에서 최고 수준으로 인정받고 있습니다.
            특히 호주·캐나다·일본은 숙련된 네일 아티스트 수요가 공급을 크게 웃돌고 있어,
            한국 자격증 보유자라면 <strong>워킹홀리데이 비자만으로도 현지 네일샵 취업이 가능</strong>합니다.
            국내보다 2~3배 높은 시급과 팁 문화까지 더해지면 실질 수입이 크게 올라갑니다.
          </p>
        </section>

        {/* 국가별 안내 */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24, color: "var(--text-primary)" }}>
            국가별 네일 워킹홀리데이 · 해외취업 안내
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                flag: "🇦🇺",
                country: "호주",
                keyword: "호주 네일 취업",
                visa: "워킹홀리데이 비자 (30세 이하)",
                salary: "시급 AUD $20~30 (약 1.8~2.7만원)",
                color: "#0ea5e9",
                points: [
                  "세계 최고 수준의 네일 시장 규모",
                  "영어 실력보다 기술력 우선 평가",
                  "시드니·멜버른 한인 네일샵 다수",
                  "팁 문화로 실수입 추가 상승",
                  "2nd 비자로 최대 3년 체류 가능"
                ]
              },
              {
                flag: "🇨🇦",
                country: "캐나다",
                keyword: "캐나다 네일 취업",
                visa: "워킹홀리데이 비자 (30세 이하)",
                salary: "시급 CAD $17~25 (약 1.7~2.5만원)",
                color: "#ef4444",
                points: [
                  "밴쿠버·토론토 한인 네일샵 밀집",
                  "영주권 연계 취업 비자 루트 존재",
                  "네일 기술 전문직 이민 가능",
                  "퀘벡주 별도 이민 프로그램 활용",
                  "안정적인 고용 환경"
                ]
              },
              {
                flag: "🇯🇵",
                country: "일본",
                keyword: "일본 네일 취업",
                visa: "워킹홀리데이 / 특정기능 비자",
                salary: "시급 ¥1,500~2,500 (약 1.4~2.3만원)",
                color: "#f43f5e",
                points: [
                  "K-뷰티 수요로 한국 기술 인기",
                  "언어 장벽 낮고 문화 친숙",
                  "도쿄·오사카 중심 구인 활발",
                  "특정기능 비자로 장기 취업 가능",
                  "한국 국가자격증 경쟁력 최상"
                ]
              },
              {
                flag: "🇬🇧",
                country: "영국",
                keyword: "영국 네일 워홀",
                visa: "Youth Mobility Scheme (30세 이하)",
                salary: "시급 £12~18 (약 2.1~3.2만원)",
                color: "#8b5cf6",
                points: [
                  "런던 네일 시장 최고 시급",
                  "2년 체류 후 취업 비자 전환 가능",
                  "한국 젤네일 기술 희소성 높음",
                  "유럽 여행 병행 가능",
                  "영어 실력 향상에 최적"
                ]
              }
            ].map((c, i) => (
              <div key={i} className={styles.card} style={{ borderTop: `4px solid ${c.color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 32 }}>{c.flag}</span>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>{c.country}</h3>
                    <p style={{ fontSize: 12, color: c.color, fontWeight: 700, margin: 0 }}>{c.keyword}</p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13 }}>
                    <Plane size={14} color={c.color} />
                    <span style={{ color: "var(--text-secondary)" }}>{c.visa}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13 }}>
                    <DollarSign size={14} color={c.color} />
                    <span style={{ color: "var(--text-secondary)" }}>{c.salary}</span>
                  </div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {c.points.map((p, j) => (
                    <li key={j} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--text-primary)", alignItems: "flex-start" }}>
                      <CheckCircle2 size={14} color={c.color} style={{ flexShrink: 0, marginTop: 2 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 해외취업 준비 로드맵 */}
        <section className={styles.card} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 24 }}>네일리스트 해외취업 준비 로드맵</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { step: "STEP 1", title: "미용사(네일) 국가자격증 취득", desc: "해외 네일 취업의 필수 조건. 한국 국가자격증은 해외 고용주에게 기술력을 증명하는 가장 강력한 서류입니다.", tag: "필수" },
              { step: "STEP 2", title: "영문 자격증 번역 공증", desc: "한국 국가자격증을 영문으로 번역·공증하면 해외 비자 신청 및 구직 시 공식 서류로 활용할 수 있습니다.", tag: "필수" },
              { step: "STEP 3", title: "실무 포트폴리오 제작", desc: "젤네일, 아트, 연장 등 다양한 시술 사진을 담은 인스타그램 포트폴리오는 해외 구직의 핵심 도구입니다.", tag: "추천" },
              { step: "STEP 4", title: "워킹홀리데이 비자 신청", desc: "각국 대사관 또는 공식 사이트를 통해 비자 신청. 호주·캐나다는 신청 후 수일 내 발급이 가능합니다.", tag: "필수" },
              { step: "STEP 5", title: "현지 구직 및 취업", desc: "현지 한인 커뮤니티, 구인 앱(Seek, Indeed), 한인 네일샵 직접 연락 등을 통해 취업 기회를 찾습니다.", tag: "실행" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: 20, background: "var(--bg-secondary)", borderRadius: 14 }}>
                <div style={{ minWidth: 64, textAlign: "center" }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "var(--primary)", display: "block" }}>{s.step}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "white", background: s.tag === "필수" ? "var(--primary)" : s.tag === "추천" ? "#0ea5e9" : "#10b981", padding: "2px 8px", borderRadius: 10, display: "inline-block", marginTop: 4 }}>{s.tag}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 국내 vs 해외 연봉 비교 */}
        <section className={styles.card} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>네일리스트 국내 vs 해외 연봉 비교</h2>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 20 }}>2026년 기준 평균 수치이며 경력·지역에 따라 차이가 있습니다.</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  <th style={{ padding: 12, border: "1px solid var(--border-color)", textAlign: "left" }}>구분</th>
                  <th style={{ padding: 12, border: "1px solid var(--border-color)", textAlign: "center" }}>🇰🇷 국내</th>
                  <th style={{ padding: 12, border: "1px solid var(--border-color)", textAlign: "center" }}>🇦🇺 호주</th>
                  <th style={{ padding: 12, border: "1px solid var(--border-color)", textAlign: "center" }}>🇨🇦 캐나다</th>
                  <th style={{ padding: 12, border: "1px solid var(--border-color)", textAlign: "center" }}>🇯🇵 일본</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["신입 월 수입", "180~220만원", "280~360만원", "260~340만원", "200~280만원"],
                  ["경력 2년 월 수입", "230~300만원", "380~500만원", "350~450만원", "280~380만원"],
                  ["팁·인센티브", "거의 없음", "월 30~80만원", "월 20~60만원", "거의 없음"],
                  ["1인샵 창업 수입", "300~600만원", "500~900만원", "400~800만원", "350~700만원"],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#fafafa" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: 12, border: "1px solid var(--border-color)", textAlign: j === 0 ? "left" : "center", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SEO 가이드 아티클 */}
        <article className={styles.guideSection}>
          <h2 style={{ fontSize: 24, fontWeight: 800, lineHeight: 1.4 }}>네일리스트 해외취업 완벽 가이드: 워킹홀리데이부터 장기 취업까지</h2>

          <p>
            <strong>네일리스트 해외취업</strong>은 단순한 해외 경험을 넘어 커리어와 수입을 동시에 높일 수 있는 강력한 선택지입니다.
            K-뷰티의 세계적 인기로 한국 네일 기술자의 해외 수요는 꾸준히 증가하고 있으며,
            특히 <strong>호주 네일 취업</strong>, <strong>캐나다 네일 취업</strong>, <strong>일본 네일 취업</strong>은 한국인이 가장 선호하는 루트입니다.
          </p>

          <section>
            <h3>1. 네일 워킹홀리데이, 어떤 준비가 필요한가요?</h3>
            <p>
              <strong>네일 워킹홀리데이</strong>를 준비할 때 가장 중요한 것은 한국 <strong>미용사(네일) 국가기술자격증</strong> 취득입니다.
              이 자격증은 영문 공증을 통해 해외에서도 공식 증빙 자료로 활용되며,
              한국 기술력을 증명하는 가장 확실한 방법입니다.
            </p>
            <ul>
              <li><strong>자격증 취득:</strong> 국가자격증 필기·실기 합격 후 면허증 발급</li>
              <li><strong>영문 공증:</strong> 외교부 또는 공인 번역 기관을 통해 영문 번역 공증</li>
              <li><strong>포트폴리오:</strong> SNS 기반 시술 사진 포트폴리오 제작</li>
              <li><strong>비자 신청:</strong> 각국 대사관 공식 루트로 워킹홀리데이 비자 취득</li>
            </ul>
          </section>

          <section>
            <h3>2. 호주 네일 취업이 인기인 이유</h3>
            <p>
              <strong>호주 네일 취업</strong>이 한국 네일리스트에게 특히 인기 있는 이유는 명확합니다.
              호주는 최저임금이 세계 최고 수준이며, 시드니·멜버른·브리즈번 등 대도시에는 한인 네일샵이 밀집해 있어
              언어 장벽 없이도 취업이 가능합니다. 워킹홀리데이 비자는 18~30세(일부 35세) 한국인이 신청 가능하며,
              Regional Work를 통해 2nd, 3rd 비자로 최장 3년 체류가 가능합니다.
            </p>
          </section>

          <section>
            <h3>3. 일본 네일 워킹홀리데이의 장점</h3>
            <p>
              <strong>일본 네일 취업</strong>은 지리적 근접성과 문화적 유사성 덕분에 첫 해외 취업지로 인기가 높습니다.
              특히 도쿄·오사카를 중심으로 K-뷰티 붐이 지속되면서 한국식 젤네일 기술에 대한 수요가 급증하고 있습니다.
              일본은 워킹홀리데이 외에도 특정기능 비자를 통해 뷰티 분야 장기 취업이 가능해
              <strong>네일아트 해외취업</strong>의 장기 플랜으로도 적합합니다.
            </p>
          </section>

          <section className={styles.guideCallout}>
            <h4>💡 해외취업 준비, 자격증부터 시작하세요</h4>
            <p>
              네일리스트 해외취업·워킹홀리데이의 첫 번째 조건은 국내 자격증 취득입니다.
              지금 무료 상담을 신청하시면 자격증 취득 일정부터 해외 취업 준비까지 전담 멘토가 함께 안내해 드립니다.
            </p>
          </section>
        </article>

        <div style={{ background: "var(--text-primary)", color: "white", padding: 32, borderRadius: 24, textAlign: "center", marginTop: 48 }}>
          <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>해외취업 준비, 지금 시작하세요</h3>
          <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 24 }}>
            국가자격증 취득부터 워킹홀리데이 비자 준비까지 전문가가 함께합니다.
          </p>
          <Link href="/#consulting" style={{ padding: "14px 32px", background: "var(--primary)", color: "white", borderRadius: 12, textDecoration: "none", fontWeight: 700, display: "inline-block" }}>
            무료 상담 신청하기
          </Link>
        </div>

      </div>
    </div>
  );
}
