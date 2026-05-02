"use client"

import { useState } from "react"

/* ───────────── validate ───────────── */
type FormData = {
  customer_name: string
  customer_birth: string
  mobile1: string
  mobile2: string
  customer_sex: string
  privacy: boolean
}
type ParsedPhone = { mobile1: string; mobile2: string }

const SPECIAL_CHAR_REG = /[ \{\}\[\]\/.,;:|\)*~`^\-_+┼<>\%\'\"\\\(\=]/i

function validateForm(data: FormData): string | null {
  if (!data.customer_name) return "이름을 입력해 주세요."
  if (SPECIAL_CHAR_REG.test(data.customer_name)) return "이름에 특수문자는 입력하실 수 없습니다."
  if (data.customer_name.length > 8) return "이름을 다시 입력해 주세요."
  if (!data.customer_birth) return "생년월일을 입력해 주세요."
  if (!/^\d{6}$/.test(data.customer_birth)) return "생년월일 6자리 숫자만 입력해 주세요."
  const month = parseInt(data.customer_birth.slice(2, 4))
  const day = parseInt(data.customer_birth.slice(4, 6))
  if (month < 1 || month > 12) return "생년월일을 다시 확인해 주세요."
  if (day < 1 || day > 31) return "생년월일을 다시 확인해 주세요."
  if (!data.customer_sex) return "성별을 선택해 주세요."
  if (!data.mobile2) return "전화번호를 다시 입력해 주세요."
  if (!/^\d+$/.test(data.mobile2)) return "전화번호는 숫자만 입력해 주세요."
  if (data.mobile2.length < 8) return "전화번호 8자리를 입력해 주세요."
  if (!data.privacy) return "개인정보수집 및 활용에 동의해 주세요."
  return null
}

function parsePhone(mobile1: string, mobile2: string): ParsedPhone | string {
  const isValidPrefix = /^(010|011|016|017|018|019)/.test(mobile2.slice(0, 3))
  if (mobile2.length === 8) {
    if (isValidPrefix) return "전화번호를 다시 입력해주세요."
    return { mobile1, mobile2 }
  }
  if (mobile2.length === 11) {
    if (isValidPrefix) return { mobile1: mobile2.slice(0, 3), mobile2: mobile2.slice(3) }
    return "전화번호를 다시 입력해주세요."
  }
  return "전화번호를 다시 입력해주세요."
}

/* ───────────── PrivacyModal ───────────── */
function ContentBox({
  checked, onChange, label, required, children,
}: {
  checked: boolean; onChange: (v: boolean) => void; label: string; required: boolean; children: React.ReactNode
}) {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-brand/30">
      <div className="flex items-center p-4 cursor-pointer select-none bg-stone-50/50" onClick={() => onChange(!checked)}>
        <div className={`w-5 h-5 rounded-md flex items-center justify-center mr-3 transition-colors ${checked ? "bg-brand" : "bg-white border-2 border-stone-300"}`}>
          {checked && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <span className="text-[15px] font-bold text-stone-800 flex-1">{label}</span>
        {required
          ? <span className="text-[13px] font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-full">필수</span>
          : <span className="text-[13px] font-medium text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">선택</span>
        }
      </div>
      <div className="p-4 pt-0">
        <div className="h-[80px] overflow-y-auto text-[13px] text-stone-500 leading-relaxed pr-2 custom-scrollbar border-t border-stone-100 pt-3">
          {children}
        </div>
      </div>
    </div>
  )
}

function PrivacyModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
  const [priAgree, setPriAgree] = useState(false)
  const [thirdAgree, setThirdAgree] = useState(false)

  const allRequired = priAgree && thirdAgree

  const handleAllAgree = () => { const next = !allRequired; setPriAgree(next); setThirdAgree(next) }
  const handleConfirm = () => {
    if (!priAgree) { alert("개인정보 수집 및 이용에 동의해 주세요."); return }
    if (!thirdAgree) { alert("개인정보 제3자 제공에 동의해 주세요."); return }
    onConfirm(); onClose()
  }

  return (
    <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl w-full max-w-[600px] max-h-[85dvh] flex flex-col overflow-hidden shadow-2xl">
        <div className="px-8 pt-8 pb-4 bg-white z-10 relative">
          <button onClick={onClose} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-stone-100 text-stone-500 rounded-full hover:bg-stone-200 transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">
            안전한 상담을 위한<br /><span className="text-brand">개인정보 동의</span>
          </h2>
          <p className="text-sm text-stone-500 leading-relaxed">고객님의 소중한 정보는 상담 목적 외에는 절대 사용되지 않으며, 안전하게 보호됩니다.</p>
        </div>

        <div className="overflow-y-auto px-8 pb-[100px] flex-1 custom-scrollbar">
          <button onClick={handleAllAgree} className={`flex items-center gap-3 w-full py-4 px-5 rounded-2xl mb-6 transition-all duration-300 border-2 ${allRequired ? "bg-brand/5 border-brand text-brand" : "bg-stone-50 border-stone-100 text-stone-600 hover:border-stone-200"}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${allRequired ? "bg-brand text-white" : "bg-stone-200 text-transparent"}`}>
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-lg font-bold">약관 전체 동의하기</span>
          </button>
          <div className="space-y-4">
            <ContentBox checked={priAgree} onChange={(v) => setPriAgree(v)} label="개인정보 수집 및 이용 동의" required>
              수집 주체 : 네일아트학원<br />수집 목적 : 네일 관련 상담 및 문의 응대<br />수집 항목 : 성명, 휴대폰 번호, 생년월일, 성별, 거주 지역, 자격증 보유 여부<br />보유 기간 : 수집일로부터 1년 (또는 요청 시 즉시 파기)<br />동의 거부 시 상담 신청이 제한될 수 있습니다.
            </ContentBox>
            <ContentBox checked={thirdAgree} onChange={(v) => setThirdAgree(v)} label="개인정보 제3자 제공 동의" required>
              제공받는 자 : 담당 상담사 (컨설턴트)<br />제공 목적 : 원활한 1:1 유선 상담 진행<br />제공 항목 : 성명, 휴대폰 번호, 생년월일, 성별, 거주 지역, 자격증 보유 여부<br />보유 기간 : 상담 목적 달성 시 즉시 파기<br />동의 거부 시 상담 신청이 제한될 수 있습니다.
            </ContentBox>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/80 to-transparent pt-12 pointer-events-none">
          <button onClick={handleConfirm} className={`w-full py-4 text-lg font-bold rounded-2xl tracking-wide text-center transition-all pointer-events-auto ${allRequired ? "bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/20" : "bg-stone-200 text-stone-400 cursor-not-allowed"}`}>
            동의하고 상담 신청하기
          </button>
        </div>
      </div>
    </div>
  )
}

/* ───────────── ConsultingForm (Main) ───────────── */
export default function ConsultingForm() {
  const [form, setForm] = useState({
    customer_name: "",
    customer_birth: "",
    mobile1: "010",
    mobile2: "",
    customer_sex: "2",
    region: "",
    has_license: "",
  })
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const set = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }))

  const handleNameChange = (value: string) => {
    if (SPECIAL_CHAR_REG.test(value)) { alert("특수문자는 입력하실수 없습니다."); set("customer_name", value.slice(0, -1)); return }
    set("customer_name", value)
  }

  const handleSubmitClick = () => {
    const error = validateForm({ ...form, privacy: true })
    if (error) { alert(error); return }
    setShowModal(true)
  }

  const handleConfirm = async () => {
    const phoneResult = parsePhone(form.mobile1, form.mobile2)
    if (typeof phoneResult === "string") { alert(phoneResult); return }
    const payload = {
      customer_name: form.customer_name,
      customer_birth: form.customer_birth,
      mobile1: phoneResult.mobile1,
      mobile2: phoneResult.mobile2,
      mobile3: "",
      customer_sex: form.customer_sex,
      region: form.region,
      has_license: form.has_license,
      category: "네일",
    }
    setSubmitted(true)
    try {
      const url = process.env.NEXT_PUBLIC_DB_SUBMIT_URL!
      const key = process.env.NEXT_PUBLIC_DB_API_KEY!
      const res = await fetch(`${url}?api_key=${key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        alert(`전송 실패: ${err.error ?? res.status}`)
        setSubmitted(false)
        return
      }
      alert("신청이 완료되었습니다.")
      setForm({ customer_name: "", customer_birth: "", mobile1: "010", mobile2: "", customer_sex: "2", region: "", has_license: "" })
    } catch {
      alert("네트워크 오류가 발생했습니다.")
    }
    setSubmitted(false)
  }

  return (
    <>
      {showModal && <PrivacyModal onConfirm={handleConfirm} onClose={() => setShowModal(false)} />}

      <div className="max-w-[1200px] mx-auto px-4">
        <div className="w-full bg-brand-gradient rounded-[2.5rem] p-5 lg:p-6 shadow-form">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            
            {/* Inputs Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* 1. Name & Gender */}
              <div className="flex bg-white rounded-full pl-6 pr-2 py-2.5 shadow-sm items-center transition-all focus-within:ring-4 focus-within:ring-white/30">
                <input
                  type="text"
                  value={form.customer_name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  maxLength={8}
                  placeholder="이름"
                  className="flex-1 bg-transparent text-[16px] font-bold text-stone-800 placeholder-stone-300 focus:outline-none min-w-0"
                />
                <div className="flex items-center gap-1.5 ml-2 pl-3 border-l border-stone-100 shrink-0">
                  <button 
                    type="button" 
                    onClick={() => set("customer_sex", "1")} 
                    className={`w-10 h-10 rounded-full text-[14px] font-black transition-all ${
                      form.customer_sex === "1" 
                        ? "bg-stone-900 text-white shadow-lg" 
                        : "bg-stone-50 text-stone-300 hover:bg-stone-100"
                    }`}
                  >남</button>
                  <button 
                    type="button" 
                    onClick={() => set("customer_sex", "2")} 
                    className={`w-10 h-10 rounded-full text-[14px] font-black transition-all ${
                      form.customer_sex === "2" 
                        ? "bg-stone-900 text-white shadow-lg" 
                        : "bg-stone-50 text-stone-300 hover:bg-stone-100"
                    }`}
                  >여</button>
                </div>
              </div>

              {/* 2. Birth */}
              <div className="flex bg-white rounded-full px-6 py-4 shadow-sm items-center transition-all focus-within:ring-4 focus-within:ring-white/30">
                <input
                  type="text"
                  value={form.customer_birth}
                  onChange={(e) => set("customer_birth", e.target.value.replace(/\D/g, ""))}
                  maxLength={6}
                  placeholder="생년월일 (예:880808)"
                  className="w-full bg-transparent text-[16px] font-bold text-stone-800 placeholder-stone-300 focus:outline-none"
                />
              </div>

              {/* 3. Phone */}
              <div className="flex gap-3">
                <div className="bg-white rounded-full pl-6 pr-8 py-4 shadow-sm flex items-center relative shrink-0 w-[110px] transition-all focus-within:ring-4 focus-within:ring-white/30">
                  <select
                    value={form.mobile1}
                    onChange={(e) => set("mobile1", e.target.value)}
                    className="w-full bg-transparent text-[16px] font-bold text-stone-800 appearance-none focus:outline-none cursor-pointer"
                  >
                    {["010","011","016","017","019"].map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 pointer-events-none text-stone-300 text-xs">▼</div>
                </div>
                <div className="flex-1 bg-white rounded-full px-6 py-4 shadow-sm flex items-center transition-all focus-within:ring-4 focus-within:ring-white/30">
                  <input
                    type="text"
                    value={form.mobile2}
                    onChange={(e) => set("mobile2", e.target.value.replace(/\D/g, ""))}
                    maxLength={form.mobile2.startsWith("01") ? 11 : 8}
                    placeholder="휴대폰 번호"
                    className="w-full bg-transparent text-[16px] font-bold text-stone-800 placeholder-stone-300 focus:outline-none min-w-0"
                  />
                </div>
              </div>

              {/* 4. Region */}
              <div className="flex bg-white rounded-full px-6 py-4 shadow-sm items-center relative transition-all focus-within:ring-4 focus-within:ring-white/30">
                <select
                  value={form.region}
                  onChange={(e) => set("region", e.target.value)}
                  className={`w-full bg-transparent text-[16px] font-bold appearance-none focus:outline-none cursor-pointer ${form.region ? 'text-stone-800' : 'text-stone-300'}`}
                >
                  <option value="" disabled hidden>지역 선택</option>
                  {["서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","전남","경북","경남","제주"].map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <div className="absolute right-6 pointer-events-none text-stone-300 text-xs">▼</div>
              </div>

              {/* 5. License */}
              <div className="flex bg-white rounded-full px-6 py-4 shadow-sm items-center justify-between transition-all focus-within:ring-4 focus-within:ring-white/30 md:col-span-2 lg:col-span-1">
                <span className="text-[16px] font-bold text-stone-400">자격증 보유</span>
                <button 
                  type="button"
                  onClick={() => set("has_license", form.has_license === "Y" ? "N" : "Y")}
                  className="flex items-center gap-3 outline-none group shrink-0"
                >
                  <span className={`text-[15px] font-black transition-colors ${form.has_license === "Y" ? "text-brand" : "text-stone-300"}`}>
                    {form.has_license === "Y" ? "보유" : "미보유"}
                  </span>
                  <div className={`relative w-12 h-7 rounded-full transition-all duration-300 ${form.has_license === "Y" ? "bg-brand" : "bg-stone-100"}`}>
                    <div className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full shadow-md transition-all duration-300 ease-out ${form.has_license === "Y" ? "translate-x-5" : "translate-x-0"}`} />
                  </div>
                </button>
              </div>

            </div>

            {/* Submit Button */}
            <div className="flex lg:w-44 shrink-0 mt-2 lg:mt-0">
              <button
                type="button"
                onClick={handleSubmitClick}
                disabled={submitted}
                className="w-full bg-stone-900 text-white rounded-[1.8rem] text-xl font-black shadow-2xl hover:bg-stone-800 active:scale-[0.97] transition-all duration-200 py-6 lg:py-0 disabled:opacity-50 flex lg:flex-col items-center justify-center gap-1 tracking-tight"
              >
                <span className="lg:text-lg">상담</span>
                <span className="lg:text-2xl">신청하기</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
