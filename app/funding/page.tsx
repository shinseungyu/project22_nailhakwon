"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, Award } from "lucide-react";
import styles from "../page.module.css";
import HeroIntegratedForm from "@/components/HeroIntegratedForm";

export default function FundingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div style={{ marginBottom: 24 }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
            <ChevronLeft size={16} /> 홈으로 돌아가기
          </Link>
        </div>

        <header className={styles.header}>
          <div className={styles.headerIcon}>
            <Zap size={24} />
          </div>
          <h1 className={styles.title}>저희 학원 자체 장학 지원 안내</h1>
          <p className={styles.subtitle}>국비지원보다 쉽고, 혜택은 더 강력하게</p>
        </header>

        {/* Integrated Form */}
        <section style={{ marginBottom: 40 }}>
          <div className="relative w-full">
            <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full animate-pulse opacity-50 pointer-events-none" />
            <HeroIntegratedForm />
          </div>
        </section>

        {/* Hero Banner */}
        <div style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          borderRadius: 24,
          padding: "48px 32px",
          textAlign: "center",
          marginBottom: 32,
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(244,63,94,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
          <p style={{ color: "var(--primary)", fontWeight: 800, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>GOVERNMENT SUPPORT</p>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: "white", lineHeight: 1.3, marginBottom: 12 }}>
            성공적인 뷰티 아티스트를 위한<br />첫 걸음!
          </h2>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.7)", fontWeight: 600, marginBottom: 40 }}>
            국비지원 받고 뷰티 아티스트까지 한번에!
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, maxWidth: 800, margin: "0 auto" }}>
            {[
              { num: "혜택 01", title: "최대 100% 무료", sub: "국비지원과정" },
              { num: "혜택 02", title: "교육훈련비 최대", sub: "500만원 지원" },
              { num: "혜택 03", title: "수료 후 6개월간", sub: "취업지원서비스 제공" },
            ].map((item, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 16,
                padding: "24px 20px",
                textAlign: "center"
              }}>
                <p style={{ color: "var(--primary)", fontSize: 12, fontWeight: 800, letterSpacing: "0.08em", marginBottom: 10 }}>{item.num}</p>
                <p style={{ color: "white", fontSize: 18, fontWeight: 800, lineHeight: 1.4, margin: 0 }}>
                  {item.title}<br />
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, fontWeight: 600 }}>{item.sub}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 국비지원 FAQ */}
        <div style={{ background: "#f8fafc", borderRadius: 20, padding: "32px 28px", border: "1px solid #e2e8f0", marginBottom: 32 }}>
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
                <p style={{ marginTop: 14, fontSize: 14, color: "#475569", lineHeight: 1.7, borderTop: "1px solid #f1f5f9", paddingTop: 14, margin: "14px 0 0" }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        <section className={styles.card} style={{ marginBottom: 32, borderLeft: "4px solid var(--primary)", background: "var(--primary-light)" }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, color: "var(--primary)" }}>왜 국비지원 대신 저희 학원인가요?</h2>
          <p style={{ color: "var(--text-primary)", fontSize: 15, lineHeight: 1.6, fontWeight: 500 }}>
            번거로운 카드 발급 과정과 긴 대기 시간, 그리고 저가형 재료 세트에 실망하셨나요? 
            저희 네일아트학원만의 체계적인 교육 과정으로 수강생분들이 오직 실력 향상에만 집중할 수 있도록 
            **자체 장학 시스템**을 운영하고 있습니다.
          </p>
        </section>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 40 }}>
          <div className={styles.card}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ padding: 10, background: "#fef2f2", borderRadius: 12, color: "var(--primary)" }}><ShieldCheck size={24} /></div>
              <h3 style={{ fontSize: 18, fontWeight: 800 }}>조건 없는 즉시 할인</h3>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              소득 수준이나 취업 상태에 따른 복잡한 증빙 서류가 필요 없습니다. 
              본 아카데미 수강을 원하는 분이라면 누구나 장학 혜택을 적용받아 합리적인 비용으로 시작할 수 있습니다.
            </p>
          </div>

          <div className={styles.card}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ padding: 10, background: "#f0fdf4", borderRadius: 12, color: "#16a34a" }}><Award size={24} /></div>
              <h3 style={{ fontSize: 18, fontWeight: 800 }}>프리미엄 재료 풀세트</h3>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              단가 맞춤형 저가 재료가 아닙니다. 실제 현직 원장님들이 사용하는 최고급 브랜드 재료 세트를 
              장학 지원을 통해 무상으로 제공받아 완벽한 실습을 진행합니다.
            </p>
          </div>
        </div>

        {/* 국비카드 소지자 안내 */}
        <section className={styles.card} style={{ marginBottom: 32, borderLeft: "4px solid #3b82f6", background: "#eff6ff" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10, color: "#1d4ed8" }}>국비카드(내일배움카드) 소지자 안내</h2>
          <p style={{ color: "#1e40af", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            저희 학원은 <strong>국비카드(내일배움카드)로 수업을 듣는 국비지원 기관은 아닙니다.</strong><br/>
            단, <strong>국비카드를 소지하고 계신 분은 별도 할인 혜택을 즉시 받으실 수 있습니다.</strong><br/>
            <span style={{ fontSize: 13, opacity: 0.85 }}>카드 사용 없이 단순 소지만으로도 혜택 적용 — 상담 시 카드 소지 여부를 알려주세요.</span>
          </p>
        </section>

        <section className={styles.card} style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, textAlign: "center" }}>국비지원 네일학원 vs 일반 네일학원 비용과 수업 인원</h2>
          <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: 14, marginBottom: 24 }}>국비지원 기관과 저희 학원의 차이를 항목별로 비교해 드립니다.</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  <th style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "left" }}>비교 항목</th>
                  <th style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>국비지원 네일학원</th>
                  <th style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", color: "var(--primary)", background: "var(--primary-light)" }}>저희 학원 (일반 네일학원)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", fontWeight: 600 }}>수강 비용</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>국비카드로 결제 (카드 발급 필수)</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", fontWeight: 700 }}>자체 장학 할인 즉시 적용 (당일)</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", fontWeight: 600 }}>수업 인원</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>대규모 (20~30명)</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", fontWeight: 700 }}>소수정예 밀착 지도 (10명 내외)</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", fontWeight: 600 }}>신청 절차</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>카드 발급 심사 (2~4주 소요)</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", fontWeight: 700 }}>상담 후 즉시 등록 가능</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", fontWeight: 600 }}>제공 재료</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>단가 위주의 보급형 재료</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", fontWeight: 700 }}>전문가용 프리미엄 브랜드</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", fontWeight: 600 }}>사후 관리</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>과정 종료 후 지원 미비</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", fontWeight: 700 }}>합격까지 무제한 보강 지원</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", fontWeight: 600 }}>국비카드 소지자 혜택</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>카드로 결제하는 방식</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", fontWeight: 700, color: "var(--primary)" }}>소지만으로 추가 할인 적용</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 내일배움카드 신청 방법 */}
        <section className={styles.card} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20 }}>내일배움카드(국비지원) 신청 방법</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { step: "01", title: "고용센터 방문 또는 온라인 신청", desc: "고용노동부 HRD-Net(www.hrd.go.kr) 또는 가까운 고용센터를 통해 내일배움카드 발급 신청" },
              { step: "02", title: "자격 심사 (2~4주 소요)", desc: "재직자·구직자·자영업자 등 자격 요건 심사. 카드 발급까지 평균 2~4주 대기 필요" },
              { step: "03", title: "카드 수령 및 훈련 기관 선택", desc: "카드 수령 후 HRD-Net에서 네일아트 국비지원 학원 검색 및 수강 신청" },
              { step: "04", title: "수강 및 훈련비 지원", desc: "훈련비의 45~85% 지원 (잔액 본인 부담), 단 훈련 참여율 80% 이상 유지 필수" },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", gap: 16, padding: "16px", background: "var(--bg-secondary)", borderRadius: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, fontWeight: 900, color: "var(--primary)", minWidth: 32 }}>{item.step}</span>
                <div>
                  <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, padding: 14, background: "#fff7ed", borderRadius: 10, border: "1px solid #fed7aa", fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>
            ⚠️ <strong>주의:</strong> 내일배움카드 발급까지 최소 2~4주 소요되며, 지원 학원이 한정되어 있어 원하는 시기에 바로 시작하기 어려울 수 있습니다. 즉시 시작을 원하신다면 저희 자체 장학 혜택을 먼저 확인해 보세요.
          </div>
        </section>

        {/* 실제 비용 계산 */}
        <section className={styles.card} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>네일아트 학원비용 실제 비교 계산</h2>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 20 }}>재료비·대기 기간까지 포함한 실질 비용을 비교해 보세요.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ padding: 20, border: "2px solid #e5e7eb", borderRadius: 16 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#6b7280", marginBottom: 12 }}>네일아트 국비지원 학원</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>수강료 (본인 부담 15~55%)</span><span>약 10~30만원</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>재료비 (별도 구매)</span><span>약 20~30만원</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>카드 발급 대기</span><span>2~4주</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, borderTop: "1px solid #e5e7eb", paddingTop: 8 }}><span>실질 부담 합계</span><span>약 30~60만원</span></div>
              </div>
            </div>
            <div style={{ padding: 20, border: "2px solid var(--primary)", borderRadius: 16, background: "var(--primary-light)" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--primary)", marginBottom: 12 }}>저희 학원 (자체 장학)</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>수강료 (장학 할인 적용)</span><span>상담 후 안내</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>재료비</span><span style={{ color: "var(--primary)", fontWeight: 700 }}>40만원 상당 무상</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>등록 대기</span><span style={{ color: "var(--primary)", fontWeight: 700 }}>즉시 가능</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, borderTop: "1px solid #fecdd3", paddingTop: 8, color: "var(--primary)" }}><span>실질 부담 합계</span><span>상담 시 확인</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 자주 묻는 질문 */}
        <section className={styles.card} style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20 }}>국비지원 관련 자주 묻는 질문</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "재직 중인데 내일배움카드 신청이 가능한가요?", a: "네, 재직자도 신청 가능합니다. 단, 재직자는 훈련비의 45~55% 지원이며, 자부담이 발생합니다. 월 급여 300만원 이하 재직자는 더 높은 지원율이 적용될 수 있습니다." },
              { q: "네일아트 국비지원 학원은 어디서 찾나요?", a: "HRD-Net(www.hrd.go.kr)에서 '네일아트' 또는 '미용사(네일)'로 검색하시면 인근 국비지원 학원 목록을 확인하실 수 있습니다. 단, 지역에 따라 학원 수가 적을 수 있습니다." },
              { q: "국비지원 학원과 저희 학원 중 어떤 게 나을까요?", a: "즉시 시작, 소수정예 밀착 지도, 프리미엄 재료를 원하신다면 저희 학원을 추천드립니다. 반면 국비카드 발급 후 수강료를 최소화하고 싶으신 분께는 국비지원 학원도 선택지가 될 수 있습니다. 정확한 비용은 무료 상담을 통해 비교해 드립니다." },
            ].map((item, i) => (
              <div key={i} style={{ padding: 16, background: "var(--bg-secondary)", borderRadius: 12 }}>
                <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 14, color: "var(--primary)" }}>Q. {item.q}</p>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: "var(--text-primary)", color: "white", padding: 32, borderRadius: 24, textAlign: "center" }}>
          <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>내 상황에 맞는 장학 혜택 확인하기</h3>
          <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 24 }}>
            수강 희망 시기 및 과정을 알려주시면 가장 큰 할인 혜택을 즉시 안내해 드립니다.
          </p>
          <Link href="/#consulting" style={{ padding: "14px 32px", background: "var(--primary)", color: "white", borderRadius: 12, textDecoration: "none", fontWeight: 700, display: "inline-block" }}>
            실시간 혜택 문의하기
          </Link>
        </div>
      </div>
    </div>
  );
}
