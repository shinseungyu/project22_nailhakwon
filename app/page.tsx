"use client";

import Link from "next/link";
import Image from "next/image";
import { Award, Sparkles, CheckCircle2, ChevronRight, Clock, BookOpen } from "lucide-react";
import HeroIntegratedForm from "@/components/HeroIntegratedForm";
import postsData from "@/data/posts.json";
import styles from "./page.module.css";

export default function Page() {

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section id="consulting" className="relative py-24 md:py-36 border-b border-stone-200 overflow-hidden min-h-[700px] flex items-center justify-center">
        <Image src="/bg.webp" alt="네일아트학원" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        
        <div className="relative max-w-[1100px] mx-auto px-6 w-full flex flex-col items-center text-center">
          {/* Text Content */}
          <div className="space-y-8 mb-12">
            <div className="space-y-4">
              <p className="inline-block bg-brand/20 text-brand text-xs font-black px-4 py-2 rounded-lg tracking-widest uppercase border border-brand/30 backdrop-blur-md">2026 PREMIUM PASS</p>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                네일아트 학원비 비교사이트,<br />
                <span className="text-white/60">가장 완벽한</span> 선택.
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium">
                네일아트 학원비 비교사이트에서 학원비용·국비지원·취업반을 한눈에.<br />
                네일학원비용 걱정 없이 자격증까지 완성하세요.
              </p>
            </div>
            
          </div>

          {/* Integrated Form */}
          <div className="relative w-full max-w-3xl z-10">
            <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full animate-pulse opacity-50 pointer-events-none" />
            <HeroIntegratedForm />
          </div>
        </div>
      </section>

      <div className={styles.wrapper}>

        {/* Why Choose Us */}
        <section style={{ marginBottom: 60 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text-primary)", marginBottom: 16 }}>네일아트 학원비 비교사이트가 추천하는 이유</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6, maxWidth: 680, margin: "0 auto" }}>
              네일아트 학원비용을 비교할 때 단순히 가격만 보면 안 됩니다. 교육의 질, 재료 수준, 수료 후 지원까지 종합적으로 따져봐야 진짜 합리적인 선택을 할 수 있습니다. 저희 학원이 수많은 수강생에게 선택받는 데는 분명한 이유가 있습니다.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icon: <Award size={32} color="var(--primary)" />, title: "검증된 합격 커리큘럼", desc: "체계적인 모의테스트와 감점 포인트 집중 분석으로 원패스 합격을 이끕니다. 필기부터 실기까지 단계별 맞춤 피드백으로 초보자도 단기간에 국가자격증을 취득할 수 있습니다." },
              { icon: <Sparkles size={32} color="var(--primary)" />, title: "현업 원장 직강", desc: "현역 네일 아티스트의 생생한 트렌드 테크닉을 직접 배웁니다. 교재에만 있는 이론이 아닌 실제 샵에서 쓰이는 실무 기술을 중심으로 강의가 구성되어 있어 수료 즉시 현장 투입이 가능합니다." },
              { icon: <CheckCircle2 size={32} color="var(--primary)" />, title: "취업·창업 밀착 지원", desc: "수료 후에도 이어지는 멘토링으로 취업 연계와 창업 준비를 돕습니다. 포트폴리오 제작부터 면접 코칭, 해외취업·워킹홀리데이 정보 제공까지 졸업 후에도 든든한 지원이 계속됩니다." }
            ].map((feature, i) => (
              <div key={i} className={styles.card} style={{ textAlign: "center", padding: "40px 24px", cursor: "default" }}>
                <div style={{ display: "inline-flex", padding: 16, background: "var(--primary-light)", borderRadius: 16, marginBottom: 20 }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{feature.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
            <BookOpen color="var(--primary)" />
            네일아트 학원비 비교사이트 추천 커리큘럼
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>
            네일아트 학원비용이 아깝지 않으려면 커리큘럼이 실전 중심으로 구성되어 있어야 합니다. 국가자격증 취득부터 살롱 실무, 나아가 1인샵 창업까지 단계별로 이어지는 체계적인 과정을 통해 네일 아티스트로서의 완전한 커리어를 쌓을 수 있습니다.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <div className={styles.card} style={{ borderTop: "4px solid var(--primary)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ fontSize: 22, fontWeight: 800 }}>국가자격증반</h3>
                <span style={{ fontSize: 12, background: "var(--primary-light)", color: "var(--primary)", padding: "4px 10px", borderRadius: 12, fontWeight: 700 }}>가장 인기</span>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                미용사(네일) 국가기술자격증 원패스를 목표로 하는 핵심 속성 과정입니다. 필기 이론부터 4가지 실기 과제까지 완벽히 커버합니다.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                {["필기 이론 핵심 요약 및 기출 풀이", "1과제: 매니큐어 & 페디큐어", "2과제: 젤 매니큐어", "3과제: 인조네일 연장", "4과제: 인조네일 제거", "실전 대비 실기 모의고사 진행"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--text-primary)" }}>
                    <CheckCircle2 size={16} color="var(--primary)" /> {item}
                  </li>
                ))}
              </ul>
              <div style={{ background: "var(--bg-page)", padding: 12, borderRadius: 8, fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 8 }}>
                <Clock size={16} /> 주 3회 / 총 3개월 과정
              </div>
            </div>
            <div className={styles.card} style={{ borderTop: "4px solid #14b8a6" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ fontSize: 22, fontWeight: 800 }}>살롱 실무/아트반</h3>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                자격증 취득 후 바로 샵에서 쓸 수 있는 실전 테크닉과 최신 트렌드 아트를 배웁니다. 해외 네일샵 취업 포트폴리오 제작에도 최적화된 과정입니다.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                {["드릴 케어 및 오프 완벽 마스터", "유지력을 높이는 베이스 테크닉", "시럽, 마그네틱, 프렌치, 그라데이션", "최신 트렌드 아트 (리본, 엠보, 파츠)", "고객 응대 및 클레임 대처법", "포트폴리오 제작 지원"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--text-primary)" }}>
                    <CheckCircle2 size={16} color="#14b8a6" /> {item}
                  </li>
                ))}
              </ul>
              <div style={{ background: "var(--bg-page)", padding: 12, borderRadius: 8, fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 8 }}>
                <Clock size={16} /> 주 2회 / 총 2개월 과정
              </div>
            </div>
            <div className={styles.card} style={{ borderTop: "4px solid #8b5cf6" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ fontSize: 22, fontWeight: 800 }}>창업 마스터반</h3>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                나만의 1인샵 창업을 꿈꾸는 분들을 위한 A to Z 밀착 컨설팅 과정. 상권 분석부터 SNS 마케팅, 세무까지 실전 창업의 모든 것을 다룹니다.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                {["상권 분석 및 매장 임대 노하우", "인테리어 및 재료 세팅 가이드", "세무/위생교육/영업신고 절차", "인스타그램 및 네이버 마케팅", "메뉴 단가 설정 및 고객 관리", "창업 현장 멘토링 지원"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--text-primary)" }}>
                    <CheckCircle2 size={16} color="#8b5cf6" /> {item}
                  </li>
                ))}
              </ul>
              <div style={{ background: "var(--bg-page)", padding: 12, borderRadius: 8, fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 8 }}>
                <Clock size={16} /> 주 1회 / 총 1개월 과정
              </div>
            </div>
          </div>
        </section>

        {/* Board Preview Section */}
        <section style={{ marginBottom: 60 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 16 }}>
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>수강후기 & 소식</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6 }}>
                실제 수강생들이 직접 작성한 후기와 학원 소식을 확인하세요. 네일아트 학원비 비교사이트를 통해 등록한 뒤 자격증 취득, 취업 성공, 해외 워킹홀리데이까지 달성한 생생한 이야기를 담았습니다.
              </p>
            </div>
            <Link href="/board" style={{ color: "var(--primary)", textDecoration: "none", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 4, flexShrink: 0, marginLeft: 24 }}>
              전체보기 <ChevronRight size={16} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {postsData.slice(0, 3).map((post: any) => (
              <Link key={post.id} href={`/board?id=${post.id}`} className={styles.card} style={{ textDecoration: "none", padding: 24 }}>
                <span style={{ fontSize: 12, color: "var(--primary)", fontWeight: 700, background: "var(--primary-light)", padding: "2px 8px", borderRadius: 4, marginBottom: 12, display: "inline-block" }}>
                  {post.category}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>{post.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{post.summary}</p>
                <div style={{ marginTop: 16, fontSize: 12, color: "var(--text-muted)" }}>{post.date}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Government Funding Section */}
        <section style={{ marginBottom: 60 }}>
          <div style={{
            background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
            borderRadius: 24, padding: "48px 32px", textAlign: "center", marginBottom: 32,
            position: "relative", overflow: "hidden"
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(244,63,94,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
            <p style={{ color: "var(--primary)", fontWeight: 800, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>GOVERNMENT SUPPORT</p>
            <h2 style={{ fontSize: 32, fontWeight: 900, color: "white", lineHeight: 1.3, marginBottom: 12 }}>
              성공적인 뷰티 아티스트를 위한<br />첫 걸음!
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>
              내일배움카드 네일학원을 찾고 계신가요? 국비지원 과정을 활용하면 교육훈련비 최대 500만원까지 지원받을 수 있습니다. 구직자·재직자·대학생 모두 신청 가능하며, 수료 후 6개월간 취업지원 서비스도 함께 제공됩니다.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, maxWidth: 800, margin: "0 auto" }}>
              {[
                { num: "혜택 01", title: "최대 100% 무료", sub: "국비지원과정" },
                { num: "혜택 02", title: "교육훈련비 최대", sub: "500만원 지원" },
                { num: "혜택 03", title: "수료 후 6개월간", sub: "취업지원서비스 제공" },
              ].map((item, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, padding: "24px 20px", textAlign: "center" }}>
                  <p style={{ color: "var(--primary)", fontSize: 12, fontWeight: 800, letterSpacing: "0.08em", marginBottom: 10 }}>{item.num}</p>
                  <p style={{ color: "white", fontSize: 18, fontWeight: 800, lineHeight: 1.4, margin: 0 }}>
                    {item.title}<br />
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, fontWeight: 600 }}>{item.sub}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#f8fafc", borderRadius: 20, padding: "32px 28px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ background: "var(--primary)", color: "white", fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>국비 전용</span>
              국비지원 신청 TIP
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { q: "내일배움카드 없으면 신청 못하나요?", a: "아니요! 지금 발급만 해두면 바로 신청 가능해요. 발급 방법도 상담으로 안내해드려요!" },
                { q: "국비지원은 누구나 받을 수 있나요?", a: "네! 구직자, 재직자, 대학생 대부분 가능해요. 본인 가능 여부가 궁금하다면 무료 상담으로 확인하세요!" },
                { q: "수강 후 취업도 도와주나요?", a: "포트폴리오부터 이력서, 취업 컨설팅까지 전담팀이 지원해요. 상담 신청 시 커리큘럼과 사례도 알려드립니다!" },
              ].map((faq, i) => (
                <details key={i} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 14, padding: "18px 20px" }}>
                  <summary style={{ fontWeight: 700, cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 15, color: "#1e293b" }}>
                    {faq.q}
                    <ChevronRight size={18} style={{ transform: "rotate(90deg)", color: "var(--primary)", flexShrink: 0 }} />
                  </summary>
                  <p style={{ marginTop: 14, fontSize: 14, color: "#475569", lineHeight: 1.7, borderTop: "1px solid #f1f5f9", paddingTop: 14, margin: "14px 0 0" }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Overseas Employment Section */}
        <section style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text-primary)", marginBottom: 16 }}>
            네일리스트 해외취업 · 워킹홀리데이
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>
            K-뷰티 열풍으로 한국 네일 기술은 전 세계에서 최고 수준으로 인정받고 있습니다. 국내에서 미용사(네일) 국가자격증을 취득하면 호주·캐나다·일본·영국 등에서 워킹홀리데이 비자만으로도 현지 네일샵 취업이 가능합니다. 국내보다 2~3배 높은 시급과 팁 문화까지 더해지면 실질 수입이 크게 올라갑니다. 네일아트 해외취업은 단순한 경험을 넘어 커리어와 수입을 동시에 높이는 강력한 선택지입니다.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 28 }}>
            {[
              { flag: "🇦🇺", country: "호주", keyword: "호주 네일 취업", salary: "시급 AUD $20~30", color: "#0ea5e9", desc: "세계 최고 수준의 네일 시장. 시드니·멜버른 한인 네일샵 다수. 워홀 최대 3년 체류 가능." },
              { flag: "🇨🇦", country: "캐나다", keyword: "캐나다 네일 취업", salary: "시급 CAD $17~25", color: "#ef4444", desc: "밴쿠버·토론토 한인샵 밀집. 영주권 연계 취업비자 루트 존재. 안정적 고용 환경." },
              { flag: "🇯🇵", country: "일본", keyword: "일본 네일 취업", salary: "시급 ¥1,500~2,500", color: "#f43f5e", desc: "K-뷰티 수요로 한국 기술 인기. 언어 장벽 낮고 문화 친숙. 특정기능 비자 장기 취업." },
              { flag: "🇬🇧", country: "영국", keyword: "영국 네일 워홀", salary: "시급 £12~18", color: "#8b5cf6", desc: "런던 최고 시급. 한국 젤네일 기술 희소성 높음. 2년 체류 후 취업비자 전환 가능." },
            ].map((c, i) => (
              <div key={i} className={styles.card} style={{ borderTop: `4px solid ${c.color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{c.flag}</span>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>{c.country}</h3>
                    <p style={{ fontSize: 11, color: c.color, fontWeight: 700, margin: 0 }}>{c.keyword}</p>
                  </div>
                </div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{c.salary}</p>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/employment" style={{ color: "var(--primary)", textDecoration: "none", fontSize: 15, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 6 }}>
              해외취업 자세히 보기 <ChevronRight size={16} />
            </Link>
          </div>
        </section>

        {/* SEO Guide Section */}
        <article className={styles.guideSection}>
          <h2 style={{ fontSize: '26px', fontWeight: '800', lineHeight: '1.4' }}>네일아트 학원비 비교사이트 가이드: 네일학원비용부터 국가자격증 취득까지</h2>
          <p>
            <strong>네일아트 학원비 비교사이트</strong>에서 네일 아티스트를 꿈꾸는 분들을 위해 <strong>네일아트 학원비용</strong>과 <strong>네일국가자격증</strong> 취득 과정을 상세히 안내합니다.
            단순히 취미를 넘어 전문적인 직업으로 삼기 위해서는 체계적인 교육과 법적 효력이 있는 자격증 취득이 필수적입니다.
            국내 취업은 물론 호주·캐나다·일본 등 해외 네일 취업과 워킹홀리데이를 목표로 하는 분들에게도 국가자격증은 필수 조건입니다.
            본 가이드에서는 합리적인 학원 선택 기준과 자격증 시험 대비 전략을 상세히 정리해 드립니다.
          </p>

          <section>
            <h3>1. 네일아트 학원비용(네일학원비용), 어떻게 구성되나요?</h3>
            <p>
              네일 학원비용은 교육 과정의 전문성과 기간, 그리고 제공되는 재료의 퀄리티에 따라 차이가 발생합니다.
              국비지원 학원과 일반 학원 간의 네일학원비용 차이도 크기 때문에 단순 수강료만 비교하면 안 됩니다.
              재료비·보강비·취업지원 여부까지 포함한 실질 비용을 따져봐야 진정한 네일아트 학원비 비교가 가능합니다.
            </p>
            <ul>
              <li><strong>수강료:</strong> 이론 및 실기 수업료로, 과정의 난이도에 따라 월 단위 또는 과정 단위로 책정됩니다.</li>
              <li><strong>재료비:</strong> 네일아트 실습에 필요한 젤, 브러쉬, 파일, 램프 등 전문가용 키트 비용입니다.</li>
              <li><strong>시험 응시료:</strong> 국가자격증 시험 접수를 위해 산업인력공단에 납부하는 비용입니다.</li>
            </ul>
            <p>거품을 뺀 합리적인 비용으로 최상의 교육을 제공하며, 특히 <strong>국비 지원 이상의 자체 혜택</strong>을 통해 수강료 부담을 획기적으로 낮출 수 있습니다.</p>
          </section>

          <section>
            <h3>2. 네일국가자격증 취득이 필수인 이유</h3>
            <p>
              대한민국에서 네일샵을 창업하거나 직원으로 근무하기 위해서는 반드시 <strong>미용사(네일) 국가기술자격증</strong>을 보유해야 합니다.
              이는 공중위생관리법에 따른 법적 의무 사항이며, 자격증 없이 시술을 하는 것은 불법 영업에 해당합니다.
              더불어 네일리스트 해외취업과 워킹홀리데이를 준비할 때도 한국 국가자격증은 현지 고용주에게 기술력을 증명하는 가장 강력한 서류가 됩니다.
            </p>
            <ul>
              <li><strong>전문성 인증:</strong> 국가가 공인하는 자격증으로 고객과 고용주 모두에게 신뢰를 줄 수 있습니다.</li>
              <li><strong>법적 창업 요건:</strong> 면허증 발급을 위한 필수 서류로, 샵 오픈 시 반드시 필요합니다.</li>
              <li><strong>해외 취업 경쟁력:</strong> 영문 공증 후 호주·캐나다·일본 구직 시 핵심 스펙으로 활용됩니다.</li>
            </ul>
          </section>

          <section>
            <h3>3. 국가자격증 시험 과목 및 합격 전략</h3>
            <p>
              시험은 필기와 실기로 나뉘며, 두 시험 모두 60점 이상을 득점해야 합격할 수 있습니다.
              필기는 네일개론·피부학·공중위생관리학 등 이론 중심이며, 기출문제 반복 풀이가 핵심입니다.
              실기는 매니큐어·젤네일·연장 등 실습 과제 수행으로 위생 점수와 기술의 정확도가 합격을 좌우합니다.
              실제 시험장과 동일한 환경에서의 <strong>모의 테스트</strong>를 통해 긴장감을 낮추고 합격 가능성을 높일 수 있습니다.
            </p>
          </section>

          <section className={styles.guideCallout}>
            <h4>💡 네일아트 학원비 비교사이트에서 맞춤 플랜을 받아보세요</h4>
            <p>
              네일아트 학원비 비교사이트를 통해 학원비용·국비지원 여부를 한눈에 확인하세요.
              지금 바로 상담 신청을 남겨주시면 전문 멘토가 맞춤형 학습 로드맵과 정확한 견적을 안내해 드립니다.
            </p>
          </section>
        </article>

        {/* FAQ Section - 마지막 */}
        <section style={{ marginBottom: 100, marginTop: 60 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16, color: "var(--text-primary)" }}>네일아트 학원비 비교사이트 FAQ</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
              네일아트 학원비용부터 국비지원, 취업, 해외 워킹홀리데이까지 수강생들이 가장 많이 물어보는 질문들을 모았습니다. 더 궁금한 점은 무료 상담을 통해 직접 확인해 보세요.
            </p>
          </div>
          <div style={{ maxWidth: 850, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "네일아트 국가자격증 취득까지 기간이 얼마나 걸리나요?", a: "일반적으로 주 3회 수업 기준으로 **평균 3개월(약 12주)** 정도 소요됩니다. 수강생 개개인의 습득 속도에 맞춘 1:1 진도표를 운영하여, 초보자분들도 단기간에 합격할 수 있도록 밀착 지도해 드립니다." },
              { q: "직장인이나 학생도 수강할 수 있는 야간/주말 시간표가 있나요?", a: "네! 직장인과 학생분들을 위해 **야간반과 주말반**을 운영하고 있습니다. 본인의 스케줄에 맞춰 유동적으로 수업 시간을 조율하실 수 있어 업무와 병행이 가능합니다." },
              { q: "네일아트 학원비 외에 추가되는 재료비는 별도인가요?", a: "수강생분들의 초기 비용 부담을 최소화하기 위해 등록 시 **전문가용 재료 풀세트를 무상으로 제공**해 드립니다. 별도 재료비 걱정 없이 시작하실 수 있습니다." },
              { q: "내일배움카드 네일학원으로 등록할 수 있나요?", a: "저희 학원은 내일배움카드(국비카드)로 직접 수업을 결제하는 **네일아트 국비지원 기관은 아닙니다.** 다만 **내일배움카드 소지자는 카드 사용 없이도 별도 할인 혜택을 즉시 받으실 수 있습니다.** 자체 장학 지원 시스템을 통해 국비 수준 이상의 혜택을 모든 수강생에게 제공합니다." },
              { q: "자격증 취득 후 호주·캐나다 워킹홀리데이로 네일 취업이 가능한가요?", a: "네, 가능합니다! **한국 미용사(네일) 국가자격증을 영문 공증**하면 호주·캐나다·일본 현지 네일샵 구직 시 핵심 스펙이 됩니다. 특히 호주 워킹홀리데이는 시급 AUD $20~30 수준으로 국내보다 훨씬 높은 수입을 기대할 수 있습니다. 해외취업 준비 방법은 무료 상담으로 자세히 안내해 드립니다." },
            ].map((faq, i) => (
              <details key={i} style={{ background: "white", border: "1px solid #f1f5f9", borderRadius: 20, padding: "24px", boxShadow: "0 4px 20px rgba(244,63,94,0.02)" }}>
                <summary style={{ fontWeight: 700, cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 17, color: "#1e293b" }}>
                  {faq.q}
                  <ChevronRight size={20} style={{ transform: "rotate(90deg)", color: "var(--primary)", flexShrink: 0 }} />
                </summary>
                <div style={{ marginTop: 20, fontSize: 15, color: "#475569", lineHeight: 1.8, borderTop: "1px solid #f8fafc", paddingTop: 20 }}>
                  {faq.a.split("**").map((text, idx) => idx % 2 === 1 ? <strong key={idx} style={{ color: "var(--primary)" }}>{text}</strong> : text)}
                </div>
              </details>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/qna" style={{ color: "var(--text-secondary)", fontSize: 15, textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>
              질문 더 보기 <ChevronRight size={16} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
