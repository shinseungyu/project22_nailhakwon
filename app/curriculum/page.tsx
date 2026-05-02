"use client";

import Link from "next/link";
import { BookOpen, ChevronLeft, Clock, Users, CheckCircle, Award } from "lucide-react";
import styles from "../page.module.css";

const courses = [
  {
    badge: "인기",
    name: "국가자격증반",
    sub: "네일아트 학원비용 중 가장 효율적인 선택",
    duration: "3개월 (주 3회)",
    students: "10명 이내",
    features: [
      "네일아트 국가기술자격증 필기·실기 집중 대비",
      "현업 원장 직강 1:1 진도표 운영",
      "자격증 취득 후 취업·창업 무제한 지원",
      "40만원 상당 프리미엄 재료 풀세트 무상 제공",
    ],
  },
  {
    badge: "추천",
    name: "살롱 실무/아트반",
    sub: "취업 목적 네일 취업 학원 과정",
    duration: "2개월 (주 2회)",
    students: "10명 이내",
    features: [
      "젤네일·아크릴·네일아트 실무 전 과정",
      "포트폴리오 제작 및 면접 코칭 지원",
      "우수 살롱·네일샵 취업 직접 연계",
      "수료 후 재원 없이 보수 교육 가능",
    ],
  },
  {
    badge: "창업",
    name: "창업 마스터반",
    sub: "네일샵 창업을 위한 실전 과정",
    duration: "1개월 (주 1회)",
    students: "소수 정예",
    features: [
      "네일샵 창업 전략·인테리어·장비 선택",
      "고객 응대·SNS 마케팅·가격 정책",
      "원가 계산·매출 관리 실습",
      "창업 컨설팅 무제한 1:1 지원",
    ],
  },
];

const costTable = [
  { item: "국가자격증반", cost: "상담 후 안내", note: "재료비 포함, 국비카드 할인 가능" },
  { item: "살롱 실무/아트반", cost: "상담 후 안내", note: "포트폴리오 제작비 포함" },
  { item: "창업 마스터반", cost: "상담 후 안내", note: "창업 컨설팅 비용 포함" },
];

export default function CurriculumPage() {
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
            <BookOpen size={24} />
          </div>
          <h1 className={styles.title}>네일학원 커리큘럼 안내</h1>
          <p className="subtitle">네일아트 학원비용별 과정 비교 · 소수정예 10명 내외 밀착 지도</p>
        </header>

        {/* 과정 카드 */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, textAlign: "center" }}>
            네일학원 과정별 커리큘럼
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {courses.map((course) => (
              <div key={course.name} className={styles.card} style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ background: "var(--primary)", color: "white", fontSize: 12, fontWeight: 700, padding: "2px 10px", borderRadius: 20 }}>
                    {course.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{course.name}</h3>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 16 }}>{course.sub}</p>
                <div style={{ display: "flex", gap: 16, marginBottom: 16, fontSize: 13, color: "var(--text-secondary)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={14} /> {course.duration}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Users size={14} /> {course.students}
                  </span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {course.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, lineHeight: 1.5 }}>
                      <CheckCircle size={15} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 학원비용 비교 섹션 */}
        <section className={styles.card} style={{ padding: 32, marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
            네일아트 학원비용 안내
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 24, lineHeight: 1.6 }}>
            네일 국비지원 학원과 비교해도 전혀 뒤처지지 않는 네일아트 학원비용을 제공합니다.
            국비카드 소지자 즉시 할인 + 40만원 상당 재료 무상 제공으로 실제 부담은 오히려 낮습니다.
          </p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--border)" }}>
                <th style={{ padding: "10px 8px", textAlign: "left", fontWeight: 700 }}>과정</th>
                <th style={{ padding: "10px 8px", textAlign: "center", fontWeight: 700 }}>학원비용</th>
                <th style={{ padding: "10px 8px", textAlign: "left", fontWeight: 700 }}>포함 내용</th>
              </tr>
            </thead>
            <tbody>
              {costTable.map((row) => (
                <tr key={row.item} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "12px 8px", fontWeight: 600 }}>{row.item}</td>
                  <td style={{ padding: "12px 8px", textAlign: "center", color: "var(--primary)", fontWeight: 700 }}>{row.cost}</td>
                  <td style={{ padding: "12px 8px", color: "var(--text-secondary)" }}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 12 }}>
            * 네일아트 학원비용은 수강 시기·이벤트에 따라 변동될 수 있습니다. 정확한 금액은 무료 상담을 통해 확인해 주세요.
          </p>
        </section>

        {/* 국비지원 비교 포인트 */}
        <section className={styles.card} style={{ padding: 32, marginBottom: 40, background: "var(--bg-secondary)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
            네일 국비지원 학원 vs 일반 학원, 뭐가 다를까?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "수업 인원", national: "20~30명", us: "10명 이내" },
              { label: "강사 집중도", national: "분산 지도", us: "1:1 밀착 지도" },
              { label: "재료비", national: "별도 부담", us: "풀세트 무상 제공" },
              { label: "취업 지원", national: "제한적", us: "무제한 지원" },
            ].map((row) => (
              <div key={row.label} style={{ background: "white", borderRadius: 10, padding: "14px 16px" }}>
                <p style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 6, fontWeight: 600 }}>{row.label}</p>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "#888" }}>국비지원: {row.national}</span>
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>저희: {row.us}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 자격증 취득 로드맵 */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, textAlign: "center" }}>
            네일 자격증 취득 로드맵
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { step: "01", title: "무료 상담 신청", desc: "네일아트 학원비용·과정·일정 1:1 맞춤 상담" },
              { step: "02", title: "과정 등록", desc: "목적(자격증·취업·창업)에 맞는 과정 선택 후 등록" },
              { step: "03", title: "수업 시작", desc: "소수정예 10명 이내, 현업 원장 직강 집중 교육" },
              { step: "04", title: "자격증 취득 / 취업·창업", desc: "평균 3개월 내 자격증 취득 → 취업 또는 네일샵 창업" },
            ].map((item) => (
              <div key={item.step} className={styles.card} style={{ padding: "16px 24px", display: "flex", alignItems: "center", gap: 20 }}>
                <span style={{ fontSize: 24, fontWeight: 900, color: "var(--primary)", minWidth: 36 }}>{item.step}</span>
                <div>
                  <p style={{ fontWeight: 700, marginBottom: 2 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "32px 0" }}>
          <Award size={32} style={{ color: "var(--primary)", marginBottom: 12 }} />
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
            네일아트 학원비용 · 과정 무료 상담
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 24, lineHeight: 1.6 }}>
            네일학원 학원비용부터 국비지원 비교까지 전문 상담사가 직접 안내해드립니다.
          </p>
          <Link
            href="/#consulting"
            style={{ padding: "14px 32px", background: "var(--primary)", color: "white", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16 }}
          >
            무료 상담 신청하기
          </Link>
        </div>
      </div>
    </div>
  );
}
