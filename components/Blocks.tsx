import type { Section } from '@/lib/types';

/**
 * 섹션 렌더러.
 *
 * h2 단위로 실제 <section> 을 만들고, 표·목록·강조박스를 의미에 맞는 태그로 낸다.
 * 본문을 통짜 <p> 나 white-space:pre-line 로 흘리면 크롤러가 문서 구조를 못 읽는다.
 */

/** **굵게** 표기를 <strong> 으로 바꾼다 */
function renderInline(text: string, keyPrefix: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={`${keyPrefix}-${i}`}>{part}</strong> : part,
  );
}

function Paragraphs({ items, idPrefix }: { items: string[]; idPrefix: string }) {
  return (
    <>
      {items.map((text, i) => (
        <p
          key={`${idPrefix}-p-${i}`}
          style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-secondary)', margin: '0 0 16px' }}
        >
          {renderInline(text, `${idPrefix}-p-${i}`)}
        </p>
      ))}
    </>
  );
}

export default function Blocks({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s, i) => (
        <section key={`sec-${i}`} style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 'clamp(20px, 3.4vw, 26px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.35,
              margin: '0 0 18px',
              color: 'var(--text-primary)',
            }}
          >
            {s.h2}
          </h2>

          {s.p && <Paragraphs items={s.p} idPrefix={`sec-${i}`} />}

          {s.list && (
            <ul style={{ margin: '0 0 16px', paddingLeft: 0, listStyle: 'none' }}>
              {s.list.map((item, j) => (
                <li
                  key={`sec-${i}-li-${j}`}
                  style={{
                    position: 'relative',
                    paddingLeft: 22,
                    marginBottom: 10,
                    fontSize: 15.5,
                    lineHeight: 1.8,
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: 4,
                      top: '0.65em',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--primary)',
                    }}
                  />
                  {renderInline(item, `sec-${i}-li-${j}`)}
                </li>
              ))}
            </ul>
          )}

          {s.table && (
            <figure style={{ margin: '0 0 16px' }}>
              {s.table.caption && (
                <figcaption
                  style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8 }}
                >
                  {s.table.caption}
                </figcaption>
              )}
              {/* 좁은 화면에서 표만 가로 스크롤되게 한다 — 본문은 절대 가로로 밀리지 않는다 */}
              <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                <table
                  style={{
                    width: '100%',
                    minWidth: 420,
                    borderCollapse: 'collapse',
                    fontSize: 14.5,
                    background: '#fff',
                    border: '1px solid #f1f0ef',
                    borderRadius: 12,
                    overflow: 'hidden',
                  }}
                >
                  <thead>
                    <tr style={{ background: 'var(--primary-light, #fff1f2)' }}>
                      {s.table.head.map((h, k) => (
                        <th
                          key={`th-${k}`}
                          scope="col"
                          style={{
                            textAlign: 'left',
                            padding: '12px 14px',
                            fontWeight: 800,
                            color: 'var(--primary-dark, #9f1239)',
                            borderBottom: '1px solid #f1f0ef',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((row, r) => (
                      <tr key={`tr-${r}`}>
                        {row.map((cell, c) => (
                          <td
                            key={`td-${r}-${c}`}
                            style={{
                              padding: '12px 14px',
                              borderBottom: '1px solid #f7f6f5',
                              color: c === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                              fontWeight: c === 0 ? 700 : 400,
                              lineHeight: 1.6,
                            }}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {s.table.note && (
                <p style={{ fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.7, margin: '10px 0 0' }}>
                  {s.table.note}
                </p>
              )}
            </figure>
          )}

          {s.after && <Paragraphs items={s.after} idPrefix={`sec-${i}-after`} />}

          {s.callout && (
            <aside
              style={{
                background: 'var(--primary-light, #fff1f2)',
                borderLeft: '4px solid var(--primary, #f43f5e)',
                borderRadius: 12,
                padding: '18px 20px',
                margin: '20px 0 0',
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  color: 'var(--primary-dark, #9f1239)',
                  margin: '0 0 6px',
                }}
              >
                {s.callout.label}
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text-primary)', margin: 0 }}>
                {renderInline(s.callout.body, `sec-${i}-callout`)}
              </p>
            </aside>
          )}
        </section>
      ))}
    </>
  );
}
