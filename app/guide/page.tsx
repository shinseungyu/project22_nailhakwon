"use client";

import { useState } from "react";
import styles from "../page.module.css";
import Link from 'next/link';
import { ChevronLeft, GraduationCap, Map, Rocket, CheckCircle2 } from 'lucide-react';

export default function GuidePage() {
  const [activeTab, setActiveTab] = useState("tab1");

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
            <GraduationCap size={24} />
          </div>
          <h1 className={styles.title}>네일학원 학원비 비교 & 성공 가이드</h1>
          <p className={styles.subtitle}>
            자격증 취득부터 취업, 창업까지의 로드맵을 확인하세요.
          </p>
        </header>
        
        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', overflowX: 'auto' }}>
          {[
            { id: "tab1", label: "국가자격증 시험 정보", icon: <CheckCircle2 size={16} /> },
            { id: "tab2", label: "교육 로드맵", icon: <Map size={16} /> },
            { id: "tab3", label: "창업 준비 가이드", icon: <Rocket size={16} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 20px',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === tab.id ? 'var(--primary)' : 'var(--bg-card)',
                color: activeTab === tab.id ? 'white' : 'var(--text-secondary)',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <article style={{ marginTop: '0', paddingTop: '16px' }}>
          {activeTab === "tab1" && (
            <section style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px' }}>네일 국가자격증 시험 상세 정보</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>한국산업인력공단에서 시행하는 국가공인 자격증으로, 네일 아티스트로 활동하기 위한 필수 자격입니다.</p>
              
              <div style={{ overflowX: 'auto', marginBottom: '32px', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                  <thead style={{ background: '#fff1f2', borderBottom: '1px solid var(--border-color)' }}>
                    <tr>
                      <th style={{ padding: '16px', fontWeight: '700', color: 'var(--primary)' }}>구분</th>
                      <th style={{ padding: '16px', fontWeight: '700', color: 'var(--primary)' }}>상세 내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '16px', fontWeight: '600' }}>필기 시험</td>
                      <td style={{ padding: '16px' }}>네일개론, 피부학, 공중위생관리학 등 (객관식 60문항 / 60점 이상 합격)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '16px', fontWeight: '600' }}>실기 시험 (1과목)</td>
                      <td style={{ padding: '16px' }}>매니큐어 및 페디큐어 (습식 케어, 컬러링)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '16px', fontWeight: '600' }}>실기 시험 (2과목)</td>
                      <td style={{ padding: '16px' }}>젤 매니큐어 (선마블, 부채꼴마블)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '16px', fontWeight: '600' }}>실기 시험 (3과목)</td>
                      <td style={{ padding: '16px' }}>인조네일 (팁 위드 랩, 실크 익스텐션, 젤 스컬프쳐 등)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '16px', fontWeight: '600' }}>실기 시험 (4과목)</td>
                      <td style={{ padding: '16px' }}>인조네일 제거 (쏙오프)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeTab === "tab2" && (
            <section style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '24px' }}>저희 학원 교육 로드맵</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { step: "Step 01", title: "국가자격증 정규반", desc: "기초 이론부터 실기 시험 1~4과목까지 완벽 마스터 (합격률 95%)" },
                  { step: "Step 02", title: "살롱 실무/아트반", desc: "실제 샵에서 사용하는 드릴 케어, 유지력 향상 테크닉, 최신 유행 아트 학습" },
                  { step: "Step 03", title: "창업/경영 컨설팅", desc: "브랜딩, 마케팅, 고객 응대, 세무 처리 등 성공적인 창업을 위한 실무 교육" }
                ].map((item, i) => (
                  <div key={i} style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: '20px', border: '1px solid var(--border-color)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: '900', color: 'var(--primary)', opacity: 0.5, minWidth: '70px' }}>{item.step}</div>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '4px' }}>{item.title}</h3>
                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "tab3" && (
            <section style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px' }}>네일샵 창업 체크리스트</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>창업 준비, 무엇부터 해야 할지 막막하신가요? 저희 학원가 도와드립니다.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                {[
                  { title: "자격증 및 면허", items: ["네일 국가자격증 취득", "건강진단서 발급", "구청 위생교육 이수", "면허증 발급 신청"] },
                  { title: "상권 및 인테리어", items: ["목표 상권 분석", "매장 임대차 계약", "전기/수도 시설 체크", "네일 전용 가구 배치"] },
                  { title: "행정 및 마케팅", items: ["사업자 등록", "카드 단말기 신청", "네이버 플레이스 등록", "SNS 마케팅 채널 구축"] }
                ].map((group, i) => (
                  <div key={i} className={styles.card} style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px', color: 'var(--primary)' }}>{group.title}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {group.items.map((item, j) => (
                        <li key={j} style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={16} color="var(--primary)" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <Link href="/#consulting" style={{ 
              display: 'inline-block', 
              padding: '16px 32px', 
              background: 'var(--primary)', 
              color: 'white', 
              borderRadius: '16px',
              textDecoration: 'none',
              fontWeight: '800',
              boxShadow: 'var(--shadow-md)'
            }}>
              나에게 맞는 과정 상담받기
            </Link>
          </div>
        </article>
      </div>


      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
