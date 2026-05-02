"use client";

import { useState } from "react";
import styles from "../page.module.css";
import Link from 'next/link';
import { ChevronLeft, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function QnaPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      q: "Q. 네일아트 국가자격증 취득까지 기간이 얼마나 걸리나요?",
      a: "일반적으로 주 3회 수업 기준으로 평균 3개월(약 12주) 정도 소요됩니다. 저희 네일아트학원에서는 수강생 개개인의 습득 속도에 맞춘 1:1 진도표를 운영하여, 손재주가 없는 초보자분들도 단기간에 합격할 수 있도록 밀착 지도해 드립니다."
    },
    {
      id: 2,
      q: "Q. 직장인이나 학생도 수강할 수 있는 야간/주말 시간표가 있나요?",
      a: "네, 물론입니다! 직장인과 학생분들을 위해 야간반과 주말반을 운영하고 있습니다. 본인의 스케줄에 맞춰 유동적으로 수업 시간을 조율하실 수 있어 업무와 병행이 가능합니다."
    },
    {
      id: 3,
      q: "Q. 네일아트 학원비 외에 추가되는 재료비는 별도인가요?",
      a: "수강생분들의 초기 비용 부담을 최소화하기 위해 등록 시 전문가용 재료 풀세트를 무상으로 제공해 드립니다. 별도 재료비 걱정 없이 시작하실 수 있습니다."
    },
    {
      id: 4,
      q: "Q. 내일배움카드 네일학원으로 등록할 수 있나요?",
      a: "저희 학원은 내일배움카드(국비카드)로 직접 수업을 결제하는 네일아트 국비지원 기관은 아닙니다. 다만 내일배움카드 소지자는 카드 사용 없이도 별도 할인 혜택을 즉시 받으실 수 있습니다. 또한 자체 장학 지원 시스템을 통해 국비 수준 이상의 수강료 감면과 프리미엄 재료 풀세트를 모든 수강생에게 제공합니다."
    },
    {
      id: 5,
      q: "Q. 자격증 취득 후 바로 취업이나 창업이 가능한가요?",
      a: "자격증 취득은 시작입니다. 저희 학원은 수강생분들이 실무에 바로 투입될 수 있도록 살롱 실무/아트반과 창업 마스터반을 운영하고 있으며, 수료 후에도 1:1 취업 매칭 및 창업 컨설팅을 끝까지 지원해 드립니다."
    },
    {
      id: 6,
      q: "Q. 네일아트 학원비용이 다른 곳보다 비싸지 않나요?",
      a: "국비지원 학원과 비교했을 때 수강료 자체는 비슷하거나 오히려 낮은 편입니다. 전문가용 재료 풀세트를 무상 제공하기 때문에 재료비까지 합산하면 실질 부담이 크게 줄어듭니다. 정확한 비용은 무료 상담을 통해 안내드립니다."
    },
    {
      id: 7,
      q: "Q. 수업 인원이 몇 명인가요? 1:1 수업도 가능한가요?",
      a: "저희 학원은 소수정예 10명 이내로 운영합니다. 국비지원 학원의 경우 20~30명이 한 클래스에서 수업을 듣는 경우가 많지만, 저희는 강사 1인이 수강생 한 명 한 명을 밀착 지도합니다. 별도 1:1 개인 레슨도 협의 가능하니 상담 시 문의해 주세요."
    },
    {
      id: 8,
      q: "Q. 네일 자격증이 없는 완전 초보도 들을 수 있나요?",
      a: "물론입니다! 저희 국가자격증반은 네일을 처음 접하는 분들을 위해 기초 이론부터 차근차근 시작합니다. 손재주가 없다고 걱정하시는 분들도 많지만, 저희 학원 수강생의 92%가 원패스 합격하고 있습니다. 시작이 반입니다."
    },
    {
      id: 9,
      q: "Q. 네일아트 취업 후 평균 연봉이 어떻게 되나요?",
      a: "지역과 경력에 따라 다르지만, 강남권 기준 신입 네일리스트 월 급여는 200~280만원 수준입니다. 경력 2~3년 이상이 되면 실장급으로 올라가며 급여가 크게 올라가고, 1인샵 창업 시에는 수익 상한선이 없습니다. 저희 취업 지원 프로그램을 통해 상위권 샵으로 연결해 드립니다."
    },
    {
      id: 10,
      q: "Q. 수강 도중 개인 사정으로 쉬어야 할 경우 어떻게 하나요?",
      a: "수강 중 개인 사정이 생기는 경우 수강 기간 연장이 가능합니다. 저희 학원은 수강생 개개인의 상황을 최대한 배려하며, 결석한 수업은 보강 수업으로 보충하실 수 있습니다. 자세한 규정은 등록 시 안내해 드립니다."
    }
  ];

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
            <HelpCircle size={24} />
          </div>
          <h1 className={styles.title}>자주 묻는 질문 (FAQ)</h1>
          <p className={styles.subtitle}>
            저희 네일아트학원의 수강생 이야기와 최신 소식을 전해드립니다.
          </p>
        </header>

        <Link href="/funding" style={{ textDecoration: "none", display: "block", marginTop: 24 }}>
          <div style={{
            background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
            borderRadius: 20,
            padding: "24px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            cursor: "pointer",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 20% 50%, rgba(244,63,94,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div>
              <p style={{ color: "var(--primary)", fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>GOVERNMENT SUPPORT</p>
              <p style={{ color: "white", fontWeight: 800, fontSize: 18, lineHeight: 1.3, margin: 0 }}>
                성공적인 뷰티 아티스트를 위한 첫 걸음!<br />
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 600 }}>국비지원 받고 뷰티 아티스트까지 한번에</span>
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
              {["최대 100% 무료", "500만원 지원", "6개월 취업지원"].map((text, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "10px 14px", textAlign: "center", fontSize: 12, color: "white", fontWeight: 700, whiteSpace: "nowrap" }}>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </Link>

        <article style={{ marginTop: '32px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                style={{
                   background: 'var(--bg-card)', 
                   border: '1px solid var(--border-color)', 
                   borderRadius: '16px', 
                   overflow: 'hidden',
                   boxShadow: '0 4px 12px rgba(244,63,94,0.02)'
                }}
              >
                <div 
                  onClick={() => toggleFaq(faq.id)}
                  style={{ 
                    padding: '24px', 
                    cursor: 'pointer', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    background: openId === faq.id ? 'var(--primary-light)' : 'transparent',
                    transition: 'all 0.2s'
                  }}
                >
                  <h3 style={{ margin: '0', fontSize: '16px', color: openId === faq.id ? 'var(--primary)' : 'var(--text-primary)', fontWeight: '700' }}>
                    {faq.q}
                  </h3>
                  <span style={{ color: openId === faq.id ? 'var(--primary)' : 'var(--text-muted)' }}>
                    {openId === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </div>
                
                {openId === faq.id && (
                  <div style={{ 
                    padding: '24px', 
                    borderTop: '1px solid var(--border-color)', 
                    background: 'var(--bg-card)',
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                    animation: 'fadeIn 0.3s ease-out'
                  }}>
                    <strong style={{ color: 'var(--primary)', marginRight: '8px', fontSize: '18px' }}>A.</strong>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <section className={styles.card} style={{ marginTop: '48px', textAlign: 'center', background: 'linear-gradient(to bottom right, #fff1f2, #fff)' }}>
             <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: 12 }}>더 궁금하신 내용이 있나요?</h4>
             <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: 24 }}>
               카카오톡이나 전화로 문의해 주시면 전문가가 1:1로 친절하게 상담해 드립니다.
             </p>
             <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                <Link href="/#consulting" style={{ 
                  padding: '12px 24px', 
                  background: 'var(--primary)', 
                  color: 'white', 
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  실시간 상담 신청
                </Link>
             </div>
          </section>

        </article>
      </div>

      <footer style={{ marginTop: '60px', padding: '24px 20px', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>© 2026 NailPro Academy</p>
      </footer>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
