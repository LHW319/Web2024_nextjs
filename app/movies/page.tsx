'use client'

// 서버사이드렌더링은 한번 렌더링하고 끝.
// 계속 re-redering 필요하면 클라이언트 사이드 렌더링 써야...(클라이언트여도 필요한 부분은 서버에서 렌더링함.)
import { useState } from 'react'

export default function MoviesPage() {
  const [searchText, setSearchText] = useState('')
  return (
    <>
      {/* 서버에서 렌드링 */}
      <h1>Movies Page!</h1>

      {/* 클라이언트에서 렌더링 */}
      <input
        className="rounded-md border-2 border-gray-300 p-2"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <h2>{searchText}</h2>
    </>
  )
}
