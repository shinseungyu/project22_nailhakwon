/**
 * posts.json 본문 파서.
 *
 * 본문은 마커 규칙으로 쓰여 있는데 그대로 통짜 텍스트(white-space: pre-line)로
 * 렌더하면 크롤러 눈에는 h2 도 목록도 없는 한 덩어리 글이 된다.
 * 여기서 실제 문서 구조로 바꿔 준다.
 *
 *   ■ 소제목      → h2
 *   - 항목         → ul > li
 *   1. 항목        → ol > li
 *   그 외           → p
 */

export type ArticleBlock =
  | { type: 'h2'; text: string; id: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] };

/** 목차 앵커용 슬러그 */
function toId(text: string, index: number): string {
  const base = text
    .trim()
    .toLowerCase()
    .replace(/[^\w가-힣\s-]/g, '')
    .replace(/\s+/g, '-');
  return base ? `${base}-${index}` : `section-${index}`;
}

export function parseArticle(content: string): ArticleBlock[] {
  const blocks: ArticleBlock[] = [];
  const lines = content.split('\n');

  let ul: string[] = [];
  let ol: string[] = [];
  let para: string[] = [];
  let headingIndex = 0;

  const flushUl = () => {
    if (ul.length) {
      blocks.push({ type: 'ul', items: ul });
      ul = [];
    }
  };
  const flushOl = () => {
    if (ol.length) {
      blocks.push({ type: 'ol', items: ol });
      ol = [];
    }
  };
  const flushPara = () => {
    if (para.length) {
      blocks.push({ type: 'p', text: para.join(' ') });
      para = [];
    }
  };
  const flushAll = () => {
    flushPara();
    flushUl();
    flushOl();
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) {
      flushAll();
      continue;
    }

    // ■ 소제목
    if (line.startsWith('■')) {
      flushAll();
      headingIndex += 1;
      const text = line.replace(/^■\s*/, '').trim();
      blocks.push({ type: 'h2', text, id: toId(text, headingIndex) });
      continue;
    }

    // 1. 번호 목록
    const olMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (olMatch) {
      flushPara();
      flushUl();
      ol.push(olMatch[2].trim());
      continue;
    }

    // - 불릿
    if (/^[-·]\s+/.test(line)) {
      flushPara();
      flushOl();
      ul.push(line.replace(/^[-·]\s+/, '').trim());
      continue;
    }

    // 일반 문단
    flushUl();
    flushOl();
    para.push(line);
  }

  flushAll();
  return blocks;
}

/** 목차에 쓸 h2 목록 */
export function tableOfContents(blocks: ArticleBlock[]) {
  return blocks.filter((b): b is Extract<ArticleBlock, { type: 'h2' }> => b.type === 'h2');
}

/** Article 스키마 wordCount 용 */
export function countWords(content: string): number {
  return content.replace(/\s+/g, '').length;
}
