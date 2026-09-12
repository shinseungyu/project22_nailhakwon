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
          <h1 className={styles.title}>네일학원 국비지원 — 내일배움카드 신청과 조건</h1>
          <p className={styles.subtitle}>국비지원 과정과 일반 과정, 무엇이 어떻게 다른지 항목별로 비교했습니다</p>
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
              { q: "내일배움카드 없으면 신청 못하나요?", a: "카드를 먼저 발급받아야 인가 과정을 수강할 수 있습니다. HRD-Net에서 온라인 신청이 가능하며, 심사에 시간이 걸리므로 수강 시점에서 역산해 미리 신청하는 것이 좋습니다." },
              { q: "국비지원은 누구나 받을 수 있나요?", a: "구직자와 재직자 모두 신청 대상이지만 요건과 자부담 비율이 달라집니다. 본인에게 적용되는 조건은 HRD-Net과 고용센터에서 확인하는 것이 정확합니다." },
              { q: "수료 후 취업 지원이 있나요?", a: "학원마다 다릅니다. 취업 연계를 안내하는 곳이라도 구인 정보 전달 수준인지 실제 추천으로 이어지는지 차이가 크므로, 등록 전에 연계 방식을 구체적으로 확인하세요." },
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
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, color: "var(--primary)" }}>국비지원이 항상 유리한 것은 아닙니다</h2>
          <p style={{ color: "var(--text-primary)", fontSize: 15, lineHeight: 1.6, fontWeight: 500 }}>
            비용만 보면 국비지원 과정이 앞섭니다. 다만 카드 발급에 시간이 걸리고, 개강 일정과 정원이 정해져 있으며,
            출석률 기준을 채우지 못하면 지원금 반환 문제가 생길 수 있습니다.
            시작 시점과 출석 가능 여부를 함께 놓고 판단해야 실제로 나에게 맞는 선택이 보입니다.
          </p>
        </section>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 40 }}>
          <div className={styles.card}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ padding: 10, background: "#fef2f2", borderRadius: 12, color: "var(--primary)" }}><ShieldCheck size={24} /></div>
              <h3 style={{ fontSize: 18, fontWeight: 800 }}>자부담금을 먼저 확인하세요</h3>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              국비지원은 전액 무료가 아닙니다. 훈련 과정과 개인 요건에 따라 자부담 비율이 정해져 있고,
              과정 상세 페이지에 금액이 표시됩니다. HRD-Net에서 해당 과정의 자부담금을 직접 확인한 뒤 비교하세요.
            </p>
          </div>

          <div className={styles.card}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ padding: 10, background: "#f0fdf4", borderRadius: 12, color: "#16a34a" }}><Award size={24} /></div>
              <h3 style={{ fontSize: 18, fontWeight: 800 }}>재료비는 대개 별도입니다</h3>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              국비지원은 훈련비를 지원하는 제도라 재료비는 보통 지원 범위에 포함되지 않습니다.
              수강료가 낮아도 재료비가 크면 총액이 뒤집히므로, 등록 전에 포함 항목을 목록으로 받아 비교하세요.
            </p>
          </div>
        </div>

        {/* 국비카드 소지자 안내 */}
        <section className={styles.card} style={{ marginBottom: 32, borderLeft: "4px solid #3b82f6", background: "#eff6ff" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10, color: "#1d4ed8" }}>카드가 있어도 아무 학원이나 되는 것은 아닙니다</h2>
          <p style={{ color: "#1e40af", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            내일배움카드로 수강할 수 있는 것은 <strong>고용노동부 인가를 받은 훈련기관의 인가 과정</strong>에 한합니다.<br/>
            학원 홍보물에 &lsquo;국비지원&rsquo;이라고 적혀 있어도 <strong>HRD-Net에서 해당 과정이 실제로 등록되어 있는지 직접 조회</strong>하는 것이 안전합니다.<br/>
            <span style={{ fontSize: 13, opacity: 0.85 }}>hrd.go.kr에서 지역과 &lsquo;네일&rsquo;로 검색하면 인가 과정과 자부담금을 함께 확인할 수 있습니다.</span>
          </p>
        </section>

        <section className={styles.card} style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, textAlign: "center" }}>국비지원 네일학원 vs 일반 네일학원 비용과 수업 인원</h2>
          <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: 14, marginBottom: 24 }}>국비지원 과정과 일반 과정의 차이를 항목별로 정리했습니다.</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  <th style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "left" }}>비교 항목</th>
                  <th style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>국비지원 네일학원</th>
                  <th style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", color: "var(--primary)", background: "var(--primary-light)" }}>일반 과정 (자비 부담)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", fontWeight: 600 }}>수강 비용</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>국비카드로 결제 (카드 발급 필수)</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", fontWeight: 700 }}>상담 후 바로 등록 가능</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", fontWeight: 600 }}>수업 인원</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>과정 정원에 따름</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", fontWeight: 700 }}>학원마다 상이 — 등록 전 확인 필요</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", fontWeight: 600 }}>신청 절차</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>카드 발급 심사 (2~4주 소요)</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", fontWeight: 700 }}>대기 없이 바로 시작 가능</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", fontWeight: 600 }}>제공 재료</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>재료비 대개 별도</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", fontWeight: 700 }}>학원마다 상이 — 포함 여부 확인 필요</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", fontWeight: 600 }}>사후 관리</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>과정 종료 시 지원 종료</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", fontWeight: 700 }}>학원마다 상이 — 보강 규정 확인 필요</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", fontWeight: 600 }}>국비카드 소지자 혜택</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>카드로 결제하는 방식</td>
                  <td style={{ padding: "12px", border: "1px solid var(--border-color)", textAlign: "center", fontWeight: 700, color: "var(--primary)" }}>카드와 무관 — 자비 부담</td>
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
            ⚠️ <strong>주의:</strong> 내일배움카드 발급까지 최소 2~4주 소요되며, 지원 학원이 한정되어 있어 원하는 시기에 바로 시작하기 어려울 수 있습니다. 원하는 시기에 바로 시작해야 한다면 일반 과정도 함께 알아보는 것이 좋습니다.
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
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--primary)", marginBottom: 12 }}>일반 과정 (자비 부담)</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>수강료 (전액 본인 부담)</span><span>학원별 상이</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>재료비</span><span>포함 여부 확인 필요</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>등록 대기</span><span style={{ color: "var(--primary)", fontWeight: 700 }}>대기 없음</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, borderTop: "1px solid #fecdd3", paddingTop: 8, color: "var(--primary)" }}><span>실질 부담 합계</span><span>총액으로 비교</span></div>
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
              { q: "국비지원 과정과 일반 과정 중 어떤 게 나을까요?", a: "비용을 줄이는 것이 우선이고 개강 일정에 맞출 수 있다면 국비지원이 유리합니다. 반대로 원하는 시점에 바로 시작해야 하거나 출석률 기준을 맞추기 어렵다면 일반 과정이 나을 수 있습니다. 중간에 그만두면 국비지원이 오히려 가장 비싼 선택이 됩니다." },
            ].map((item, i) => (
              <div key={i} style={{ padding: 16, background: "var(--bg-secondary)", borderRadius: 12 }}>
                <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 14, color: "var(--primary)" }}>Q. {item.q}</p>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: "var(--text-primary)", color: "white", padding: 32, borderRadius: 24, textAlign: "center" }}>
          <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>내 조건에 맞는 과정 알아보기</h3>
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
