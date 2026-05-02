"use client"

import { useState } from "react"
import PrivacyModal from "./PrivacyModal"
import { validateForm, parsePhone } from "@/lib/validate"

export default function FormSection() {
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

  const set = (key: string, value: string) =>
    setForm((p) => ({ ...p, [key]: value }))

  const SPECIAL_CHAR_REG = /[ \{\}\[\]\/.,;:|\)*~`^\-_+┼<>\%\'\"\\\(\=]/i
  const handleNameChange = (value: string) => {
    if (SPECIAL_CHAR_REG.test(value)) {
      alert("특수문자는 입력하실수 없습니다.")
      set("customer_name", value.slice(0, -1))
      return
    }
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
      {showModal && (
        <PrivacyModal onConfirm={handleConfirm} onClose={() => setShowModal(false)} />
      )}

      <div className="w-full bg-gradient-to-r from-rose-400 to-brand rounded-[2rem] p-4 lg:p-5 shadow-[0_20px_40px_-15px_rgba(251,113,133,0.35)]">
        <div className="flex flex-col lg:flex-row gap-3 items-stretch">

          {/* Inputs Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">

            {/* 1. Name & Gender */}
            <div className="flex bg-white rounded-full pl-5 pr-2 py-2 shadow-sm items-center transition-shadow focus-within:ring-2 focus-within:ring-brand/30">
              <input
                type="text"
                value={form.customer_name}
                onChange={(e) => handleNameChange(e.target.value)}
                maxLength={8}
                placeholder="이름"
                className="flex-1 bg-transparent text-[15px] font-medium text-gray-800 placeholder-gray-400 focus:outline-none min-w-0 py-1.5"
              />
              <div className="flex items-center gap-1.5 ml-2 pl-3 border-l border-gray-100 shrink-0">
                <button
                  type="button"
                  onClick={() => set("customer_sex", "1")}
                  className={`w-9 h-9 rounded-full text-[14px] font-bold transition-all ${
                    form.customer_sex === "1"
                      ? "bg-brand text-white shadow-md shadow-brand/30"
                      : "bg-stone-100 text-stone-400 hover:bg-stone-200"
                  }`}
                >남</button>
                <button
                  type="button"
                  onClick={() => set("customer_sex", "2")}
                  className={`w-9 h-9 rounded-full text-[14px] font-bold transition-all ${
                    form.customer_sex === "2"
                      ? "bg-brand text-white shadow-md shadow-brand/30"
                      : "bg-stone-100 text-stone-400 hover:bg-stone-200"
                  }`}
                >여</button>
              </div>
            </div>

            {/* 2. Birth */}
            <div className="flex bg-white rounded-full px-5 py-3.5 shadow-sm items-center transition-shadow focus-within:ring-2 focus-within:ring-brand/30">
              <input
                type="text"
                value={form.customer_birth}
                onChange={(e) => set("customer_birth", e.target.value.replace(/\D/g, ""))}
                maxLength={6}
                placeholder="생년월일 (예:880808)"
                className="w-full bg-transparent text-[15px] font-medium text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* 3. Phone */}
            <div className="flex gap-2">
              <div className="bg-white rounded-full pl-5 pr-8 py-3.5 shadow-sm flex items-center relative shrink-0 w-[105px] transition-shadow focus-within:ring-2 focus-within:ring-brand/30">
                <select
                  value={form.mobile1}
                  onChange={(e) => set("mobile1", e.target.value)}
                  className="w-full bg-transparent text-[15px] font-medium text-gray-800 appearance-none focus:outline-none"
                >
                  {["010","011","016","017","019"].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
                <div className="absolute right-4 pointer-events-none text-gray-400 text-xs">▼</div>
              </div>
              <div className="flex-1 bg-white rounded-full px-5 py-3.5 shadow-sm flex items-center transition-shadow focus-within:ring-2 focus-within:ring-brand/30">
                <input
                  type="text"
                  value={form.mobile2}
                  onChange={(e) => set("mobile2", e.target.value.replace(/\D/g, ""))}
                  maxLength={form.mobile2.startsWith("01") ? 11 : 8}
                  placeholder="'-'를 제외해주세요"
                  className="w-full bg-transparent text-[15px] font-medium text-gray-800 placeholder-gray-400 focus:outline-none min-w-0"
                />
              </div>
            </div>

            {/* 4. Region */}
            <div className="flex bg-white rounded-full px-5 py-3.5 shadow-sm items-center relative transition-shadow focus-within:ring-2 focus-within:ring-brand/30">
              <select
                value={form.region}
                onChange={(e) => set("region", e.target.value)}
                className={`w-full bg-transparent text-[15px] font-medium appearance-none focus:outline-none ${form.region ? "text-gray-800" : "text-gray-400"}`}
              >
                <option value="" disabled hidden>거주 지역 선택</option>
                {["서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","전남","경북","경남","제주"].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <div className="absolute right-5 pointer-events-none text-gray-400 text-xs">▼</div>
            </div>

            {/* 5. License */}
            <div className="flex bg-white rounded-full px-5 py-3.5 shadow-sm items-center justify-between transition-shadow focus-within:ring-2 focus-within:ring-brand/30">
              <span className="text-[15px] font-medium text-gray-400">자격증 보유 여부</span>
              <button
                type="button"
                onClick={() => set("has_license", form.has_license === "Y" ? "N" : "Y")}
                className="flex items-center gap-2 outline-none group shrink-0"
              >
                <span className={`text-[14px] font-bold transition-colors w-8 text-right ${form.has_license === "Y" ? "text-brand" : "text-gray-400"}`}>
                  {form.has_license === "Y" ? "보유" : "없음"}
                </span>
                <div className={`relative w-11 h-6 rounded-full transition-colors duration-300 shadow-inner ${form.has_license === "Y" ? "bg-brand" : "bg-gray-200 group-hover:bg-gray-300"}`}>
                  <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow transition-transform duration-300 ease-out ${form.has_license === "Y" ? "translate-x-5" : "translate-x-0"}`} />
                </div>
              </button>
            </div>

          </div>

          {/* Submit Button */}
          <div className="flex items-stretch lg:w-36 shrink-0 mt-3 lg:mt-0">
            <button
              type="button"
              onClick={handleSubmitClick}
              disabled={submitted}
              className="w-full bg-stone-900 text-white rounded-[1.5rem] text-lg font-bold shadow-lg hover:bg-stone-800 active:scale-[0.98] transition-all duration-200 py-5 lg:py-0 disabled:opacity-50 flex lg:flex-col items-center justify-center gap-1.5 leading-none"
            >
              <span>상담</span>
              <span>신청하기</span>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
