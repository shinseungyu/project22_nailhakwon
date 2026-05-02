import posts from '@/data/posts.json'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ChevronLeft, Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: '네일국가자격증 합격후기 | 수강생 취업 성공 사례 모음',
  description: '실제 수강생들의 네일국가자격증 원패스 합격 후기, 강남 네일샵 취업 성공 사례, 네일아트 팁까지. 2026년 최신 후기 모음.',
  alternates: { canonical: '/board' },
  openGraph: {
    title: '네일국가자격증 합격후기 | 수강생 취업 성공 사례 모음',
    description: '실제 수강생 네일국가자격증 합격 후기·강남 네일샵 취업 사례·네일아트 팁 2026 최신 모음.',
    url: '/board',
    type: 'website',
  },
}

interface Post {
  id: number
  title: string
  date: string
  category: string
  summary: string
  content: string
  tags: string[]
}

interface Props {
  searchParams: Promise<{ id?: string }>
}

export default async function BoardPage({ searchParams }: Props) {
  const { id } = await searchParams
  const allPosts: Post[] = posts as Post[]

  // ?id=1 이면 해당 글 상세 보기
  if (id) {
    const post = allPosts.find((p) => p.id === Number(id))

    if (!post) {
      return (
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
          <p style={{ color: '#888' }}>게시글을 찾을 수 없습니다.</p>
          <Link href="/board" style={{ color: '#f43f5e' }}>← 목록으로</Link>
        </main>
      )
    }

    return (
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', color: '#1c1917' }}>
        {/* 뒤로가기 */}
        <Link href="/board" style={{ fontSize: '14px', color: '#f43f5e', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '24px', fontWeight: '600' }}>
          <ChevronLeft size={16} /> 목록으로 돌아가기
        </Link>

        {/* 글 헤더 */}
        <article>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', backgroundColor: '#ffe4e6', color: '#f43f5e', padding: '4px 12px', borderRadius: '999px', fontWeight: '700' }}>
              {post.category}
            </span>
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', lineHeight: '1.4', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#a8a29e', marginBottom: '32px', borderBottom: '1px solid #f5f5f4', paddingBottom: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {post.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Tag size={14} /> {post.tags.join(', ')}</span>
          </div>

          {/* 본문 - \n 을 줄바꿈으로 렌더링 */}
          <div style={{ lineHeight: '1.9', fontSize: '16px', color: '#444' }}>
            {post.content.split('\n').map((line, i) => (
              line.trim() === '' 
                ? <br key={i} /> 
                : <p key={i} style={{ margin: '0 0 12px 0' }}>{line}</p>
            ))}
          </div>
        </article>

        {/* 다른 글 목록 */}
        <section style={{ marginTop: '60px', paddingTop: '32px', borderTop: '1px solid #f5f5f4' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: '#1c1917' }}>다른 소식 보기</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
            {allPosts.filter(p => p.id !== post.id).map(p => (
              <Link key={p.id} href={`/board?id=${p.id}`} style={{ textDecoration: 'none', padding: '16px 20px', background: '#fffcfc', borderRadius: '12px', border: '1px solid #fff1f2', display: 'block', transition: 'all 0.2s' }}>
                <span style={{ fontSize: '12px', color: '#f43f5e', fontWeight: '700' }}>{p.category}</span>
                <p style={{ margin: '4px 0 0', fontSize: '15px', color: '#1c1917', fontWeight: '600' }}>{p.title}</p>
              </Link>
            ))}
          </div>
        </section>


      </main>
    )
  }

  // id 없으면 목록 페이지
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', color: '#1c1917' }}>
      <Link href="/" style={{ fontSize: '14px', color: '#f43f5e', textDecoration: 'none', marginBottom: '32px', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
        <ChevronLeft size={16} /> 홈으로 돌아가기
      </Link>

      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '12px', letterSpacing: '-0.02em' }}>네일아트학원 게시판</h1>
        <p style={{ color: '#57534e', fontSize: '16px' }}>네일아트학원 아카데미의 수강생 이야기와 최신 소식을 전해드립니다.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100%, 1fr))', gap: '20px' }}>
        {allPosts.map((post) => (
          <Link key={post.id} href={`/board?id=${post.id}`} style={{ textDecoration: 'none', display: 'block', padding: '24px', background: '#fff', border: '1px solid #f5f5f4', borderRadius: '16px', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(244,63,94,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '12px', backgroundColor: '#ffe4e6', color: '#f43f5e', padding: '4px 12px', borderRadius: '999px', fontWeight: '700' }}>
                {post.category}
              </span>
              <span style={{ fontSize: '12px', color: '#a8a29e' }}>{post.date}</span>
            </div>
            <h2 style={{ margin: '0 0 10px', fontSize: '18px', fontWeight: '800', color: '#1c1917' }}>{post.title}</h2>
            <p style={{ margin: 0, fontSize: '15px', color: '#57534e', lineHeight: '1.6' }}>{post.summary}</p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {post.tags.map(tag => (
                <span key={tag} style={{ fontSize: '12px', color: '#78716c', background: '#f5f5f4', padding: '4px 10px', borderRadius: '8px' }}>#{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>


    </main>
  )
}
